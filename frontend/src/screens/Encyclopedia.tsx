import { View, StyleSheet, ScrollView, Text } from "react-native";
import { MushroomScreen } from "./MushroomScreen";
import { MushroomView } from "../components/MushroomView";
import { TopBarPad } from "../components/TopBar";
import { BottomMenuPad } from "../components/BottomMenu";
import { useStateStore } from "../lib/store";
import { trpc } from "../lib/trpc";

//import { Mushrooms } from "../db/mushrooms"

export const Encyclopedia: React.FC = () => {
  const selectedMushroom = useStateStore((s) => s.selectedMushroom);
  const setSelectedMushroom = useStateStore((s) => s.setSelectedMushroom);

  const mushrooms = trpc.mushrooms.getPaginated.useQuery({
    page: 0,
    perPage: 100,
  });

  return (
    <ScrollView>
      <TopBarPad />
      {!selectedMushroom && (
        <View style={styles.screen}>
          {!mushrooms.data && (
            <Text style={{ fontFamily: "Raleway_500Medium" }}>
              Нет подключения
            </Text>
          )}
          {!!mushrooms.data &&
            mushrooms.data.map((obj) => (
              <MushroomView
                key={obj.id}
                obj={obj}
                onChange={(id) => setSelectedMushroom(id)}
              />
            ))}
        </View>
      )}
      {!!selectedMushroom && (
        <MushroomScreen
          id={selectedMushroom}
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
