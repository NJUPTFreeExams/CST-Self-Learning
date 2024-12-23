// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "CST 自学指南",
      defaultLocale: "root",
      locales: {
        root: {
          label: "简体中文",
          lang: "zh-CN",
        },
      },
      social: {
        github: "https://github.com/BlockLune/cst-self-learning",
      },
      sidebar: [
        {
          label: "简介",
          items: [{ label: "快速开始", slug: "intro/getting-started" }],
        },
        {
          label: "指南",
          items: [
            {
              label: "硬件平台",
              slug: "guides/hardware-platform",
            },
            {
              label: "虚拟专用网和代理",
              slug: "guides/vpn-and-proxy",
            },
            {
              label: "大语言模型",
              slug: "guides/llm",
            },
          ],
        },
      ],
    }),
  ],
});
