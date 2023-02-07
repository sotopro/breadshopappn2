import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import CartItem from '../../components/cart-item';
import { CART } from '../../constants/data/index';

const Cart = ({ navigation }) => {
  const total = 2000;
  const onDelete = (id) => {};
  const renderItem = ({ item }) => <CartItem item={item} onDelete={onDelete} />;
  const keyExtractor = (item) => item.id.toString();
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={CART}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          style={styles.listContainer}
        />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonConfirm} onPress={() => null}>
          <Text style={styles.buttonConfirmText}>Confirm</Text>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalPrice}>{total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
