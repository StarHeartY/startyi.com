<div align="center">
  <h1>🚀 StarHeartY 个人主页</h1>
  <p>个人名片与项目展台</p>
  
</div>

<p align="center">
  <a href="docs/README.en.md"><img src="https://img.shields.io/badge/English-Readme-blue" alt="English"></a>
  <a href="#"><img src="https://img.shields.io/badge/中文简体-Readme-red" alt="中文简体"></a>
</p>

## 💡 关于本项目

本仓库是 [startyi.com](https://startyi.com) 的前端源代码。放弃了传统臃肿的建站工具，采用现代化的 React/Next.js 技术栈重构，去除了冗余的博客模块，专注于打造纯粹、极简且带有科技感的数字名片。

基于 **Next.js** 、**[shadcn/ui](https://ui.shadcn.com/)** 和 **[Magic UI](https://magicui.design/)** 构建。部署于 **Cloudflare Pages**。

## ✨ 特点

- **数据与视图分离**: 所有个人信息、教育背景与项目（如 CalculatorX）均由独立的配置文件统一驱动。
- **现代化极客技术栈**: 基于 Next.js 14, React, TypeScript 构建。
- **极致视觉体验**: 结合 TailwindCSS 与 Framer Motion，实现了发光网格、平滑过渡等高级动效。
- **超宽排版优化**: 针对桌面端浏览体验，重构了基础的最大宽度限制与组件缩放比例。
- **全球边缘加速**: 零配置接入 Cloudflare Pages，享受极速的 CDN 分发。

## 🛠️ 本地快速上手

如果你想在本地运行或预览这个项目：

1. 将本仓库克隆到本地环境：

   ```bash
   git clone https://github.com/StarHeartY/startyi.com.git
   ```

2. 进入项目目录：

   ```bash
   cd 你的仓库名
   ```
3. 安装依赖包（推荐使用 pnpm）：

   ```bash
   pnpm install
   ```
4. 启动本地开发服务器：

   ```bash
   pnpm run dev 
   ```
5. 打开浏览器并访问 http://localhost:3000 即可预览效果。你可以通过修改 src/data/resume.tsx 文件来实时更新你的个人信息。

## 📄 致谢与开源协议

- 基础模板由 [Dillion Verma](https://github.com/dillionverma/portfolio) 设计.
- UI 界面组件由 [Magic UI](https://magicui.design/) 和 [Aceternity UI](https://ui.aceternity.com/) 提供支持。

本项目基于 [MIT](https://choosealicense.com/licenses/mit/) 协议开源。