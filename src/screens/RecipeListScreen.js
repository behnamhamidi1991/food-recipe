import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";

const RecipeListScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText={"Hi, John"} headerIcon="bell" />
    </View>
  );
};

export default RecipeListScreen;

const styles = StyleSheet.create({});
