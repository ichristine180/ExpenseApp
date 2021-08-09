import * as React from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useEffect } from 'react';
import MonthDropdown from '../components/MonthDropdown';
import ListExpense from '../components/ListExpense';
import { useSelector, useDispatch } from 'react-redux';
import { months } from '../data/Months';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fectExpenses } from '../store/actions/expenses';
import { useCallback } from 'react';
import { color } from '../constant/color';
const Home = ({ navigation }) => {
    const [dataLoading, setDataLoading] = React.useState(false);
    const [isRefreshing, setIsRefreshing] = React.useState(false)
    const [err, setErr] = React.useState();
    const [month, setMonth] = React.useState(new Date().getMonth());
    const [filteredExpenses, setFilteredExpenses] = React.useState([])

    const loadExpenses = useCallback(async () => {
        try {
            setErr(null)
            setIsRefreshing(true)
            await dispatch(fectExpenses());
        } catch (err) {
            setErr(err.message)
        }
        setIsRefreshing(false)
    }, [dispatch, setIsRefreshing]);

    const dispatch = useDispatch()
    const expenses = useSelector(State => State.expenses.expenses)
    const goToAddScreen = () => {
        navigation.navigate('AddExpense')
    }
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (<Ionicons name='add-circle-sharp' size={40} color='white' onPress={goToAddScreen} />),

        })
    }, [navigation])
    const filterExpense = () => {
        let newArray = expenses.filter(function (item) {
            var mo = new Date(item.date).getMonth();
            return mo == month;
        });
        setFilteredExpenses(newArray)
    }
    useEffect(() => {
        filterExpense()
    }, [expenses,month])
    const onMonthChangeHandler = month => {
        setMonth(month);
    }

    useEffect(() => {
        setDataLoading(true)
        loadExpenses().then(() => setDataLoading(false))
    }, [loadExpenses])

    useEffect(() => {
        navigation.addListener(
            'willFocus',
            loadExpenses
        );
    }, [loadExpenses]);
    let message;
    if (err) {
        message = <View style={styles.textBox}>
            <Text numberOfLines={2} style={{ ...styles.text, color: 'red' }}>{err}</Text>
        </View>
    }
    else if (dataLoading) {
        message = <ActivityIndicator size="large" color={color.primary} />
    }
    else if (!dataLoading && filteredExpenses.length === 0) {

        message = <View style={styles.textBox}>
            <Text numberOfLines={2} style={styles.text}>No Expense Recorded in {months[month].label}</Text>
        </View>

    } else message = <ListExpense
        expenses={filteredExpenses}
        navigation={navigation}
        isRefreshing={isRefreshing}
        loadExpenses={loadExpenses} />
    return <SafeAreaView style={{ flex: 1 }}>
        <MonthDropdown onChange={onMonthChangeHandler} />
        {message}
    </SafeAreaView>
}

export default Home;

const styles = StyleSheet.create({
    textBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 100


    },
    text: {
        fontFamily: 'open-sans-bold',
        fontSize: 20
    }
})