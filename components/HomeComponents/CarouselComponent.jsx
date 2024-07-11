import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const data = [
  { id: '1', source: require('../../assets/images/carousel/car1.jpg') },
  { id: '2', source: require('../../assets/images/carousel/car2.jpg') },
  { id: '3', source: require('../../assets/images/carousel/car3.jpg') },
  { id: '4', source: require('../../assets/images/carousel/car4.jpg') },
  { id: '5', source: require('../../assets/images/carousel/car5.jpg') },
  { id: '6', source: require('../../assets/images/carousel/car6.jpg') },
];
const CarouselComponent = () => {
  return (
    <View>
      <Text className="text-white text-[18px] pt-5 mb-5">Trending Videos</Text>
      <FlatList 
      data={data}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item,id})=>(
        <Image source={item.source} key={id}
        style={{width:168, height:268, borderRadius:14, marginRight:15}}
        />
      )}
      />
    </View>
  )
}

export default CarouselComponent

const styles = StyleSheet.create({})