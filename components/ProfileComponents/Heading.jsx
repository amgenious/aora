import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const Heading = () => {
  const router = useRouter()
  return (
    <View className='flex justify-center items-center relative'>
        <Image 
        className='w-24 h-24 mt-10'
        source={require("../../assets/images/web.png")}
        />
      <Text className='text-white font-bold text-[30px] mb-3'>Amgenious</Text>
      <View className='flex flex-row justify-around gap-10'>
            <View className='flex justify-center'>
                <Text className='text-white font-semibold text-center text-[30px]'>0</Text>
                <Text className='text-white text-[12px]'>Posts</Text>
            </View>
            <View>
            <Text className='text-white font-semibold text-center text-[30px]'>0</Text>
            <Text className='text-white text-[12px]'>Views</Text>
            </View>
      </View>
      <TouchableOpacity
      onPress={()=>router.push("Signin")}
      className="absolute top-6 right-5"
      >
      <Image 
      className=' w-5 h-5'
      source={require("../../assets/images/logout.png")}
      />
      </TouchableOpacity>
    </View>
  )
}

export default Heading

const styles = StyleSheet.create({})