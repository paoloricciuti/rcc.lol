import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import dynamicImport from "vite-plugin-dynamic-import";

function link() {
  return {
    name: "vite-link-plugin",
    transform(code, id) {
      if (id.endsWith(".link")) {
        return `export default "${code.trim()}"`;
      }
    },
  };
}

export default defineConfig({
  plugins: [sveltekit(), link(), dynamicImport()],
});
