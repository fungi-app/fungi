import {
  TouchableOpacity,
  View,
  Image,
  Text,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { colors } from "../colors";
import MushList from "../db/mushrooms";
import { Mushroom } from "@fungi/db";
import { useTheme } from "../lib/theme";
type Props = {
  img?: ImageSourcePropType;
  onPress: () => unknown;
};

export const Card: React.FC<React.PropsWithChildren<Props>> = ({
  img,
  onPress,
  children,
}) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      style={styles.postButton}
      onPress={onPress}
      activeOpacity={0.6}
    >
      <View style={styles.postContainer}>
        <View
          style={[
            styles.titleContainer,
            { backgroundColor: theme.secondaryBg },
          ]}
        >
          {children}
        </View>
        <Image
          style={styles.image}
          source={img ?? require("../../assets/noimg.jpg")}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  postButton: {
    width: "100%",
  },
  postContainer: {
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
    minHeight: 160,
    marginVertical: 7,
    borderRadius: 20,
  },
  titleContainer: {
    width: "50%",
    padding: 15,
    display: "flex",
    justifyContent: "space-between",
  },
  image: {
    width: "50%",
    height: "100%",
    resizeMode: "cover",
  },
});
