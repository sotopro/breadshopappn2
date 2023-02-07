import { StyleSheet } from 'react-native';

import { THEME } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 90,
    backgroundColor: THEME.colors.secondary,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: THEME.colors.primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerContainer: {},
  date: {
    fontSize: 16,
    fontFamily: 'Bitter-Regular',
    color: THEME.colors.text,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {},
  total: {
    fontSize: 16,
    fontFamily: 'Bitter-Bold',
  },
});
