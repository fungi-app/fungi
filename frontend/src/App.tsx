import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { BottomMenu } from "./components/BottomMenu";
import { Screens } from "./Screens";
import { TopBar } from "./components/TopBar";
import { TRPCProvider } from "./lib/trpc";
import {
  useFonts,
  Raleway_400Regular,
  Raleway_500Medium,
  Raleway_600SemiBold,
  Raleway_700Bold,
  Raleway_800ExtraBold,
} from "@expo-google-fonts/raleway";
import { useSelectedScheme } from "./lib/theme";

export default function App() {
  let [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Raleway_500Medium,
    Raleway_600SemiBold,
    Raleway_700Bold,
    Raleway_800ExtraBold,
  });

  const selectedScheme = useSelectedScheme();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <TRPCProvider>
        <StatusBar style={selectedScheme === "dark" ? "light" : "dark"} />
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
    fontFamily: "Raleway_500Medium",
  },
});

export type ScreenType = "encyclopedia" | "news" | "settings";
