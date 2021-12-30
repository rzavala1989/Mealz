import React from 'react';

//
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/typography.component';
import { Favorite } from '../../../components/favorite/favorite.component';

//styled components
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Address,
  Section,
  SectionEnd,
  Rating,
  Open,
} from './restaurant-card.styles';

export const RestaurantCardInfo = ({ restaurant = {} }) => {
  const {
    name = 'Some restaurant',
    icon,
    photos = [
      'https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2014/10/10/0/CCDevour_worst-restaurants-Pastamaniat_s4x3.jpg.rend.hgtvcom.966.725.suffix/1412974093938.jpeg',
    ],
    address = '187 Some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  //to render the number of stars to reflect rating
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={7}>
      <Favorite restaurant={restaurant} />
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant='label'>{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant='error'>CLOSED TEMPORARILY</Text>
            )}
            <Spacer variant='left.large' />
            {isOpenNow && <Open xml={open} width={20} height={20} />}
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
