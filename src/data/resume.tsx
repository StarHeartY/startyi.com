import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import type { LocalizedString } from "@/lib/i18n";

type HackathonLink = {
  href: string;
  icon: React.ReactNode;
  title: string;
};

type Hackathon = {
  title: string;
  dates: string;
  location?: string;
  description?: string;
  image?: string;
  links?: HackathonLink[];
};

type Work = {
  company: string;
  logoUrl: string;
  title: string;
  start: string;
  end?: string;
  description: string;
};

export const DATA = {
  name: "Yi Rui",
  initials: "YR",
  url: "https://startyi.com",
  location: "Guangzhou, CN",
  locationLink: "https://www.google.com/maps/place/guangzhou",
  description: {
    en: "Building software that starts with curiosity and ends with something people can actually use.",
    zh: "从一份好奇心出发，做出真正能用的东西。",

  } satisfies LocalizedString,
  summary: {
    en: "Software Engineering student at Jinan University. I love building software—whether it's crafting polished apps, tinkering with new tech, or just seeing where an idea leads.\n\nRight now, I'm diving deep into software development and modern web technologies. I've built applications, websites, and a few personal products along the way.For me, the real thrill isn't just writing code—it's taking a rough concept and shaping it into something that actually works and people can use.\n\nOutside of coding, I'm genuinely interested in great design and solid engineering practices. I follow the open-source community, contribute to interesting projects when I can, and I'm always up for a good conversation.Feel free to reach out—I'd love to connect.",
    zh: "暨南大学软件工程专业在读，喜欢开发软件，也喜欢折腾各种新技术。\n\n目前主要在探索软件与现代 Web 开发，做过应用、网站和一些个人产品。从写第一行代码到部署上线，我更享受的是把一个想法逐渐打磨成真正能够使用的作品。\n\n除了写代码，我也喜欢研究优秀的软件设计和工程实践，关注开源社区，偶尔也会参与一些有意思的项目，欢迎一起交流。",
  } satisfies LocalizedString,
  avatarUrl: "/me.png",
  skills: [
    { name: "C++", icon: Csharp },
    { name: "Python", icon: Python },
    { name: "Java", icon: Java },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Docker", icon: Docker },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: { en: "Home", zh: "首页" } satisfies LocalizedString },
    { href: "https://blog.startyi.com", icon: NotebookIcon, label: { en: "Blog", zh: "博客" } satisfies LocalizedString },
    
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/StarHeartY",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yirui-dev",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://startyi.com",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://startyi.com",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:i@startyi.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [] as Work[],

  education: [
    {
      school: { en: "Jinan University", zh:"暨南大学 (Jinan University)"},
      href: "https://www.jnu.edu.cn",
      degree: { en: "B.E. in Software Engineering", zh: "软件工程 本科" } satisfies LocalizedString,
      logoUrl: "/Jinan_University.svg",
      start: "2024",
      end: "2028",
    },
  ],
  projects: [
    {
      title: "CalculatorX",
      href: "https://github.com/StarHeartY/CalculatorX",
      dates: { en: "2026", zh: "2026" } satisfies LocalizedString,
      active: true,
      description: {
        en: "A multi-functional scientific calculator built on HarmonyOS, featuring complex mathematical computation logic with a clean and intuitive modern UI design.",
        zh: "一款基于 HarmonyOS 的多功能科学计算器，涵盖复杂的数学运算逻辑，拥有极其纯净且符合直觉的现代化 UI 设计。",
      } satisfies LocalizedString,
      technologies: [
        "HarmonyOS",
        "ArkTS",
        "DevEco Studio",
        "CAS",
        "SymEngine",
        "Giac",
        "MathLive",
      ],
      links: [
        {
          type: "Website",
          href: "https://calcx.startyi.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/StarHeartY/CalculatorX",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/CalculatorX.png",
      video: "",
    },
    {
      title: "霁湖行舟 (Jihuway)",
      href: "https://jihuway.org",
      dates: { en: "2026 - Present", zh: "2026 - 至今" } satisfies LocalizedString,
      active: true,
      description: {
        en: "As co-founder, I led the development of this university alumni mutual-help platform, designed to provide students with authentic and valuable insights on academic advancement and major selection, bridging the information gap.",
        zh: "作为联合创始人，主导搭建的高校校友互助平台。旨在为学弟学妹提供真实、有价值的升学与专业经验分享，打破信息差。",
      } satisfies LocalizedString,
      technologies: [
        "Astro",
        "Web Development",
        "Team Management",
        "UI/UX Design",
      ],
      links: [
        {
          type: "Website",
          href: "https://jihuway.org",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/ProIg-Chaa/hz-matriculate",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Jihuway.png",
      video: "",
    },
  ],
  hackathons: [] as Hackathon[],
  
} as const;
