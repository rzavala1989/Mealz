import React from 'react';
import { StatusBar, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import { Search } from '../../../components/Search';
import { RestaurantCardInfo } from '../components/restaurant-card.component';

export const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Search />
      <FlatList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }]}
        renderItem={() => <RestaurantCardInfo />}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
        //inline style for simplicity
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#fff',
  },
});
