import { RouteProp, useRoute, NavigationProp } from "@react-navigation/native";

import React, { FC, useMemo, useLayoutEffect } from "react";
import {
  FlatList,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { RootStackParamList, RouteTitle } from "../../RoutesMap";
import { CATEGORIES, MEALS, MealType } from "../../data/dummyData";

type MealsOverviewRouteProp = RouteProp<RootStackParamList, "MealsOverview">;
type MealsNavigationProp = NavigationProp<RootStackParamList, "MealsOverview">;

const MealsOverview = ({ navigation }: { navigation: MealsNavigationProp }) => {
  const route = useRoute<MealsOverviewRouteProp>();
  const { categoryId } = route.params;
  console.log(categoryId);

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((c) => c.id === categoryId)?.title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId]);

  const displayedMeals = useMemo(
    () => MEALS.filter((meal) => meal.categoryIds.indexOf(categoryId) >= 0),
    [categoryId]
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RenderMealItem item={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

interface Props {
  item: MealType;
  navigation: any;
}

const RenderMealItem: FC<Props> = ({ item, navigation }) => {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={() => {
          navigation.navigate(RouteTitle.MealDetails, { mealId: item.id });
        }}
      >
        <View>
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.details}>
          <Text>{item.duration}m</Text>
          <Text>{item.complexity.toUpperCase()}</Text>
          <Text>{item.affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealsOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,

    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  buttonPressed: {
    opacity: 0.8,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    margin: 8,
  },
  details: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 8,
  },
});
