import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  useWindowDimensions,
} from "react-native";
import { colors } from "../colors";
import { TopBarPad } from "../components/TopBar";
import { BottomMenuPad } from "../components/BottomMenu";
import { trpc } from "../lib/trpc";
import { FungiMarkdown } from "../lib/markdown";
import { useTheme } from "../lib/theme";
import CloseIcon from "../components/icons/Close";
import { loadImage } from "../lib/image";

type Props = {
  storyId: string;
  onBack: () => void;
};

export const PublicationScreen: React.FC<Props> = ({ storyId, onBack }) => {
  const story = trpc.publications.getById.useQuery({ id: storyId });
  const theme = useTheme();
  const { width } = useWindowDimensions();
  // const story = { data: news[0] };
  return (
    <ScrollView>
      <TopBarPad />
      {!story.data && <Text>Нет данных</Text>}
      {!!story.data && (
        <>
          <View style={styles.imageContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={onBack}>
              {/* <Text style={mushroomScreenStyles.closeText}>X</Text> */}
              <CloseIcon fill={"#FFFFFF"} />
            </TouchableOpacity>
            <Image
              style={styles.image}
              source={
                story.data.image
                  ? loadImage(story.data.image)
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
              <Text style={[styles.title, { color: theme.text }]}>
                {story.data.title}
              </Text>
            </View>
          </View>

          <FungiMarkdown style={styles.contentWrap}>
            {story.data.content.replaceAll("\\n", "\n")}
          </FungiMarkdown>
        </>
      )}
      <BottomMenuPad />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentWrap: {
    margin: 20,
    marginTop: 40,
  },

  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 340,
    height: 90,
    borderRadius: 100,
    position: "absolute",
    bottom: -45,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 0,
    marginTop: 0,
    textAlign: "center",
    fontFamily: "Raleway_700Bold",
    paddingVertical: 3,
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
});
