import { defineConfig } from "vite-plugin-windicss";
import aspectRatioPlugin from "windicss/plugin/aspect-ratio";
import formsPlugin from "windicss/plugin/forms";
import filtersPlugin from "windicss/plugin/filters";
import lineClampPlugin from "windicss/plugin/line-clamp";
import scrollSnapPlugin from "windicss/plugin/scroll-snap";
import typographyPlugin from "windicss/plugin/typography";
import animationsPlugin from "@windicss/animations";
import iconsPlugin from "@windicss/plugin-icons";
import scrollbarPlugin from "@windicss/plugin-scrollbar";
import questionMarkPlugin from "@windicss/plugin-question-mark";

export default defineConfig({
  preflight: false,
  attributify: true,
  plugins: [
    aspectRatioPlugin,
    formsPlugin,
    filtersPlugin,
    lineClampPlugin,
    scrollSnapPlugin,
    typographyPlugin,
    animationsPlugin,
    iconsPlugin,
    scrollbarPlugin,
    questionMarkPlugin,
  ],
});
