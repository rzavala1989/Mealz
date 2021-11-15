import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { RestaurantsScreen } from '../../features/restaurants/screens/restaurants.screen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator>
      <RestaurantStack.Screen
        options={{ headerShown: false }}
        name='Restaurants'
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        options={{ headerShown: false }}
        name='RestaurantDetail'
        component={() => <Text>RestaurantDetail</Text>}
      />
    </RestaurantStack.Navigator>
  );
};
