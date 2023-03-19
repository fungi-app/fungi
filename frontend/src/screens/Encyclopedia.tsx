import { View, StyleSheet, ScrollView } from "react-native";
import { Mushroom, getAllMushrooms } from "../db/db";
import MushList from "../db/mushrooms";
import { useState } from "react";
import { MushroomScreen } from "./MushroomScreen";
import { MushroomView } from "../components/MushroomView";
import { TopBarPad } from "../components/TopBar";
import { BottomMenuPad } from "../components/BottomMenu";
import { useStateStore } from "../lib/store";

//import { Mushrooms } from "../db/mushrooms"

export const Encyclopedia: React.FC = () => {
  let mushrooms = getAllMushrooms(MushList.list);

  const selectedMushroom = useStateStore((s) => s.selectedMushroom);
  const setSelectedMushroom = useStateStore((s) => s.setSelectedMushroom);

  return (
    <ScrollView>
      <TopBarPad />
      {!selectedMushroom && (
        <View style={styles.screen}>
          {mushrooms.map((obj) => (
            <MushroomView
              obj={obj}
              onChange={(id) => setSelectedMushroom(id)}
            />
          ))}
        </View>
      )}
      {!!selectedMushroom && (
        <MushroomScreen
          obj={mushrooms[selectedMushroom]}
          onClose={() => setSelectedMushroom(null)}
        />
      )}
      <BottomMenuPad />
    </ScrollView>
  );
};

// const MushroomView: React.FC<Props> = ({ obj, onChange }) => {
//   return (
//     <TouchableOpacity
//       wrap
//       style={mushroomStyles.postButton}
//       onPress={() => {
//         onChange({ screen: "encyclopedia", mushroomId: obj.index });
//       }}
//     >
//       <View style={mushroomStyles.postContainer}>
//         <Image
//           style={mushroomStyles.image}
//           source={MushList.list[obj.index].image}
//         />
//         <View style={mushroomStyles.titleContainer}>
//           <Text style={mushroomStyles.text}>{obj.name}</Text>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
// };

const styles = StyleSheet.create({
  screen: {
    padding: 15,
    flex: 1,
    height: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
