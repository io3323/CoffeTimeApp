import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Color} from '../../../Color';

const {color, borderColor} = Color.regComponent.indicatorButton;
export const IndicatorButtonRegist = () => {
  return (
    <View style={styles.buttonIndicator}>
      <ActivityIndicator color={'white'} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonIndicator: {
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderRadius: 40,
    backgroundColor: color,
    borderColor: borderColor,
    borderWidth: 1,
    marginTop: 23.5,
    width: 300,
    height: 52,
  },
});
