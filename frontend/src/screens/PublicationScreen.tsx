import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { type News } from "../screens/NewsScreen";
import { colors } from "../colors";
import { TopBarPad } from "../components/TopBar";
import { BottomMenuPad } from "../components/BottomMenu";

type Props = {
  item: News;
  onBack: () => void;
};

export const PublicationScreen: React.FC<Props> = ({ item, onBack }) => {
  return (
    <View>
      <TopBarPad />
      <Text>Я публикация {item.id}</Text>
      <TouchableOpacity onPress={onBack} style={styles.closeButton}>
        <Text style={styles.closeText}>Назад</Text>
      </TouchableOpacity>
      <BottomMenuPad />
    </View>
  );
};

const styles = StyleSheet.create({
  closeText: {
    color: "#fff",
    textAlign: "center",
    fontWidth: "bold",
    fontSize: 15,
  },
  closeButton: {
    width: "100%",
    height: 40,
    borderRadius: 30,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    marginTop: 20,
  },
});
