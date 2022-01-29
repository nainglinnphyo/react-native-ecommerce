import React, { useEffect, useState } from "react";
import { View, Text, Box, Icon, Input } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import SearchProduct from "../product/SearchProduct";
const products = require('../../../assets/data/products.json')

const SearchScreen = ({ navigation }) => {
    const [productsFiltered, setProductsFiltered] = useState([]);

    useEffect(() => {
        setProductsFiltered(products)
    }, [])
    const searchProduct = (text) => {
        setProductsFiltered(
          products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
        );
      };
      
  return (
    <View>
      <Box
        safeArea
        marginTop={2}
        marginBottom={2}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"row"}
      >
        <Pressable onPress={() => navigation.goBack()}>
          <Icon
            ml="2"
            size="8"
            color="gray.500"
            as={<Ionicons name="ios-arrow-back" />}
          />
        </Pressable>
        <Input
          onChangeText={(text) => searchProduct(text)}
          marginLeft={2}
          placeholder="Search"
          variant="filled"
          width="85%"
          bg="transparent"
          borderRadius="20"
          backgroundColor={"gray.200"}
          py="1"
          px="2"
          placeholderTextColor="gray.500"
          _hover={{ bg: "gray.200", borderWidth: 0 }}
          borderWidth="0"
          _web={{
            _focus: { style: { boxShadow: "none" } },
          }}
          InputLeftElement={
            <Icon
              ml="2"
              size="5"
              color="gray.500"
              as={<Ionicons name="ios-search" />}
            />
          }
        />
      </Box>
      <View>
          <SearchProduct productsFiltered={productsFiltered}/>
      </View>
    </View>
  );
};

export default SearchScreen;
