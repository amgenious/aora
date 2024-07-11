import { Image, StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

const Search = () => {
  return (
    <View
    className='relative'
    >
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
                placeholder="Search for a video topic"
                placeholderTextColor={"#7B7B8B"}
                />
                <Image 
                className="absolute w-4 h-4 bottom-4 right-3"
                source={require('../../assets/images/search.png')}
                />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})