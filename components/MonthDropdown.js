import * as React from 'react';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DropDownPicker from "react-native-custom-dropdown";
import Icon from 'react-native-vector-icons/Feather';

const MonthDropdown = () => {
    const [country, setCountry] = useState({ label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" /> })
    const [month,]
    return (
        <DropDownPicker
            items={[
                { label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" /> },
                { label: 'France', value: 'france', icon: () => <Icon name="flag" size={18} color="#900" /> },
            ]}
            defaultValue={country.value}
            containerStyle={{ height: 40 ,marginHorizontal:15,marginVertical:15}}
            style={{ backgroundColor: '#fafafa' }}
            itemStyle={{
                justifyContent: 'flex-start'
            }}
            dropDownStyle={{ backgroundColor: '#fafafa' }}
            onChangeItem={item => setCountry(item)
            }
        />
       
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center"
    }
});
export default MonthDropdown;