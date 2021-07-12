import * as React from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useEffect } from 'react';
import MonthDropdown from '../components/MonthDropdown';
const Home = ({ navigation }) => {

    const goToAddScreen = () => {
        navigation.navigate('AddExpense')
    }
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (<Ionicons name='add-circle-sharp' size={40} color='white' onPress={goToAddScreen} />),
            headerLeft: () => (<Ionicons name='menu' size={40} color='white' onPress={()=> navigation.toggleDrawer()} />)
        })
    },[navigation])
    return (
        <View>
            <MonthDropdown />
        </View>
    )
}

export default Home;