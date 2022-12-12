import { View, StyleSheet, useWindowDimensions, Text } from "react-native";
import { ScreenType } from "../../App";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { news, NewsScreen } from "../components/NewsScreen";
import { Encyclopedia } from "../components/Encyclopedia";

type Props = {
  currentScreen: ScreenType;
};

const screens: { [key in ScreenType]: JSX.Element } = {
  Карта: <Text>Я map</Text>,
  Энциклопедия: <Encyclopedia />,
  Поиск: <Text>Я search</Text>,
  Новости: <NewsScreen data={news} />,
  Профиль: <Text>Я profile</Text>,
};

export const Screens: React.FC<Props> = (props) => {
  const { width } = useWindowDimensions();
  const Screen: React.FC<React.PropsWithChildren> = ({ children }) => (
    <View style={[styles.screen, { width }]}>{children}</View>
  ); 

  return (
    <View style={styles.wrapper}>
        {<Screen key={props.currentScreen}>{screens[props.currentScreen as ScreenType]}</Screen>}
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
