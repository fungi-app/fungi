export const colors = {
  primary: "#FFE8C5",
  secondary: "#653D00",
  accent: "#DD6F1F",
  accentDark: "#A0531B",
  bg: "#FFFFFF",
  text: "#000000",
};

export type Theme = {
  bg: string;
  text: string;
  secondaryBg: string;
  fadedText: string;
  secondary: string;
  secondaryText: string;
  primary: string;
  separator: string;
  metaBg: string;
};

export const schemes: { [key in "light" | "dark"]: Theme } = {
  light: {
    bg: "#fff",
    text: "#000",
    secondaryBg: "#FFE8C5",
    fadedText: "rgba(0, 0, 0, 0.35);",
    secondary: "#653D00",
    secondaryText: "#B38550",
    primary: "#DD6F1F",
    separator: "rgba(0, 0, 0, 0.35)",
    metaBg: "#FBDAB4",
  },
  dark: {
    bg: "#000",
    text: "#fff",
    secondaryBg: "#452929",
    fadedText: "rgba(255, 255, 255, 0.35)",
    secondary: "#C79078",
    secondaryText: "#9A796E",
    primary: "#fff",
    separator: "rgba(255, 255, 255, 0.2)",
    metaBg: "#573737",
  },
};
