import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import AutoCompleteInput from "react-native-tomtom-autocomplete";
import { TOMTOM_API_KEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from '@react-navigation/native';

const NavigateCard = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning, Moni</Text>
      <View style={tw`flex-shrink`}>
        <View>
          <AutoCompleteInput
            styles={{
              container: {
                backgroundColor: "white",
                paddingTop: 20,
                flex: 0,
              },
            }}
            inputContainerStyle={{
              paddingHorizontal: 20,
              paddingBottom: 0,
            }}
            listItemsContainerStyle={{
              padding: 4,
              marginHorizontal: 4,
            }}
            onPress={(item) => {
                dispatch(setDestination({
                    location : item.position,
                    description : item.freeformAdress,
                }))
                    
                navigation.navigate('RideOptionsCard')
            }}
            inputProps={{
              placeholder: "Where to ?",
              paddingLeft: 10,
              fontSize: 18,
              backgroundColor: "#DDDDDF",
              borderRadius: 0,
              returnKeyType: "search",
            }}
            placeholder="Search for places"
            delay={100}
            tomtomOptions={{ key: TOMTOM_API_KEY }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const styles = StyleSheet.create({});
