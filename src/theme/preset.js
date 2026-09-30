import {definePreset} from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";

/**
 * Preset de tema personalizado para MonteFlor basado en Aura.
 * Paleta Primaria: Verde salvia y esmeralda orgánico con tecnología limpia.
 * Superficies: Tonos cálidos suaves (stone/zinc) para un look editorial premium.
 * Redondeo unificado: Escala generosa para un diseño suave y moderno.
 */
const MonteFlorPreset = definePreset(Aura, {
  primitive: {
    borderRadius: {
      none: "0",
      xs: "4px",
      sm: "8px",
      md: "12px",
      lg: "16px",
      xl: "20px",
    },
    // Verde orgánico sofisticado para MonteFlor
    monteflor: {
      50: "#f3f8f5",
      100: "#e2eee6",
      200: "#c7dfd2",
      300: "#a0c7b4",
      400: "#74a991",
      500: "#4f8d73",
      600: "#3d725d",
      700: "#335c4c",
      800: "#2b4a3e",
      900: "#253e35",
      950: "#12221c",
    },
  },
  semantic: {
    primary: {
      50: "{monteflor.50}",
      100: "{monteflor.100}",
      200: "{monteflor.200}",
      300: "{monteflor.300}",
      400: "{monteflor.400}",
      500: "{monteflor.500}",
      600: "{monteflor.600}",
      700: "{monteflor.700}",
      800: "{monteflor.800}",
      900: "{monteflor.900}",
      950: "{monteflor.950}",
    },
    colorScheme: {
      light: {
        surface: {
          0: "#ffffff",
          50: "{stone.50}",
          100: "{stone.100}",
          200: "{stone.200}",
          300: "{stone.300}",
          400: "{stone.400}",
          500: "{stone.500}",
          600: "{stone.600}",
          700: "{stone.700}",
          800: "{stone.800}",
          900: "{stone.900}",
          950: "{stone.950}",
        },
      },
      dark: {
        surface: {
          0: "#ffffff",
          50: "{zinc.50}",
          100: "{zinc.100}",
          200: "{zinc.200}",
          300: "{zinc.300}",
          400: "{zinc.400}",
          500: "{zinc.500}",
          600: "{zinc.600}",
          700: "{zinc.700}",
          800: "{zinc.800}",
          900: "{zinc.900}",
          950: "{zinc.950}",
        },
      },
    },
  },
});

export default MonteFlorPreset;
