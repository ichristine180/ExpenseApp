import * as React from 'react';
import Home from '../screens/Home';
import AddExpense from '../screens/AddExpense';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import SummaryScreen from '../screens/SummaryScreen';
import { color } from '../constant/color';

import { useSelector } from 'react-redux';
import BudgetScreen from '../screens/Budget'

const Stack = createStackNavigator();
function MainStack() {
    return (
            <Stack.Navigator initialRouteName='Home' screenOptions={
                {
                    headerStyle: {
                        backgroundColor: color.primary
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontSize: 12,
                        fontFamily: 'open-sans-bold',
                    },
                    title: 'Tracking Monthly Expenses'+ '    '+ new Date().getFullYear()
                }
            }>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='AddExpense' component={AddExpense} />
            </Stack.Navigator>
       
    )
}

function summaryStack() {
    return (
        <Stack.Navigator initialRouteName='Summary' screenOptions={
            {
                headerStyle: {
                    backgroundColor: color.primary
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontSize: 12,
                    fontFamily: 'open-sans-bold',
                },
                title: 'Your Expenses Details'
            }
        }>
            <Stack.Screen name='Summary' component={SummaryScreen} />
        </Stack.Navigator>

    )
}


function BudgetStack() {
    return (
        <Stack.Navigator initialRouteName='Budgets' screenOptions={
            {
                headerStyle: {
                    backgroundColor: color.primary
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontSize: 22,
                    fontFamily: 'open-sans-bold',
                },
                title: 'Monthly Budgets' + '    ' + new Date().getFullYear()
            }
        }>
            <Stack.Screen name='Budgets' component={BudgetScreen} />
            
        </Stack.Navigator>

    )
}
const Tab = createBottomTabNavigator();
function MyBottomTab() {
    const expenseNum = useSelector(state => state.expenses.expenses).length
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Expenses') {
                            iconName = focused
                                ? 'ios-information-circle'
                                : 'ios-information-circle-outline';
                        } else if (route.name === 'Home') {
                            iconName = focused ? 'ios-list-circle-sharp' : 'ios-list';
                        } else if (route.name === 'Budgets') {
                            iconName = focused ? 'calculator-sharp' : 'calculator-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: color.primary,
                    inactiveTintColor: 'gray',
    
            }}>
            <Tab.Screen name="Home" component={MainStack} ></Tab.Screen>
            <Tab.Screen name="Expenses" component={summaryStack} options={{tabBarBadge: expenseNum, tabBarBadgeStyle: { backgroundColor: 'pink' }}}></Tab.Screen>
            <Tab.Screen name="Budgets" component={BudgetStack} ></Tab.Screen>

        </Tab.Navigator> 
        </NavigationContainer >
       
    )
}
const Drawer = createDrawerNavigator();

// function MyDrawer() {
//     return (
//         <NavigationContainer>
//         <Drawer.Navigator initialRouteName='Home'>
//                 <Drawer.Screen name="Home" component={MyBottomTab} />
//                 <Drawer.Screen name="Budgets" component={BudgetStack} />
//             </Drawer.Navigator>
//         </NavigationContainer>
       
//     )
// }
export default MyBottomTab;