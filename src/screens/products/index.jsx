import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './styles';
import { theme } from '../../constants/theme';

const Products = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <Button
        title="Go to Product Detail"
        onPress={() => navigation.navigate('ProductDetail')}
        color={theme.colors.primary}
      />
    </View>
  );
};

export default Products;
