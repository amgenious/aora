import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const data = [
    { id: '1', profile:require('../../assets/images/content/pro1.jpg'), source: require('../../assets/images/content/pro1_con1.jpeg'), title:"Risks of high uv lights", subtitle:"Kofi Puo" },
    { id: '2', profile:require('../../assets/images/content/pro2.jpg'), source: require('../../assets/images/content/pro2_con2.jpg'),title:"Food and how to eat it", subtitle:"Nana Yaw" },
    { id: '3', profile:require('../../assets/images/content/pro3.jpg'), source: require('../../assets/images/content/pro3_con3.jpeg'),title:"Clothes of 21st Century", subtitle:"Blessing Awoni" },

  ];
  
const Content = () => {
  return (
    <View className='pt-10'>
       <FlatList 
      data={data}
      renderItem={({item,id})=>(
        <View className='h-[265px] mb-8' key={id}>
        <View className='flex flex-row justify-between'>
            <View className='flex flex-row gap-3 justify-center'>      
          <Image source={item.profile}
          style={{width:46, height:46, borderRadius:8,}}
          />
          <View>
            <Text
            className='text-white text-[18px] font-extrabold'
            >{item.title}</Text>
            <Text
            className='text-white text-[12px]'
            >{item.subtitle}</Text>
          </View>
            </View>
            <TouchableOpacity>
            <Ionicons name="ellipsis-vertical" size={24} color="white" />
            </TouchableOpacity>
          </View>
            <Image 
            className=' h-52 w-full rounded-xl mt-3'
            source={item.source}
            />
        </View>
        )}
        />
        
    </View>
  )
}

export default Content

const styles = StyleSheet.create({})