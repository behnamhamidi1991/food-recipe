import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";

const RecipeListScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* Render Header */}
      <Header headerText={"MetaRecipe"} headerIcon="bell" />
      <SearchFilter icon={} placeholder={"Search your recipe ..."} />
    </View>
  );
};

export default RecipeListScreen;

const styles = StyleSheet.create({});
