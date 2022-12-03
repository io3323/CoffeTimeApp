import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {RootState} from '../../redux/reduxStore/store';
import {
  ICafeRequest,
  useGetCafeMutation,
  useGetCoffeMutation,
} from '../../redux/reduToolKitQuery';
import {addDataCoffe} from '../../redux/reduxStateSlice/dataSlice';
import {
  Button,
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {initialState, InState} from './CardFlatList/CardFlatList';
import {Separator} from './CardFlatList/Separator';
import {useNavigation} from '@react-navigation/native';
// @ts-ignore
import goIcon from '../../assets/image/listScreen/goIcon.png';
type ItemModel = {
  id: string;
  name: string;
  address: string;
  coordinates: string;
  description: string;
  images: string;
};

export const ListComponent = () => {
  const dispatch = useDispatch();
  const [token, setToken] = useState('');
  const [parseController, setParsController] = useState(false);
  const [masTest, setMasTest] = useState<Array<InState>>([initialState]);
  const tokenUser = useSelector((state: RootState) => state.tokenState);
  const coffeDataState = useSelector(
    (state: RootState) => state.coffeDataState,
  );
  const [getCoffe] = useGetCoffeMutation();
  const [getCafe] = useGetCafeMutation();
  const getToken = () => {
    tokenUser.data.map(tokenMas => {
      setToken(JSON.stringify(tokenMas));
    });
  };
  const getDataOnPress = async () => {
    const result = await getCoffe(token);
    console.log(result);
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
  const navigation = useNavigation();
  // const handleNavigation = async (id: string) => {
  //   console.log(token);
  //   console.log(id);
  //   const cafeInfo = await getCafe({
  //     sessionId: token,
  //     cafeId: id,
  //   } as ICafeRequest);
  //   //await navigation.navigate('DetailedInfo');
  //   console.log(cafeInfo);
  // };
  const test = async () =>
    await getCafe({
      sessionId: token,
      cafeId: '5f4f633f-f02e-43fd-9ac4-a32fc2572ece',
    });

  test().then(r => console.log(r))
  const renderItem: ListRenderItem<ItemModel> = ({item}) => {
    return (
      <TouchableOpacity style={styles.conteiner} onPress={() => test()}>
        <Image source={{uri: item.images}} style={styles.image} />
        <View style={styles.view}>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.adressDesription}>Мы находимся:</Text>
          <Text style={styles.adress}>{item.address}</Text>
          <View style={styles.conteinerGoIcon}>
            <Text style={styles.text}>Подробнее</Text>
            <Image style={styles.icon} source={goIcon} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        data={masTest}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={Separator}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Button
        title={'press'}
        onPress={async () => {
          const resultCafe = await getCafe({
            sessionId: token,
            cafeId: '9a904ea8-2512-42aa-aed3-933c67253a38',
          } as ICafeRequest);
          console.log(resultCafe);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    width: 146,
    height: 146,
  },
  view: {
    height: 146,
    width: 259,
  },
  nameText: {
    color: '#c2d5a9',
    fontSize: 20,
    marginTop: 14,
    marginLeft: 14,
  },
  adressDesription: {
    fontSize: 14,
    marginTop: 15,
    marginLeft: 14,
    color: '#717171',
  },
  adress: {
    fontSize: 18,
    marginTop: 5,
    marginLeft: 14,
    color: '#717171',
  },
  text: {
    marginLeft: 140,
    color: '#BBBBBB',
  },
  conteinerGoIcon: {
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    width: 32,
    height: 32,
    marginTop: -7,
    marginLeft: -5,
  },
});
