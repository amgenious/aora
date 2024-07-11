import { Image, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from 'expo-router'

export default function Index() {
  const router =useRouter()
  return (
    <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:"#161622"
    }}
  >
    <Image 
    source={require("./../assets/images/logo.png")}
    style={{ height: 30, width: 100,marginBottom:20 }}
    />
    <Image 
    source={require("./../assets/images/cards.png")}
    style={{width:400,height:400,marginBottom:20}}
    />
    <View className="flex items-center relative">
      <Text className="text-white text-4xl font-bold" 
      >Discover Endless</Text>
      <Text className="text-white text-4xl font-bold"
      >Possibilities with <Text style={{color:"#FF8E01"}}>Aora</Text></Text>
      <Image 
      source={require("../assets/images/path.png")}
    style={{
      width:65,height:10,position:"absolute",right:0,bottom:0
    }}
      />
    </View>
    <View className="p-10">
      <Text className="text-white text-center"
      style={{
        fontSize:17,lineHeight:22,
      }}
      >
      Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora
      </Text>
    </View>
    <View>
      <TouchableOpacity
      onPress={()=>router.push("Signup")}
      className="w-80 bg-secondary rounded-xl h-16 flex justify-center items-center"
      >
        <Text
        style={{
         fontWeight:"bold",
          color:"#161622",
          fontSize:17
        }}
        >Continue with Email</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
}
