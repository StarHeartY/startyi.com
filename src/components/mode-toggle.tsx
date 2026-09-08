"use client";

import { Button } from "@/components/ui/button";
import { useLocale } from "@/components/locale-provider";
import { t } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { DesktopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// 与 Nextra(CalcX-docs)一致的三态循环：跟随系统 → 浅色 → 深色 → 跟随系统
const NEXT_THEME = {
  system: "light",
  light: "dark",
  dark: "system",
} as const;

type ThemeState = keyof typeof NEXT_THEME;

export function useThemeState(): ThemeState {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // next-themes 在客户端首帧即同步读取 localStorage，与服务端默认值不同，
  // 直接渲染 theme 会导致 hydration 不一致；挂载前统一按“跟随系统”处理
  useEffect(() => setMounted(true), []);

  return mounted && (theme === "light" || theme === "dark") ? theme : "system";
}

export function ModeToggle({ className }: { className?: string }) {
  const { setTheme } = useTheme();
  const { locale } = useLocale();
  const current = useThemeState();
  const label = t(locale, `theme.${current}`);

  return (
    <Button
      type="button"
      variant="link"
      size="icon"
      className={cn(className)}
      aria-label={label}
      onClick={() => setTheme(NEXT_THEME[current])}
    >
      {current === "light" ? (
        <SunIcon className="h-full w-full" />
      ) : current === "dark" ? (
        <MoonIcon className="h-full w-full" />
      ) : (
        <DesktopIcon className="h-full w-full" />
      )}
    </Button>
  );
}
