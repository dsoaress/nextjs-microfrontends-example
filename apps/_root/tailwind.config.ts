import type { Config } from "tailwindcss";

const config: Config = {
  presets: [require("@nextjs-microfrontends-example/ui/tailwind")],
  content: [
    "./src/**/*.{jsx,tsx}",
    "./node_modules/@nextjs-microfrontends-example/ui/**/*.{jsx,tsx}",
    "./node_modules/@nextjs-microfrontends-example/order-management/**/*.{jsx,tsx}",
    "./node_modules/@nextjs-microfrontends-example/tracking-and-visibility/**/*.{jsx,tsx}",
  ],
  plugins: [],
};
export default config;
