import type { Config } from "tailwindcss";

const config: Config = {
  presets: [require("@nextjs-microfrontends-example/ui/tailwind")],
  content: [
    "./src/**/*.{jsx,tsx}",
    "./node_modules/@nextjs-microfrontends-example/ui/**/*.{jsx,tsx}",
  ],
  plugins: [],
};
export default config;
