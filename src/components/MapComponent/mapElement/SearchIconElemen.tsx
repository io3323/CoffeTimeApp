import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {light} from '../../../themeNameApp';
import search from '../../../assets/image/mapScreen/search.png';
import searchDark from '../../../assets/image/mapScreen/searchDark.png';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/reduxStore/store';

export const SearchIconElemen = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  return (
    <View style={styles.locatedSearch}>
      <TouchableOpacity>
        <Image
          source={themeState.theme == light ? search : searchDark}
          style={styles.searchIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  locatedSearch: {
    width: '50%',
    alignItems: 'flex-end',
  },
  searchIcon: {
    width: 45,
    height: 45,
  },
});
