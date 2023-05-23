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
import { trpc } from "../lib/trpc";

export const NewsScreen: React.FC = (props) => {
  const selectedNewsStory = useStateStore((s) => s.selectedNewsStory);
  const setSelectedNewsStory = useStateStore((s) => s.setSelectedNewsStory);
  const publications = trpc.publications.getPaginated.useQuery({
    perPage: 1000,
    page: 0,
  });
  return !selectedNewsStory ? (
    <View style={styles.wrapper}>
      {!!publications.data && (
        <FlatList
          data={publications.data}
          ListHeaderComponent={TopBarPad}
          ListFooterComponent={BottomMenuPad}
          renderItem={({ item }) => (
            <PublicationCard key={item.id} publication={item} />
          )}
        />
      )}
    </View>
  ) : (
    <PublicationScreen
      storyId={selectedNewsStory}
      onBack={() => setSelectedNewsStory(null)}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
  },
});
