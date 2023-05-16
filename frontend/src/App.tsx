import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { BottomMenu } from "./components/BottomMenu";
import { Screens } from "./Screens";
import { TopBar } from "./components/TopBar";
import { TRPCProvider } from "./lib/trpc";
import {
  Raleway_400Regular,
  Raleway_500Medium,
  Raleway_600SemiBold,
  Raleway_700Bold,
  Raleway_800ExtraBold,
} from "../assets/fonts/raleway";
import { useSelectedScheme, useTheme } from "./lib/theme";
import { useFonts } from "expo-font";

export default function App() {
  let [fontsLoaded, fontErr] = useFonts({
    Raleway_400Regular,
    Raleway_500Medium,
    Raleway_600SemiBold,
    Raleway_700Bold,
    Raleway_800ExtraBold,
  });

  if (fontErr) console.error("FONT LOADING ERROR: ", fontErr);

  const selectedScheme = useSelectedScheme();
  const theme = useTheme();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <TRPCProvider>
        <StatusBar style={selectedScheme === "dark" ? "light" : "dark"} />
        <View style={[styles.container, { backgroundColor: theme.bg }]}>
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
    fontFamily: "Raleway_500Medium",
  },
});

export type ScreenType = "encyclopedia" | "news" | "settings";
