import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {RootState} from '../../redux/reduxStore/store';
import {
  ICafeRequest,
  IProductCafeRequest,
  useGetCafeMutation,
  useGetCoffeMutation,
  useGetProductsCafeMutation,
} from '../../redux/reduToolKitQuery';
import {addDataCoffe} from '../../redux/reduxStateSlice/dataSlice';
import {
  FlatList,
  Image,
  ListRenderItem,
  LogBox,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {initialState, InState} from './CardFlatList/CardFlatList';
import {Separator} from './CardFlatList/Separator';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import goIcon from '../../assets/image/listScreen/goIcon.png';
import {addCafeInfo} from '../../redux/reduxStateSlice/cafeInfoSlice';
import {addProducts} from '../../redux/reduxStateSlice/productsCafeSlice';
import cafeIcon from '../../assets/image/listScreen/cafeIcon.png';
import {StackNavigationProp} from '@react-navigation/stack';
import {DetailedInfoName} from '../../navigation/navigator/nameScreen';
type ItemModel = {
  id: string;
  name: string;
  address: string;
  coordinates: string;
  description: string;
  images: string;
};
LogBox.ignoreLogs(['source.uri']);
export const ListComponent = () => {
  const dispatch = useDispatch();
  const [token, setToken] = useState('');
  const [secondToken, setSecondToken] = useState('');
  const [parseController, setParsController] = useState(false);
  const [imageController, setImageController] = useState(true);
  const [masTest, setMasTest] = useState<Array<InState>>([initialState]);
  const tokenUser = useSelector((state: RootState) => state.tokenState);
  const coffeDataState = useSelector(
    (state: RootState) => state.coffeDataState,
  );
  const [getCoffe] = useGetCoffeMutation();
  const [getCafe] = useGetCafeMutation();
  const [getProductsCafe] = useGetProductsCafeMutation();
  const getToken = () => {
    tokenUser.data.map(tokenMas => {
      setToken(JSON.stringify(tokenMas));
      setSecondToken(tokenMas);
    });
  };
  const getDataOnPress = async () => {
    const result = await getCoffe(token);
    // @ts-ignore
    dispatch(addDataCoffe(result));
  };
  useEffect(() => {
    getToken();
  }, []);
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
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const handleNavigation = async (idCafe: string) => {
    if (idCafe != '') {
      const cafeInfo = await getCafe({
        sessionId: secondToken,
        cafeId: idCafe,
      } as ICafeRequest).unwrap();
      // @ts-ignore
      dispatch(addCafeInfo(cafeInfo));
      const cafeProducts = await getProductsCafe({
        sessionId: secondToken,
        cafeId: idCafe,
      } as IProductCafeRequest);
      // @ts-ignore
      dispatch(addProducts(cafeProducts));
    } else {
      console.log('no idCafe');
    }
    navigation.navigate(DetailedInfoName);
  };
  const renderItem: ListRenderItem<ItemModel> = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.conteiner}
        onPress={() => {
          handleNavigation(item.id);
        }}>
        {imageController && (
          <Image
            source={{uri: item.images}}
            style={styles.image}
            onError={() => setImageController(false)}
          />
        )}
        {imageController == false && (
          <Image source={cafeIcon} style={styles.image} />
        )}
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
    width: '100%',
  },
  image: {
    width: 146,
    height: 146,
  },
  view: {
    height: 146,
    width: 259,
    alignItems: 'flex-start',
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
    color: '#BBBBBB',
  },
  conteinerGoIcon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginLeft: '-10%',
    width: '100%',
  },
  icon: {
    width: 32,
    height: 32,
    marginTop: -7,
    marginLeft: -5,
  },
});
