import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const Map = () => {
  const origin = useSelector(selectOrigin);
  return (
    <MapView
      style={tw`flex-1`}
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lon,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
        {origin?.location && (
            <Marker
                coordinate={{
                    latitude: origin.location.lat,
                    longitude: origin.location.lon,
                }}
                title="Origin"
                description={origin.freeformAddress}
                identifier="origin"
            />
        )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
