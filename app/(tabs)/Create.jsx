import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'

const Create = () => {
  return (
    <View
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
       <Text className='text-white text-[30px] font-semibold mt-6'>Upload Video</Text>
       <View className='mt-5'>
       <View className="flex justify-center mb-8">
              <Text
                style={{
                    fontWeight:"bold",
                    color: "white",
                    fontSize: 17,
                  }}
                  >
                Video Tile
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
                    fontWeight:"medium",
                  }}
                placeholder="Title of your video"
                placeholderTextColor={"#7B7B8B"}
              />
            </View>
            <View className="flex justify-center mb-8">
              <Text
                style={{
                    fontWeight:"bold",
                    color: "white",
                    fontSize: 17,
                  }}
                  >
                Upload Video
              </Text>
              <View
              className='bg-[#1E1E2D] w-full h-40 mt-3 rounded-xl flex justify-center items-center'
              >
                <TouchableOpacity>
                <Image 
                className='w-10 h-10'
                source={require("../../assets/images/upload.png")}
                />
                </TouchableOpacity>
              </View>
            </View>
            <View className="flex justify-center mb-8">
              <Text
                style={{
                    fontWeight:"bold",
                    color: "white",
                    fontSize: 17,
                  }}
                  >
                Thumbnail Image
              </Text>
              <View
              className='bg-[#1E1E2D] w-full h-16 mt-3 rounded-xl flex flex-row justify-center items-center'
              >
                <TouchableOpacity>
                <Image 
                className='w-8 h-8'
                source={require("../../assets/images/upload.png")}
                />
                </TouchableOpacity>
                <Text className='text-white font-semibold ml-1 text-[17px]'> Choose a file</Text>
              </View>
            </View>
            <View className="flex justify-center mb-8">
              <Text
                style={{
                    fontWeight:"bold",
                    color: "white",
                    fontSize: 17,
                  }}
                  >
                AI Prompt
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
                    fontWeight:"medium",
                  }}
                placeholder="The AI prompt of your video..."
                placeholderTextColor={"#7B7B8B"}
              />
            </View>
            <View className="flex justify-center items-center mb-5">
              <TouchableOpacity
                
                className="w-full bg-secondary rounded-xl h-16 flex justify-center items-center"
              >
                <Text
                  style={{
                   fontWeight:"bold",
                    color: "#161622",
                    fontSize: 17,
                  }}
                  >
                  Submit & Publish
                </Text>
              </TouchableOpacity>
            </View>
       </View>
      </View>
    </View>
  )
}

export default Create

const styles = StyleSheet.create({})