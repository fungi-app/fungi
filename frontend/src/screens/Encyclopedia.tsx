import { View, StyleSheet, ScrollView } from "react-native";
import { Mushroom, getAllMushrooms } from "../db/db";
import MushList from "../db/mushrooms";
import { useState } from "react";
import { MushroomScreen } from "./MushroomScreen";
import { MushroomView } from "../components/MushroomView";

//import { Mushrooms } from "../db/mushrooms"

export const Encyclopedia: React.FC = () => {
  let mushrooms = getAllMushrooms(MushList.list);
  const [screen, setScreen] = useState({ screen: "mushroom", mushroomId: NaN });
  return (
    <ScrollView>
      {isNaN(screen.mushroomId) ? (
        <View style={styles.screen}>
          {mushrooms.map((obj: Mushroom) => (
            <MushroomView obj={obj} onChange={setScreen} />
          ))}
        </View>
      ) : (
        <MushroomScreen
          obj={mushrooms[screen.mushroomId]}
          onChange={setScreen}
        />
      )}
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
    paddingBottom: 150,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
