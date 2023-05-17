import { View, StyleSheet, Pressable, Animated, Easing } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "../../lib/theme";
import { useEffect, useRef, useState } from "react";

type SwitchProps = {
  isOn: boolean;
  onChange: (v: boolean) => unknown;
};

export const Switch: React.FC<SwitchProps> = (props) => {
  const theme = useTheme();

  const translation = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.spring(translation, {
      toValue: props.isOn ? 30 : 0,
      useNativeDriver: true,
      bounciness: 15,
      speed: 100,
    }).start();
  }, [translation, props.isOn]);

  return (
    <Pressable onPress={() => props.onChange(!props.isOn)}>
      <View
        style={[
          styles.switchBody,
          { backgroundColor: props.isOn ? theme.primary : theme.secondary },
        ]}
      >
        <Animated.View
          style={[
            styles.switchHandle,
            {
              backgroundColor: theme.metaBg,
              transform: [{ translateX: translation }],
            },
          ]}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  switchBody: {
    width: 60,
    height: 30,
    borderRadius: 1000,
  },
  switchHandle: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});
