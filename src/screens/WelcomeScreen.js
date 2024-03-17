import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", marginTop: 180 }}>
      <Image
        source={require("../../assets/images/main.webp")}
        resizeMode="contain"
        style={{ width: 370, height: 250 }}
      />
      <Text
        style={{
          color: "#f96163",
          fontWeight: "bold",
          marginTop: 40,
          fontSize: 27,
        }}
      >
        {" "}
        40K+ Premium Recipes{" "}
      </Text>
      <Text
        style={{
          fontSize: 17,
          fontWeight: "light",
          color: "#3c444c",
          marginTop: 5,
          marginBottom: 20,
        }}
      >
        Cook Like A Real Chef
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: "#f96163",
          borderRadius: 18,
          paddingVertical: 18,
          width: "80%",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "700" }}>Let's Go</Text>
      </TouchableOpacity>
    </View>
  );
}
