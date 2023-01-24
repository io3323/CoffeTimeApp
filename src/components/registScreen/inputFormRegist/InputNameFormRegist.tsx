import {NameInputRegist} from './registInputElement/NameInputRegist';
import {PencilIcon} from './iconElement/PencilIcon';
import {RemoveIcon} from './iconElement/RemoveIcon';
import {modelTypesObject} from './modelTypesObject';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';
import {useEffect} from 'react';
import {changeStateWriteIcon} from '../../../redux/reduxStateSlice/writeIconControllerSlice';
import {checkWriteIcon} from '../checkFunction/checkWriteIcon';

export const InputNameFormRegist = () => {
  const dispatch = useDispatch();
  const userInfoState = useSelector((state: RootState) => state.userInfoState);
  const writeIconControllerState = useSelector(
    (state: RootState) => state.writeIconControllerState,
  );
  useEffect(() => {
    dispatch(
      changeStateWriteIcon({
        typeAction: modelTypesObject.Name_User,
        stateAction: checkWriteIcon(userInfoState.userInfo!.userName!),
      }),
    );
  }, [userInfoState.userInfo]);
  return (
    <View style={styles.mainInputConteiner}>
      <NameInputRegist />
      {writeIconControllerState.name && <PencilIcon />}
      {writeIconControllerState.name == false && (
        <RemoveIcon typeReq={modelTypesObject.Name_User!} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainInputConteiner: {
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '5%',
  },
});
