import { withContentCollections } from "@content-collections/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  output: "export",// 开启纯静态导出模式

  // 静态模式不支持 Next.js 自带的动态图片优化 API
  images: {
    unoptimized: true,
  }, 

  // 注意：原有的 async headers() 已经被移除，因为静态导出不支持该功能。
};

// withContentCollections 必须保留作为最外层插件
export default withContentCollections(nextConfig);