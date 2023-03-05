import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StatusBar as StatusBarRN, StyleSheet, Text, View } from "react-native";
import { BottomMenu } from "./src/components/BottomMenu";
import { Screens } from "./src/components/Screens";
import { TopBar } from "./src/components/TopBar";

export default function App() {
  const [screen, setScreen] = useState<ScreenType>("Новости");
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TopBar currentScreen={screen} />
      <Screens currentScreen={screen} />
      <BottomMenu onChange={setScreen} currentScreen={screen} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: StatusBarRN.currentHeight,
  },
});

export type ScreenType =
  | "Карта"
  | "Энциклопедия"
  | "Поиск"
  | "Новости"
  | "Профиль";
