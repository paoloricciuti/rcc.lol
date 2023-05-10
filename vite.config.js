import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

function link(){
   return {
      name: "vite-link-plugin",
      transform(code, id){
         if(id.endsWith(".link")){
            return `export default "${code}"`;
         }
      }
   }
}

export default defineConfig({
	plugins: [sveltekit(), link()]
});
