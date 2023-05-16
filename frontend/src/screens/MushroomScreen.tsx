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
import { Mushroom } from "@fungi/db";
import { trpc } from "../lib/trpc";
import CloseIcon from "../components/icons/Close";
import { EatableGradeIcon } from "../components/icons/Eatable";
import { IsRedBookedIcon } from "../components/icons/RedBooked";
import { useTheme } from "../lib/theme";
import HelpIcon from "./../components/icons/Help";

type Props = {
  id: number;
  onClose: () => void;
};

export const MushroomScreen: React.FC<Props> = ({ id, onClose }) => {
  const theme = useTheme();
  // <ScrollView contentContainerStyle={{ flexGrow: 1 }} style = {mushroomStyles.screen}>
  const mushroom = trpc.mushrooms.getById.useQuery({ id });
  return (
    <View style={mushroomScreenStyles.screen}>
      <TouchableOpacity
        style={mushroomScreenStyles.closeButton}
        onPress={onClose}
      >
        {/* <Text style={mushroomScreenStyles.closeText}>X</Text> */}
        <CloseIcon fill={"#FFFFFF"} />
      </TouchableOpacity>
      {!mushroom.data && <Text>Ошибка</Text>}
      {!!mushroom.data && (
        <>
          <View style={mushroomScreenStyles.imageContainer}>
            <Image
              style={mushroomScreenStyles.image}
              source={require("../../assets/noimg.jpg")}
            />
          </View>

          <View
            style={[
              mushroomScreenStyles.titleContainer,
              { backgroundColor: theme.secondaryBg },
            ]}
          >
            <View style={mushroomScreenStyles.familyTitleContainer}>
              <Text
                style={[
                  mushroomScreenStyles.familyTitleText,
                  { color: theme.secondaryText },
                ]}
              >
                {mushroom.data.family.name}
              </Text>

              <Text
                style={[
                  mushroomScreenStyles.familyTitleLatinText,
                  { color: theme.secondaryText },
                ]}
              >
                ({mushroom.data.family.latinName})
              </Text>
            </View>

            <Text style={[mushroomScreenStyles.title, { color: theme.text }]}>
              {mushroom.data.name}
            </Text>

            <Text
              style={[
                mushroomScreenStyles.familyLatinText,
                { color: theme.secondaryText },
              ]}
            >
              {mushroom.data.latinName}
            </Text>
          </View>

          <View style={mushroomScreenStyles.contentContainer}>
            <Text
              style={[mushroomScreenStyles.familyName, { color: theme.text }]}
            >
              Семейство
            </Text>

            <View style={mushroomScreenStyles.familyContainer}>
              <Text
                style={[mushroomScreenStyles.familyText, { color: theme.text }]}
              >
                {mushroom.data.family.name}
              </Text>
              <Text
                style={[
                  mushroomScreenStyles.familyLatinText,
                  { color: theme.fadedText },
                ]}
              >
                ({mushroom.data.family.latinName})
              </Text>
            </View>

            <Text
              style={[
                mushroomScreenStyles.characteristicsName,
                { color: theme.text },
              ]}
            >
              Характеристики
            </Text>

            <View style={mushroomScreenStyles.characteristicsContainer}>
              <EatableGradeIcon
                fill={theme.text}
                grade={mushroom.data.eatable}
              />
              <Text
                style={[
                  mushroomScreenStyles.characteristicsText,
                  { color: theme.text },
                ]}
              >
                {
                  {
                    EATABLE: "Съедобен",
                    PARTIALLY_EATABLE: "Условно съедобен",
                    NOT_EATABLE: "Несъедобен",
                  }[mushroom.data.eatable]
                }
              </Text>
              <HelpIcon fill={theme.fadedText} height={14} width={14} />
            </View>

            <View style={mushroomScreenStyles.characteristicsContainer}>
              <IsRedBookedIcon
                fill={theme.text}
                isRedBooked={mushroom.data.redBooked}
              />
              <Text
                style={[
                  mushroomScreenStyles.characteristicsText,
                  { color: theme.text },
                ]}
              >
                {mushroom.data.redBooked
                  ? "В красной книге"
                  : "Нет в красной книге"}
              </Text>
            </View>
            <Text
              style={[
                mushroomScreenStyles.descriptionName,
                { color: theme.text },
              ]}
            >
              Описание
            </Text>
            <View style={mushroomScreenStyles.descriptionContainer}>
              <Text
                style={[
                  mushroomScreenStyles.descriptionText,
                  { color: theme.text },
                ]}
              >
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

const mushroomScreenStyles = StyleSheet.create({
  screen: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
  },
  titleContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    width: 340,
    height: 90,
    borderRadius: 100,
    marginBottom: 20,
    textAlign: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
    marginTop: 5,
    textAlign: "center",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    height: "100%",
    width: "90%",
  },

  familyContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  familyName: {
    fontWeight: "bold",
    fontSize: 18,
  },
  familyText: {
    fontSize: 15,
  },
  familyLatinText: {
    fontSize: 15,
    marginLeft: 5,
  },
  familyTitleContainer: {
    display: "flex",
    flexDirection: "row",
  },
  familyTitleText: {
    fontSize: 12,
  },
  familyTitleLatinText: {
    fontSize: 12,
    marginLeft: 5,
  },
  characteristicsName: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
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
  },
  descriptionName: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
  },
  descriptionContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 10,
    marginBottom: 40,
  },
  descriptionText: {
    fontSize: 15,
  },

  imageContainer: {
    height: 300,
    width: "100%",
    borderRadius: 0,
    marginBottom: 20,
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
