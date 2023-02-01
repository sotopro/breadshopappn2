import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TouchableOpacity } from 'react-native';

import { THEME } from '../constants/theme';
import { Categories, ProductDetail, Products } from '../screens/index';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerTintColor: THEME.colors.primary,
        navigationBarColor: THEME.colors.secondary,
        headerTitleStyle: {
          fontFamily: 'Bitter-Bold',
          fontSize: 18,
          color: THEME.colors.title,
        },
      }}>
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
