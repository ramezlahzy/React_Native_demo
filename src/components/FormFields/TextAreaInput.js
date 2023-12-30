import {
    Input,
    FormControl,
    TextArea
} from "native-base";


const TextAreaInput = (props) => {
    const { isInvalid, label, name, error, onTextChange, value, placeholder } = props;
    return (
        <FormControl isInvalid={isInvalid}>
            <FormControl.Label _text={{ fontSize: 15, fontFamily: 'regular', marginBottom: -3 }}>{label}</FormControl.Label>
            <TextArea variant="underlined" placeholder={placeholder} name={name} onChangeText={(val) => onTextChange(val)} value={value} fontSize={16} fontFamily={`medium`} fontWeight={600} />
            <FormControl.ErrorMessage _text={{ fontSize: 14, fontFamily: 'regular', color: 'brand.danger' }}>
                {error}
            </FormControl.ErrorMessage>
        </FormControl>
    )
}
export default TextAreaInput;