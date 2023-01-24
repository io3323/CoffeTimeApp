import {ActivityIndicator, StyleSheet, View} from 'react-native';

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
    backgroundColor: '#bdbbbb',
    borderColor: '#BDBBBBFF',
    borderWidth: 1,
    marginTop: 23.5,
    width: 300,
    height: 52,
  },
});
