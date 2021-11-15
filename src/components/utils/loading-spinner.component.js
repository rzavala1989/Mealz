import * as React from 'react';
import { ActivityIndicator, Colors } from 'react-native-paper';
import styled from 'styled-components/native';

const LoadingSpinner = styled(ActivityIndicator)`
  flex: 1;
  justify-content: center
  align-items: center
`;

export const LoadingSpinnerComponent = () => (
  <LoadingSpinner size={200} animating={true} color={Colors.red800} />
);
