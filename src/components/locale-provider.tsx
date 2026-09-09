"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import type { Locale } from "@/lib/i18n";

const DEFAULT_LOCALE: Locale = "en";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
});

// 每次打开网站都按浏览器语言自动分配：中文浏览器 → 中文，其他一律英文；
// 手动切换仅本次访问生效，不持久化
function detectLocale(): Locale {
  return (navigator.language || "").toLowerCase().startsWith("zh")
    ? "zh"
    : "en";
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [mounted, setMounted] = useState(false);

  // 避免 hydration mismatch：挂载后再读取浏览器语言
  useEffect(() => {
    setLocaleState(detectLocale());
    setMounted(true);
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    document.documentElement.lang = newLocale === "zh" ? "zh-CN" : "en";
  }, []);

  // 首次挂载后同步 html lang
  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
    }
  }, [mounted, locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
