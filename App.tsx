import { Fragment } from "react";
import { StatusBar } from "expo-status-bar";

import CategoryScreen from "./screens/CategoriesScreen/CategoryScreen";

export default function App() {
  return (
    <Fragment>
      <StatusBar style="light" />
      <CategoryScreen />
    </Fragment>
  );
}
