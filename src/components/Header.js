import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Header = ({ headerText, headerIcon }) => {
  return (
    <View style={{ flexDirection: "row", marginTop: 40 }}>
      <Text style={{ fontSize: 20 }}>{headerText}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
