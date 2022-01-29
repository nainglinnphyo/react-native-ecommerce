import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Box, Icon, Input } from "native-base";
import React from "react";
import { View, Text, Pressable } from "native-base";

const Header = () => {
  const navigation = useNavigation();
  return (
    <Box
      safeArea
      marginTop={2}
      marginBottom={2}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"row"}
    >
      <Pressable style={{width:'85%'}} onPress={()=>navigation.navigate('Search')}>
        <View flexDirection='row' borderRadius={30} height={9}  alignItems='center'  bg='gray.200'>
          <Icon
            ml="2"
            size="5"
            color="gray.500"
            as={<Ionicons name="ios-search" />}
          />
          <Text marginLeft={1} fontSize='xs' >Search..</Text>
        </View>
      </Pressable>
      <Pressable  onPress={()=>navigation.navigate('CartScreen')}>
        <Icon ml="2" size="8" color="gray.500" as={<Ionicons name="cart" />} />
      </Pressable>
    </Box>
  );
};

export default Header;
