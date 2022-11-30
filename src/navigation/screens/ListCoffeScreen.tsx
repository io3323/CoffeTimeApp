import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Button,
  SectionList,
  ScrollView,
  Image,
} from 'react-native';
import {RootState, useGetCoffeMutation} from '../../redux/reduToolKitQuery';
import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import {addDataCoffe} from '../../redux/reduxStateSlice/dataSlice';
export const ListCoffeScreenName = 'ListCoffeScreen';
export const ListCoffeScreen = () => {
  const dispatch = useDispatch();
  const [token, setToken] = useState('');
  const [controller, setControlller] = useState(false);
  const [parseController, setParsController] = useState(false);
  const initialState = {
    id: '',
    name: '',
    address: '',
    coordinates: '',
    description: '',
    images: '',
  };
  type InState = {
    id: string;
    name: string;
    address: string;
    coordinates: string;
    description: string;
    images: string;
  };
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
          masTest.map(mas => {
            if (mas != initialState) {
              setControlller(true);
            }
          });
        });
      });
    }
  }, [coffeDataState]);
  return (
    <SafeAreaView>
      <View>
        {controller && (
          <ScrollView>
            {masTest.map(test => (
              <View>
                <Text>{test.id}</Text>
                <Text>{test.name}</Text>
                <Text>{test.address}</Text>
                <Text>{test.images}</Text>
                <Image
                  source={{uri: test.images}}
                  style={{width: 200, height: 200}}
                />
                <Text>{test.coordinates}</Text>
                <Text>{test.description}</Text>
              </View>
            ))}
          </ScrollView>
        )}
      </View>
      <Button
        title={'tap'}
        onPress={() => {
          setControlller(true);
        }}
      />
      <Button title={'ffff'} onPress={() => setControlller(true)} />
    </SafeAreaView>
  );
};
