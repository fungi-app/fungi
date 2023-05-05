import { View, Text, StyleSheet } from "react-native";
import { colors } from "../colors";
import { ScreenType } from "../App";
import { screens } from "../Screens";
import { StatusBarPad } from "./StatusBarPad";
import { useStateStore } from "../lib/store";
import { useTheme } from "../lib/theme";

export const TopBar: React.FC = (props) => {
  const theme = useTheme();
  const currentScreen = useStateStore((s) => s.currentScreen);

  return (
    <View style={styles.float}>
      <StatusBarPad style={{ backgroundColor: theme.secondaryBg }} />
      <View style={styles.wrapper}>
        <View style={[styles.textBar, { backgroundColor: theme.secondaryBg }]}>
          <Text style={[styles.text, { color: theme.text }]}>
            {screens[currentScreen].displayName}
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
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  text: {
    fontFamily: "Raleway_700Bold",
    fontSize: 18,
  },
  gradient: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
