import { ScrollView, Text, View } from "react-native";
import { BottomMenuPad } from "../components/BottomMenu";
import { TopBarPad } from "../components/TopBar";
import { Switch } from "../components/controls/Switch";
import { SwitchSetting } from "../components/controls/SwitchSetting";
import { useStateStore } from "../lib/store";

export const Settings: React.FC = () => {
  const theme = useStateStore((s) => s.selectedTheme);
  const setTheme = useStateStore((s) => s.setSelectedTheme);
  return (
    <ScrollView style={{ minHeight: "100%" }}>
      <TopBarPad />
      <SwitchSetting
        label="Темная тема"
        isOn={theme === "dark"}
        onChange={(d) => setTheme(d ? "dark" : "light")}
      />
      <BottomMenuPad />
    </ScrollView>
  );
};
