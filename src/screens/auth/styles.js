import { StyleSheet } from 'react-native';

import { THEME } from '../../constants/theme';

export const styles = StyleSheet.create({
  keybordContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '80%',
    maxWidth: 400,
    padding: 15,
    margin: 15,
    borderColor: THEME.colors.primary,
    borderWidth: 1,
    backgroundColor: THEME.colors.white,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Bitter-Medium',
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    fontFamily: 'Bitter-Regular',
    marginVertical: 8,
  },
  input: {
    height: 45,
    borderBottomColor: THEME.colors.primary,
    borderBottomWidth: 1,
    width: '90%',
    fontFamily: 'Bitter-Regular',
    marginBottom: 10,
  },
  buttonContainer: {
    marginVertical: 10,
  },
  prompt: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  promptButton: {
    width: '100%',
    backgroundColor: THEME.colors.secondary,
    borderWidth: 1,
    borderColor: THEME.colors.primary,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  promptMessage: {
    fontSize: 14,
    fontFamily: 'Bitter-Medium',
    color: THEME.colors.text,
  },
});
