import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { color } from '../constant/color';
import { useDispatch } from 'react-redux';
import { addExpenses } from '../store/actions/expenses';
const ExpenseForm = props => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('')
    const titleHandler = (titleText) => {
        setTitle(titleText)
    }
    const amountHandler = (amountText) => {
        setAmount(amountText)
    }
    const descriptionHandler = (descriptionText) => {
        setDescription(descriptionText)
    }

    const submitHandler = () => {
        let date = new Date();
        let id = date.getTime().toString()
        const newExpense = {
            title: title,
            amount: +amount,
            id: id,
            date: date,
            description: description
        }
       props.onSubimitHandler(newExpense)

    }
    return <View style={styles.formContainer}>
        <TextInput placeholder="Type Title Of expense" style={styles.input} value={title} onChangeText={titleHandler} />
        <TextInput placeholder="Type  amount.."
            blurOnSubmit
            keyboardType="number-pad"
            style={styles.input} value={amount} onChangeText={amountHandler} />
        <TextInput
            style={{ ...styles.input, height: 100, alignItems: 'flex-start' }} value={description}
            onChangeText={descriptionHandler} />
        <TouchableOpacity
            style={{overflow:'hidden'}}
            onPress={submitHandler}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttton}>Save</Text>
            </View>
        </TouchableOpacity>
    </View>
}
const styles = StyleSheet.create({
    formContainer: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 6,
        shadowOpacity: 0.6,
        elevation: 5,
        backgroundColor: '#fafafa',
        padding: 20,
        borderRadius: 20,
        marginTop: 40,
        marginHorizontal: 20,
        height: '73%',
    },
    input: {
        borderWidth: 0.1,
        borderColor: '#192734',
        borderRadius: 3,
        margin: 10,
        padding: 5
    },
    buttonContainer: {
        backgroundColor: color.primary,
        width: '50%',
        height: 50,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
        marginHorizontal: 70

    },
    buttton: {
        color: 'white'
    }
})
export default ExpenseForm;