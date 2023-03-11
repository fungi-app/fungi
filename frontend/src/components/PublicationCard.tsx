import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { colors } from "../colors";
import { type News } from "../screens/NewsScreen";

type Props = {
  item: News;
  onPress: () => void;
};

export const PublicationCard: React.FC<Props> = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.postButton} onPress={onPress}>
      <ImageBackground style={styles.card} source={item.image}>
        <View style={styles.blockfortext}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  flat: {},
  card: {
    width: "100%",
    height: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginVertical: 10,
    overflow: "hidden",
  },
  blockfortext: {
    backgroundColor: colors.bg,
    alignItems: "center",
    width: "50%",
    padding: 6,
    borderRadius: 20,
  },
  text: {
    color: colors.secondary,
  },
  wrapper: {
    paddingHorizontal: "2.5%",
  },
  postButton: {
    padding: 10,
    paddingBottom: 0,
  },
});
