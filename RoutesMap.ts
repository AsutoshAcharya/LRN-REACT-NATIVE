import { ReactNode } from "react";
import CategoryScreen from "./screens/CategoriesScreen/CategoryScreen";
import MealsOverview from "./screens/MealsOverview/MealsOverview";
import MealDetails from "./screens/MealDetails/MealDetails";

export enum RouteTitle {
  MealsCategory = "Meals Category",
  MealsOverview = "Meals Overview",
  MealDetails = "Meal Details",
}

export type RootStackParamList = {
  MealsCategory: undefined;
  MealsOverview: { categoryId: string };
  MealDetails: { mealId: string };
};

export type Route = {
  title: RouteTitle;
  component: React.ComponentType<any>;
};
export const routesMap: Array<Route> = [
  {
    title: RouteTitle.MealsCategory,
    component: CategoryScreen,
  },
  {
    title: RouteTitle.MealsOverview,
    component: MealsOverview,
  },
  {
    title: RouteTitle.MealDetails,
    component: MealDetails,
  },
];
