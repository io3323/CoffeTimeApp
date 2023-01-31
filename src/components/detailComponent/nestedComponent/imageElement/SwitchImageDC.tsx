import {Switch} from 'react-native-switch';
import {light} from '../../../../themeNameApp';
import {HeartComponent} from '../HeartComponent';
import {EmptyComponent} from '../EmptyComponent';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/reduxStore/store';
import {useState} from 'react';
import {Color} from '../../../../Color';

export const SwitchImageDC = () => {
  const themeState = useSelector((state: RootState) => state.themeState);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const {
    backgroundActive,
    backgroundInactive,
    circleActiveColor,
    circleInActiveColor,
    circleBorderActiveColor,
    circleBorderInactiveColor,
  } = Color.detailColorObject.cardProductComponent.switchImage;
  return (
    <View style={styles.switchController}>
      <Switch
        backgroundActive={
          themeState.theme == light
            ? backgroundActive.light
            : backgroundActive.dark
        }
        backgroundInactive={backgroundInactive}
        circleActiveColor={circleActiveColor}
        circleInActiveColor={
          themeState.theme == light
            ? circleInActiveColor.light
            : circleInActiveColor.dark
        }
        renderInsideCircle={() =>
          isEnabled ? <HeartComponent /> : <EmptyComponent />
        }
        onValueChange={toggleSwitch}
        value={isEnabled}
        circleSize={30}
        switchLeftPx={2.4}
        switchRightPx={2.4}
        activeText={''}
        inActiveText={''}
        circleBorderActiveColor={circleBorderActiveColor}
        circleBorderInactiveColor={
          themeState.theme == light
            ? circleBorderInactiveColor.light
            : circleBorderInactiveColor.dark
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  switchController: {
    marginLeft: -5,
    marginBottom: 50,
  },
});
