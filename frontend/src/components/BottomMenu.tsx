import { View, StyleSheet, TouchableOpacity } from "react-native";
import {
  MaterialIcons,
  Ionicons,
  Octicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { colors } from "../colors";
import { ScreenType } from "../App";
import type { IconButtonProps } from "@expo/vector-icons/build/createIconSet";
import { useStateStore } from "../lib/store";
import EncyclopediaIcon from "./icons/Encyclopedia";
import NewsIcon from "./icons/News";
import SettingsIcon from "./icons/Settings";

type IconProps = IconButtonProps<"">;

const buttons: {
  screen: ScreenType;
  icon: (p: { color: string }) => JSX.Element;
}[] = [
  {
    screen: "encyclopedia",
    icon: (c) => <EncyclopediaIcon width={36} height={36} fill={c.color} />,
  },
  {
    screen: "news",
    icon: (c) => <NewsIcon width={36} height={36} fill={c.color} />,
  },
  {
    screen: "settings",
    icon: (c) => <SettingsIcon width={36} height={36} fill={c.color} />,
  },
];

export const BottomMenu: React.FC = () => {
  const currentScreen = useStateStore((s) => s.currentScreen);
  const setCurrentScreen = useStateStore((s) => s.setCurrentScreen);

  return (
    <View style={styles.menu}>
      {buttons.map((Item) => (
        <TouchableOpacity onPress={() => setCurrentScreen(Item.screen)}>
          <Item.icon color={Item.screen === currentScreen ? "#f00" : "#000"} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export const BottomMenuPad: React.FC = () => (
  <View
    style={{ width: "100%", height: styles.menu.height + styles.menu.bottom }}
  />
);

const styles = StyleSheet.create({
  menu: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 20,
    backgroundColor: colors.primary,
    borderRadius: 1000,
    width: "95%",
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignItems: "center",
    height: 60,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  icon: {
    marginRight: 0,
  },
  button: {
    // borderRadius: 200,
  },
});
