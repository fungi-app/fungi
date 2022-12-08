import {
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Text,
} from "react-native";

type News = {
  name: string;
  link: string;
  image: string;
};

export const news: News[] = [
  {
    name: "Новость",
    link: "Сыллка",
    image:
      "https://cdn.discordapp.com/attachments/394865284978049026/1048687467261333584/lisichka.jpg",
  },
  {
    name: "Новость",
    link: "Сыллка",
    image:
      "https://cdn.discordapp.com/attachments/394865284978049026/1048687467261333584/lisichka.jpg",
  },
  {
    name: "Новость",
    link: "Сыллка",
    image:
      "https://cdn.discordapp.com/attachments/394865284978049026/1048687467261333584/lisichka.jpg",
  },
  {
    name: "Новость",
    link: "Сыллка",
    image:
      "https://cdn.discordapp.com/attachments/394865284978049026/1048687467261333584/lisichka.jpg",
  },
  {
    name: "Новость",
    link: "Сыллка",
    image:
      "https://cdn.discordapp.com/attachments/394865284978049026/1048687467261333584/lisichka.jpg",
  },
];

type Props = {
  data: News[];
};

export const NewsScreen: React.FC<Props> = (props) => {
  return (
    <ScrollView>
      <View>
        {props.data.map((nw, i) => (
          <View key={i} style={styles.card}>
            <ImageBackground source={{ uri: nw.image }}>
              <View>
                <Text>{nw.name}</Text>
              </View>
            </ImageBackground>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    height: "25%",
  },
});
