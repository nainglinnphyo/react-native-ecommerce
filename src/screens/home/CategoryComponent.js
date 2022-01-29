
import React from "react";
import { Pressable } from "react-native";
import { ScrollView, Image, Text, View } from "native-base";


const CategoryComponent = ({navigation,products,categories}) => {
    return (
      <View style={{marginVertical:10}}>
          <Text fontSize='lg' letterSpacing='lg' fontWeight='bold'>All Categories</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {categories.map((category) => (
          <Pressable 
          onPress={
            ()=>navigation.navigate('Product',{title:category.name,
            items:products.filter((item)=> item.category.$oid === category.id)})} key={category.id}>
            <View
              style={{
                marginHorizontal: 6,
                marginVertical: 10,
                alignItems: "center",
                borderRadius: 10,
              }}
            >
              <Image
                background='gray.200'
                source={{
                  uri: category.icon,
                }}
                alt="Alternate Text"
                size="sm"
                borderRadius={50}
              />
              <Text
                style={{ marginVertical: 5 }}
                fontSize="xs"
                fontWeight='bold'
              >
                {category.name.length > 10 ? category.name.substring(0, 15 - 3)
                    + '...' : category.name
                }
              </Text>
            </View>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    );
  };

export default CategoryComponent