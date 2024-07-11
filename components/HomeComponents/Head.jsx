import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Head = () => {
  return (
    <View
    className="w-[100%] p-5 flex flex-row items-center justify-between"
    >
        <View>
       <Text className="text-white text-[20px]">Welcome Back</Text>
        <Text className="text-white text-[30px] font-bold">AmGenious</Text>
        </View>
        <View>
            <Image
             className="w-11 h-12"
            source={require("../../assets/images/logo-small.png")}
            />
        </View>
    </View>
  )
}

export default Head

const styles = StyleSheet.create({})
