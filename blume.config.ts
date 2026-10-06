// blume.config.ts
import { defineConfig } from "blume";

export default defineConfig({
  title: "Blume ドキュメント",
  description: "wagner-tdbax が管理する Blume ドキュメントサイト",
  
  // GitHub Pagesでサブディレクトリ（/Blume/）として公開するために必須の設定
  base: "/Blume", 

  deployment: {
    // サイトの絶対URL（SEOやAI連携のためのパス解決に利用されます）
    site: "https://github.io",
  },
});