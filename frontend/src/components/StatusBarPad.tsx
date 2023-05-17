import { View, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type StatusBarPadProps = {
  style?: ViewStyle;
};

export const StatusBarPad: React.FC<StatusBarPadProps> = ({ style }) => {
  const { top } = useSafeAreaInsets();
  return <View style={[{ width: "100%", height: top }, style ?? {}]} />;
};
