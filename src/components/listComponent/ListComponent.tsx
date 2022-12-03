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
  const [testToken, setTestToken] = useState('');
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
      setTestToken(tokenMas);
    });
  };
  const getDataOnPress = async () => {
    const result = await getCoffe(token);
    //console.log(result);
    // @ts-ignore
    dispatch(addDataCoffe(result));
  };
  useEffect(() => {
    getToken();
    console.log('render getToken');
  }, []);
  useEffect(() => {
    if (token != '') {
      getDataOnPress();
      setParsController(true);
      console.log('render getData');
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
    console.log('render parseController');
  }, [coffeDataState]);
  const navigation = useNavigation();
  const handleNavigation = async (idCafe: string) => {
    console.log(testToken);
    console.log(idCafe);
    if (idCafe != '') {
      const cafeInfo = await getCafe({
        sessionId: testToken,
        cafeId: idCafe,
      } as ICafeRequest).unwrap();
      console.log(cafeInfo);
    } else {
      console.log('no idCafe');
    }
    // @ts-ignore
    navigation.navigate('DetailedInfo');
  };
  const renderItem: ListRenderItem<ItemModel> = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.conteiner}
        onPress={() => {
          handleNavigation(item.id);
        }}>
        {/*<Image source={{uri: item.images}} style={styles.image} />*/}
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
