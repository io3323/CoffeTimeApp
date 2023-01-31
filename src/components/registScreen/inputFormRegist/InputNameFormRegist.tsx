import {NameInputRegist} from './registInputElement/NameInputRegist';
import {PencilIcon} from './iconElement/PencilIcon';
import {RemoveIcon} from './iconElement/RemoveIcon';
import {modelTypesObject} from './modelTypesObject';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';
import {useEffect} from 'react';
import {changeStateWriteIcon} from '../../../redux/reduxStateSlice/writeIconControllerSlice';
import {checkWriteIcon} from '../../../externalFunctions/registScreen/checkWriteIcon';

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
    <View style={styles.mainInputContainer}>
      <NameInputRegist />
      {writeIconControllerState.name && <PencilIcon />}
      {!writeIconControllerState.name && (
        <RemoveIcon typeReq={modelTypesObject.Name_User!} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainInputContainer: {
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '5%',
  },
});
