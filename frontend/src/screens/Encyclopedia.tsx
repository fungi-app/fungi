import {
  TouchableOpacity,
  Button,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
} from "react-native";
import styled from "styled-components/native";
import { Mushroom, getAllMushrooms } from "../db/db";
import MushList from "../db/mushrooms";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../colors";
import { useState } from "react";

//import { Mushrooms } from "../db/mushrooms"

export let currentMushroomIndex = NaN;

export const Encyclopedia: React.FC<Props> = (props) => {
  let mushrooms = getAllMushrooms(MushList.list);
  const [screen, setScreen] = useState<ScreenType>("mushroom");

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

const MushroomScreen: React.FC<Props> = ({ obj, onChange }) => {
  // <ScrollView contentContainerStyle={{ flexGrow: 1 }} style = {mushroomStyles.screen}>
  return (
    <View style={mushroomScreenStyles.screen}>
      <Text style={mushroomScreenStyles.title}>{obj.name}</Text>
      <View style={mushroomScreenStyles.imageContainer}>
        <Image
          style={mushroomScreenStyles.image}
          source={MushList.list[obj.index].image}
        />
      </View>
      <View>
        <CategoryName text="Где можно найти:" />
        <CategoryText text={obj.zones} />
      </View>
      <View>
        <CategoryName text="Семейство:" />
        <CategoryText text={obj.familie} />
      </View>
      <View>
        <CategoryName text="Красная книга:" />
        <CategoryText text={obj.redBook} />
      </View>
      <View>
        <CategoryName text="Съедобность:" />
        <CategoryText text={obj.eatable} />
      </View>
      <View>
        <CategoryName text="Карты:" />
        <CategoryText text={obj.gmapsLink} />
      </View>
      <View>
        <CategoryName text="Описание:" />
        <CategoryText text={obj.description} />
      </View>
      <TouchableOpacity
        style={mushroomScreenStyles.closeButton}
        onPress={() => {
          currentMushroomIndex = NaN;
          onChange("encyclopediaView");
        }}
      >
        <Text style={mushroomScreenStyles.closeText}>Назад</Text>
      </TouchableOpacity>
    </View>
  );
};
//

const CategoryName: React.FC<Props> = ({ text }) => {
  return <Text style={mushroomScreenStyles.categoryName}>{text}</Text>;
};
const CategoryText: React.FC<Props> = ({ text }) => {
  return <Text style={mushroomScreenStyles.categoryText}>{text}</Text>;
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

const mushroomScreenStyles = StyleSheet.create({
  screen: {
    height: "100%",
    marginBottom: 150,
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    margin: 15,
    textAlign: "center",
  },
  categoryName: {
    fontWeight: "bold",
    fontSize: 18,
  },
  categoryText: {
    fontSize: 18,
  },
  imageContainer: {
    height: 200,
    width: "100%",
    borderRadius: 30,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
  },
  closeButton: {
    width: "100%",
    height: 40,
    borderRadius: 30,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    marginTop: 20,
  },
  closeText: {
    color: "#fff",
    textAlign: "center",
    fontWidth: "bold",
    fontSize: 15,
  },
});

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
