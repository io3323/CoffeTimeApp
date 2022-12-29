import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
export interface ILogin {
  email: string;
  password: string;
}
export interface ICoffeData {
  id: string;
  name: string;
  address: string;
  coordinates: string;
  description: string;
  images: string;
}
export interface ICafeRequest {
  sessionId: string;
  cafeId: string;
}
export interface ICafeInfo {
  id: string;
  name: string;
  address: string;
  coordinates: string;
  description: string;
  images: string;
}
export interface IProductCafeModel {
  id: string;
  cofeId: string;
  name: string;
  price: number;
  favorite: boolean;
  imagesPath: string;
}
export interface IProductCafeRequest {
  sessionId: string;
  cafeId: string;
}
export interface IProductInfoRequest {
  sessionId: string;
  productId: string;
}
export interface IProductFullInfo {
  id: string;
  productName: string;
  price: number;
  cofeId: string;
  cofeName: string;
  favarite: boolean;
  attribute: Array<IAttributeInfo>;
  imagesPath: string;
}
export interface IAttributeInfo {
  id: string;
  description: string;
  iconType: string;
}
export const coffeData = createApi({
  reducerPath: 'coffeData',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://ci2.dextechnology.com:8000/api/',
  }),
  endpoints: build => ({
    addLogin: build.mutation<string, ILogin>({
      query: body => ({
        url: 'User/Authorization',
        method: 'POST',
        body: body,
      }),
    }),
    getCoffe: build.mutation<Array<ICoffeData>, string>({
      query: (body: string) => ({
        url: 'Cafe/GetAll',
        method: 'POST',
        body: body,
        headers: {
          'content-type': 'application/json',
        },
      }),
    }),
    getCafe: build.mutation<Array<ICafeInfo>, ICafeRequest>({
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
