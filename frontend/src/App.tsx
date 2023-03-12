import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StatusBar as StatusBarRN, StyleSheet, Text, View } from "react-native";
import { BottomMenu } from "./components/BottomMenu";
import { Screens } from "./Screens";
import { TopBar } from "./components/TopBar";
import { TRPCProvider } from "./lib/trpc";

export default function App() {
  const [screen, setScreen] = useState<ScreenType>("news");
  return (
    <TRPCProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <TopBar currentScreen={screen} />
        <Screens currentScreen={screen} />
        <BottomMenu onChange={setScreen} currentScreen={screen} />
      </View>
    </TRPCProvider>
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

export type ScreenType = "map" | "encyclopedia" | "search" | "news" | "profile";
