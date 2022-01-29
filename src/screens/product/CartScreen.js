import { Ionicons } from "@expo/vector-icons";
import { Box, Icon, Pressable } from "native-base";
import React from "react";
import { View, Text } from "react-native";

const CartScreen = ({navigation}) => {
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
      
    </Box>
  );
};

export default CartScreen;
