import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-ico-material-design";

const Header = ({ headerText, headerIcon }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        marginTop: 60,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 30,
      }}
    >
      <Text
        style={{
          fontSize: 17,
          color: "#f96163",
          textTransform: "uppercase",
          letterSpacing: 2,
          fontWeight: "bold",
        }}
      >
        {headerText}
      </Text>
      <Icon name={headerIcon} color={"#f96163"} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
