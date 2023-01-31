import React from 'react';
import { View, Text, Button } from 'react-native';

import { stlyes } from './styles';

const Products = ({ navigation }) => {
  return (
    <View style={stlyes.container}>
      <Text>Products</Text>
      <Button
        title="Go to Product Detail"
        onPress={() => navigation.navigate('ProductDetail')}
        color="#000"
      />
    </View>
  );
};

export default Products;
