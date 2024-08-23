import { Redirect } from "expo-router";
import { Text, View } from "react-native";
import {  SafeAreaView } from "react-native";

export default function Index() {
  return (<SafeAreaView style={{ flex: 1 }}>
    <Redirect href={'/Home'} />
    </SafeAreaView>)
}
