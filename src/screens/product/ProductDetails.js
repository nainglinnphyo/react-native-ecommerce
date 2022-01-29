import React from "react";
import { View, Text, Box, Pressable, Icon, Image } from "native-base";
import { Dimensions,Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const { width, height } = Dimensions.get("screen");

const ProductDetails = ({ route, navigation }) => {
  const { product } = route.params;
  return (
    <Box safeArea>
      <Pressable onPress={() => navigation.goBack()}>
        <Icon
          ml="2"
          size="8"
          color="gray.500"
          as={<Ionicons name="ios-arrow-back" />}
        />
      </Pressable>
      <View style={{ alignItems: "center",marginTop:10}}>
        <Image
          alt={product.name}
          resizeMode="cover"
          width='100%'
          height={height / 2 - 35}
          source={{ uri: product.image }}
        />
        <View
          bgColor="gray.200"
          width="100%"
          style={{height:'100%',paddingHorizontal:20}}

        >
          <Text mt={5} fontWeight="bold" fontSize="xl" letterSpacing="xl">
            {product.name}
          </Text>
          <View flexDir='row' alignItems='center'>
            <Text color="orange.600" fontSize='md' fontWeight="bold">
              {product.price} Ks
            </Text>
            {product.oldPrice && (
              <Text
                style={{
                  textDecorationLine: "line-through",
                  marginHorizontal: 5,
                }}
                fontSize="xs"
              >
                {product.oldPrice} Ks
              </Text>
            )}
          </View>
            {product.avaliableColor && <Text mt={1}>Avaliable Color</Text>}
            {product.avaliableColor && <View style={{flexDirection:'row'}}>{product.avaliableColor.map((color)=>(<View style={{flexDirection:'row'}}><View style={{marginHorizontal:1,borderRadius:50,width:20,height:20,backgroundColor:color}}></View></View>))}</View>} 
            <Text marginTop={15} fontSize="sm">{product.description}</Text>
          <View  style={{marginTop:100}} >
            <Button title="Add to cart"/>
          </View>
        </View>
      </View>
      
    </Box>
  );
};

export default ProductDetails;
