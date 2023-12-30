import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
    View,
    Box,
    Stack,
    Text,
    Input,
    Select,
    FormControl,
    Heading,
    Icon
} from "native-base";
//import Autocomplete component
import { Dropdown } from 'react-native-element-dropdown';
import theme from '../../../assets/styles/theme';
import Styles from "../../../assets/styles/CustomStyle";

const SingleSelect = (props) => {
    const { data, placeholder, labelField, valueField, onValueChange, search, isInvalid, label, error, value } = props;
    //const [value, setValue] = useState(null);

    return (
        <FormControl isInvalid={isInvalid}>
            <FormControl.Label _text={Styles.inputFieldLabel}>{label}</FormControl.Label>
            <Dropdown
                style={isInvalid ? styles.dropdownInvalid : styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                itemTextStyle={styles.itemTextStyle}
                data={data}
                search={search}
                maxHeight={300}
                labelField={labelField}
                valueField={valueField}
                placeholder={placeholder}
                searchPlaceholder="Search..."
                value={value}
                onChange={item => {
                    onValueChange(item[valueField]);
                    //setValue(item.value);
                }}
            // renderLeftIcon={() => (
            //     <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
            // )}
            />
            <FormControl.ErrorMessage _text={Styles.inputFieldError}>
                {error}
            </FormControl.ErrorMessage>
        </FormControl>
    );
}
export default SingleSelect;


const styles = StyleSheet.create({
    dropdown: {
        //margin: 16,
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
    },
    dropdownInvalid: {
        height: 50,
        borderBottomColor: 'rgb(220, 38, 38)',
        borderBottomWidth: 1,
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 16,
        fontFamily: theme.fonts.regular
    },
    selectedTextStyle: {
        fontSize: 16,
        fontFamily: theme.fonts.medium
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
        borderRadius: 10,
        fontFamily: theme.fonts.regular
    },
    itemTextStyle: {
        fontSize: 16,
        fontFamily: theme.fonts.medium
    }
});