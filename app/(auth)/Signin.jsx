import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    SafeAreaView,
    ScrollView,
    Dimensions,
  } from "react-native";
import React from 'react'
import { useNavigation, useRouter } from "expo-router";
import { useEffect } from "react";

const Signin = () => {
    const router = useRouter();
    const navigaton = useNavigation();
    useEffect(() => {
      navigaton.setOptions({
        headerShown: false,
      });
    }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#161622",
        padding: 10,
      }}
    >
      <ScrollView>
        <View
         className="w-full flex justify-center h-full px-4 my-6"
         style={{
           minHeight: Dimensions.get("window").height - 100,
         }}

        >

        <Image
          source={require("../../assets/images/logo.png")}
          style={{ height: 35, width: 120, marginBottom: 30 }}
          />
        <Text
          style={{
            fontWeight: "medium",
            fontSize: 30,
            color: "white",
            marginBottom: 30,
        }}
        >
          Sign in
        </Text>
        <View>
          <View className="flex justify-center mb-10">
            <Text
              style={{
                  fontWeight: "medium",
                  color: "white",
                  fontSize: 17,
                }}
                >
              Email
            </Text>
            <TextInput
            className=" border-black-200 focus:border-secondary"
              keyboardType="email-address"
              style={{
                  padding: 10,
                  color: "white",
                  borderWidth: 1,
                  borderRadius: 10,
                  fontSize: 17,
                  backgroundColor: "#1E1E2D",
                  marginTop: 10,
                  fontWeight: "medium",
                }}
              placeholder="Your email address"
              placeholderTextColor={"#7B7B8B"}
            />
          </View>
          <View className="flex justify-center mb-10">
            <Text
              style={{
                  fontWeight: "medium",
                  color: "white",
                  fontSize: 17,
                }}
                >
              Password
            </Text>
            <TextInput
             className=" border-black-200 focus:border-secondary"
              keyboardType="visible-password"
              style={{
                  padding: 10,
                  color: "white",
                  borderWidth: 1,
                  borderRadius: 10,
                  fontSize: 17,
                  backgroundColor: "#1E1E2D",
                  marginTop: 10,
                  fontWeight: "medium",
                }}
                placeholder="Your password"
                placeholderTextColor={"#7B7B8B"}
                />
          </View>
          <View className="w-full pb-4">
            <TouchableOpacity>
                <Text  
                className="text-white text-right">Forgot password</Text>
            </TouchableOpacity>
          </View>
          <View className="flex justify-center items-center mb-5">
            <TouchableOpacity
              onPress={()=>router.push("Home")}
              className="w-80 bg-secondary rounded-xl h-16 flex justify-center items-center"
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#161622",
                  fontSize: 17,
                }}
                >
                Log in
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex justify-center items-center">
            <TouchableOpacity
            onPress={()=> router.push("Signup")}
            >
                <Text
                style={{
                    fontSize:17
                }}
                className="text-white"
                >Don't have an account? <Text className="text-secondary">Signup</Text></Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Signin

const styles = StyleSheet.create({})