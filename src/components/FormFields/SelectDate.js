import React, { useState } from 'react';
import {
    Input,
    FormControl,
    Pressable,
    Icon
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

const SelectDate = (props) => {
    const { isInvalid, label, name, error, onTextChange, value, mode } = props;
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date());
    //const [mode, setMode] = useState('date');

    const onChange = (event, selectedDate) => {
        let currentDate = moment(selectedDate).format((mode === 'date') ? 'DD-MM-YYYY' : 'HH:mm');
        setShow(false);
        setDate(selectedDate);
        onTextChange(currentDate)
    };
    return (
        <FormControl isInvalid={isInvalid}>
            <FormControl.Label _text={{ fontSize: 15, fontFamily: 'regular', marginBottom: -3 }}>{label}</FormControl.Label>
            <Input isReadOnly={true} variant="underlined" name={name} onChangeText={(val) => onTextChange(val)} value={value} fontSize={16} fontFamily={`medium`} fontWeight={600}
                InputRightElement={<Pressable onPress={() => setShow(!show)}><Icon as={<MaterialIcons name={(mode !== 'date') ? "access-time" : 'date-range'} />} size={6} color="muted.500" /></Pressable>}
            />
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    onChange={onChange}
                    themeVariant="dark"
                />
            )}
            <FormControl.ErrorMessage _text={{ fontSize: 14, fontFamily: 'regular', color: 'brand.danger' }}>
                {error}
            </FormControl.ErrorMessage>
        </FormControl>
    )
}
export default SelectDate;

// // import React in our code
// import React, { useState } from 'react';

// // import all the components we are going to use
// import {
//     SafeAreaView,
//     ScrollView,
//     StyleSheet,
//     View,
//     Text,
//     StatusBar,
//     Button,
//     Platform,
//     TextInput,
//     useColorScheme,
//     Switch,
//     Alert,
// } from 'react-native';

// //import DatePicker from the package we installed
// import DateTimePicker from '@react-native-community/datetimepicker';
// import moment from 'moment';

// // const MODE_VALUES = Platform.select({
// //     ios: Object.values(IOS_MODE),
// //     android: Object.values(ANDROID_MODE),
// //     windows: [],
// // });

// const SelectDate = (props) => {
//     const sourceMoment = moment.unix(1636797600);
//     const sourceDate = sourceMoment.local().toDate();
//     const [date, setDate] = useState(sourceDate);
//     const [tzOffsetInMinutes, setTzOffsetInMinutes] = useState(undefined);
//     const [mode, setMode] = useState('android');
//     const [show, setShow] = useState(false);
//     const [textColor, setTextColor] = useState();
//     const [accentColor, setAccentColor] = useState();
//     const [display, setDisplay] = useState('android');
//     const [interval, setMinInterval] = useState(1);
//     const [neutralButtonLabel, setNeutralButtonLabel] = useState(undefined);
//     const [disabled, setDisabled] = useState(false);
//     const [minimumDate, setMinimumDate] = useState();
//     const [maximumDate, setMaximumDate] = useState();

//     // Windows-specific
//     const [time, setTime] = useState(undefined);
//     const [maxDate, setMinDate] = useState(new Date('2021'));
//     const [minDate, setMaxDate] = useState(new Date('2018'));
//     const [is24Hours, set24Hours] = useState(false);
//     //const [firstDayOfWeek, setFirstDayOfWeek] = useState(DAY_OF_WEEK.Monday);
//     const [dateFormat, setDateFormat] = useState('longdate');

//     return (
//         <SafeAreaView style={styles.container}>
//             <View style={styles.container}>
//                 <Text style={styles.title}>
//                     React Native Date Picker – To Pick the Date using Native Calendar
//                 </Text>
//                 <DateTimePicker
//                     testID="dateTimePicker"
//                     timeZoneOffsetInMinutes={tzOffsetInMinutes}
//                     minuteInterval={interval}
//                     maximumDate={maximumDate}
//                     minimumDate={minimumDate}
//                     value={date}
//                     mode={mode}
//                     is24Hour
//                     display={display}
//                     onChange={(val) => alert(val)}
//                     textColor={textColor || undefined}
//                     accentColor={accentColor || undefined}
//                     neutralButton={{ label: neutralButtonLabel }}
//                     negativeButton={{ label: 'Cancel', textColor: 'red' }}
//                     disabled={disabled}
//                 />
//             </View>
//         </SafeAreaView>
//     );
// };

// export default SelectDate;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 10,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     title: {
//         textAlign: 'center',
//         fontSize: 20,
//         fontWeight: 'bold',
//         padding: 20,
//     },
//     datePickerStyle: {
//         width: 200,
//         marginTop: 20,
//     },
// });
