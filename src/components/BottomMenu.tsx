import { View, StyleSheet } from "react-native";
import {
  MaterialIcons,
  Ionicons,
  Octicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { colors } from "../colors";
import { ScreenType } from "../../App";
import type { IconButtonProps } from "@expo/vector-icons/build/createIconSet";

type IconProps = IconButtonProps<"">;

const buttons: { screen: ScreenType; icon: (p: IconProps) => JSX.Element }[] = [
  {
    screen: "Карта",
    icon: (p: IconProps) => <MaterialIcons.Button {...p} name="map" />,
  },
  {
    screen: "Энциклопедия",
    icon: (p: IconProps) => <Octicons.Button {...p} size={32} name="book" />,
  },
  {
    screen: "Поиск",
    icon: (p: IconProps) => <Ionicons.Button {...p} name="md-search" />,
  },
  {
    screen: "Новости",
    icon: (p: IconProps) => <MaterialIcons.Button {...p} name="list-alt" />,
  },
  {
    screen: "Профиль",
    icon: (p: IconProps) => (
      <MaterialCommunityIcons.Button {...p} name="account-circle-outline" />
    ),
  },
];

export const BottomMenu: React.FC<Props> = (props) => {
  return (
    <View style={styles.menu}>
      {buttons.map((Item) => (
        <Item.icon
          name=""
          onPress={() => props.onChange(Item.screen)}
          key={Item.screen}
          size={36}
          color={colors.secondary}
          backgroundColor={
            Item.screen === props.currentScreen ? colors.accent : "transparent"
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
  },
  icon: {
    marginRight: 0,
  },
  button: {
    borderRadius: 200,
  },
});

type Props = {
  onChange: (screen: ScreenType) => void;
  currentScreen: ScreenType;
};
