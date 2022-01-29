import React, { useEffect, useMemo } from "react";
import MasonryList from "@react-native-seoul/masonry-list";
import { View, Image, Text, ScrollView, FlatList, Pressable } from "native-base";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";


const { width, height } = Dimensions.get("screen");

const CardItem = ({ item }) => {
  
  const navigation = useNavigation();
  const randomBool = useMemo(() => Math.random() < 0.5, []);
  return (
    <Pressable onPress={() => navigation.navigate("Details",{product:item})}>
      {({ isPressed }) => {
        return (
          <View
            key={item.name}
            marginHorizontal={2}
            marginTop={1}
            bg={isPressed ? "gray.300" : "gray.100"}
            shadow={2}
            borderColor="gray.200"
            style={{
              // width: width / 2 - 20,
              marginHorizontal: 2,
              marginBottom: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
            borderWidth="1"
          >
            <Image
              resizeMode="cover"
              style={{
                height: randomBool ? height/4-30 : height / 4,
                alignSelf: 'stretch',
              }}
              // style={{ width: width / 2 - 10, height: height / 4 }}
              source={{ uri: item.image }}
              alt={item.name}
            />
            <Text fontWeight='bold' letterSpacing="2xl">
              {item.name}
            </Text>
            <View marginBottom={2} alignItems='center' flexDir='row'>
                <Text color="orange.500" style={{marginHorizontal:5}}>
                {item.price} Ks
                </Text>
                {item.oldPrice && <Text style={{textDecorationLine:'line-through'}} fontSize='xs'>{item.oldPrice} Ks</Text>}
            </View>
            
          </View>
        );
      }}
    </Pressable>
  );
};
const ProductList = ({ route }) => {
  const { items } = route.params;

  if(items.length > 0){
      return(
        <ScrollView style={{marginHorizontal:15}} showsVerticalScrollIndicator={false}>
            <MasonryList
                style={{marginTop:10}}
                data={items}
                keyExtractor={(item) => item._id.$oid}
                numColumns={2}
                renderItem={({ item }) => <CardItem item={item} />}
            />
            </ScrollView>
      )
  }
  return (
    <View flex={1} justifyContent='center' alignItems='center'>
        <Text>No Product Found!</Text>
    </View>
  );
};

export default ProductList;
