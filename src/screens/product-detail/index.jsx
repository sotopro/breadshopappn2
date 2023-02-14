import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import { THEME } from '../../constants/theme';
import { addToCart } from '../../store/actions/index';

const ProductDetail = ({ navigation }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.selected);

  const onAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product?.title}</Text>
      <Text style={styles.title}>{product?.description}</Text>
      <Text style={styles.title}>{product?.weight}</Text>
      <Text style={styles.title}>${product?.price}</Text>
      <Button title="Add to cart" onPress={onAddToCart} color={THEME.colors.primary} />
    </View>
  );
};

export default ProductDetail;
