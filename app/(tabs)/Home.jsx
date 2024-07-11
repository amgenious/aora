import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import Head from "../../components/HomeComponents/Head";
import Search from "../../components/HomeComponents/Search";
import CarouselComponent from "../../components/HomeComponents/CarouselComponent";
import Content from "../../components/HomeComponents/Content";

const Home = () => {
  return (
    <SafeAreaView
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
          <Head />
          <Search />
          <CarouselComponent />
          <Content />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
