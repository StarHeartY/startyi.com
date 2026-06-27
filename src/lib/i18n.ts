export type Locale = "en" | "zh";

export type LocalizedString = { en: string; zh: string };

/** 根据 locale 从 LocalizedString 中取值 */
export function pickLocalized(value: LocalizedString, locale: Locale): string {
  return value[locale];
}

// ---- UI 翻译字典 ----

const dict = {
  hero: {
    greeting: { en: "Hi, I'm {name}", zh: "Hi, I'm {name}" },
  },
  about: { en: "About", zh: "关于" },
  workExperience: { en: "Work Experience", zh: "工作经历" },
  education: { en: "Education", zh: "教育经历" },
  skills: { en: "Skills", zh: "技能" },
  projects: {
    badge: { en: "My Projects", zh: "项目" },
    heading: { en: "Check out my latest work", zh: "最近作品" },
    description: {
      en: "I've worked on a variety of projects, from software to web applications. Here are a few of my favorites.",
      zh: "我参与过各种类型的项目，从软件到复杂的 Web 应用。代表作品如下",
    },
  },
  contact: {
    badge: { en: "Contact", zh: "联系" },
    heading: { en: "Get in Touch", zh: "" },
    description: {
      en: "Feel free to reach out for technical discussions or collaboration. You can always contact me via {email}.",
      zh: "欢迎与我交流技术或探讨合作。你可以随时通过 {email} 与我联系。",
    },
    emailLabel: { en: "Email", zh: "邮件" },
  },
  notFound: {
    title: { en: "Page Not Found", zh: "页面未找到" },
    description: {
      en: "The page you're looking for doesn't exist or may have been moved.",
      zh: "您访问的页面不存在或已被移动。",
    },
    goHome: { en: "Go to Home", zh: "返回首页" },
  },
} as const;

/** 按路径取值并替换 {key} 占位符 */
export function t(
  locale: Locale,
  path: string,
  replacements?: Record<string, string | number>
): string {
  const keys = path.split(".");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let value: any = dict;
  for (const key of keys) {
    value = value?.[key];
  }
  if (!value || typeof value[locale] !== "string") return path;
  let result: string = value[locale];
  if (replacements) {
    result = result.replace(/\{(\w+)\}/g, (_, k) =>
      String(replacements[k] ?? `{${k}}`)
    );
  }
  return result;
}
