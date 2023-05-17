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
import { Publication } from "@fungi/db";

export const news: Publication[] = [
  {
    title: "Новость",
    id: "ASddkjhsdfiuskhgfi",
    // image: require("../../assets/lisichka.jpeg"),
    content: "content",
    authorCuid: "asdf",
  },
];

export const NewsScreen: React.FC = (props) => {
  const selectedNewsStory = useStateStore((s) => s.selectedNewsStory);
  const setSelectedNewsStory = useStateStore((s) => s.setSelectedNewsStory);
  return (
    <View style={styles.wrapper}>
      {!selectedNewsStory ? (
        <FlatList
          data={news}
          ListHeaderComponent={TopBarPad}
          ListFooterComponent={BottomMenuPad}
          renderItem={({ item }) => (
            <PublicationCard key={item.id} publication={item} />
          )}
        />
      ) : (
        <PublicationScreen
          storyId={selectedNewsStory}
          onBack={() => setSelectedNewsStory(null)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
  },
});
