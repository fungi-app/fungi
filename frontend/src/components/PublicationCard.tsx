import { Text, StyleSheet } from "react-native";
import { Mushroom } from "@fungi/db";
import { Card } from "./Card";
import { useStateStore } from "../lib/store";
import { useTheme } from "../lib/theme";

// type Props = { obj: Mushroom };

export const PublicationCard: React.FC<Props> = (obj) => {
  const setSelectedMushroom = useStateStore((s) => s.setSelectedMushroom);
  const theme = useTheme();
  return (
    <Card
      id={obj.obj.name}
      onChange={() => setSelectedMushroom(obj.obj.id)}
      img={obj.obj.img}
    >
      <Text style={[styles.text, { color: theme.text }]}>{obj.obj.name}</Text>
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
