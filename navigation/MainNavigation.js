import * as React from 'react';
import Home from '../screens/Home';
import AddExpense from '../screens/AddExpense';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SummaryScreen from '../screens/SummaryScreen';
const Stack = createStackNavigator();

function MainStack() {
    return (
            <Stack.Navigator initialRouteName='Home' screenOptions={
                {
                    headerStyle: {
                        backgroundColor: '#192734'
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontSize: 10,
                        fontWeight: 'bold'
                    },
                    title: 'Tracking Monthly Expenses'+ '    '+ new Date().getFullYear()
                }
            }>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='AddExpense' component={AddExpense} />
            </Stack.Navigator>
       
    )
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName='Main'>
                <Drawer.Screen name="Main" component={MainStack} />
                <Drawer.Screen name="Summary" component={SummaryScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
export default MyDrawer;