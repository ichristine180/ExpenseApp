import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ExpenseForm from '../components/ExpenseForm'
import { months } from '../data/Months';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { color } from '../constant/color';
import { useDispatch } from 'react-redux';
import { addExpenses } from '../store/actions/expenses';
const AddExpense = (props) => {
    const month = months[new Date().getMonth()].label
    const dispatch = useDispatch();
    const submitHandler = (newExpenses) => {
        dispatch(addExpenses(newExpenses));
        props.navigation.goBack()

    }
    return (<ScrollView>
        <View>
            <View style={styles.titleContainer}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name='calendar-month' size={23} color={color.primary} />
                    <Text style={{ marginLeft: 2, fontFamily: 'open-sans-bold', }}>{month}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <EntypoIcon name='add-to-list' size={23} color={color.primary} />
                    <Text style={{ marginLeft: 2, fontFamily: 'open-sans-bold',}}>Add New Expense</Text>
                </View>

            </View>

            <ExpenseForm onSubimitHandler={submitHandler} />

        </View>
    </ScrollView>
    )
}
const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 50,
        backgroundColor: '#fafafa',
        marginHorizontal: 20,
        padding: 20,
        fontSize: 90,
        borderRadius: 5
    }
})
export default AddExpense;