import React from "react";
import { Dimensions } from "react-native";
import {
  Box,
  FlatList,
  Text,
  View,
  Avatar,
  HStack,
  VStack,
  Spacer,
  Pressable,
} from "native-base";
import { useNavigation } from "@react-navigation/native";

var { width } = Dimensions.get("window");

const SearchProduct = (props) => {
  const productsFiltered = props.productsFiltered;
  const navigation = useNavigation();
  return (
    <Box
      // w={{
      //   base: "100%",
      //   md: "25%",
      // }}
      marginBottom={100}
    >
      {productsFiltered.length > 0 ? (
        <FlatList
          data={productsFiltered}
          renderItem={({ item }) => (
            <Pressable onPress={() => navigation.navigate("Details",{product:item})}>
              {({ isPressed }) => {
                return (
                  <Box
                    bg={isPressed ? 'gray.300' :'gray.100'}
                    borderBottomWidth="1"
                    _dark={{
                      borderColor: "gray.600",
                    }}
                    borderColor="coolGray.200"
                    pl="4"
                    pr="5"
                    py="2"
                  >
                    <HStack space={3} justifyContent="space-between">
                      <Avatar
                        size="48px"
                        source={{
                          uri: item.image,
                        }}
                      />
                      <VStack>
                        <Text
                          _dark={{
                            color: "warmGray.50",
                          }}
                          color="coolGray.800"
                          bold
                        >
                          {item.name}
                        </Text>
                        <Text
                          color="coolGray.600"
                          _dark={{
                            color: "warmGray.200",
                          }}
                        >
                          {item.description}
                        </Text>
                      </VStack>
                      <Spacer />
                    </HStack>
                  </Box>
                );
              }}
            </Pressable>
          )}
          keyExtractor={(item) => item.name}
        />
      ) : (
        <View justifyContent="center" marginTop='10' alignItems="center">
          <Text fontSize="md">
            No products match found!
          </Text>
        </View>
      )}
    </Box>
  );
};

export default SearchProduct;
