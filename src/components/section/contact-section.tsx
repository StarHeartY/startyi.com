import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";

export default function ContactSection() {
  return (
    <div className="border rounded-xl p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">Contact</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
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
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Get in Touch
        </h2>
        <div className="mx-auto max-w-2xl text-muted-foreground text-balance flex flex-col gap-2">
          {/* 英文部分 */}
          <p className="opacity-80 text-sm sm:text-base">
            Feel free to reach out for technical discussions or collaboration.<br />You can always contact me via{" "}
            <Link
              href="mailto:i@startyi.com"
              className="text-blue-500 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            >
              Email
            </Link>.
          </p>
          {/* 中文部分 */}
          <p className="text-base sm:text-lg">
            欢迎与我交流技术或探讨合作。你可以随时通过{" "}
            <Link
              href="mailto:i@startyi.com"
              className="text-blue-500 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            >
              邮件
            </Link>
            {" "}与我联系。
          </p>
        </div>
      </div>
    </div>
  );
}

