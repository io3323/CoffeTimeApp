import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {
  ArrayUserModel,
  ICafeInfo,
  ICafeRequest,
  ILogin,
  IProductCafeModel,
  IProductCafeRequest,
  IProductFullInfo,
  IProductInfoRequest,
} from './interfacesCoffeData';
const fetchBaseQueryURL = fetchBaseQuery({
  baseUrl: 'http://ci2.dextechnology.com:8000/api/',
});
export const coffeData = createApi({
  reducerPath: 'coffeData',
  baseQuery: fetchBaseQueryURL,
  endpoints: build => ({
    addLogin: build.mutation<string, ILogin>({
      query: body => ({
        url: 'User/Authorization',
        method: 'POST',
        body: body,
      }),
    }),
    getCoffe: build.mutation<ArrayUserModel, string>({
      query: (body: string) => ({
        url: 'Cafe/GetAll',
        method: 'POST',
        body: body,
        headers: {
          'content-type': 'application/json',
        },
      }),
    }),
    getCafe: build.mutation<ICafeInfo, ICafeRequest>({
      query: body => ({
        url: 'Cafe/GetCafe',
        method: 'POST',
        body: body,
      }),
    }),
    getProductsCafe: build.mutation<
      Array<IProductCafeModel>,
      IProductCafeRequest
    >({
      query: body => ({
        url: 'Product/GetProductsCafe',
        method: 'POST',
        body: body,
      }),
    }),
    getProductInfo: build.mutation<IProductFullInfo, IProductInfoRequest>({
      query: body => ({
        url: 'Product/GetProduct',
        method: 'POST',
        body: body,
      }),
    }),
  }),
});

export const {
  useAddLoginMutation,
  useGetCoffeMutation,
  useGetCafeMutation,
  useGetProductsCafeMutation,
  useGetProductInfoMutation,
} = coffeData;
