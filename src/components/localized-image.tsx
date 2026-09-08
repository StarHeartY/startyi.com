"use client";

/* eslint-disable @next/next/no-img-element */

import { useLocale } from "@/components/locale-provider";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";

/**
 * 约定：src 永远引用中文浅色原图，变体按文件名自动推断：
 *   `{base}_en.png` 英文浅色、`{base}_dark.png` 中文深色、`{base}_en_dark.png` 英文深色。
 * 缺失的变体按「先保主题、再保语言」逐级回退，最终兜底为原图。
 */

// 会话级记忆：已知不存在的变体路径，避免同一资源反复 404 探测
const missingVariants = new Set<string>();

/** 在扩展名前插入变体后缀：`/a/b.png` -> `/a/b_dark.png` */
function withSuffix(src: string, suffix: string): string {
  return src.replace(/(\.[^./]+)$/, `${suffix}$1`);
}

/** 当前 locale + theme 下按优先级排列的候选链，末位必为原图兜底 */
function candidateSrcs(src: string, locale: Locale, theme: string): string[] {
  const en = locale === "en";
  const dark = theme === "dark";
  if (en && dark) return [withSuffix(src, "_en_dark"), withSuffix(src, "_dark"), src];
  if (dark) return [withSuffix(src, "_dark"), src];
  if (en) return [withSuffix(src, "_en"), src];
  return [src];
}

export function LocalizedImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const { locale } = useLocale();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [index, setIndex] = useState(0);
  const [baseFailed, setBaseFailed] = useState(false);

  useEffect(() => setMounted(true), []);

  // 挂载前统一渲染原图：SSR 与首帧一致，避免水合不一致和无谓的错误语言预取
  const candidates = useMemo(() => {
    if (!mounted) return [src];
    return candidateSrcs(src, locale, resolvedTheme ?? "light").filter(
      (candidate) => candidate === src || !missingVariants.has(candidate)
    );
    // missingVariants 为模块级可变集合，有意不作为依赖：缺失记忆只影响后续重解析
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src, locale, resolvedTheme, mounted]);

  // locale / theme 变化后从最优候选重新开始（同时修复旧图失败状态不重置的问题）
  useEffect(() => {
    setIndex(0);
    setBaseFailed(false);
  }, [candidates]);

  // 引用约定校验：src 应为不带 _en/_dark 后缀的原图，否则会拼出错误的变体路径
  useEffect(() => {
    if (/(?:_en)?_dark\.\w+$|_en\.\w+$/i.test(src)) {
      console.warn(
        `LocalizedImage: src 应引用中文浅色原图，而非变体图片: ${src}`
      );
    }
  }, [src]);

  if (baseFailed) {
    return <div className={cn("bg-muted", className)} />;
  }

  return (
    <img
      src={candidates[Math.min(index, candidates.length - 1)]}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => {
        const failed = candidates[index];
        if (failed === src) {
          // 兜底原图也加载失败
          setBaseFailed(true);
          return;
        }
        missingVariants.add(failed);
        setIndex((i) => Math.min(i + 1, candidates.length - 1));
      }}
    />
  );
}
