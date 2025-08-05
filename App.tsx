import { Fragment } from "react";
import { StatusBar } from "expo-status-bar";
import DemoMiniGame from "./screens/DemoMiniGame";

export default function App() {
  return (
    <Fragment>
      <StatusBar style="light" />
      {/* <GoalView /> */}
      <DemoMiniGame />
    </Fragment>
  );
}
