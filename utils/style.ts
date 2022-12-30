import { createTheme } from "@mui/material/styles";
import { teal } from "@mui/material/colors";

import type { ISourceOptions } from "tsparticles-engine";

export const tiffanyBlue = "#81D8D0";

export const theme = createTheme({
  palette: {
    primary: {
      // main: teal[200],
      main: tiffanyBlue,
    },
  },
});

export const tabBlue = "#1f77b4";
export const tabOrange = "#ff7f0e";
export const tabGreen = "#2ca02c";
export const tabRed = "#d62728";
export const tabPurple = "#9467bd";
export const tabBrown = "#8c564b";
export const tabPink = "#e377c2";
export const tabGray = "#7f7f7f";
export const tabOlive = "#bcbd22";
export const tabCyan = "#17becf";

export const tsParticlesOptions: ISourceOptions = {
  fpsLimit: 120,
  particles: {
    color: {
      value: tiffanyBlue,
    },
    move: {
      direction: "bottom",
      enable: true,
      outModes: {
        default: "out",
      },
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 300,
      },
      value: 5,
    },
    opacity: {
      value: 0.2,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 100 },
    },
  },
};
