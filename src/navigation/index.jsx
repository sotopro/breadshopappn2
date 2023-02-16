import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';

import AuthNavigator from './auth';
import TabsNavigator from './tabs';

const AppNavigator = () => {
  const [userId, setUserId] = useState(null);
  return (
    <NavigationContainer>{userId ? <TabsNavigator /> : <AuthNavigator />}</NavigationContainer>
  );
};

export default AppNavigator;
