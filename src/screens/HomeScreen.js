import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
  TextInput,
} from "react-native";
import React from "react";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import TravelImage from "../../assets/travel.jpg";
const ios = Platform.OS == "ios";
const topMargin = ios ? "mt-3" : "mt-10";
import Filter from "../components/Filter";
import FilterForm from "../components/FilterForm";
import Dialog from "react-native-dialog";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
export default function HomeScreen() {
  const [visible, setVisible] = useState(false);

  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleDelete = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    setVisible(false);
  };

  return (
    <SafeAreaView
      className="flex-1 bg-white"
      style={{
        backgroundColor: "#86B6F6",
      }}
    >
      <Dialog.Container visible={visible}>
        {/* <Dialog.Title>Account delete</Dialog.Title>
        <Dialog.Description>
          Do you want to delete this account? You cannot undo this action.
        </Dialog.Description> */}
        <FilterForm />
        <Dialog.Button label="Cancel" onPress={handleCancel} />
        <Dialog.Button label="Delete" onPress={handleDelete} />
      </Dialog.Container>

      <ScrollView
        showsVerticalScrollIndicator={false}
        className={"space-y-6 " + topMargin}
        style={{
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            backgroundColor: "#86B6F6",
            //border radius bottom
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              textAlign: "center",
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            Search on your travel
          </Text>
          <View 
          style={{
            flexDirection:'row',
            backgroundColor:'white',
            padding:10,
            borderRadius:100,
            justifyContent:'center',
            alignItems:'center',
            gap:3,
            marginHorizontal:10,

          }}
          >
            <MagnifyingGlassIcon size={20} strokeWidth={3} color="gray" />
            <TextInput
              placeholder="Search destination"
              placeholderTextColor={"gray"}
              className="flex-1 text-base mb-1 pl-1 tracking-wider"
            />
          </View>
          <View
            style={{
              flexDirection: "row-reverse",
              marginVertical:10
            }}
          >
            <TouchableOpacity
              onPress={showDialog}
              style={{
                backgroundColor: "white",
                margin: 10,
                alignSelf: "flex-end",
                padding: 10,
                borderRadius: 100,

              }}
            >
              <Ionicons name="filter" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              // onPress={showDialog}
              style={{
                backgroundColor: "black",
                margin: 10,
                flex: 1,
                // alignSelf: "flex-end",
                padding: 10,
                borderRadius: 100,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: "white",
                  textAlign: "center",
                  fontSize: 20,
                }}
              >
                Search
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <Image
          source={TravelImage}
          style={{
            resizeMode: "cover",
            width: "100%",
            height: ios ? 250 : 300,
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
