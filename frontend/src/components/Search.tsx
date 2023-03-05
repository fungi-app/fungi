import { TextInput, TouchableOpacity, Button, View, StyleSheet, ScrollView, Image, Text } from "react-native";
import { Mushroom, getAllMushrooms } from "../db/db";
import MushList from '../db/mushrooms';


export const Search: React.FC<Props> = (props) => {  

  let mushrooms = getAllMushrooms ( MushList.list );

  return (
    <View style = {styles.screen}>
      <ScrollView>
        <View>
          <Text>just item</Text>
        </View>
      </ScrollView>
      <TextInput
        style = {styles.textInput}
        placeholder="Я хочу найти..."  
      />
    </View>
  )
};

const styles = StyleSheet.create({ 
  screen: {
    flex: 1,
    height: "100%",
  },
  textInput: { 
    display: "flex",
    backgroundColor: "#E3E3E3",
    height: 45,
    borderRadius: 30,
    margin: 30,
  }
})
