import React from 'react';
import { View, Text, Button } from 'react-native';

import { stlyes } from './styles';

const Categories = ({ navigation }) => {
  return (
    <View style={stlyes.container}>
      <Text>Categories</Text>
      <Button title="Go to Products" onPress={() => navigation.navigate('Products')} color="#000" />
    </View>
  );
};

export default Categories;
