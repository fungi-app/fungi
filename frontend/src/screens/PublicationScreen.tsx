import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../colors";
import { TopBarPad } from "../components/TopBar";
import { BottomMenuPad } from "../components/BottomMenu";
import { trpc } from "../lib/trpc";
import { news } from "./NewsScreen";

type Props = {
  storyId: string;
  onBack: () => void;
};

export const PublicationScreen: React.FC<Props> = ({ storyId, onBack }) => {
  // const story = trpc.publications.getById.useQuery({ id: storyId });
  const story = { data: news[0] };
  return (
    <View>
      <TopBarPad />
      {!story.data && <Text>Нет данных</Text>}
      {!!story.data && (
        <>
          <Text>Я публикация {story.data.title}</Text>
          <TouchableOpacity onPress={onBack} style={styles.closeButton}>
            <Text style={styles.closeText}>Назад</Text>
          </TouchableOpacity>
        </>
      )}
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
