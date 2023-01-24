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
  ImageBackground,
  ListRenderItem,
  LogBox,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Separator} from './Separator/Separator';
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
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';
import {
  descriptionInfoListENG,
  descriptionInfoListRu,
  descriptionLocateListENG,
  descriptionLocateListRU,
} from '../../localisationScreen/ListScreenLocal';
import {light} from '../../themeNameApp';
import {colorFlatListObject} from './colorFlatListObject';
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
  const progress = useDerivedValue(() =>
    themeState.theme == light ? withSpring(0) : withSpring(1),
  );
  const rStyleMainCont = useAnimatedStyle(() => {
    const background = interpolateColor(
      progress.value,
      [0, 1],
      [
        colorFlatListObject.mainConteinerLightBack,
        colorFlatListObject.mainConteinerDarkBack,
      ],
    );
    return {
      backgroundColor: background,
    };
  });
  const rStyleTextColor = useAnimatedStyle(() => {
    const color = interpolateColor(
      progress.value,
      [0, 1],
      [
        colorFlatListObject.nameTextLightColor,
        colorFlatListObject.nameTextDarkColor,
      ],
    );
    return {
      color: color,
    };
  });
  const rStyleTextColorDesc = useAnimatedStyle(() => {
    const color = interpolateColor(
      progress.value,
      [0, 1],
      [
        colorFlatListObject.adressDesriptionLightColor,
        colorFlatListObject.adressDesriptionDarkColor,
      ],
    );
    return {
      color: color,
    };
  });
  const rStyleTextColorInfo = useAnimatedStyle(() => {
    const color = interpolateColor(
      progress.value,
      [0, 1],
      [colorFlatListObject.textLight, colorFlatListObject.textDark],
    );
    return {
      color: color,
    };
  });
  const renderItem: ListRenderItem<ItemModel> = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.conteiner}
        onPress={() => {
          handleNavigation(item.id);
        }}>
        <ImageBackground
          source={themeState.theme == light ? cafeIcon : cafeIconDark}
          imageStyle={styles.plagImage}>
          <Image source={{uri: item.images}} style={styles.image} />
        </ImageBackground>
        <View style={styles.view}>
          <Animated.Text style={[styles.nameText, rStyleTextColor]}>
            {item.name}
          </Animated.Text>
          <Animated.Text style={[styles.adressDesription, rStyleTextColorDesc]}>
            {localisationState.local == ru
              ? descriptionLocateListRU
              : descriptionLocateListENG}
            :
          </Animated.Text>
          <Animated.Text style={[styles.adressColor, rStyleTextColorDesc]}>
            {item.address}
          </Animated.Text>
          <View style={styles.conteinerGoIcon}>
            <Animated.Text style={rStyleTextColorInfo}>
              {localisationState.local == ru
                ? descriptionInfoListRu
                : descriptionInfoListENG}
            </Animated.Text>
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
    <Animated.View style={rStyleMainCont}>
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
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  flatListStyle: {height: '100%'},
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
  plagImage: {
    width: WIDTH_APP * 0.35,
    height: HEIGHT_APP * 0.15,
    alignSelf: 'center',
  },
  view: {
    height: 146,
    width: 259,
    alignItems: 'flex-start',
  },
  nameText: {
    fontSize: 20,
    marginTop: 14,
    marginLeft: 14,
  },
  adressDesription: {
    fontSize: 14,
    marginTop: 15,
    marginLeft: 14,
  },
  adressColor: {
    fontSize: 18,
    marginTop: 5,
    marginLeft: 14,
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
    marginTop: -6,
    marginLeft: -5,
  },
  iconDark: {
    width: 15,
    height: 15,
    marginTop: 4,
    marginLeft: 10,
    right: 5,
  },
});
