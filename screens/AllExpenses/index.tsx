import React from "react";
import { Text, View } from "react-native";
import ImagePicker from "./ImagePicker";

const AllExpenses = () => {
  return (
    <View>
      <Text children="All Expenses" />
      <ImagePicker />
    </View>
  );
};

export default AllExpenses;
