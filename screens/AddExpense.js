import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ExpenseForm from '../components/ExpenseForm'
import { months } from '../data/Months';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const AddExpense = () => {
    console.log(months)
    const month = months[new Date().getMonth()].label
    return (
        <View>
            <View style={styles.titleContainer}>
                <View style={{flexDirection:'row'}}>
                    <Icon name='calendar-month' size={23} />
                    <Text>{month}</Text>
                </View>
                <Text>Add New Expense</Text>
            </View>
            <ExpenseForm />
        </View>
       
    )
}
const styles = StyleSheet.create({
    titleContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop: 50,
        backgroundColor: '#fafafa',
        marginHorizontal: 20,
        padding: 20,
        fontSize: 90,
        borderRadius:5
    }
})
export default AddExpense;