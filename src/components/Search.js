import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';

export const Search = () => {
  return (
    <View style={styles.searchView}>
      <Searchbar placeholder='Go find food...' />
    </View>
  );
};

const styles = StyleSheet.create({
  searchView: {
    padding: 16,
  },
});
