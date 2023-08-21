import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Explore from "../screen/Explore";
import Quiz from "../screen/Quiz";
import Saved from "../screen/Saved";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ListAnimal from "../screen/List/listAnimal";
import Status from "../screenComponent/Home/Status";
import Home from "../screen/Home/Home";
import DetailList from "../screen/List/DetailList";
import DetailNews from "../screen/DetailNews";
import DetailCategory from "../screen/DetailCategory";
import DetailAnimal from "../screen/DetailAnimal";

const HomeStack = createNativeStackNavigator();
function HomeStacks() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeStack" component={Home} />
    </HomeStack.Navigator>
  );
}

const ExploreStack = createNativeStackNavigator();
function ExploreStacks() {
  return (
    <ExploreStack.Navigator screenOptions={{ headerShown: false }}>
      <ExploreStack.Screen name="ExploreStack" component={Explore} />
    </ExploreStack.Navigator>
  );
}
const ListStack = createNativeStackNavigator();
function ListStacks() {
  return (
    <ListStack.Navigator screenOptions={{ headerShown: false }}>
      <ListStack.Screen name="ListStack" component={ListAnimal} />
      <ListStack.Screen name="DetailCategory" component={DetailCategory} />
    </ListStack.Navigator>
  );
}
const QuizStack = createNativeStackNavigator();
function QuizStacks() {
  return (
    <QuizStack.Navigator screenOptions={{ headerShown: false }}>
      <QuizStack.Screen name="QuizStack" component={Quiz} />
    </QuizStack.Navigator>
  );
}
const SavedStack = createNativeStackNavigator();
function SavedStacks() {
  return (
    <SavedStack.Navigator screenOptions={{ headerShown: false }}>
      <SavedStack.Screen name="SavedStack" component={Saved} />
    </SavedStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          elevation: 0,
          backgroundColor: "#041725",
          width: "100%",
          height: 104,
          shadowColor: "#FFF9EC",
          shadowOffset: {
            width: 5,
            height: 3,
          },
          shadowOpacity: 0.5,
          shadowRadius: 3.5,
          elevation: 5,
          borderRadius: 15,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../storages/navigationicon/home2.png")}
                  resizeMode="contain"
                  style={{
                    width: 40,
                    height: 40,
                    tintColor: "#D6EAF5",
                  }}
                ></Image>
              </View>
            ) : (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../storages/navigationicon/home.png")}
                  resizeMode="contain"
                  style={{
                    width: 40,
                    height: 40,
                    tintColor: "#D6EAF5",
                  }}
                ></Image>
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../storages/navigationicon/explore2.png")}
                  resizeMode="contain"
                  style={{
                    width: 40,
                    height: 40,
                    tintColor: "#D6EAF5",
                  }}
                ></Image>
              </View>
            ) : (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../storages/navigationicon/explore.png")}
                  resizeMode="contain"
                  style={{
                    width: 40,
                    height: 40,
                    tintColor: "#FCFCFC",
                  }}
                ></Image>
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="List"
        component={ListStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../storages/navigationicon/list2.png")}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: "#D6EAF5",
                  }}
                ></Image>
              </View>
            ) : (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../storages/navigationicon/list.png")}
                  resizeMode="contain"
                  style={{
                    width: 40,
                    height: 40,
                    tintColor: "#FCFCFC",
                  }}
                ></Image>
              </View>
            ),
        }}
      />

      <Tab.Screen
        name="Saved"
        component={SavedStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../storages/navigationicon/save.png")}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                  tintColor: focused ? "#324EE8" : "#C6C6C6",
                }}
              ></Image>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Quiz"
        component={QuizStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../storages/navigationicon/quiz.png")}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                  tintColor: focused ? "#324EE8" : "#C6C6C6",
                }}
              ></Image>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const Stacks = createNativeStackNavigator();
const Stack = () => {
  return (
    <NavigationContainer>
      <Stacks.Navigator screenOptions={{ headerShown: false }}>
        <Stacks.Screen name="Tabs" component={Tabs} />
        <Stacks.Screen name="Status" component={Status} />
        <Stacks.Screen name="DetailList" component={DetailList} />
        <Stacks.Screen name="DetailNews" component={DetailNews} />
        <Stacks.Screen name="DetailAnimal" component={DetailAnimal} />
      </Stacks.Navigator>
    </NavigationContainer>
  );
};

export default Stack;

const styles = StyleSheet.create({});
