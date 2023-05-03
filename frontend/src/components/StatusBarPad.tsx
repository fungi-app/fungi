import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const StatusBarPad: React.FC = () => {
  const { top } = useSafeAreaInsets();
  return <View style={{ width: "100%", height: top }} />;
};
