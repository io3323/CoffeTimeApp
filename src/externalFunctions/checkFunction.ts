import {FetchBaseQueryError} from '@reduxjs/toolkit/query';
import {SerializedError} from '@reduxjs/toolkit';
export const GOODRes = 'good';
export const ERORNet = 'networkError';
export const MistakeUser = 'mistakeUserData';
export const checkFunction = (
  resultObject: {data: string} | {error: FetchBaseQueryError | SerializedError},
): string => {
  let res = '';
  const chekMas = Object.keys(resultObject);
  chekMas.map(checkVariable => {
    if (checkVariable === 'data') {
      res = GOODRes;
    } else if (checkVariable === 'error') {
      const checkMasValues = Object.values(resultObject);
      checkMasValues.map(checkValues => {
        console.log(checkValues, 'check');
        const nestCheckValuesMas = Object.keys(checkValues);
        nestCheckValuesMas.map(nestCheckValues => {
          if (nestCheckValues === 'data') {
            res = MistakeUser;
          } else if (nestCheckValues === 'error') {
            res = ERORNet;
          }
        });
      });
    }
  });
  return res;
};
