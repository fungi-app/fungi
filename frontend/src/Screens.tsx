import { View, StyleSheet, useWindowDimensions, Text } from "react-native";
import { ScreenType } from "./App";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { news, NewsScreen } from "./screens/NewsScreen";
import { Encyclopedia } from "./screens/Encyclopedia";
import { Maps } from "./screens/Maps";
import { Search } from "./screens/Search";
import { Profile } from "./screens/Profile";

type Props = {
  currentScreen: ScreenType;
};

export const screens: {
  [key in ScreenType]: {
    element: JSX.Element;
    displayName: string;
  };
} = {
  map: { element: <Maps />, displayName: "Карта" },
  encyclopedia: { element: <Encyclopedia />, displayName: "Энциклопедия" },
  search: { element: <Search />, displayName: "Поиск" },
  news: { element: <NewsScreen data={news} />, displayName: "Новости" },
  profile: { element: <Profile />, displayName: "Профиль" },
};

export const Screens: React.FC<Props> = (props) => {
  const { width } = useWindowDimensions();
  const Screen: React.FC<React.PropsWithChildren> = ({ children }) => (
    <View style={[styles.screen, { width }]}>{children}</View>
  );

  return (
    <View style={styles.wrapper}>
      {
        <Screen key={props.currentScreen}>
          {screens[props.currentScreen].element}
        </Screen>
      }
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
