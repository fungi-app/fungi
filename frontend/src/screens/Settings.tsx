import { Text, View } from "react-native";
import { BottomMenuPad } from "../components/BottomMenu";
import { TopBarPad } from "../components/TopBar";
import { trpc } from "../lib/trpc";
import { tunnel } from "../lib/tunnel";

export const Settings: React.FC = () => {
  const hello = trpc.example.hello.useQuery({ name: "Ivan" });

  return (
    <View>
      <TopBarPad />
      <Text>
        profile {hello.data ?? "Loading"}, tunnel {tunnel}
      </Text>
      <BottomMenuPad />
    </View>
  );
};
