import React from "react";
import { StyleSheet, View } from "react-native";

// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

const styles = StyleSheet.create({
  container: {
    height: 400,
    width: 400,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export const Maps = () => (
  <View style={styles.container}>
    {/* <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    ></MapView> */}
  </View>
);
