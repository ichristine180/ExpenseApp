import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DropDownPicker from "react-native-custom-dropdown";
import Icon from 'react-native-vector-icons/Feather';
import { months } from '../data/Months';
const MonthDropdown = () => {
    const currentMo = new Date().getMonth()
    const [month, setMonth] = useState(months[currentMo].value)
    
    return (
        <DropDownPicker
            items={months}
            defaultValue={month}
            containerStyle={{ height: 40, marginHorizontal: 15, marginVertical: 15,marginBottom:155 }}
            style={{ backgroundColor: '#fafafa' }}
            itemStyle={{
                justifyContent: 'flex-start'
            }}
            dropDownStyle={{ backgroundColor: '#fafafa' }}
            onChangeItem={item => setMonth(item.value)
            }

            searchable={true}
            searchablePlaceholder="Search month"
            searchablePlaceholderTextColor="gray"
            searchableError={() => <Text> Month Not Found</Text>}
            isVisible={true}
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