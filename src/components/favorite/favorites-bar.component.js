import React from 'react';

import { ScrollView, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { Spacer } from '../spacer/spacer.component';
import { CompactRestaurantInfo } from '../restaurant/compact-restaurant-info.component';
import { Text } from '../typography/typography.component';

const FavoritesWrapper = styled(View)`
  padding: 10px;
`;
export const FavoritesBar = ({ favorites, onNavigate }) => {
  return (
    <FavoritesWrapper>
      <Spacer variant='left.large'>
        <Text variant='caption'>Favorites</Text>
      </Spacer>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position='left' size='medium'>
              <TouchableOpacity
                onPress={() =>
                  onNavigate('RestaurantDetail', {
                    restaurant,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavoritesWrapper>
  );
};
