import * as React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const ExpenseForm = props => {
    return <View style={styles.formContainer}>
        <TextInput placeholder="Type Title Of expense" style={ styles.input}/>
        <TextInput placeholder="Type Title Of amount.." style={styles.input}/>
        <TextInput 
            style={{ ...styles.input, height: 200, alignItems: 'flex-start' }} />
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
        height:'70%'
    },
    input: {
        borderWidth: 0.1,
        borderColor: '#192734',
        borderRadius: 3,
        margin: 10,
        padding:5
    }
})
export default ExpenseForm;