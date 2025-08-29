import { createElement, ReactNode } from "react";
import { Ionicons } from "@expo/vector-icons";
import CategoryScreen from "./screens/CategoriesScreen/CategoryScreen";
import MealsOverview from "./screens/MealsOverview/MealsOverview";
import MealDetails from "./screens/MealDetails/MealDetails";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import AllExpenses from "./screens/AllExpenses";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

export enum RouteTitle {
  MealsCategory = "Meals Category",
  MealsOverview = "Meals Overview",
  MealDetails = "Meal Details",
  AllExpenses = "All Expenses",
}

export type RootStackParamList = {
  MealsCategory: undefined;
  MealsOverview: { categoryId: string };
  MealDetails: { mealId: string };
};

export type Route = {
  title: RouteTitle;
  component: React.ComponentType<any>;
  options?: NativeStackNavigationOptions | BottomTabNavigationOptions;
};
export const routesMap: Array<Route> = [
  // {
  //   title: RouteTitle.MealsCategory,
  //   component: CategoryScreen,
  // },
  // {
  //   title: RouteTitle.MealsOverview,
  //   component: MealsOverview,
  // },
  // {
  //   title: RouteTitle.MealDetails,
  //   component: MealDetails,
  // },
  {
    title: RouteTitle.AllExpenses,
    component: AllExpenses,
    // options: {
    //   tabBarIcon: (props) => createElement(Ionicons, { name: "wallet" }),
    // },
  },
];
