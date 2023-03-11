import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";
import { colors } from "../colors";
import MushList from "../db/mushrooms";

type Props = {
  obj: {
    appendDate: Date;
    name: string;
    zones: string;
    gmapsLink: string;
    redBook: boolean | string;
    eatable: boolean | string;
    description: string;
    familie: number[];
    index: number;
  };
  onChange: React.Dispatch<
    React.SetStateAction<{
      screen: string;
      mushroomId: number;
    }>
  >;
};

export const MushroomView: React.FC<Props> = ({ obj, onChange }) => {
  return (
    <TouchableOpacity
      style={styles.postButton}
      onPress={() => {
        onChange({ screen: "encyclopedia", mushroomId: obj.index });
      }}
    >
      <View style={styles.postContainer}>
        <Image style={styles.image} source={MushList.list[obj.index].image} />
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
    borderRadius: 40,
    justifyContent: "flex-end",
  },
  titleContainer: {
    backgroundColor: colors.secondary,
    height: "35%",
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
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
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    //height: 10,
  },
});