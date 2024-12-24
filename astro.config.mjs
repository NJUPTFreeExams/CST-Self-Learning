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
        github: "https://github.com/NJUPTFreeExams/CST-Self-Learning",
      },
      sidebar: [
        {
          label: "简介",
          items: [
            { label: "前言", slug: "intro/preface" },
            { label: "贡献指南", slug: "intro/how-to-contribute" },
          ],
        },
        {
          label: "指南",
          items: [
            {
              label: "如何解决问题",
              slug: "guides/how-to-solve-problems",
            },
            {
              label: "硬件平台",
              slug: "guides/hardware-platform",
            },
            {
              label: "虚拟专用网和代理",
              slug: "guides/vpn-and-proxy",
            },
            {
              label: "学生邮箱",
              slug: "guides/student-email",
            },
            {
              label: "大语言模型",
              slug: "guides/llm",
            },
            {
              label: "书籍",
              slug: "guides/books",
            },
          ],
        },
        {
          label: "计算机科学",
          items: [
            {
              label: "导论",
              slug: "science/intro",
            },
          ],
        },
        {
          label: "计算机技术",
          items: [
            {
              label: "导论",
              slug: "technology/intro",
            },
            {
              label: "博客",
              slug: "technology/blog",
            },
            {
              label: "语言",
              slug: "technology/languages",
            },
            {
              label: "框架",
              slug: "technology/frameworks",
            },
            {
              label: "容器化",
              slug: "technology/containerization",
            },
            {
              label: "Git 和 GitHub",
              slug: "technology/git-github",
            },
            {
              label: "安装 Linux",
              slug: "technology/linux",
            },
          ],
        },
      ],
    }),
  ],
});
