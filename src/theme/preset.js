import {definePreset} from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";

/**
 * Preset MonyMonty para PrimeVue v4 basado en Aura.
 * variables y tokens de diseño de MonyMonty.
 */
const MonyMontyPreset = definePreset(Aura, {
  primitive: {
    borderRadius: {
      none: "0",
      xs: "var(--radius-sm)",
      sm: "var(--radius-sm)",
      md: "var(--radius-md)",
      lg: "var(--radius-lg)",
      xl: "var(--radius-xl)",
    },
  },
  semantic: {
    primary: {
      50: "var(--color-theme-light-brand-tint)",
      100: "var(--color-theme-light-brand-tint)",
      200: "var(--color-theme-light-brand-soft)",
      300: "var(--color-theme-light-brand-soft)",
      400: "var(--color-theme-light-brand)",
      500: "var(--color-brand-primary)",
      600: "var(--color-brand-primary-strong)",
      700: "var(--color-theme-light-brand-strong)",
      800: "var(--color-theme-light-brand-ink)",
      900: "var(--color-theme-light-brand-ink)",
      950: "var(--color-theme-dark-brand-tint)",
    },
    colorScheme: {
      light: {
        primary: {
          color: "var(--color-brand-primary)",
          contrastColor: "var(--color-text-on-brand)",
          hoverColor: "var(--color-brand-primary-strong)",
          activeColor: "var(--color-theme-light-brand-ink)",
        },
        surface: {
          0: "var(--color-surface)",
          50: "var(--color-background)",
          100: "var(--color-theme-light-surface-2)",
          200: "var(--color-theme-light-surface-3)",
          300: "var(--color-border)",
          400: "var(--color-border-strong)",
          500: "var(--color-theme-light-ink-subtle)",
          600: "var(--color-theme-light-ink-muted)",
          700: "var(--color-theme-light-ink-muted)",
          800: "var(--color-text-primary)",
          900: "var(--color-theme-light-ink)",
          950: "var(--color-theme-light-ink)",
        },
      },
      dark: {
        primary: {
          color: "var(--color-brand-primary)",
          contrastColor: "var(--color-text-on-brand)",
          hoverColor: "var(--color-brand-primary-strong)",
          activeColor: "var(--color-theme-dark-brand-soft)",
        },
        surface: {
          0: "var(--color-surface)",
          50: "var(--color-theme-dark-surface-2)",
          100: "var(--color-theme-dark-surface-3)",
          200: "var(--color-border)",
          300: "var(--color-border-strong)",
          400: "var(--color-theme-dark-ink-subtle)",
          500: "var(--color-theme-dark-ink-muted)",
          600: "var(--color-theme-dark-ink-muted)",
          700: "var(--color-theme-dark-surface)",
          800: "var(--color-theme-dark-surface)",
          900: "var(--color-text-primary)",
          950: "var(--color-background)",
        },
      },
    },
  },
});

export default MonyMontyPreset;
