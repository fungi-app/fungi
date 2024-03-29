import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { ScreenType } from "../App";
import { screens } from "../Screens";
import { StatusBarPad } from "./StatusBarPad";
import { useStateStore } from "../lib/store";
import { useTheme } from "../lib/theme";
import SearchIcon from "./icons/Search";
// import Animated from "react-native-reanimated";
// import color = module

export const TopBar: React.FC = (props) => {
  const theme = useTheme();
  const currentScreen = useStateStore((s) => s.currentScreen);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchBar = useRef<TextInput>(null);
  const [searchText, setSearchText] = useState("");
  const { width } = useWindowDimensions();
  return (
    <View style={styles.float}>
      <StatusBarPad style={{ backgroundColor: theme.secondaryBg }} />
      <View style={styles.wrapper}>
        <View style={[styles.textBar, { backgroundColor: theme.secondaryBg }]}>
          <Text style={[styles.text, { color: theme.text }]}>
            {screens[currentScreen].displayName}
          </Text>
        </View>
      </View>
      {!!screens[currentScreen].search && (
        <View
          style={[styles.searchWrapper, { backgroundColor: theme.secondaryBg }]}
        >
          <View
            style={[styles.searchContainer, { backgroundColor: theme.metaBg }]}
          >
            {!isSearchFocused && (
              <SearchIcon width={18} height={18} fill={theme.fadedText} />
            )}
            <TextInput
              style={[
                styles.textInput,
                {
                  color: theme.text,
                  paddingRight: isSearchFocused ? 15 : 0,
                  paddingLeft: isSearchFocused ? 0 : 5,
                  maxWidth: width - (60 + (isSearchFocused ? 60 : 0)),
                },
              ]}
              placeholder={isSearchFocused ? "" : "Поиск"}
              autoFocus={false}
              returnKeyType="search"
              placeholderTextColor={theme.fadedText}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              ref={searchBar}
              onChangeText={(newText) => setSearchText(newText)}
              defaultValue={searchText}
            />
            {isSearchFocused && (
              <View
                style={[
                  styles.searchButtonWrapper,
                  { borderLeftColor: theme.secondaryBg },
                ]}
              >
                <TouchableOpacity
                  disabled={!searchText}
                  onPress={() => {
                    let srch = screens[currentScreen].search;
                    if (!srch) return;
                    if (!searchText) return;
                    srch.onSearch(searchText);
                    searchBar.current?.blur();
                  }}
                  style={{ opacity: !searchText ? 0.5 : 1 }}
                >
                  <Text
                    style={{ color: theme.text, fontFamily: "Raleway_700Bold" }}
                  >
                    Найти
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

export const TopBarPad: React.FC = () => {
  const currentScreen = useStateStore((s) => s.currentScreen);
  return (
    <>
      <StatusBarPad />
      <View
        style={{
          height:
            styles.wrapper.height +
            (!screens[currentScreen].search ? 0 : styles.searchWrapper.height),
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  float: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 42,
  },
  icon: {
    marginRight: 0,
  },
  textBar: {
    flex: 1,
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  text: {
    fontFamily: "Raleway_700Bold",
    fontSize: 18,
  },
  searchWrapper: {
    height: 42,
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 20,
    paddingHorizontal: 15,
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  textInput: {
    fontFamily: "Raleway_500Medium",
    flexGrow: 1,
    // width: "100%",
    maxWidth: "100%",
  },
  searchButtonWrapper: {
    borderLeftWidth: 2,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    paddingLeft: 13,
    flexShrink: 0,
    width: 60,
  },
});
