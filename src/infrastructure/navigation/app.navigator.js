import React from 'react';
import { Text } from 'react-native';

import { SafeArea } from '../../components/utils/safe-area.component';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';
import { RestaurantsNavigator } from './restaurants.navigator';
import { MapScreen } from '../../features/map/screens/map.screen';

const SettingsScreen = () => {
  return (
    <SafeArea>
      <Text>Settings!</Text>
    </SafeArea>
  );
};

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Restaurants') {
              iconName = 'fast-food';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (route.name === 'Map') {
              iconName = focused ? 'md-map' : 'md-map-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen
          name='Restaurants'
          options={{ headerShown: false }}
          component={RestaurantsNavigator}
        />
        <Tab.Screen
          name='Settings'
          options={{ headerShown: false }}
          component={SettingsScreen}
        />
        <Tab.Screen
          name='Map'
          options={{ headerShown: false }}
          component={MapScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
