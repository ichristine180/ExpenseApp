import * as React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import NumberFormat from 'react-number-format';
import { color } from '../constant/color';
const SummaryScreen = () => {
    return (
        <View style={{ margin: 20,marginVertical:90 }}>
            <View style={styles.card}>
                <View style={styles.container}>
                    <Text style={{ ...styles.title, fontSize: 14 }}>Tot Expenses:</Text>
                    <Text style={{...styles.subTitle,fontSize:20}}>49</Text>
                </View>

                <View style={styles.container}>
                    <Text style={{ ...styles.title, fontSize: 14 }}>Tot Amount Spended:
                    </Text>
                    <NumberFormat
                        value={10000000}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'RWF '}
                        renderText={formattedValue => <Text style={styles.subTitle}>{formattedValue}</Text>}
                    />
                </View>
                <View style={styles.container}>
                    <Text style={{ ...styles.title, fontSize: 14 }}>Spended More Money In:</Text>
                    <Text style={{...styles.subTitle,fontSize:20}}>July</Text>
                </View>
                <View style={styles.container}>
                    <Text style={{ ...styles.title, fontSize: 14 }}>Spended Less Money In</Text>
                    <Text style={{ ...styles.subTitle, fontSize: 20 }}>december</Text>
                </View>

                <View style={styles.container}>
                    <Text style={{...styles.title,fontSize:14}}>The Most Expensive Expense </Text>
                    <Text style={{ ...styles.subTitle, fontSize: 20 }}>Cooker</Text>
                </View>
            </View>
           
            <View style={{ ...styles.card, ...styles.conclusion }}>
                <View style={styles.container}>
                <Text style={styles.title}>Earned: </Text>
                <NumberFormat
                    value={10000000}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'RWF '}
                        renderText={formattedValue => <Text style={styles.subTitle}>{formattedValue}</Text>}
                />
                </View>
                <View style={styles.container}>
                    <Text style={styles.title}>Budget: </Text>
                <NumberFormat
                    value={500000}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'RWF '}
                        renderText={formattedValue => <Text style={styles.subTitle}>{formattedValue}</Text>}
                    />
                </View>
                <View style={styles.container}>
                    <Text style={styles.title}>Spended: </Text>
                <NumberFormat
                    value={200000000}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'RWF '}
                        renderText={formattedValue => <Text style={styles.subTitle} >{formattedValue}</Text>}
                        />
                    </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 6,
        shadowOpacity: 0.6,
        elevation: 5,
        backgroundColor: '#fafafa',
        borderWidth: 1,
        borderColor: '#fafafa',
        borderRadius: 10,
        padding:20
    },
    conclusion: {
        marginVertical: 80,
       
        
    },
    container: {
        flexDirection:'row',
        justifyContent: 'flex-start',
        justifyContent: 'space-between',
       
    },
    title: {
        fontFamily: 'open-sans-bold',
        justifyContent: 'flex-start',
        fontSize: 23,
        color: color.primary,
      
    },
    subTitle: {
        fontFamily: 'open-sans',
        fontSize: 15,
        color: '#330000',
        // marginStart: 20
        
    }
})
export default SummaryScreen;