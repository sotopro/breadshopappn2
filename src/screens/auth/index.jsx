import { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { styles } from './styles';
import { THEME } from '../../constants/theme/index';

const Auth = ({ navigation }) => {
  const [isLogin, setIsLogin] = useState(true);
  const title = isLogin ? 'Login' : 'Register';
  const message = isLogin ? "Don't have an account?" : 'Already have an account?';
  const messageButton = isLogin ? 'Login' : 'Register';
  return (
    <KeyboardAvoidingView
      style={styles.keybordContainer}
      behavior={Platform.OS === 'android' ? 'height' : 'padding'}
      enabled>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="enter your email"
            placeholderTextColor={THEME.colors.gray}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={() => {}}
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="enter your password"
            placeholderTextColor={THEME.colors.gray}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={() => {}}
          />
          <View style={styles.buttonContainer}>
            <Button title={messageButton} color={THEME.colors.primary} onPress={() => {}} />
            <View style={styles.prompt}>
              <TouchableOpacity style={styles.promptButton} onPress={() => setIsLogin(!isLogin)}>
                <Text style={styles.promptMessage}>{message}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Auth;
