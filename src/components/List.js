import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const List = () => {
  return (
    <View style={styles.listView}>
      <Text>List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listView: {
    padding: 15,
    flex: 1,
    backgroundColor: 'blue',
  },
});
