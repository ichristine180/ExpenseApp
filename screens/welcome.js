import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { color } from '../constant/color';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';
import { logout } from '../store/actions/auth'
const WelcomeScreen = (props) => {
    const { navigation } = props
    const dispatch = useDispatch()
    React.useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (<MaterialIcons name='logout' size={40} color='white' onPress={() => {
                navigation.push('Authenticate')
                dispatch(logout())
            }} />)
        })
    }, [navigation])

    return (
        <View style={styles.screen}>
            <View style={styles.card}>
                <View style={styles.container}>
                    <TouchableOpacity>
                        <Image
                            style={{ width: 100, height: 90 }}
                            source={require('../assets/images/income.png')}
                        />
                        <Text style={styles.text}>Income</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={{ width: 100, height: 90 }}
                            source={require('../assets/images/budgets.png')}
                        />
                        <Text style={styles.text}>Budgets</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ ...styles.container, marginVertical: 40 }}>
                    <TouchableOpacity style={{ marginRight: 10 }} onPress={() => {
                        props.navigation.navigate('expenses')
                    }}>
                        <Image
                            style={{ width: 100, height: 90 }}
                            source={require('../assets/images/expenses.png')}
                        />
                        <Text style={styles.text}>Expenses</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={{ width: 100, height: 90 }}
                            source={require('../assets/images/save.png')}
                        />
                        <Text style={styles.text}>Savings</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        margin: 50,
        marginVertical: 100,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',


    },
    card: {
        width: '100%',
        backgroundColor: color.secondary,
        padding: 30,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 6,
        shadowOpacity: 0.6,
        elevation: 5,

    },
    text: {
        fontFamily: 'open-sans-bold',
        fontSize: 23,
        color: color.primary
    }

})
export default WelcomeScreen;