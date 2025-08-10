import React from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartGame from "./StartGame";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./GameScreen";

const DemoMiniGame = () => {
  return (
    <LinearGradient
      colors={["#50042bff", "#10dd5fff"]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("../../assets/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.imageBackground}
      >
        <SafeAreaView style={styles.rootScreen}>
          {/* <StartGame /> */}
          <GameScreen />
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};

export default DemoMiniGame;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  imageBackground: { opacity: 0.15 },
});
