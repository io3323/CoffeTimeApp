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
import dataSlice, {
  addDataCoffe,
  coffeDataSlice,
  initialStateCoffeData,
} from '../../redux/reduxStateSlice/dataSlice';
import {Item} from '../../components/test/test';
export const ListCoffeScreenName = 'ListCoffeScreen';
export const ListCoffeScreen = () => {
  const dispatch = useDispatch();
  const [token, setToken] = useState('');
  const [controller, setControlller] = useState(false);
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
  const [getCoffe, {isSuccess}] = useGetCoffeMutation();
  const getToken = () => {
    tokenUser.data.forEach(date => {
      setToken(JSON.stringify(date));
      console.log(token, '<======= token');
    });
  };
  const getDataOnPress = async () => {
    const result = await getCoffe(token);
    console.log(result, '<======== result');

    // @ts-ignore
    dispatch(addDataCoffe(result));
  };
  useEffect(() => {
    getToken();
  });
  useEffect(() => {
    getDataOnPress();
  }, [token]);
  useEffect(() => {
    coffeDataState.forEach(data => {
      const first = Object.values(data);
      first.forEach(dataFirst => {
        const second = Object.values(dataFirst);
        // @ts-ignore
        setMasTest(dataFirst);
        //setControlller(true);
      });
    });
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
