import {
  TouchableOpacity,
  Button,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
} from "react-native";
import MushList from "../db/mushrooms";
import { colors } from "../colors";

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

export const MushroomScreen: React.FC<Props> = ({ obj, onChange }) => {
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
        <Text style={mushroomScreenStyles.categoryName}>Где можно найти:</Text>
        <Text style={mushroomScreenStyles.categoryText}>{obj.zones}</Text>
      </View>
      <View>
        <Text style={mushroomScreenStyles.categoryName}>Семейство:</Text>
        <Text style={mushroomScreenStyles.categoryText}>{obj.familie}</Text>
      </View>
      <View>
        <Text style={mushroomScreenStyles.categoryName}>Красная книга:</Text>
        <Text style={mushroomScreenStyles.categoryText}>{obj.redBook}</Text>
      </View>
      <View>
        <Text style={mushroomScreenStyles.categoryName}>Съедобность:</Text>
        <Text style={mushroomScreenStyles.categoryText}>{obj.eatable}</Text>
      </View>
      <View>
        <Text style={mushroomScreenStyles.categoryName}>Карты:</Text>
        <Text style={mushroomScreenStyles.categoryText}>{obj.gmapsLink}</Text>
      </View>
      <View>
        <Text style={mushroomScreenStyles.categoryName}>Описание:</Text>
        <Text style={mushroomScreenStyles.categoryText}>{obj.description}</Text>
      </View>
      <TouchableOpacity
        style={mushroomScreenStyles.closeButton}
        onPress={() => {
          onChange({ screen: "encyclopediaView", mushroomId: NaN });
        }}
      >
        <Text style={mushroomScreenStyles.closeText}>Назад</Text>
      </TouchableOpacity>
    </View>
  );
};
//

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
