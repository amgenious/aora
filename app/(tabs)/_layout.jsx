import { StyleSheet} from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';

const TabLayout = () => {
  return (
    <Tabs screenOptions={{
        headerShown:false,
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 55,
          paddingBottom:5 
        }
      }}>
        <Tabs.Screen 
        name='Home'
        options={{tabBarLabel:'Home',
            tabBarIcon:({color}) =><Ionicons name="home" size={24} color={color} />
            }}
        />
        <Tabs.Screen 
        name='Create'
        options={{tabBarLabel:'Create',
            tabBarIcon:({color}) =><Ionicons name="add" size={24} color={color} />
            }}
        />
        <Tabs.Screen 
        name='Profile'
        options={{tabBarLabel:'Profile',
            tabBarIcon:({color}) =><Ionicons name="people" size={24} color={color} />
            }}
        />
        <Tabs.Screen 
        name='Saved'
        options={{tabBarLabel:'Saved',
            tabBarIcon:({color}) =><Ionicons name="bookmark" size={24} color={color} />
            }}
        />
       </Tabs>
  )
}

export default TabLayout

const styles = StyleSheet.create({})