import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Components from '@uni-helper/vite-plugin-uni-components'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    Components({
      dts: 'src/components.d.ts',
    }),
    AutoImport({
      imports: ['vue', 'uni-app', '@vueuse/core'],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/hooks'],
      vueTemplate: true,
    }),
    uni(),
    UnoCSS(),
  ],
})
