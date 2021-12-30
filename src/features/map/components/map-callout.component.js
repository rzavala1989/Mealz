import React from 'react';
import styled from 'styled-components/native';

const MyText = styled.Text``;
import { CompactRestaurantInfo } from '../../../components/restaurant/compact-restaurant-info.component';

export const MapCallout = ({ restaurant }) => (
  <>
    <MyText>{restaurant.name}</MyText>
    <CompactRestaurantInfo isMap restaurant={restaurant} />
  </>
);
