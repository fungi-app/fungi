import { TouchableOpacity, Button, View, StyleSheet, ScrollView, Image, Text } from "react-native";
import styled from "styled-components/native"
import { Mushroom, getAllMushrooms } from "../db/db"
import MushList from '../db/mushrooms';
//import { Mushrooms } from "../db/mushrooms"

//getAllMushrooms ().map ( (m: Mushroom) => m.show() );


export const Encyclopedia: React.FC<Props> = (props) => {  
  let mushrooms = getAllMushrooms ( MushList.list );
  //console.log (Mushrooms)//Mushrooms.mushrooms)
  return (
    <ScrollView>
      {
        mushrooms.map ( (obj: Mushroom) => ( <MushroomView obj = {obj}/> )  )
      }
      <MushroomScreen obj = {mushrooms[0]}/>    
   </ScrollView>
  )
};

const MushroomScreen: React.FC<Props> = ({obj}) => { 
  return (
    <View style = {mushroomScreenStyles.screen}>
      <Text style = {mushroomScreenStyles.title}>{obj.name}</Text>
      <Image style = {mushroomScreenStyles.image} source={ MushList.list[obj.index].image}/>
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
  )
}

const CategoryName: React.FC<Props> = ({text}) => {
  return ( <Text style = {mushroomScreenStyles.categoryName}>{text}</Text>)
};
const CategoryText: React.FC<Props> = ({text}) => {
  return ( <Text style = {mushroomScreenStyles.categoryText}>{text}</Text>)
};


const MushroomView: React.FC<Props> = ({obj}) => { 
  return ( 
    <TouchableOpacity onPress = {() => alert ( "Hello world" )}>
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
  screen: {
    padding: 15,
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
  image: {
    height: 200, 
    borderRadius: 30,
    marginBottom: 20,
    borderColor: "#aaa"
  }
});

const mushroomStyles = StyleSheet.create({ 

  postContainer: {
    backgroundColor: "#2f582e",
    width: 165,
    height: 200,
    margin: 20,
    borderRadius: 30,
    flex: 1,
    direction: "row",
    justifyContent: "flex-end",
  },
  titleContainer: { 
    backgroundColor: "#725e37", 
    flex: 0.40,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    //paddingBottom: 3
  },
  text: {
    margin: 8,
    color: "white",
    textAlign: "center",
    fontSize: 18
  },
  image: {
    flex: 1,
    width: 165,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30, 
    //height: 10,
  }
});


//      {
//        mushrooms.map ( (obj: Mushroom) => (
//          <MushroomView obj = {obj}/>
//        ))
//      }
 
//
//
//
//
//
//
