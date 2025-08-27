import { Fragment } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { routesMap } from "./RoutesMap";
import FavouriteContextProvider from "./context/favourites/FavouriteContextProvider";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Fragment>
      <StatusBar style="light" />
      <FavouriteContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#082b25ff",
              },
              headerTintColor: "#FFF",
              headerTitleAlign: "center",
              contentStyle: {
                backgroundColor: "#18993fff",
              },
            }}
          >
            {routesMap.map((route) => (
              <Stack.Screen
                name={route.title}
                component={route.component}
                key={route.title}
              />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </FavouriteContextProvider>
    </Fragment>
  );
}
