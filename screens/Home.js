import * as React from 'react';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useEffect } from 'react';
import MonthDropdown from '../components/MonthDropdown';
import ListExpense from '../components/ListExpense';
import { expenses } from '../data/expense'
const Home = ({ navigation }) => {

    const goToAddScreen = () => {
        navigation.navigate('AddExpense')
    }
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (<Ionicons name='add-circle-sharp' size={40} color='white' onPress={goToAddScreen} />),
            headerLeft: () => (<Ionicons name='menu' size={40} color='white' onPress={() => navigation.toggleDrawer()} />)
        })
    }, [navigation])
    return (
        <View>
            <MonthDropdown />
            <ListExpense expenses={expenses} />
        </View>
    )
}

export default Home;