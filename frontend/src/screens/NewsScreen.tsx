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
import { useStateStore } from "../lib/store";

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

export const NewsScreen: React.FC = (props) => {
  const selectedNewsStory = useStateStore((s) => s.selectedNewsStory);
  const setSelectedNewsStory = useStateStore((s) => s.setSelectedNewsStory);
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
      {!selectedNewsStory ? (
        <FlatList
          data={news}
          ListHeaderComponent={TopBarPad}
          ListFooterComponent={BottomMenuPad}
          renderItem={({ item }) => (
            <PublicationCard
              key={item.id}
              item={item}
              onPress={() => setSelectedNewsStory(item.id)}
            />
          )}
        />
      ) : (
        <PublicationScreen
          item={news[selectedNewsStory]}
          onBack={() => setSelectedNewsStory(null)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
});
