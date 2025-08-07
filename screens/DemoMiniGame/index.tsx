import React from "react";
import { StyleSheet } from "react-native";
import StartGame from "./StartGame";
import { LinearGradient } from "expo-linear-gradient";

const DemoMiniGame = () => {
  return (
    <LinearGradient colors={["#52032aff", "#ddb52f"]} style={styles.rootScreen}>
      <StartGame />
    </LinearGradient>
  );
};

export default DemoMiniGame;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
