import { Fragment } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { routesMap } from "./RoutesMap";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Fragment>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          {routesMap.map((route) => (
            <Stack.Screen
              name={route.title}
              component={route.component}
              key={route.title}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </Fragment>
  );
}
