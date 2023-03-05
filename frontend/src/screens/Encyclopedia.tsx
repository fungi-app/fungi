import {
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
} from "react-native";
import { Mushroom, getAllMushrooms } from "../db/db";
import MushList from "../db/mushrooms";
import { colors } from "../colors";
import { useState } from "react";

//import { Mushrooms } from "../db/mushrooms"

export let currentMushroomIndex = NaN;

export const Encyclopedia: React.FC<Props> = (props) => {
  let mushrooms = getAllMushrooms(MushList.list);
  const [screen, setScreen] = useState("mushroom");

  if (isNaN(currentMushroomIndex))
    content = (
      <View style={mushroomStyles.screen}>
        {mushrooms.map((obj: Mushroom) => (
          <MushroomView
            style={mushroomStyles.mw}
            obj={obj}
            onChange={setScreen}
          />
        ))}
      </View>
    );
  else
    content = (
      <MushroomScreen
        obj={mushrooms[currentMushroomIndex]}
        onChange={setScreen}
      />
    );

  return <ScrollView>{content}</ScrollView>;
};

const MushroomView: React.FC<Props> = ({ obj, onChange }) => {
  return (
    <TouchableOpacity
      wrap
      style={mushroomStyles.postButton}
      onPress={() => {
        currentMushroomIndex = obj.index;
        onChange("encyclopedia");
      }}
    >
      <View style={mushroomStyles.postContainer}>
        <Image
          style={mushroomStyles.image}
          source={MushList.list[obj.index].image}
        />
        <View style={mushroomStyles.titleContainer}>
          <Text style={mushroomStyles.text}>{obj.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const mushroomStyles = StyleSheet.create({
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
    direction: "row",
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
