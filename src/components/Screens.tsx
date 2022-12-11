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
  map: <Text>Я map</Text>,
  encyclopedia: <Encyclopedia/>,
  search: <Text>Я search</Text>,
  news: <NewsScreen data={news} />,
  profile: <Text>Я profile</Text>,
};

export const Screens: React.FC<Props> = (props) => {
  const { width } = useWindowDimensions();
  const Screen: React.FC<React.PropsWithChildren> = ({ children }) => (
    <View style={[styles.screen, { width }]}>{children}</View>
  );
  // const sliderStyle = useAnimatedStyle(
  //   () => ({
  //     width: width * Object.keys(screens).length,
  //     left: withTiming(
  //       -1 * Object.keys(screens).indexOf(props.currentScreen) * width,
  //       { duration: 200 }
  //     ),
  //     position: "absolute",
  //     display: "flex",
  //     flexDirection: "row",
  //   }),
  //   [props.currentScreen]
  // );
  return (
    <View style={styles.wrapper}>
      <View
        style={[
          styles.slider,
          {
            width: width * Object.keys(screens).length,
            left:
              -1 * Object.keys(screens).indexOf(props.currentScreen) * width,
          },
        ]}
      >
        {Object.keys(screens).map((k) => (
          <Screen key={k}>{screens[k as ScreenType]}</Screen>
        ))}
      </View>
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
