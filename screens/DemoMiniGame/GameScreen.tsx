import React, { FC } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

interface Props {}

const GameScreen: FC<Props> = ({}) => {
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
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
    padding: 12,
  },
});
