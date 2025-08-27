import { useRoute, RouteProp, NavigationProp } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { RootStackParamList } from "../../RoutesMap";
import { MEALS, MealType } from "../../data/dummyData";
import IconButton from "../../components/IconButton";
import { useFavouriteContext } from "../../context/favourites/FavouriteContext";

type MealDetailsRoute = RouteProp<RootStackParamList, "MealDetails">;
type MealDetailsNavigation = NavigationProp<RootStackParamList, "MealDetails">;

const MealDetails = ({ navigation }: { navigation: MealDetailsNavigation }) => {
  const {
    params: { mealId },
  } = useRoute<MealDetailsRoute>();

  const { manager, dispatch } = useFavouriteContext();
  console.log(manager);
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const isFavourite = manager.favourites.some((m) => m.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          onPress={() =>
            isFavourite
              ? dispatch({ type: "removeFavourite", payload: mealId })
              : dispatch({
                  type: "addFavourite",
                  payload: selectedMeal as MealType,
                })
          }
          icon={isFavourite ? "star" : "star-outline"}
        />
      ),
    });
  }, [navigation, isFavourite]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal?.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <View style={styles.details}>
        <Text style={styles.textStyle}>{selectedMeal?.duration}m</Text>
        <Text style={styles.textStyle}>
          {selectedMeal?.complexity.toUpperCase()}
        </Text>
        <Text style={styles.textStyle}>
          {selectedMeal?.affordability.toUpperCase()}
        </Text>
      </View>
      <Text style={styles.subTitle}>Ingredients</Text>
      {selectedMeal?.ingredients.map((item) => (
        <Text children={item} key={item} />
      ))}
      <Text style={styles.subTitle}>Steps</Text>
      {selectedMeal?.steps.map((item) => (
        <Text children={item} key={item} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 24,
  },
  details: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 8,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  textStyle: {
    color: "white",
  },
  subTitle: {
    color: "#0e2907ff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 4,
    padding: 6,
    borderBottomColor: "#FFF",
    borderBottomWidth: 2,
    marginHorizontal: 24,
  },
});

export default MealDetails;
