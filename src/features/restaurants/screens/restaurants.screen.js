import React, { useContext } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { Search } from '../components/search.component';
import { RestaurantCardInfo } from '../components/restaurant-card.component';
import { SafeArea } from '../../../components/utils/safe-area.component';

//For Spinner

//use Context in this screen since it needs it
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { LoadingSpinnerComponent } from '../../../components/utils/loading-spinner.component';

export const RestaurantsScreen = ({ navigation }) => {
  //use Context here in Screen:
  const { error, restaurants, isLoading } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {isLoading && <LoadingSpinnerComponent />}
      <Search />
      <FlatList
        data={restaurants}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('RestaurantDetail')}
          >
            <RestaurantCardInfo restaurant={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
        //inline style for simplicity
      />
    </SafeArea>
  );
};
