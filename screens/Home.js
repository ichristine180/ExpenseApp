import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useEffect } from 'react';
import MonthDropdown from '../components/MonthDropdown';
import ListExpense from '../components/ListExpense';
import { useSelector } from 'react-redux';
import { months } from '../data/Months';
import { SafeAreaView } from 'react-native-safe-area-context';
const Home = ({ navigation }) => {
    const [month, setMonth] = React.useState(new Date().getMonth());
    const [filteredExpenses, setFilteredExpenses] = React.useState([])
    const expenses = useSelector(State => State.expenses.expenses)
    useEffect(() => {
        setFilteredExpenses(expenses.filter(exp => exp.date.getMonth() == month))
    }, [expenses,month])
    const goToAddScreen = () => {
        navigation.navigate('AddExpense')
    }
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (<Ionicons name='add-circle-sharp' size={40} color='white' onPress={goToAddScreen} />),
            headerLeft: () => (<Ionicons name='menu' size={40} color='white'/>)
        })
    }, [navigation])
    const onMonthChangeHandler = month => {
        setMonth(month)
    }
    if (filteredExpenses.length === 0) {
        return<View>
            <MonthDropdown onChange={onMonthChangeHandler} />
            <View style={styles.textBox}>
                <Text numberOfLines={2} style={styles.text}>No Expense Recorded in {months[month].label}</Text>
            </View>
        </View>
      
    }
    return (
        <SafeAreaView  style={{flex:1}}>
            <MonthDropdown onChange={onMonthChangeHandler} />
           
                <ListExpense expenses={filteredExpenses} />
        
        </SafeAreaView>
       
    )
}

export default Home;

const styles = StyleSheet.create({
    textBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:100


    },
    text: {
        fontFamily: 'open-sans-bold',
        fontSize:20
    }
})