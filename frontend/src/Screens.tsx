import { View, StyleSheet, useWindowDimensions, Text } from "react-native";
import { ScreenType } from "./App";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { NewsScreen } from "./screens/NewsScreen";
import { Encyclopedia } from "./screens/Encyclopedia";
import { Maps } from "./screens/Maps";
import { Search } from "./screens/Search";
import { Profile } from "./screens/Profile";
import { useStateStore } from "./lib/store";

export const screens: {
  [key in ScreenType]: {
    element: JSX.Element;
    displayName: string;
  };
} = {
  map: { element: <Maps />, displayName: "Карта" },
  encyclopedia: { element: <Encyclopedia />, displayName: "Энциклопедия" },
  search: { element: <Search />, displayName: "Поиск" },
  news: { element: <NewsScreen />, displayName: "Новости" },
  profile: { element: <Profile />, displayName: "Профиль" },
};

const Screen: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { width } = useWindowDimensions();
  return <View style={[styles.screen, { width }]}>{children}</View>;
};

export const Screens: React.FC = (props) => {
  const currentScreen = useStateStore((s) => s.currentScreen);

  return (
    <View style={styles.wrapper}>
      <Screen>{screens[currentScreen].element}</Screen>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    width: "100%",
  },
  slider: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
  },
  screen: {},
});
