import {EmailInputRegist} from './registInputElement/EmailInputRegist';
import {PencilIcon} from './iconElement/PencilIcon';
import {RemoveIcon} from './iconElement/RemoveIcon';
import {modelTypesObject} from './modelTypesObject';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';
import {useEffect} from 'react';
import {changeStateWriteIcon} from '../../../redux/reduxStateSlice/writeIconControllerSlice';
import {checkWriteIcon} from '../../../externalFunctions/registScreen/checkWriteIcon';

export const InputEmailFormRegist = () => {
  const dispatch = useDispatch();
  const userInfoState = useSelector((state: RootState) => state.userInfoState);
  const writeIconControllerState = useSelector(
    (state: RootState) => state.writeIconControllerState,
  );
  useEffect(() => {
    dispatch(
      changeStateWriteIcon({
        typeAction: modelTypesObject.Email_User,
        stateAction: checkWriteIcon(userInfoState.userInfo!.userEmail!),
      }),
    );
  }, [userInfoState.userInfo]);
  return (
    <View style={styles.mainInputConteiner}>
      <EmailInputRegist />
      {writeIconControllerState.email && <PencilIcon />}
      {!writeIconControllerState.email && (
        <RemoveIcon typeReq={modelTypesObject.Email_User!} />
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
