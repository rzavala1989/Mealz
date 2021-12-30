import React, { useContext, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { Search } from '../components/search.component';
import { RestaurantCardInfo } from '../components/restaurant-card.component';
import { SafeArea } from '../../../components/utils/safe-area.component';
import { FavoritesBar } from '../../../components/favorite/favorites-bar.component';

//For Spinner

//use Context in this screen since it needs it
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { FavoritesContext } from '../../../services/favorites/favorites.context';
import { LoadingSpinnerComponent } from '../../../components/utils/loading-spinner.component';

export const RestaurantsScreen = ({ navigation }) => {
  //use Context here in Screen:
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const { favorites } = useContext(FavoritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      {isLoading && <LoadingSpinnerComponent />}
      <Search
        isFavoritesToggled={isToggled}
        onFavoritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavoritesBar favorites={favorites} onNavigate={navigation.navigate} />
      )}
      <FlatList
        data={restaurants}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('RestaurantDetail', {
                restaurant: item,
              })
            }
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
