import * as React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
const Item = ({ item }) => (
    <View style={styles.container}>
        <Text>{item.title}</Text>
        <Text>{item.amount}</Text>
    </View>
);
const ListExpense = (props) => {
    const renderItem = ({item}) => (
        <Item item={item} />
    )

    return (
        <View>
            <FlatList data={props.expenses} renderItem={renderItem} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        borderWidth: 0.5,
        marginVertical: 5,
        borderColor: 'gray',
        backgroundColor: '#fafafa',
        height: 40,
        padding: 5,
        borderRadius:5
    }
})
export default ListExpense;