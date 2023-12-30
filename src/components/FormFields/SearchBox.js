import { useEffect, useState } from "react";
import {
    Dimensions,
    TouchableHighlight,
    RefreshControl,
    ActivityIndicator,
    Linking,
    Keyboard
} from 'react-native';
import {
    View,
    Input,
    IconButton,
    Box,
    Stack,
    HStack,
    VStack,
    Center,
    Text,
    Icon,
    Badge,
    Divider,
    Fab,
    Actionsheet,
    useDisclose,
    Button,
    Pressable,
    ScrollView,
    FlatList,
    Avatar,
    Spacer
} from "native-base";

import { MaterialIcons, MaterialCommunityIcons, FontAwesome5, AntDesign, Feather, EvilIcons } from "@expo/vector-icons";

export default function SearchBox(props) {
    const { setSearchText, filterAction, clearAction } = props;
    const [inputVal, SetInputVal] = useState('');
    const [isSearchActive, SetIsSearchActive] = useState(false);

    const handleTextChange = (val) => {
        SetInputVal(val);
        setSearchText(val);
    }
    const handlerFilterAction = () => {
        SetIsSearchActive(true);
        filterAction()
    }
    const handlerClearAction = () => {
        Keyboard.dismiss();
        SetIsSearchActive(false);
        clearAction();
        SetInputVal('');
        setSearchText('');
    }
    return (
        <Box px={3} safeAreaTop={2}>
            <Input
                placeholder="Search here.."
                rounded={`xl`}
                fontFamily={`medium`}
                fontSize={16}
                focusOutlineColor={'brand.highlight'}
                _focus={{
                    backgroundColor: "none"
                }}
                onChangeText={(val) => handleTextChange(val)}
                value={inputVal}
                InputLeftElement={<Icon as={MaterialIcons} name="search" ml={2} size={6} />}
                InputRightElement={
                    (!isSearchActive) ?
                        <IconButton borderLeftWidth={0.8} borderColor={`brand.grey`} bg={`brand.light_grey`} variant={`solid`} rounded="none" w="1/6" h="full" _icon={{
                            as: MaterialIcons,
                            name: "filter-alt",
                            color: 'brand.black',
                            size: 6
                        }}
                            onPress={() => handlerFilterAction()}
                            _pressed={{ opacity: 0.5 }}
                        />
                        :
                        <IconButton borderLeftWidth={0.8} borderColor={`brand.grey`} bg={`brand.light_grey`} variant={`solid`} rounded="none" w="1/6" h="full" _icon={{
                            as: MaterialIcons,
                            name: "close",
                            color: 'brand.black',
                            size: 6
                        }}
                            onPress={() => handlerClearAction()}
                            _pressed={{ opacity: 0.5 }}
                        />
                }
            />
        </Box>
    )
}