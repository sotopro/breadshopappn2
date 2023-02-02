import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './styles';
import { THEME } from '../../constants/theme';

const Products = ({ navigation, route }) => {
  const { categoryId, title } = route.params;

  console.warn(title, categoryId);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <Button
        title="Go to Product Detail"
        onPress={() => navigation.navigate('ProductDetail')}
        color={THEME.colors.primary}
      />
    </View>
  );
};

export default Products;
