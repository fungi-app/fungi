import { View, Text, StyleSheet } from "react-native";
import { Octicons, Feather } from "@expo/vector-icons";
import { colors } from "../colors";
import { ScreenType } from "../App";
import { screens } from "../Screens";
import { StatusBarPad } from "./StatusBarPad";

type Props = {
  currentScreen: ScreenType;
};

export const TopBar: React.FC<Props> = (props) => {
  return (
    <View style={styles.float}>
      <StatusBarPad />
      <View style={styles.wrapper}>
        <Octicons.Button
          name="bell"
          size={24}
          color={colors.secondary}
          backgroundColor="transparent"
          iconStyle={styles.icon}
        />
        <View style={styles.textBar}>
          <Text style={styles.text}>
            {screens[props.currentScreen].displayName}
          </Text>
        </View>
        <Feather.Button
          name="menu"
          size={24}
          color={colors.secondary}
          backgroundColor="transparent"
          iconStyle={styles.icon}
        />
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
    width: "98%",
    height: 40,
  },
  icon: {
    marginRight: 0,
  },
  textBar: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: "#E3E3E3",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    height: "100%",
  },
  text: {
    color: colors.secondary,
  },
});
