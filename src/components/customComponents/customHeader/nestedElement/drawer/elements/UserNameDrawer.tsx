import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../../../redux/reduxStore/store';
import {Color} from '../../../../../../Color';

export const UserNameDrawer = () => {
  const {t} = useTranslation();
  const userInfoState = useSelector((state: RootState) => state.userInfoState);
  return (
    <View style={styles.userDataContainer}>
      <View style={styles.descriptionTextContainer}>
        <Text style={styles.descriptionText}>
          {t('common:drawerScreen:userName')}
        </Text>
      </View>
      <View style={styles.userNameTextContainer}>
        <Text style={styles.userNameText}>
          {userInfoState.userInfo!.userName}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userDataContainer: {
    marginTop: '10%',
    flexDirection: 'row',
    width: '100%',
  },
  descriptionTextContainer: {
    alignItems: 'center',
    flex: 3,
  },
  descriptionText: {
    fontFamily: 'SFUIText-Regular',
    fontSize: 20,
    color: Color.drawerColorObject.userNameComponent.colorText,
  },
  userNameTextContainer: {
    alignItems: 'center',
    flex: 2,
  },
  userNameText: {
    fontFamily: 'SFUIText-Regular',
    fontSize: 20,
    color: Color.drawerColorObject.userNameComponent.colorText,
  },
});
