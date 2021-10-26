import { View, Text } from 'react-native';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import styled from 'styled-components/native';

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary}
  margin-bottom: ${(props) => props.theme.space[3]}
  
`;
export const RestaurantCardCover = styled(Card.Cover)`
  margin: ${(props) => props.theme.space[3]};
`;
export const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
export const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Section = styled(View)`
  padding-top: ${(props) => props.theme.space[2]};
  flex-direction: row;
`;
export const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
export const Rating = styled(View)`
  flex-direction: row;
`;
export const Open = styled(SvgXml)`
  flex-direction: row;
`;
