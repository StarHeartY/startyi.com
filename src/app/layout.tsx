import Navbar from "@/components/navbar";
import IcpLink from "@/components/icp-link";
import { ThemeProvider } from "@/components/theme-provider";
import { LocaleProvider } from "@/components/locale-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

const META_DESCRIPTION =
  "Yi Rui — Software Engineering student at Jinan University. " +
  "Full-stack developer skilled in React, Next.js, TypeScript, Python, and C++. " +
  "Builder of CalculatorX and co-founder of Jihuway. Based in Guangzhou, China.";

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: "Yi Rui — Software Engineer & Full-Stack Developer",
    template: `%s | Yi Rui`,
  },
  description: META_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Yi Rui",
    "Software Engineer",
    "Full-Stack Developer",
    "Jinan University",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "CalculatorX",
    "Portfolio",
  ],
  openGraph: {
    title: "Yi Rui — Software Engineer & Full-Stack Developer",
    description: META_DESCRIPTION,
    url: DATA.url,
    siteName: "Yi Rui",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Yi Rui — Software Engineer & Full-Stack Developer",
    description: META_DESCRIPTION,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
    other: {
      "baidu-site-verification": "codeva-cltluBti6H",
    },
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yi Rui",
  url: DATA.url,
  jobTitle: "Software Engineer",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Jinan University",
  },
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "C++",
    "Node.js",
    "Docker",
    "Web Development",
    "HarmonyOS",
  ],
  sameAs: [
    "https://github.com/StarHeartY",
    "https://www.linkedin.com/in/yirui-dev",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          geist.variable,
          geistMono.variable
        )}
      >
        <LocaleProvider>
          <ThemeProvider attribute="class" defaultTheme="system">
            <TooltipProvider delayDuration={0}>
              <div className="absolute inset-0 top-0 left-0 right-0 h-[100px] overflow-hidden z-0">
                <FlickeringGrid
                  className="h-full w-full"
                  squareSize={2}
                  gridGap={2}
                  style={{
                    maskImage: "linear-gradient(to bottom, black, transparent)",
                    WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
                  }}
                />
              </div>
              <div className="relative z-10 max-w-4xl mx-auto py-12 pb-24 sm:py-24 px-6">
                {children}
                <IcpLink />
              </div>
              <Navbar />
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
              />
            </TooltipProvider>
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
