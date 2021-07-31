import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text} from 'react-native';
import DropDownPicker from "react-native-custom-dropdown";
import { months } from '../data/Months';
const MonthDropdown = (props) => {
    const currentMo = new Date().getMonth()
    const [month, setMonth] = useState(months[currentMo].value)
    
    return (
        <DropDownPicker
            items={months}
            defaultValue={month}
            containerStyle={{ height: 40, marginHorizontal: 15, marginVertical: 15,marginBottom:155 }}
            style={{ backgroundColor: '#fafafa' }}
            itemStyle={{
                justifyContent: 'flex-start',
                
            }}
            dropDownStyle={{ backgroundColor: '#fafafa' }}
            onChangeItem={item => {
                setMonth(item.value);
                props.onChange(item.value)
            }
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
        paddingTop: 40,
        alignItems: "center"
    }
});
export default MonthDropdown;