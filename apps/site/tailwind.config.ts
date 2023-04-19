import type { Config } from "tailwindcss";
import { baseTailwindConfig } from "../../packages/tailwind-config/tailwind.config";

export default {
  content: [
    "src/pages/**/*.{js,ts,jsx,tsx}",
    "src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: baseTailwindConfig.theme,
  variants: baseTailwindConfig.variants,
  plugins: baseTailwindConfig.plugins,
} satisfies Config;
