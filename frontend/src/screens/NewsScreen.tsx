import {
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Text,
  FlatList,
} from "react-native";
import { colors } from "../colors";
import { PublicationCard } from "../components/PublicationCard";
import { useState } from "react";
import { PublicationScreen } from "./PublicationScreen";
import { TopBarPad } from "../components/TopBar";
import { BottomMenuPad } from "../components/BottomMenu";

export type News = {
  name: string;
  id: number;
  image: any;
};

export const news: News[] = [
  {
    name: "Новость",
    id: 1,
    image: require("../../assets/lisichka.jpeg"),
  },
  {
    name: "Новость",
    id: 2,
    image: require("../../assets/lisichka.jpeg"),
  },
  {
    name: "Новость",
    id: 1,
    image: require("../../assets/lisichka.jpeg"),
  },
  {
    name: "Новость",
    id: 1,
    image: require("../../assets/lisichka.jpeg"),
  },
  {
    name: "Новость",
    id: 1,
    image: require("../../assets/lisichka.jpeg"),
  },
];

type Props = {
  data: News[];
};

export const NewsScreen: React.FC<Props> = (props) => {
  const [screen, setScreen] = useState<{
    screen: "publication" | "news";
    publicationId: number;
  }>({
    screen: "news",
    publicationId: NaN,
  });
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

    // <View style={styles.wrapper}>
    //   <FlatList
    //     data={props.data}
    //     renderItem={({ item }) => (
    //       <PublicationCard item={item}></PublicationCard>
    //     )}
    //   />
    // </View>

    <View style={styles.wrapper}>
      {screen.screen === "news" ? (
        <FlatList
          data={props.data}
          ListHeaderComponent={TopBarPad}
          ListFooterComponent={BottomMenuPad}
          renderItem={({ item }) => (
            <PublicationCard
              item={item}
              onPress={() =>
                setScreen({ screen: "publication", publicationId: item.id })
              }
            />
          )}
        />
      ) : (
        <PublicationScreen
          item={props.data[screen.publicationId]}
          onBack={() => setScreen({ screen: "news", publicationId: NaN })}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
});
