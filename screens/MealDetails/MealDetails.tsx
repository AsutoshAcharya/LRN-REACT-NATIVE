import { useRoute, RouteProp } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { RootStackParamList } from "../../RoutesMap";

type MealDetailsRoute = RouteProp<RootStackParamList, "MealDetails">;
const MealDetails = () => {
  const {
    params: { mealId },
  } = useRoute<MealDetailsRoute>();
  console.log(mealId);
  return (
    <View>
      <Text>Meal Details</Text>
    </View>
  );
};

export default MealDetails;
