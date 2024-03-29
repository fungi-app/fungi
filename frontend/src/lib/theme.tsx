import { ImageStyle, TextStyle, ViewStyle, useColorScheme } from "react-native";
import { useStateStore } from "./store";
import { Theme, schemes } from "../colors";
type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };
type StyleConstructor<T extends NamedStyles<T> | NamedStyles<any>> = (
  colors: Theme
) => T;

export const useSelectedScheme = () => {
  const selectedTheme = useStateStore((s) => s.selectedTheme);
  const colorScheme = useColorScheme() ?? "light";

  let scheme = selectedTheme === "system" ? colorScheme : selectedTheme;
  return scheme;
};

export const useTheme = () => {
  const scheme = useSelectedScheme();

  return schemes[scheme];
};

export const useThemedStyle = <T extends NamedStyles<T> | NamedStyles<any>>(
  construct: StyleConstructor<T>
) => {
  const theme = useTheme();

  return construct(theme);
};
