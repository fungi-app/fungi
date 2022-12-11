import { Button, View, StyleSheet, ScrollView, Image, Text, } from "react-native";
import { Mushroom, getAllMushrooms } from "../db/db"
import MushList from '../db/mushrooms';
//import { Mushrooms } from "../db/mushrooms"

//getAllMushrooms ().map ( (m: Mushroom) => m.show() );

export const MushroomView: React.FC<Props> = ({title, imageSource}) => { 
  return ( 
      <View style = {mushroomStyles.postContainer}>
          <Image style = {mushroomStyles.image} source={imageSource}/>
        <View style = {mushroomStyles.titleContainer}>
          <Text style = {mushroomStyles.text}>{title}</Text>
        </View>
      </View>
  )
};

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


export const Encyclopedia: React.FC<Props> = (props) => {  
  let mushrooms = getAllMushrooms ( MushList.list );
  //console.log (Mushrooms)//Mushrooms.mushrooms)
  return (
    <ScrollView>
      {
        mushrooms.map ( (obj: Mushroom) => (
          <MushroomView title = {obj.name} imageSource = { MushList.list[obj.index].image }/>
        ))
      }
    </ScrollView>
  )
};

