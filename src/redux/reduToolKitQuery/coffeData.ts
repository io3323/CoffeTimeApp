import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// @ts-ignore
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
export const coffeData = createApi({
  reducerPath: 'coffeData',
  tagTypes: ['Coffe'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://ci2.dextechnology.com:8000/api/',
    //baseUrl: 'http://localhost:3001/',
    //baseUrl: 'https://httpbin.org/post',
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
        //url: 'goods',
        //url: '',
        method: 'POST',
        body: body,
        headers: {
          'content-type': 'application/json',
        },
      }),
    }),
    getCafe: build.mutation<Array<ICafeInfo>, ICafeRequest>({
      query: (body: ICafeRequest) => ({
        url: 'Cafe/GetCafe',
        method: 'POST',
        body: body,
      }),
    }),
  }),
});

export const {useAddLoginMutation, useGetCoffeMutation, useGetCafeMutation} =
  coffeData;
