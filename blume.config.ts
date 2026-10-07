// blume.config.ts
import { defineConfig } from "blume";

// GitHub Actions上（デプロイ時）かどうかの判定
const isProd = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  title: "Blume ドキュメント",
  description: "wagner-tdbax が管理する Blume ドキュメントサイト",
  
  // ❌ 最上位（ここ）に書いてあった `base: "/Blume"` を削除します。
  deployment: {
    // ⭕️ base と site はこのように deployment の中にまとめて記述します
    // base: "/Blume", 
    // site: "https://github.io",

    // GitHub Pages用には完全なURL（サブパス含む）を指定、ローカルでは "/" にする
    site: isProd 
      ? "https://wagner-tdbax.github.io/Blume" 
      : "http://localhost:4321", // Blume（Astroベース）のデフォルトポート
  },
});