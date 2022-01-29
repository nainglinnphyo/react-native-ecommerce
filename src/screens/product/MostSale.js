import React, { useEffect,useMemo } from "react";
import MasonryList from "@react-native-seoul/masonry-list";
import { View, Image, Pressable, Text, FlatList } from "native-base";
import { Dimensions, TouchableOpacity } from "react-native";
import { LogBox } from "react-native";
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
            shadow={6}
            borderColor="gray.200"
            borderRadius={5}
            style={{
              // width: width / 2 - 20,
              marginHorizontal: 2,
              marginBottom: 5,
              // justifyContent: "center",
              // alignItems: "center",
            }}
            borderWidth="1"
          >
            <Image
              borderTopRadius={5}
              resizeMode="cover"
              style={{
                height: randomBool ? height/4-30 : height / 4,
                alignSelf: 'stretch',
              }}
              // style={{ width: width / 2 - 10, height: height / 4 }}
              source={{ uri: item.image }}
              alt={item.name}
            />
            <View marginLeft={2} paddingY={1.5}>
            <Text fontWeight='bold' letterSpacing="xl">
              {item.name}
            </Text>
            <View marginBottom={2} alignItems='center'  flexDir='row'>
                <Text color="orange.500" fontWeight='bold'>
                {item.price} Ks
                </Text>
                {item.oldPrice && <Text style={{textDecorationLine:'line-through',marginHorizontal:5}} fontSize='xs'>{item.oldPrice} Ks</Text>}
            </View>
            </View>
          </View>
        );
      }}
    </Pressable>
  );
};
const renderItem = ({ item }) => {
  return <CardItem item={item} />;
};

const MostSale = ({ products }) => {
  useEffect(() => {
    LogBox.ignoreLogs(["Each child in a list should have"]);
  }, []);
  return (
    <View marginBottom={100} justifyContent="center" alignItems="center">
      <MasonryList
        showsVerticalScrollIndicator={false}
        data={products}
        keyExtractor={(item) => item.name}
        numColumns={2}
        renderItem={renderItem}
      />
    </View>
  );
};

export default MostSale;
