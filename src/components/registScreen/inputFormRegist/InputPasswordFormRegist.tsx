import {PasswordInputRegist} from './registInputElement/PasswordInputRegist';
import {EyeIcon} from './iconElement/EyeIcon';
import {PencilIcon} from './iconElement/PencilIcon';
import {RemoveIcon} from './iconElement/RemoveIcon';
import {modelTypesObject} from './modelTypesObject';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';
import {useEffect} from 'react';
import {changeStateWriteIcon} from '../../../redux/reduxStateSlice/writeIconControllerSlice';
import {checkWriteIcon} from '../../../externalFunctions/registScreen/checkWriteIcon';

export const InputPasswordFormRegist = () => {
  const dispatch = useDispatch();
  const userInfoState = useSelector((state: RootState) => state.userInfoState);
  const writeIconControllerState = useSelector(
    (state: RootState) => state.writeIconControllerState,
  );
  useEffect(() => {
    dispatch(
      changeStateWriteIcon({
        typeAction: modelTypesObject.Password_User,
        stateAction: checkWriteIcon(userInfoState.userInfo!.userPassword!),
      }),
    );
  }, [userInfoState.userInfo]);
  return (
    <View style={styles.mainInputContainer}>
      <PasswordInputRegist />
      <EyeIcon />
      {writeIconControllerState.password && <PencilIcon />}
      {!writeIconControllerState.password && (
        <RemoveIcon typeReq={modelTypesObject.Password_User!} />
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
