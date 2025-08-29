import { Fragment } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { routesMap, RouteTitle } from "./RoutesMap";
import FavouriteContextProvider from "./context/favourites/FavouriteContext";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <Fragment>
      <StatusBar style="light" />
      {/* <FavouriteContextProvider> 
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
  
      </FavouriteContextProvider> */}

      {/* Bottom Tab */}
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={RouteTitle.AllExpenses}
          screenOptions={{
            headerStyle: { backgroundColor: "#0e3b71ff" },
            headerTitleAlign: "center",
            headerTintColor: "#FFF",
          }}
        >
          {routesMap.map((route) => (
            <Tab.Screen
              name={route.title}
              component={route.component}
              key={route.title}
              {...(route.options && route.options)}
            />
          ))}
        </Tab.Navigator>
      </NavigationContainer>
    </Fragment>
  );
}
