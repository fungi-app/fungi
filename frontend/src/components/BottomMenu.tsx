import { View, StyleSheet } from "react-native";
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

type IconProps = IconButtonProps<"">;

const buttons: { screen: ScreenType; icon: (p: IconProps) => JSX.Element }[] = [
  {
    screen: "encyclopedia",
    icon: (p: IconProps) => <MaterialIcons.Button {...p} name="article" />,
  },
  {
    screen: "news",
    icon: (p: IconProps) => <MaterialIcons.Button {...p} name="list-alt" />,
  },
  {
    screen: "profile",
/*     тут screen settings типа */
    icon: (p: IconProps) => (
      <Ionicons.Button {...p} name="settings-outline" />
    ),
  },
];

export const BottomMenu: React.FC = () => {
  const currentScreen = useStateStore((s) => s.currentScreen);
  const setCurrentScreen = useStateStore((s) => s.setCurrentScreen);

  return (
    <View style={styles.menu}>
      {buttons.map((Item) => (
        <Item.icon
          name=""
          onPress={() => setCurrentScreen(Item.screen)}
          key={Item.screen}
          size={36}
          color={colors.secondary}
          backgroundColor={
            Item.screen === currentScreen ? colors.accent : "transparent"
          }
          iconStyle={styles.icon}
          style={styles.button}
          borderRadius={100}
          underlayColor={colors.secondary + "33"}
        />
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
    paddingHorizontal: 60,
    paddingVertical: 4,
    alignItems: "center",
    height: 60,
  },
  icon: {
    marginRight: 0,
  },
  button: {
    borderRadius: 200,
  },
});
