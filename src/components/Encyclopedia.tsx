import { SafeAreaView, TouchableOpacity, Button, View, StyleSheet, ScrollView, Image, Text } from "react-native";
import styled from "styled-components/native";
import { Mushroom, getAllMushrooms } from "../db/db";
import MushList from '../db/mushrooms';
import { Ionicons } from '@expo/vector-icons';
import { colors } from "../colors";
import { useState } from "react";

//import { Mushrooms } from "../db/mushrooms"

export let currentMushroomIndex = NaN;

export const Encyclopedia: React.FC<Props> = (props) => {  

  let mushrooms = getAllMushrooms ( MushList.list );
  const [screen, setScreen] = useState<ScreenType>("mushroom");

  //onChange={setScreen}
  //props.onChange(Item.screen)

  if ( isNaN( currentMushroomIndex )) content = <ScrollView contentContainerStyle={{ flexGrow: 1 }} style = {mushroomStyles.screen}>{mushrooms.map ( (obj: Mushroom) => ( <MushroomView obj = {obj} onChange = {setScreen}/> ))}</ScrollView>
  else content = <MushroomScreen obj = {mushrooms[currentMushroomIndex]} onChange = {setScreen}/>

  return (
    <View>
      {content}
    </View>
  )
};


//<Ionicons onPress = {() => currentMushroomIndex = NaN} name="ios-close-circle-outline" size={60} style = {mushroomScreenStyles.closeButton} color="black" color={colors.secondary} />

const MushroomScreen: React.FC<Props> = ({obj, onChange }) => { 
  return (

    <View style = {mushroomScreenStyles.screen}>
      <TouchableOpacity onPress = {() => {
        currentMushroomIndex = NaN 
        onChange("encyclopediaView")
        }}>

      <Text>Назад</Text>
      </TouchableOpacity>
      <Text style = {mushroomScreenStyles.title}>{obj.name}</Text>
      <View style= {mushroomScreenStyles.imageContainer}>
        <Image style = {mushroomScreenStyles.image} source={ MushList.list[obj.index].image}/>
      </View>
      <View>
        <CategoryName text = "Где можно найти:"/> 
        <CategoryText text = {obj.zones} />
      </View>
      <View>
        <CategoryName text = "Семейство:"/>
        <CategoryText text = {obj.familie}/>
      </View>
      <View>
        <CategoryName text = "Красная книга:"/>
        <CategoryText text = {obj.redBook}/>
      </View>
      <View>
        <CategoryName text = "Съедобность:"/>
        <CategoryText text = {obj.eatable}/>
      </View>
      <View>
        <CategoryName text = "Карты:"/>
        <CategoryText text = {obj.gmapsLink}/>
      </View>
      <View>
        <CategoryName text = "Описание:"/>
        <CategoryText text = {obj.description}/>
      </View>
    </View>
  );
}

const CategoryName: React.FC<Props> = ({text}) => {
  return ( <Text style = {mushroomScreenStyles.categoryName}>{text}</Text>)
};
const CategoryText: React.FC<Props> = ({text}) => {
  return ( <Text style = {mushroomScreenStyles.categoryText}>{text}</Text>)
};


const MushroomView: React.FC<Props> = ({obj, onChange}) => { 
  return ( 
    <TouchableOpacity style = {mushroomStyles.postButton} onPress = {() => {
      currentMushroomIndex = obj.index;
      onChange ( "encyclopedia" );
    }}>
      <View style = {mushroomStyles.postContainer}>
          <Image style = {mushroomStyles.image} source={ MushList.list[obj.index].image}/>
        <View style = {mushroomStyles.titleContainer}>
          <Text style = {mushroomStyles.text}>{obj.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
};


 
const mushroomScreenStyles = StyleSheet.create ({
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
    height: "30%", 
    width: "100%", 
    borderRadius: 30,
    marginBottom: 20,
  },
  image: {
    width:"100%",
    height: "100%",
    borderRadius: 30,
  },
  closeButton: {
    display: "flex",
    position: "absolute",
    width:60,
    height: 60,
    borderRadius: 0,
    margin: 20,
  }
});

const mushroomStyles = StyleSheet.create({ 
  screen: {
    padding: 15,
    flexWrap: "wrap",
  },
  postButton: {
    width: 175,
    padding: 20,
    paddingLeft: 0,
    paddingBottom: 0,

  },
  postContainer: {
    backgroundColor: "#2f582e",
    width: "100%",
    height: 200,
    borderRadius: 40,
    direction: "row",
    justifyContent: "flex-end",
  },
  titleContainer: { 
    backgroundColor: "#725e37", 
    height:"30%",
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
  },
  text: {
    margin: 8,
    color: "white",
    textAlign: "center",
    fontSize: 18
  },
  image: {
    width: "100%",
    height: "70%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40, 
    //height: 10,
  }
});
