import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import NavOptions from "../components/NavOptions";
import { TOMTOM_API_KEY } from "@env";
import AutoCompleteInput from "react-native-tomtom-autocomplete";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <AutoCompleteInput
          inputContainerStyle={{
            padding: 10,
            margin: 10,
          }}
          listItemsContainerStyle={{
            padding: 4,
            marginHorizontal: 4,
          }}
          inputProps={{
            placeholder: "Where From ?",
            fontSize: 18,
            returnKeyType: "search",
          }}
          onPress={(item) => {
            console.log("item", item);
            dispatch(
              setOrigin({
                location: item.position,
                address: item.freeformAddress,
              })
            );
          }}
          delay={200}
          bottomDivider
          tomtomOptions={{ key: TOMTOM_API_KEY }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
