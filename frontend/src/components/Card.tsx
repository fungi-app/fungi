import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";
import { colors } from "../colors";
import MushList from "../db/mushrooms";
import { Mushroom } from "@fungi/db";
import { useTheme } from "../lib/theme";
type Props = {
  id: number | string;
  img: string;
  onChange: (id: number | string) => void;
};

export const Card: React.FC<React.PropsWithChildren<Props>> = ({
  img,
  id,
  onChange,
  children,
}) => {
  const theme = useTheme();
  return (
    <TouchableOpacity style={styles.postButton} onPress={() => onChange(id)}>
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
          source={require("../../assets/noimg.jpg")}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  postButton: {
    width: "100%",
    height: 230,
    marginVertical: 7,
  },
  postContainer: {
    height: 230,
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
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
    height: 230,
    resizeMode: "cover",
  },
});
