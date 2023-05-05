import { View, StyleSheet, Text } from "react-native";
import { useTheme } from "../../lib/theme";
import { Switch } from "./Switch";

type SwitchSettingProps = {
  label: string;
  isOn: boolean;
  onChange: (v: boolean) => unknown;
};

export const SwitchSetting: React.FC<SwitchSettingProps> = (props) => {
  const theme = useTheme();

  return (
    <View style={styles.wrapper}>
      <Text style={[styles.text, { color: theme.text }]}>{props.label}</Text>
      <Switch isOn={props.isOn} onChange={props.onChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontFamily: "Raleway_600SemiBold",
    fontSize: 16,
  },
});
