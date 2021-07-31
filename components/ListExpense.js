import * as React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView} from 'react-native';
import { color } from '../constant/color';
const Item = ({ item }) => (
    <View style={styles.container}>
        <Text style={styles.text}>{item.title}</Text>
        
        <Text style={{ ...styles.text, color: 'pink' }}><Text style={styles.currency}>Rwf</Text>{item.amount}</Text>
    </View>
);
const ListExpense = (props) => {
    const renderItem = ({item}) => (
        <Item item={item} />
    )

    return (
        <View style={{
            flex: 1,
           }}>
            <FlatList data={props.expenses} renderItem={renderItem} style={{ flexGrow: 1, }}/>
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
        borderRadius:5
    },
    text: {
        fontFamily: 'open-sans-bold',
        fontSize:20,

    },
    currency: {
        color: color.primary,
        marginRight: 2,
        fontSize: 10,
        fontFamily: 'open-sans'
    }
})
export default ListExpense;