import {
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Text,
  FlatList,
} from "react-native";
import { colors } from "../colors";

type News = {
  name: string;
  link: string;
  image: any;
};

export const news: News[] = [
  {
    name: "Новость",
    link: "Сыллка",
    image: require("../../assets/lisichka.jpeg"),
  },
  {
    name: "Новость",
    link: "Сыллка",
    image: require("../../assets/lisichka.jpeg"),
  },
  {
    name: "Новость",
    link: "Сыллка",
    image: require("../../assets/lisichka.jpeg"),
  },
  {
    name: "Новость",
    link: "Сыллка",
    image: require("../../assets/lisichka.jpeg"),
  },
  {
    name: "Новость",
    link: "Сыллка",
    image: require("../../assets/lisichka.jpeg"),
  },
];

type Props = {
  data: News[];
};

export const NewsScreen: React.FC<Props> = (props) => {
  return (
    // <ScrollView>
    //   <View style={styles.wrapper}>
    //     {props.data.map((nw, i) => (
    //       <ImageBackground key={i} style={styles.card} source={nw.image}>
    //         <View>
    //           <Text>{nw.name}</Text>
    //         </View>
    //       </ImageBackground>
    //     ))}
    //   </View>
    // </ScrollView>
    <View style={styles.wrapper}>
      <FlatList
        style={styles.flat}
        data={props.data}
        renderItem={({ item }) => (
          <ImageBackground style={styles.card} source={item.image}>
            <View style={styles.blockfortext}>
              <Text style={styles.text}>{item.name}</Text>
            </View>
          </ImageBackground>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flat: {
  },
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
});
