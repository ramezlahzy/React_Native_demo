import {
    Input,
    FormControl,
} from "native-base";


const UnderlinedTextInput = (props) => {
    const { isInvalid, label, name, error, onTextChange, value, type, isPassword } = props;
    return (
        <FormControl isInvalid={isInvalid}>
            <FormControl.Label _text={{ fontSize: 15, fontFamily: 'regular', marginBottom: -3 }}>{label}</FormControl.Label>
            <Input secureTextEntry={isPassword ? true : false} keyboardType={type ? type : `default`} variant="underlined" name={name} onChangeText={(val) => onTextChange(val)} value={value} fontSize={16} fontFamily={`medium`} fontWeight={600} />
            <FormControl.ErrorMessage _text={{ fontSize: 14, fontFamily: 'regular', color: 'brand.danger' }}>
                {error}
            </FormControl.ErrorMessage>
        </FormControl>
    )
}
export default UnderlinedTextInput;