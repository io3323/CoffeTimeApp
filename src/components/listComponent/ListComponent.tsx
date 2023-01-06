import {useDispatch, useSelector} from 'react-redux';
import {useCallback, useState} from 'react';
import {RootState} from '../../redux/reduxStore/store';
import {
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
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Separator} from './CardFlatList/Separator';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import goIcon from '../../assets/image/listScreen/goIcon.png';
import goIconDark from '../../assets/image/listScreen/goIconDark.png';
import {addCafeInfo} from '../../redux/reduxStateSlice/cafeInfoSlice';
import {addProducts} from '../../redux/reduxStateSlice/productsCafeSlice';
import cafeIcon from '../../assets/image/listScreen/cafeIcon.png';
import cafeIconDark from '../../assets/image/listScreen/cafeIconDark.png';
import {StackNavigationProp} from '@react-navigation/stack';
import {DetailedInfoName} from '../../navigation/navigator/nameScreen';
import {HEIGHT_APP, WIDTH_APP} from '../../definitionSize';
import {ru} from '../../localisationLanguageName';
import {
  descriptionInfoListENG,
  descriptionInfoListRu,
  descriptionLocateListENG,
  descriptionLocateListRU,
} from '../../localisationScreen/ListScreenLocal';
import {light} from '../../themeNameApp';
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
  const [imageController, setImageController] = useState(true);
  const tokenUser = useSelector((state: RootState) => state.tokenState);
  const coffeDataState = useSelector(
    (state: RootState) => state.coffeDataState,
  );
  const localisationState = useSelector(
    (state: RootState) => state.localisationState,
  );

  const themeState = useSelector((state: RootState) => state.themeState);
  const [getCoffe] = useGetCoffeMutation();
  const [getCafe] = useGetCafeMutation();
  const [getProductsCafe] = useGetProductsCafeMutation();
  const [refreshing, setRefreshing] = useState(false);
  const wait = (timeout: number) => {
    setTimeout(() => setRefreshing(false), timeout);
  };
  const onRefresh = useCallback(() => {
    getDataOnPress();
    setRefreshing(true);
    wait(1000);
  }, []);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const getDataOnPress = async () => {
    const result = await getCoffe(JSON.stringify(tokenUser.token));
    dispatch(addDataCoffe(result));
  };
  const handleNavigation = async (idCafe: string) => {
    if (idCafe != '') {
      const cafeInfo = await getCafe({
        sessionId: tokenUser.token,
        cafeId: idCafe,
      }).unwrap();
      dispatch(addCafeInfo(cafeInfo));
      const cafeProducts = await getProductsCafe({
        sessionId: tokenUser.token,
        cafeId: idCafe,
      });
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
          <Image
            source={themeState.theme == light ? cafeIcon : cafeIconDark}
            style={styles.image}
          />
        )}
        <View style={styles.view}>
          <Text
            style={
              themeState.theme == light
                ? styles.nameTextLight
                : styles.nameTextDark
            }>
            {item.name}
          </Text>
          <Text
            style={
              themeState.theme == light
                ? styles.adressDesriptionLight
                : styles.adressDesriptionDark
            }>
            {localisationState.local == ru
              ? descriptionLocateListRU
              : descriptionLocateListENG}
            :
          </Text>
          <Text
            style={
              themeState.theme == light ? styles.adressLight : styles.adressDark
            }>
            {item.address}
          </Text>
          <View style={styles.conteinerGoIcon}>
            <Text
              style={
                themeState.theme == light ? styles.textLight : styles.textDark
              }>
              {localisationState.local == ru
                ? descriptionInfoListRu
                : descriptionInfoListENG}
            </Text>
            <Image
              style={
                themeState.theme == light ? styles.iconLight : styles.iconDark
              }
              source={themeState.theme == light ? goIcon : goIconDark}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={
        themeState.theme == light
          ? styles.mainConteinerLight
          : styles.mainConteinerDark
      }>
      <FlatList
        data={coffeDataState}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={Separator}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.flatListStyle}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatListStyle: {height: '100%'},
  mainConteinerLight: {
    backgroundColor: '#f2f2f2',
  },
  mainConteinerDark: {
    backgroundColor: '#574d6c',
  },
  conteiner: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  image: {
    width: WIDTH_APP * 0.35,
    height: HEIGHT_APP * 0.15,
    alignSelf: 'center',
  },
  view: {
    height: 146,
    width: 259,
    alignItems: 'flex-start',
  },
  nameTextLight: {
    color: '#c2d5a9',
    fontSize: 20,
    marginTop: 14,
    marginLeft: 14,
  },
  nameTextDark: {
    color: '#9989d9',
    fontSize: 20,
    marginTop: 14,
    marginLeft: 14,
  },
  adressDesriptionLight: {
    fontSize: 14,
    marginTop: 15,
    marginLeft: 14,
    color: '#717171',
  },
  adressDesriptionDark: {
    fontSize: 14,
    marginTop: 15,
    marginLeft: 14,
    color: 'white',
  },
  adressLight: {
    fontSize: 18,
    marginTop: 5,
    marginLeft: 14,
    color: '#717171',
  },
  adressDark: {
    fontSize: 18,
    marginTop: 5,
    marginLeft: 14,
    color: 'white',
  },
  textLight: {
    color: '#BBBBBB',
  },
  textDark: {
    color: 'white',
  },
  conteinerGoIcon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: WIDTH_APP * 0.65,
  },
  iconLight: {
    width: 32,
    height: 32,
    marginTop: -7,
    marginLeft: -5,
  },
  iconDark: {
    width: 15,
    height: 15,
    marginTop: 4,
    marginLeft: 5,
  },
});
