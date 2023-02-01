import {ActivityIndicator, SafeAreaView, StyleSheet, View} from 'react-native';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/reduxStore/store';
import {addDataCoffe} from '../../redux/reduxStateSlice/dataSlice';
import {useGetCoffeMutation} from '../../redux/reduToolKitQuery';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {NameTabStack} from '../navigator/nameScreen';
import {changeButtonIndicatorState} from '../../redux/reduxStateSlice/indicatorButtonSlice';
import {light} from '../../themeNameApp';
import {Color} from '../../Color';

const {color, colorIndicator} = Color.loaderColorObject;
export const LoaderScreen = () => {
  const tokenUser = useSelector((state: RootState) => state.tokenState);
  const [getCoffe] = useGetCoffeMutation();
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  useEffect(() => {
    getDataOnPress();
  }, [tokenUser]);
  const getDataOnPress = async () => {
    const result = await getCoffe(JSON.stringify(tokenUser.token));
    dispatch(changeButtonIndicatorState({active: false}));
    dispatch(addDataCoffe(result));
    navigation.navigate(NameTabStack);
  };
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <SafeAreaView
      style={themeState.theme == light ? styles.colorLight : styles.colorDark}>
      <View style={[styles.mainContainer]}>
        <ActivityIndicator
          size={'large'}
          color={
            themeState.theme == light
              ? colorIndicator.light
              : colorIndicator.dark
          }
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorLight: {
    backgroundColor: color.light,
  },
  colorDark: {
    backgroundColor: color.dark,
  },
});
