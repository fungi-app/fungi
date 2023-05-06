import {View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import React, {useState, useEffect} from 'react';
import { ScreenType } from "../App";
import { screens } from "../Screens";
import { StatusBarPad } from "./StatusBarPad";
import { useStateStore } from "../lib/store";
import { useTheme } from "../lib/theme";
import SearchIcon from "./icons/Search"
// import Animated from "react-native-reanimated";
// import color = module


export const TopBar: React.FC = (props) => {
  const theme = useTheme();
  const currentScreen = useStateStore((s) => s.currentScreen);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={styles.float}>
      <StatusBarPad style={{ backgroundColor: theme.secondaryBg }} />
      <View style={styles.wrapper}>
        <View style={[styles.textBar, { backgroundColor: theme.secondaryBg }]}>
          <Text style={[styles.text, { color: theme.text }]}>
            {screens[currentScreen].displayName}
          </Text>

          <View style={[styles.searchContainer, { backgroundColor: theme.metaBg }]}>

            {!isFocused && (
                <SearchIcon width={18} height={18} fill={theme.fadedText} />
            )}
            <TextInput
                style={isFocused ? { width: "80%", marginLeft: 10 } : {width: "94%"}}
                placeholder={ isFocused ? '' : "Поиск" }
                autoFocus={false}
                returnKeyType="search"
                placeholderTextColor={ theme.fadedText }
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            {isFocused && (
                <TouchableOpacity>
                  <Text style={{ color: theme.text, fontFamily: "Raleway_700Bold"}}>
                    {"Найти"}
                  </Text>
                </TouchableOpacity>
            )}
          </View>

        </View>
      </View>
    </View>
  );
};

export const TopBarPad: React.FC = () => (
  <>
    <StatusBarPad />
    <View style={{ height: styles.wrapper.height }} />
  </>
);

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
    height: 62,
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
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    marginVertical: 6,
    marginHorizontal: 4,
    borderRadius: 20,
    paddingHorizontal: 6,
    width: "95%",
  },
});
