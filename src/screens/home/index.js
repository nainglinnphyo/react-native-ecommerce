import { Box } from "native-base";
import React, { useEffect, useState } from "react";
import { Dimensions, Pressable } from "react-native";
import { ScrollView, Image, Text, View } from "native-base";
import Header from "../../../shared/Header";
import Banner from "../../../shared/Banner";
import MostSale from "../product/MostSale";

import CategoryComponent from "./CategoryComponent";
const products = require('../../../assets/data/products.json')
const categories = require("../../../assets/data/categories.json");

const { width, height } = Dimensions.get("screen");

const HomeScreen = ({navigation}) => {
  return (
    <View style={{ marginHorizontal: 10 }}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Banner/>
        <CategoryComponent navigation={navigation} products={products} categories={categories}/>
        <Text fontSize='lg' fontWeight='bold' letterSpacing='xl'>Best Sale</Text>
        <Text fontSize='xs' fontWeight='bold' letterSpacing='xl'>Recommanded for you</Text>
        <MostSale products={products}/>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
