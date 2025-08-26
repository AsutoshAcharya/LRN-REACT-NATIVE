import { RouteProp, useRoute } from "@react-navigation/native";

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../../RoutesMap";

type MealsOverviewRouteProp = RouteProp<RootStackParamList, "MealsOverview">;

const MealsOverview = () => {
  const route = useRoute<MealsOverviewRouteProp>();
  const { categoryId } = route.params;
  console.log(categoryId);
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
