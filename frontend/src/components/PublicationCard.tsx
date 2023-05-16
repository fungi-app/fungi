import { Text, StyleSheet } from "react-native";
import type { Publication } from "@fungi/db";
import { Card } from "./Card";
import { useStateStore } from "../lib/store";
import { useTheme } from "../lib/theme";

type Props = { publication: Publication };

export const PublicationCard: React.FC<Props> = ({ publication }) => {
  const setSelectedStory = useStateStore((s) => s.setSelectedNewsStory);
  const theme = useTheme();
  return (
    <Card
      onPress={() => setSelectedStory(publication.id)}
      // img={publication.img}
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
