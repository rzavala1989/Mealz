import React from 'react';
import { FlatList } from 'react-native';
import { Search } from '../../../components/Search';
import { RestaurantCardInfo } from '../components/restaurant-card.component';
import { SafeArea } from '../../../components/utils/safe-area.component';

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <Search />
      <FlatList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }]}
        renderItem={() => <RestaurantCardInfo />}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
        //inline style for simplicity
      />
    </SafeArea>
  );
};
