import { View, Text } from 'react-native';

import { styles } from './styles';

const Label = ({ children, label, labelStyle, subLabel, subLabelStyle }) => {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.label, ...labelStyle }}>{label}</Text>
      {children}
      {subLabel && <Text style={{ ...styles.subLabel, ...subLabelStyle }}>{subLabel}</Text>}
    </View>
  );
};

export default Label;
