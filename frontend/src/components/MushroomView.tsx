import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";
import { colors } from "../colors";
import MushList from "../db/mushrooms";
import { Mushroom } from "@fungi/db";

type Props = {
  obj: Mushroom;
  onChange: (id: number) => void;
};

export const MushroomView: React.FC<Props> = ({ obj, onChange }) => {
  return (
    <TouchableOpacity
      style={styles.postButton}
      onPress={() => onChange(obj.id)}
    >
      <View style={styles.postContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/noimg.jpg")}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.text}>{obj.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 15,
    flex: 1,
    height: "100%",
    paddingBottom: 150,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  postButton: {
    width: "50%",
    padding: 10,
    paddingBottom: 0,
  },
  postContainer: {
    backgroundColor: colors.accent,
    width: "100%",
    height: 200,
    borderRadius: 20,
    justifyContent: "flex-end",
  },
  titleContainer: {
    backgroundColor: colors.accent,
    height: "35%",
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    justifyContent: "center",
  },
  text: {
    margin: 11,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  image: {
    width: "100%",
    height: "65%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    //height: 10,
  },
});
