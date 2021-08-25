import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import MyDrawer from './navigation/MainNavigation'
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import expenseReducer from './store/reducers/expenses';
import authenticate from './store/reducers/auth';
import * as Font from 'expo-font'
import reduxThunk from 'redux-thunk'
import { View } from 'react-native';


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
  const rootReducer = combineReducers({ expenses: expenseReducer, auth: authenticate })
  const store = createStore(rootReducer,applyMiddleware(reduxThunk))
  return (

   
      <Provider store={store}>
        <StatusBar hidden />
        <MyDrawer />
      </Provider>

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
