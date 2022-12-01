import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const DetailedInfo = () => {
  const navigation = useNavigation();
  const press = () => {
    // @ts-ignore
    navigation.navigate('SecondTest');
  };
  return (
    <View>
      <Text>Detail info screen</Text>
      <Button title={'ffff'} onPress={() => press()} />
    </View>
  );
};
