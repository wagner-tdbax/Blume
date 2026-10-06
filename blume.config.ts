// blume.config.ts
import { defineConfig } from "blume";

export default defineConfig({
  title: "Blume ドキュメント",
  description: "wagner-tdbax が管理する Blume ドキュメントサイト",
  
  // ❌ 最上位（ここ）に書いてあった `base: "/Blume"` を削除します。

  deployment: {
    // ⭕️ base と site はこのように deployment の中にまとめて記述します
    base: "/Blume", 
    site: "https://github.io",
  },
});