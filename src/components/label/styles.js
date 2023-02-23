import { StyleSheet } from 'react-native';

import { THEME } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Bitter-Regular',
    marginVertical: 5,
    color: THEME.colors.text,
  },
  sublabel: {
    fontSize: 12,
    fontFamily: 'Bitter-Regular',
    color: THEME.colors.gray,
    marginVertical: 5,
  },
});
