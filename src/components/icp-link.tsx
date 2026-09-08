"use client";

import { useEffect, useState } from "react";

// ICP 备案号：仅在备案域名（*.startyi.cn）上显示
export default function IcpLink() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hostname = window.location.hostname;
    setVisible(hostname === "startyi.cn" || hostname.endsWith(".startyi.cn"));
  }, []);

  if (!visible) return null;

  return (
    <footer className="mt-6 flex justify-center">
      <a
        href="https://beian.miit.gov.cn/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground/60 hover:text-muted-foreground text-xs transition-colors"
      >
        赣ICP备2026021841号-1
      </a>
    </footer>
  );
}
