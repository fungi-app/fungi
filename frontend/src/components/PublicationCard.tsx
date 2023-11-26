import { Text, StyleSheet } from "react-native";
import type { Image, User } from "@fungi/db";
import { Card } from "./Card";
import { useStateStore } from "../lib/store";
import { useTheme } from "../lib/theme";
import { loadImage } from "../lib/image";

type Props = {
  publication: {
    title: string;
    id: string;
    image: Image | null;
    author: User;
  };
};

export const PublicationCard: React.FC<Props> = ({ publication }) => {
  const setSelectedStory = useStateStore((s) => s.setSelectedNewsStory);
  const theme = useTheme();
  return (
    <Card
      onPress={() => setSelectedStory(publication.id)}
      img={loadImage(publication.image)}
    >
      <Text style={[styles.text, { color: theme.text }]}>
        {publication.title}
      </Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 18,
    fontFamily: "Raleway_700Bold",
  },
});
