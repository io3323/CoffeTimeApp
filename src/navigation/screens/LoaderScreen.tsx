import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/reduxStore/store';
import {addDataCoffe} from '../../redux/reduxStateSlice/dataSlice';
import {useGetCoffeMutation} from '../../redux/reduToolKitQuery';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {NameTabStack} from '../navigator/nameScreen';
export const LoaderScreen = () => {
  const tokenUser = useSelector((state: RootState) => state.tokenState);
  const [getCoffe] = useGetCoffeMutation();
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  useEffect(() => {
    getDataOnPress();
  }, []);
  const getDataOnPress = async () => {
    const result = await getCoffe(JSON.stringify(tokenUser.token));
    dispatch(addDataCoffe(result));
    navigation.navigate(NameTabStack);
  };
  return (
    <SafeAreaView>
      <View style={styles.mainConteiner}>
        <ActivityIndicator size={'large'} color={'#474747'} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainConteiner: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
