import { View, Text, StyleSheet } from "react-native";
import { Mushroom, Family, Image } from "@fungi/db";
import { Card } from "./Card";
import { useStateStore } from "../lib/store";
import { useTheme } from "../lib/theme";
import { EatableGradeIcon } from "./icons/Eatable";
import { IsRedBookedIcon } from "./icons/RedBooked";
import { loadImage } from "../lib/image";

type Props = {
  mushroom: Mushroom & { family: Family; images: Image[] };
};

export const MushroomCard: React.FC<Props> = (props) => {
  const setSelectedMushroom = useStateStore((s) => s.setSelectedMushroom);
  const theme = useTheme();
  // console.log(loadImage(props.mushroom.images[0]));
  return (
    <Card
      onPress={() => setSelectedMushroom(props.mushroom.id)}
      img={loadImage(props.mushroom.images[0])}
    >
      <View>
        <Text style={[styles.family, { color: theme.secondary }]}>
          {props.mushroom.family.name} ({props.mushroom.family.latinName})
        </Text>
        <Text style={[styles.name, { color: theme.text }]}>
          {props.mushroom.name}
        </Text>
        <Text style={[styles.latineName, { color: theme.secondaryText }]}>
          {props.mushroom.latinName}
        </Text>
      </View>
      <View style={styles.iconsWrapper}>
        <EatableGradeIcon
          grade={props.mushroom.eatable}
          width={28}
          height={28}
          style={{ marginRight: 5 }}
          fill={theme.text}
        />
        <IsRedBookedIcon
          isRedBooked={props.mushroom.redBooked}
          width={28}
          height={28}
          fill={theme.text}
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  family: {
    fontFamily: "Raleway_800ExtraBold",
    fontSize: 12,
    marginBottom: 5,
  },
  name: {
    fontSize: 18,
    margin: 0,
    fontFamily: "Raleway_700Bold",
    marginBottom: 5,
  },
  latineName: {
    fontFamily: "Raleway_700Bold",
    marginBottom: 5,

    fontSize: 14,
  },
  iconsWrapper: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 5,
  },
});
