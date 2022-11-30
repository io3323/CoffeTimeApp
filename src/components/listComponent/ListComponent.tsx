import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {RootState} from '../../redux/reduxStore/store';
import {useGetCoffeMutation} from '../../redux/reduToolKitQuery';
import {addDataCoffe} from '../../redux/reduxStateSlice/dataSlice';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {initialState, InState, renderItem} from './CardFlatList/CardFlatList';
import {Separator} from './CardFlatList/Separator';

export const ListComponent = () => {
  const dispatch = useDispatch();
  const [token, setToken] = useState('');
  const [controller, setControlller] = useState(false);
  const [parseController, setParsController] = useState(false);
  const [masTest, setMasTest] = useState<Array<InState>>([initialState]);
  const tokenUser = useSelector((state: RootState) => state.tokenState);
  const coffeDataState = useSelector(
    (state: RootState) => state.coffeDataState,
  );
  const [getCoffe] = useGetCoffeMutation();
  const getToken = () => {
    tokenUser.data.map(tokenMas => {
      setToken(JSON.stringify(tokenMas));
    });
  };
  const getDataOnPress = async () => {
    const result = await getCoffe(token);

    // @ts-ignore
    dispatch(addDataCoffe(result));
  };
  useEffect(() => {
    getToken();
  });
  useEffect(() => {
    if (token != '') {
      getDataOnPress();
      setParsController(true);
    }
  }, [token]);
  useEffect(() => {
    if (parseController) {
      coffeDataState.forEach(data => {
        const first = Object.values(data);
        first.forEach(dataFirst => {
          // @ts-ignore
          setMasTest(dataFirst);
        });
      });
    }
  }, [coffeDataState]);
  return (
    <View>
      <FlatList
        data={masTest}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={Separator}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
