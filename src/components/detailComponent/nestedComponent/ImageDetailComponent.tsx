import {StyleSheet, View} from 'react-native';
import {FunctionComponent, useCallback, useState} from 'react';
import {ImageNFDetailComponent} from './imageElement/ImageNFDetailComponent';
import {ImageFDetailComponent} from './imageElement/ImageFDetailComponent';
type ImageComponentType = {
  images: string;
  name: string;
  address: string;
};
export const ImageDetailComponent: FunctionComponent<ImageComponentType> = ({
  images,
  name,
  address,
}) => {
  const [controller, setController] = useState(true);
  const controlImageFunc = useCallback((result: boolean) => {
    setController(result);
  }, []);
  return (
    <View style={styles.mainContainer}>
      {controller && (
        <ImageFDetailComponent
          name={name}
          address={address}
          images={images}
          controlImageFunc={controlImageFunc}
        />
      )}
      {!controller && <ImageNFDetailComponent name={name} address={address} />}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: 320,
  },
});
