import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { BottomMenu } from "./components/BottomMenu";
import { Screens } from "./Screens";
import { TopBar } from "./components/TopBar";
import { TRPCProvider } from "./lib/trpc";

export default function App() {
  return (
    <SafeAreaProvider>
      <TRPCProvider>
        <StatusBar style="dark" />
        <View style={styles.container}>
          <TopBar />
          <Screens />
          <BottomMenu />
        </View>
      </TRPCProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export type ScreenType = "encyclopedia" | "news" | "settings";
