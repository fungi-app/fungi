import { View, Text, StyleSheet } from "react-native";
import { Mushroom, Family } from "@fungi/db";
import { Card } from "./Card";
import { useStateStore } from "../lib/store";
import { useTheme } from "../lib/theme";
import { EatableGradeIcon } from "./icons/Eatable";
import { IsRedBookedIcon } from "./icons/RedBooked";

type Props = {
  obj: Mushroom & { family: Family };
};

export const MushroomView: React.FC<Props> = (obj) => {
  const setSelectedMushroom = useStateStore((s) => s.setSelectedMushroom);
  const theme = useTheme();
  return (
    <Card
      id={obj.obj.name}
      onChange={() => setSelectedMushroom(obj.obj.id)}
      img={obj.obj.img}
    >
      <View>
        <Text style={[styles.family, { color: theme.secondary }]}>
          {/* {obj.obj.family.name} */}
        </Text>
        <Text style={[styles.name, { color: theme.text }]}>{obj.obj.name}</Text>
        <Text style={[styles.latineName, { color: theme.secondaryText }]}>
          {obj.obj.latinName}
        </Text>
      </View>
      <View style={styles.iconsWrapper}>
        <EatableGradeIcon
          grade={obj.obj.eatable}
          width={36}
          height={36}
          style={{ marginRight: 5 }}
          fill={theme.text}
        />
        <IsRedBookedIcon
          isRedBooked={obj.obj.redBooked}
          width={36}
          height={36}
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
  },
});
