import { Fragment } from "react";
import GoalView from "./screens/GoalView";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <Fragment>
      <StatusBar style="light" />
      <GoalView />
    </Fragment>
  );
}
