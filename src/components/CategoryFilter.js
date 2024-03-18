import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { categories } from "../Constant";
import { colors } from "../Constant";

const CategoriesFilter = () => {
  return (
    <View style={{ paddingHorizontal: 26, marginTop: 15 }}>
      <ScrollView horizontal>
        {categories.map((category, index) => {
          return (
            <View
              style={{
                backgroundColor: colors.COLOR_PRIMARY,
                marginRight: 20,
                borderRadius: 8,
                paddingHorizontal: 14,
                paddingVertical: 12,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 7,
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "light" }}>
                {category.category}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CategoriesFilter;
