import {
  defineConfig,
  presetAttributify,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import {
  presetApplet,
  presetRemRpx,
  transformerApplet,
  transformerAttributify,
} from 'unocss-applet'

const isApplet = process.env?.UNI_PLATFORM?.startsWith('mp-') ?? false

export default defineConfig({
  presets: [
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetApplet({ enable: isApplet }),
    presetAttributify(),
    presetRemRpx({ mode: isApplet ? 'rem2rpx' : 'rpx2rem' }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerAttributify({ ignoreAttributes: ['block'] }),
    transformerApplet(),
  ],
})
