import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { color } from '../constant/color';

const ExpenseForm = props => {
    const editData = props.updatedExpense;
    let editMode = false;
    if (editData !== undefined) {
        editMode = true;
    }
   
    const [titleErr, setTitleError] = useState(editMode ? false : true);
    const [amountErr, setAmountErr] = useState(editMode ? false : true);
    const [discriptionErr, setDiscriptionErr] = useState(editMode ? false : true)
    const [title, setTitle] = useState(editMode ? editData.title : '');
    const [amount, setAmount] = useState(editMode ? editData.amount.toString() : '');
    const [discription, setDiscription] = useState(editMode ? editData.discription : '')
    const titleHandler = (titleText) => {
        setTitle(titleText)
    }
    const amountHandler = (amountText) => {
        setAmount(amountText)
    }
    const descriptionHandler = (descriptionText) => {
        setDiscription(descriptionText)
    }

    const submitHandler = () => {
        if (titleErr || amountErr || discriptionErr) {
            Alert.alert('Error', 'all field are required. check error on the form')
            return;
        }
        let date = new Date();
        const newExpense = {
            title: title,
            amount: +amount,
            date: date,
            discription: discription
        }
        if (editMode) {
            props.onUpdateHandler({
                title: title,
                amount: +amount,
                discription: discription,
                id: editData.id
            })
        }
        else props.onSubimitHandler(newExpense)

    }
    return <View style={styles.formContainer}>
        <TextInput placeholder="Type Title Of expense"
            testID="title"
            style={{ ...styles.input, borderColor: titleErr ? 'red' : '#192734' }} value={title}
            onChangeText={titleHandler}
            onBlur={() => {
                if (title.length == 0) {
                    setTitleError(true);
                } else setTitleError(false);
            }
            }
        />{titleErr && <Text style={{ color: 'red' }}>Title is required</Text>}
        <TextInput placeholder="Type  amount.."
            blurOnSubmit
            keyboardType="number-pad"
            style={{ ...styles.input, borderColor: amountErr ? 'red' : '#192734' }}
            value={amount}
            onChangeText={amountHandler}
            onBlur={() => {
                if (amount.length == 0 || amount == 0) {
                    setAmountErr(true);
                } else setAmountErr(false);
            }
            }
        />{amountErr && <Text style={{ color: 'red' }}>Amount is required</Text>}
        <TextInput
            style={{ ...styles.input, height: 50, alignItems: 'flex-start' }} value={discription}
            onChangeText={descriptionHandler}
            onBlur={() => {
                if (discription.length == 0) {
                    setDiscriptionErr(true);
                } else setDiscriptionErr(false);
            }
            }
        />{discriptionErr && <Text style={{ color: 'red' }}>Amount is required</Text>}
        <TouchableOpacity
            style={{ overflow: 'hidden' }}
            onPress={submitHandler}
        >
            <View style={styles.buttonContainer}>
                {!editMode && <Text style={styles.buttton}>Save</Text>}
                {editMode && <Text style={styles.buttton}>Update</Text>}
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