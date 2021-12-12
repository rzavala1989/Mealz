import React from 'react';
import { Text } from 'react-native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { RestaurantsScreen } from '../../features/restaurants/screens/restaurants.screen';
import { RestaurantDetail } from '../../features/restaurants/screens/restaurant-detail.screen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <RestaurantStack.Screen
        options={{ headerShown: false }}
        name='Restaurants'
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        options={{ headerShown: false }}
        name='RestaurantDetail'
        component={RestaurantDetail}
      />
    </RestaurantStack.Navigator>
  );
};
