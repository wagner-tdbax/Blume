// blume.config.ts
import { defineConfig } from "blume";

// GitHub Actions上（デプロイ時）かどうかの判定
const isProd = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  title: "Blume ドキュメント",
  description: "wagner-tdbax が管理する Blume ドキュメントサイト",

  deployment: {
    // ⭕️ GitHub Pages（本番）の時は "/Blume"、ローカルの時は空文字または未指定（ルート）にします
    base: isProd ? "/Blume" : "", 

    // ⭕️ GitHub Pages（本番）の時は完全なURL、ローカルの時はローカルサーバーのURLにします
    site: isProd 
      ? "https://wagner-tdbax.github.io/Blume" 
      : "http://localhost:4321",
  },
});