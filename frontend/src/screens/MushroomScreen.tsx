import {
  TouchableOpacity,
  Button,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  useWindowDimensions,
} from "react-native";
import MushList from "../db/mushrooms";
import { colors } from "../colors";
import { Mushroom } from "@fungi/db";
import { trpc } from "../lib/trpc";
import CloseIcon from "../components/icons/Close";
import { EatableGradeIcon } from "../components/icons/Eatable";
import { IsRedBookedIcon } from "../components/icons/RedBooked";
import { useTheme } from "../lib/theme";
import HelpIcon from "./../components/icons/Help";
import { loadImage } from "../lib/image";

type Props = {
  id: number;
  onClose: () => void;
};

export const MushroomScreen: React.FC<Props> = ({ id, onClose }) => {
  const theme = useTheme();
  const { width } = useWindowDimensions();

  // <ScrollView contentContainerStyle={{ flexGrow: 1 }} style = {mushroomStyles.screen}>
  const mushroom = trpc.mushrooms.getById.useQuery({ id });
  return (
    <View style={styles.screen}>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        {/* <Text style={mushroomScreenStyles.closeText}>X</Text> */}
        <CloseIcon fill={"#FFFFFF"} />
      </TouchableOpacity>
      {!mushroom.data && <Text>Ошибка</Text>}
      {!!mushroom.data && (
        <>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={
                mushroom.data.images[0]
                  ? loadImage(mushroom.data.images[0])
                  : require("../../assets/noimg.jpg")
              }
            />
            <View
              style={[
                styles.titleContainer,
                {
                  backgroundColor: theme.secondaryBg,
                  marginHorizontal: (width - styles.titleContainer.width) / 2,
                },
              ]}
            >
              <View style={styles.familyTitleContainer}>
                <Text
                  style={[
                    styles.familyTitleText,
                    { color: theme.secondaryText },
                  ]}
                >
                  {mushroom.data.family.name}
                </Text>

                <Text
                  style={[
                    styles.familyTitleLatinText,
                    { color: theme.secondaryText },
                  ]}
                >
                  ({mushroom.data.family.latinName})
                </Text>
              </View>

              <Text style={[styles.title, { color: theme.text }]}>
                {mushroom.data.name}
              </Text>

              <Text
                style={[styles.familyLatinText, { color: theme.secondaryText }]}
              >
                {mushroom.data.latinName}
              </Text>
            </View>
          </View>

          <View style={styles.contentContainer}>
            <Text style={[styles.familyName, { color: theme.text }]}>
              Семейство
            </Text>

            <View style={styles.familyContainer}>
              <Text style={[styles.familyText, { color: theme.text }]}>
                {mushroom.data.family.name}
              </Text>
              <Text
                style={[styles.familyLatinText, { color: theme.fadedText }]}
              >
                ({mushroom.data.family.latinName})
              </Text>
            </View>

            <Text style={[styles.characteristicsName, { color: theme.text }]}>
              Характеристики
            </Text>

            <View style={styles.characteristicsContainer}>
              <EatableGradeIcon
                fill={theme.text}
                grade={mushroom.data.eatable}
                width={36}
                height={36}
              />
              <Text style={[styles.characteristicsText, { color: theme.text }]}>
                {
                  {
                    EATABLE: "Съедобен",
                    PARTIALLY_EATABLE: "Условно съедобен",
                    NOT_EATABLE: "Несъедобен",
                  }[mushroom.data.eatable]
                }
              </Text>
              {/* <HelpIcon fill={theme.fadedText} height={18} width={18} /> */}
            </View>

            <View style={styles.characteristicsContainer}>
              <IsRedBookedIcon
                fill={theme.text}
                isRedBooked={mushroom.data.redBooked}
                width={36}
                height={36}
              />
              <Text style={[styles.characteristicsText, { color: theme.text }]}>
                {mushroom.data.redBooked
                  ? "В красной книге"
                  : "Нет в красной книге"}
              </Text>
            </View>
            <Text style={[styles.descriptionName, { color: theme.text }]}>
              Описание
            </Text>
            <View style={styles.descriptionContainer}>
              <Text style={[styles.descriptionText, { color: theme.text }]}>
                {mushroom.data.description}
              </Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
};
//

const styles = StyleSheet.create({
  screen: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 340,
    height: 90,
    borderRadius: 100,
    position: "absolute",
    bottom: -45,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 0,
    marginTop: 0,
    textAlign: "center",
    fontFamily: "Raleway_700Bold",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    height: "100%",
    width: "90%",
    marginTop: 45,
  },
  familyContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  familyName: {
    fontFamily: "Raleway_700Bold",
    fontSize: 18,
  },
  familyText: {
    fontSize: 15,
    fontFamily: "Raleway_700Bold",
  },
  familyLatinText: {
    fontSize: 15,
    marginLeft: 5,
    marginBottom: 10,
    fontFamily: "Raleway_700Bold",
  },
  familyTitleContainer: {
    display: "flex",
    marginTop: 10,
    flexDirection: "row",
  },
  familyTitleText: {
    fontSize: 12,
    fontFamily: "Raleway_800ExtraBold",
  },
  familyTitleLatinText: {
    fontSize: 12,
    marginLeft: 5,
    fontFamily: "Raleway_800ExtraBold",
  },
  characteristicsName: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
    fontFamily: "Raleway_700Bold",
  },
  characteristicsContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },
  characteristicsText: {
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    fontFamily: "Raleway_600SemiBold",
  },
  descriptionName: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
    fontFamily: "Raleway_700Bold",
  },
  descriptionContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 10,
    marginBottom: 40,
  },
  descriptionText: {
    fontSize: 15,
    fontFamily: "Raleway_500Medium",
  },

  imageContainer: {
    height: 300,
    width: "100%",
    borderRadius: 0,
    marginBottom: 20,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  closeButton: {
    position: "absolute",
    left: "3%",
    width: 40,
    height: 40,
    justifyContent: "center",
    marginTop: 20,
    zIndex: 1000,
  },
  closeText: {
    color: "#fff",
    textAlign: "center",
    fontWidth: "bold",
    fontSize: 15,
  },
});
