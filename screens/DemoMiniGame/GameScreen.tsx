import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import Title from "../../components/Title";

interface Props {}

const GameScreen: FC<Props> = ({}) => {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <View>
        <Text>Higher or Lower?</Text>
      </View>
      <View>Log Round</View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
