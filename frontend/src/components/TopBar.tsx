import { View, Text, StyleSheet } from "react-native";
import { Octicons, Feather } from "@expo/vector-icons";
import { colors } from "../colors";
import { ScreenType } from "../App";
import { screens } from "../Screens";
import { StatusBarPad } from "./StatusBarPad";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  currentScreen: ScreenType;
};

export const TopBar: React.FC<Props> = (props) => {
  return (
    <View style={styles.float}>
      <LinearGradient
        colors={[colors.bg, `${colors.bg}00`]}
        start={[0, 0]}
        end={[0, 1]}
        style={styles.gradient}
      />
      <StatusBarPad />
      <View style={styles.wrapper}>
        <View style={styles.textBar}>
          <Text style={styles.text}>
            {screens[props.currentScreen].displayName}
          </Text>
        </View>
      </View>
    </View>
  );
};

export const TopBarPad: React.FC = () => (
  <>
    <StatusBarPad />
    <View style={{ height: styles.wrapper.height }} />
  </>
);

const styles = StyleSheet.create({
  float: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 40,
  },
  icon: {
    marginRight: 0,
  },
  textBar: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: colors.primary,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    height: "100%",
  },
  text: {
    color: colors.secondary,
  },
  gradient: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
