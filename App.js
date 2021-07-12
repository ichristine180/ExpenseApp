
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyDrawer from './navigation/MainNavigation'
export default function App() {
  return (
    <MyDrawer />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
