import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Search from '../../components/HomeComponents/Search'
import Content from '../../components/HomeComponents/Content'

const Saved = () => {
  return (
    <View
    style={{
      flex: 1,
      backgroundColor: "#161622",
    }}
    >
      <ScrollView>
      <View
       className="w-full flex h-full px-4 my-6"
       style={{
         minHeight: Dimensions.get("window").height - 100,
        }}
        >
      <Text className='text-white text-[30px] font-semibold mt-6'>Saved Videos</Text>
      <Search />
      <Content />
      </View>
        </ScrollView>
    </View>
  )
}

export default Saved

const styles = StyleSheet.create({})