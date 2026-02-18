import { defineConfig, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      cdn: 'https://esm.sh/',
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  theme: {
    colors: {
      'nais-bg': '#FFFFFF',
      'nais-surface': '#F1F5F9',
      'nais-card': '#F8FAFC',
      'nais-text': '#0F172A',
      'nais-text-secondary': '#64748B',
      'nais-accent': '#E8384F',
      'nais-accent-hover': '#DC2626',
      'nais-accent-light': '#FEF2F2',
      'nais-border': '#E2E8F0',
      'nais-success': '#10B981',
    },
  },
  safelist: [
    'i-carbon-terminal',
    'i-carbon-checkmark-filled',
    'i-carbon-arrow-right',
    'i-carbon-globe',
    'i-carbon-logo-github',
    'i-carbon-chat',
    'i-carbon-code',
    'i-carbon-rocket',
    'i-carbon-growth',
    'i-carbon-enterprise',
    'i-carbon-presentation-file',
    'i-carbon-help',
    'i-carbon-share-knowledge',
    'i-carbon-lightbulb-filled',
  ],
})
