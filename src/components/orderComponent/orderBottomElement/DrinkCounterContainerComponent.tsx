import {DrinkCountElement} from './drinkCount/DrinkCountElement';
import {DrinkCountV2Element} from './drinkCount/DrinkCountV2Element';
import {DrinksCountElement} from './drinkCount/DrinksCountElement';
import {View} from 'react-native';
import {FC} from 'react';
import {DrinkCountModel} from './drinkCount/DrinkCountModel';
export const DrinkCounterContainerComponent: FC<DrinkCountModel> = ({
  totalCount,
}) => {
  return (
    <View>
      {totalCount == 1 && <DrinkCountElement totalCount={totalCount} />}
      {(totalCount == 2 || totalCount == 3 || totalCount == 4) && (
        <DrinkCountV2Element totalCount={totalCount} />
      )}
      {totalCount != 1 &&
        totalCount != 2 &&
        totalCount != 3 &&
        totalCount != 4 && <DrinksCountElement totalCount={totalCount} />}
    </View>
  );
};
