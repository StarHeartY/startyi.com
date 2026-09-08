import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// 构建后处理：将 out/ 内所有 png/jpg 转换为 WebP (quality 80)，并同步改写所有引用。
// 做法与 CalcX-docs 的 postbuild 一致；本站部署在域名根路径，无需子目录搬迁。

const outDir = path.join(process.cwd(), 'out');

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  }
  return arrayOfFiles;
}

async function main() {
  if (!fs.existsSync(outDir)) {
    console.error('❌ 找不到 out 目录，请先确保 next build 成功运行。');
    process.exitCode = 1;
    return;
  }

  const allFiles = getAllFiles(outDir);
  const imageFiles = allFiles.filter((f) => /\.(png|jpe?g)$/i.test(f));

  if (imageFiles.length === 0) {
    console.log('🖼️ [postbuild] 未检测到需要转换的 png/jpg，跳过。');
    return;
  }

  console.log(`🖼️ [postbuild 1/2] 正在将 ${imageFiles.length} 张图片转换为 WebP (质量 80)...`);
  let before = 0;
  let after = 0;
  await Promise.all(
    imageFiles.map(async (imgPath) => {
      before += fs.statSync(imgPath).size;
      const webpPath = imgPath.replace(/\.(png|jpe?g)$/i, '.webp');
      const info = await sharp(imgPath).webp({ quality: 80 }).toFile(webpPath);
      after += info.size;
      fs.unlinkSync(imgPath);
    })
  );

  console.log('📝 [postbuild 2/2] 正在改写图片引用后缀...');
  // lookbehind 保护外部 URL（https://.../*.png）不被改写
  const refRegex = /(?<!https?:\/\/[^"']*)(?:\.(png|jpe?g))/gi;
  let rewrittenFiles = 0;
  const codeFiles = allFiles.filter((f) => /\.(html|js|json|css)$/i.test(f));
  for (const codePath of codeFiles) {
    const content = fs.readFileSync(codePath, 'utf8');
    if (!content.match(refRegex)) continue;
    fs.writeFileSync(codePath, content.replace(refRegex, '.webp'), 'utf8');
    rewrittenFiles++;
  }

  console.log(
    `   ✅ 图片：${imageFiles.length} 张，${(before / 1048576).toFixed(2)}MB → ${(after / 1048576).toFixed(2)}MB`
  );
  console.log(`   ✅ 引用改写：${rewrittenFiles}/${codeFiles.length} 个文件`);
  console.log('✨ [postbuild] 图片优化完成！');
}

main();
