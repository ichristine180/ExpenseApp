import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyDrawer from './navigation/MainNavigation'
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import expenseReducer from './store/reducers/expenses';
import * as Font from 'expo-font'


const fetchFonts = () => {
 return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}
export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false)
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }
  const rootReducer = combineReducers({ expenses: expenseReducer })
  const store = createStore(rootReducer)
  return (
    <Provider store={store}>
      <MyDrawer />
    </Provider>
    // <MyDrawer />

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
