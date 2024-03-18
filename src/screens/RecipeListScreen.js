import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";

const RecipeListScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Render Header */}
      <Header headerText={"MetaRecipe"} headerIcon="notifications-button" />

      {/* Search Filter */}
      <SearchFilter
        icon="searching-magnifying-glass"
        placeholder="Search your recipe ..."
      />

      {/* Categories Filter */}
    </SafeAreaView>
  );
};

export default RecipeListScreen;

const styles = StyleSheet.create({});
