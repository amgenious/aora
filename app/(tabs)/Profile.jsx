import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Heading from '../../components/ProfileComponents/Heading'
import { Dimensions } from 'react-native'
import Content from '../../components/ProfileComponents/Content'

const Profile = () => {
  return (
    <SafeAreaView
    style={{
      flex: 1,
      backgroundColor: "#161622",
    }}
    >
      <View
        className="w-full flex h-full px-4 my-6"
        style={{
          minHeight: Dimensions.get("window").height - 100,
        }}
      >

    <Heading />
    <Content />
      </View>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({})