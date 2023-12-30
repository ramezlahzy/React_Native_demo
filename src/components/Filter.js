import { View, Text, StyleSheet } from "react-native";
//import drop downlist
// import { Picker } from "@react-native-picker/picker";
// import DateTimePicker from "@react-native-community/datetimepicker";
import { Dropdown } from 'react-native-element-dropdown';

const Filter = ({ value, onChange }) => {
  return (
    <View
      style={{
        marginHorizontal: 20,
        marginVertical: 10,
        flexDirection: "column",
        display: "flex",
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
            }}
          >
            country
          </Text>
          <View
            style={{
              borderRadius: 100,
              backgroundColor: "white",
              justifyContent: "space-between",
              height: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Picker
              selectedValue={value}
              onValueChange={(itemValue) => onChange(itemValue)}
              style={{
                borderRadius: 10,
                borderColor: "gray",
                borderWidth: 1,
                width: 100,
              }}
            >
              <Picker.Item label="All" value="all" />
              <Picker.Item label="Africa" value="africa" />
              <Picker.Item label="America" value="america" />
              <Picker.Item label="Asia" value="asia" />
              <Picker.Item label="Europe" value="europe" />
              <Picker.Item label="Oceania" value="oceania" />
            </Picker>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        {/* start and end date */}
        <View
          style={{
            flexDirection: "column",
          }}
        >
          <Text>start</Text>
          <View
            style={{
              backgroundColor: "white",
                borderRadius: 100,
            //     justifyContent: "space-between",
                height: 40,
            //     justifyContent: "center",
            //     alignItems: "center",
                width:100
            }}
          >
            <DateTimePicker
              testID="dateTimePicker"
              value={new Date()}
              mode={"date"}
              is24Hour={true}
              display="default"
              onChange={() => {}}
              width={100}
              height={40}
              backgroundColor={'black'}
              label="start date"
            />
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
});

export default Filter;
