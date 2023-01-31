import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Categories, ProductDetail, Products } from '../screens/index';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{
          headerShown: false,
          title: 'Categories',
        }}
      />
      <Stack.Screen
        name="Products"
        component={Products}
        options={{
          title: 'Products',
        }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          title: 'Product Detail',
        }}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
