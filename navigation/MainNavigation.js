import * as React from 'react';
import Home from '../screens/Home';
import AddExpense from '../screens/AddExpense';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import WelcomeScreen from '../screens/welcome'
import SummaryScreen from '../screens/SummaryScreen';
import { color } from '../constant/color';
import { View, ActivityIndicator} from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import BudgetScreen from '../screens/Budget'
import Authenticate from '../screens/AuthenticationScreen';
import StartupScreen from '../screens/StartUpScreen';
import { logout } from '../store/actions/auth';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Stack = createStackNavigator();
function MainStack() {
    const isLogedIn = useSelector(state => state.auth.isLogedIn);
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
                title: 'Tracking Monthly Expenses' + '    ' + new Date().getFullYear()
            }
        }>

            {isLogedIn ? (
                <>
                    <Stack.Screen name='Home' component={Home} />
                    <Stack.Screen name='AddExpense' component={AddExpense} />
                    <Stack.Screen name='Authenticate' component={authStack} options={{ headerShown: false }} />
                </>
            ) : (

                <Stack.Screen name='Authenticate' component={authStack} options={{ headerShown: false }} />
            )}

           
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
                    } else if (route.name === 'Logout') {
                        return <MaterialIcons name='logout' size={23} color={color} />;
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
            <Tab.Screen name="Expenses" component={summaryStack} options={{
                tabBarBadge: expenseNum,
                tabBarBadgeStyle: { backgroundColor: 'pink' }
            }}
            ></Tab.Screen>
            {/* <Tab.Screen name="Logout" component={logoutComponent}></Tab.Screen> */}
        </Tab.Navigator>


    )
}
function logoutComponent({ navigation }) {
    const dispatch = useDispatch()
    React.useEffect(() => {
        navigation.push('Authenticate')
        dispatch(logout())
    }, [dispatch]);

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'}}>
            <ActivityIndicator size="large" color={color.primary} />
        </View>
    );
}
const Drawer = createDrawerNavigator();
function MyDrawer() {
    
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName='Wellcome'>
                <Drawer.Screen name="wellcome" component={WelcomeStack} />
                <Drawer.Screen name="Budgets" component={BudgetStack} />
            </Drawer.Navigator>
        </NavigationContainer>

    )
}


function WelcomeStack() {
    const isLogedIn = useSelector(state => state.auth.isLogedIn);
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName='startUp' screenOptions={
            {
                headerStyle: {
                    backgroundColor: color.primary
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontSize: 15,
                    fontFamily: 'open-sans-bold',
                },
                title: 'Personal Management App'
            }
        }>
            <Stack.Screen name='startUp' component={StartupScreen} options={{ headerShown: false }} />
            {isLogedIn ? (
                <>
                    <Stack.Screen name='wellcome' component={WelcomeScreen} />
                        <Stack.Screen name='expenses' component={MyBottomTab} options={{ headerShown: false }} />
                        <Stack.Screen name='Authenticate' component={authStack} options={{ headerShown: false }} />
                </>
            ) : (

                    <Stack.Screen name='Authenticate' component={authStack} options={{ headerShown: false}} />
            )}


        </Stack.Navigator>

            </NavigationContainer>

    )
}

function authStack() {
    return (

        <Stack.Navigator initialRouteName='Authenticate' screenOptions={
            {
                headerStyle: {
                    backgroundColor: color.primary
                },
                headerTintColor: 'white',
                headerLeft: null,
                headerTitleStyle: {
                    fontSize: 25,
                    fontFamily: 'open-sans-bold',
                    textAlign: 'center'
                },
                title: 'Authenticate'
            }
        }>

            <Stack.Screen name='Authenticate' component={Authenticate} />

        </Stack.Navigator>
    )
}
export default WelcomeStack;