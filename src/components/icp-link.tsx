"use client";

import { useEffect, useState } from "react";

// 备案信息：仅在 startyi.cn 及其子域名上显示
export default function IcpLink() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hostname = window.location.hostname;
    setVisible(hostname === "startyi.cn" || hostname.endsWith(".startyi.cn"));
  }, []);

  if (!visible) return null;

  return (
    <footer className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
      <a
        href="https://beian.miit.gov.cn/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground/60 hover:text-muted-foreground text-xs transition-colors"
      >
        赣ICP备2026021841号-1
      </a>
      <a
        href="https://beian.mps.gov.cn/#/query/webSearch?code=44011302005902"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 whitespace-nowrap text-muted-foreground/60 hover:text-muted-foreground text-xs transition-colors"
      >
        <img src="/beian.png" alt="公安备案图标" width="18" height="20" className="shrink-0" />
        粤公网安备44011302005902号
      </a>
    </footer>
  );
}
