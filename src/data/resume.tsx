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

export const DATA = {
  name: "Yi Rui",
  initials: "YR",
  url: "https://startyi.com",
  location: "Guangzhou, CN",
  locationLink: "https://www.google.com/maps/place/guangzhou",
  description:
    "Studying in the Software Engineering major at Jinan University. Active on GitHub.",
  summary:
    "I am passionate about building elegant and efficient engineering solutions. I strive for ultimate code standards and geek aesthetics. 我热衷于构建优雅且高效的工程解决方案。追求极致的代码规范与极客美学。",
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
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://blog.startyi.com", icon: NotebookIcon, label: "Blog" },
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

  work: [
    
  ],
  education: [
    {
      school: "暨南大学 (Jinan University)",
      href: "https://www.jnu.edu.cn",
      degree: "软件工程 本科 (B.E. in Software Engineering)",
      logoUrl: "/Jinan_University.svg",
      start: "2024",
      end: "2028",
    },
  ],
  projects: [
    {
      title: "CalculatorX",
      href: "https://github.com/StarHeartY/CalculatorX",
      dates: "2026",
      active: true,
      description:
        "一款基于 HarmonyOS 的多功能科学计算器，涵盖复杂的数学运算逻辑，拥有极其纯净且符合直觉的现代化 UI 设计。",
      technologies: [
        "HarmonyOS",
        "ArkTS",
        "DevEco Studio",
        "CAS",
        "SysEngine",
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
      dates: "2026 - 至今",
      active: true,
      description:
        "作为联合创始人，主导搭建的高校校友互助平台。旨在为学弟学妹提供真实、有价值的升学与专业经验分享，打破信息差。",
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
  
} as const;
