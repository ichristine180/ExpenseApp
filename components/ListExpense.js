import * as React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { color } from '../constant/color';
import { useDispatch } from 'react-redux';
import { deleteExpense } from '../store/actions/expenses';
const Item = ({ item }) => (
    <View style={styles.container}>
        <Text style={styles.text}>{item.title}</Text>

        <Text style={{ ...styles.text, color: 'pink' }}><Text style={styles.currency}>Rwf</Text>{item.amount}</Text>
    </View>
);
const ListExpense = (props) => {
    const [err, setErr] = React.useState();
    const dispatch = useDispatch()

    const deleteExpenses = React.useCallback(async (id) => {
       try {
           setErr(null);
           await dispatch(deleteExpense(id))
       } catch (error) {
           setErr(error);
       }
    })
    React.useEffect(() => {
        if (err){
            Alert.alert(
                "Error",
                err.message,
                [
                    {
                        text: "Okay",
                        style: "cancel"
                    }
                ]
            )
    }
    },[err])
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => {
            Alert.alert(
                "Warning",
                "Are You sure you want to delete this?",
                [
                    {
                        text: "No",
                        style: "cancel"
                    },
                    {
                        text: "Yes", onPress: () => {
                            deleteExpenses(item.id)

                        }
                    }
                ]
            );

        }}
            onLongPress={() => {
                props.navigation.navigate('AddExpense', {
                    expense: item
                })
            }}


        >
            <Item item={item} />
        </TouchableOpacity>
    )

    return (
        <View style={{
            flex: 1,
        }}>
            <FlatList data={props.expenses} renderItem={renderItem}
                style={{ flexGrow: 1, }}
                onRefresh={props.loadExpenses}
                refreshing={ props.isRefreshing}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        borderWidth: 0.5,
        marginVertical: 5,
        borderColor: 'gray',
        backgroundColor: '#fafafa',
        height: 40,
        padding: 5,
        borderRadius: 5
    },
    text: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,

    },
    currency: {
        color: color.primary,
        marginRight: 2,
        fontSize: 10,
        fontFamily: 'open-sans'
    }
})
export default ListExpense;