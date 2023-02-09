import React from 'react';
import { View, FlatList, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { CategoryItem } from '../../components';
import { THEME } from '../../constants/theme';

const Categories = ({ navigation }) => {
  const categories = useSelector((state) => state.category.categories);
  const onSelected = (item) => {
    navigation.navigate('Products', {
      categoryId: item.id,
      title: item.title,
    });
  };
  const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />;
  const keyExtractor = (item) => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.containerList}
        contentContainerStyle={styles.contentContainerList}
      />
    </SafeAreaView>
  );
};

export default Categories;
