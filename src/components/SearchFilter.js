import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Icon from "react-native-ico-material-design";

const SearchFilter = ({ icon, placeholder }) => {
  return (
    <View style={styles.searchFilterContainer}>
      <View style={styles.searchBarContainer}>
        <TextInput
          placeholder={placeholder}
          style={{
            shadowColor: "#000",
            shadowOffset: { width: -2, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }}
        />
        <Icon
          name={icon}
          style={{ position: "absolute", right: 10 }}
          color={"#f96163"}
        />
      </View>
    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginTop: 20,
    width: "87%",
    display: "flex",
    position: "relative",
    borderRadius: 7,
    justifyContent: "center",
  },
  searchFilterContainer: {
    display: "flex",
    alignItems: "center",
  },
});
