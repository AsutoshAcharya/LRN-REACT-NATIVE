import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MealsOverview = () => {
  return (
    <View style={styles.container}>
      <Text>MealsOverview screen</Text>
    </View>
  );
};

export default MealsOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
