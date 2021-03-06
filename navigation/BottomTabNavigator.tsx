import { Ionicons, FontAwesome5, FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Direction from '../components/Direction'

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ServicesScreen from '../screens/ComprarScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import HelpScreen from '../screens/HelpScreen';
import OrdenesScreen from '../screens/OrdenesScreen'

import { BottomTabParamList, HomeNavigatorParamList, TabTwoParamList } from '../types';
import DestinationSearchScreen from '../screens/DestinationSearch/index';
import CreandoOrdenScreen from '../screens/CreandoOrdenScreen/index';
import OrdenEstadoScreen from '../screens/OrdenEstadosScreen'
import RouteMapComponent from '../components/RouteMap/index';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint,
      showLabel:false,
      tabStyle: {
        paddingRight: 15,
      }}}
      >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="md-home" color={color}/>,
        }}
      />
      <BottomTab.Screen
        name="Shopping"
        component={ServicesScreen}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="shopping-outline" size={30} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="List"
        component={RouteMapComponent}
        
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="list-alt" size={30} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Help"
        component={OrdenEstadoScreen}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="support-agent" size={30} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={DestinationSearchScreen}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="tag-faces" size={28} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<HomeNavigatorParamList>();

function HomeNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: () => (
          <Direction/>
          )
         }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}
