import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const Content = () => {
    const router=useRouter()
  return (
    <View className='flex mt-20 justify-center items-center'>
        <Image 
        className='w-36 h-40'
        source={require("../../assets/images/empty.png")}
        />
        <Text className='text-white text-[18px] mb-2'>No Videos Found</Text>
        <Text className='text-white text-[25px] font-bold mb-5'>No Videos found for this profile</Text>
        <TouchableOpacity
        onPress={()=>router.push("Home")}
                className="w-80 bg-secondary rounded-xl h-16 flex justify-center items-center"
              >
                <Text
                  style={{
                   fontWeight:"bold",
                    color: "#161622",
                    fontSize: 17,
                  }}
                  >
                  Back to Explore
                </Text>
              </TouchableOpacity>
      </View>
  )
}

export default Content

const styles = StyleSheet.create({})