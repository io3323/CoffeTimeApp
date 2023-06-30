import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ICoffeDataV2} from '../reduToolKitQuery/interfacesCoffeData';

type Atributes = {id: string; description: string; iconType: string};
interface IProductInf {
  id: string;
  productName: string;
  price: number;
  cofeId: string;
  cofeName: string;
  favarite: boolean;
  imagesPath: string;
  description: String;
  attribute: Array<Atributes>;
}
interface ICoffyArray {
  id: string;
  cofeId: string;
  name: string;
  price: number;
  favorite: boolean;
  imagesPath: string;
  productInfo: IProductInf;
}

export type CoffeModel = {
  id: string;
  name: string;
  address: string;
  coordinates: string;
  description: string;
  images: string;
  coffeArray: Array<ICoffyArray>;
};
export const initialStateCoffeData: Array<CoffeModel> = [
  {
    id: '1',
    name: 'Test 1',
    address: 'Tu tu fff',
    coordinates: '128 134 156',
    description: 'Best of the best',
    images: '',
    coffeArray: [
      {
        id: '01',
        cofeId: '001',
        name: 'Шницель по менгрески',
        price: 100,
        favorite: false,
        imagesPath: '',
        productInfo: {
          id: '0001',
          productName: 'Шницель по менгрески',
          price: 100,
          cofeId: '00001',
          cofeName: 'Марасейка',
          favarite: false,
          description: 'Лучший шницель на районе',
          imagesPath: '',
          attribute: [
            {
              id: '',
              description: '',
              iconType: '',
            },
          ],
        },
      },
      {
        id: '02',
        cofeId: '002',
        name: 'Лобио харкалия',
        price: 345,
        favorite: false,
        imagesPath: '',
        productInfo: {
          id: '0002',
          productName: 'Лобио харкалия',
          price: 345,
          cofeId: '00002',
          cofeName: 'Марасейка',
          favarite: false,
          description: 'Лучшая лобио на районе',
          imagesPath: '',
          attribute: [
            {
              id: '',
              description: '',
              iconType: '',
            },
          ],
        },
      },
      {
        id: '03',
        cofeId: '003',
        name: 'Бургер с лазанью',
        price: 765,
        favorite: false,
        imagesPath: '',
        productInfo: {
          id: '0003',
          productName: 'Бургер с лазанью',
          price: 765,
          cofeId: '00003',
          cofeName: 'Марасейка',
          favarite: false,
          description: 'Лучший бургер на районе',
          imagesPath: '',
          attribute: [
            {
              id: '',
              description: '',
              iconType: '',
            },
          ],
        },
      },
      {
        id: '04',
        cofeId: '004',
        name: 'Паста корбанара',
        price: 854,
        favorite: false,
        imagesPath: '',
        productInfo: {
          id: '0004',
          productName: 'Паста корбанара',
          price: 854,
          cofeId: '00004',
          cofeName: 'Марасейка',
          favarite: false,
          description: 'Лучшая паста на районе',
          imagesPath: '',
          attribute: [
            {
              id: '',
              description: '',
              iconType: '',
            },
          ],
        },
      },
      {
        id: '05',
        cofeId: '005',
        name: 'Грибы тюрблю',
        price: 945,
        favorite: false,
        imagesPath: '',
        productInfo: {
          id: '0005',
          productName: 'Грибы тюрблю',
          price: 945,
          cofeId: '00005',
          cofeName: 'Марасейка',
          favarite: false,
          description: 'Лучшие грибы на районе',
          imagesPath: '',
          attribute: [
            {
              id: '',
              description: '',
              iconType: '',
            },
          ],
        },
      },
      {
        id: '06',
        cofeId: '006',
        name: 'Калым',
        price: 345,
        favorite: false,
        imagesPath: '',
        productInfo: {
          id: '0006',
          productName: 'Шницель по менгрески',
          price: 345,
          cofeId: '00006',
          cofeName: 'Марасейка',
          favarite: false,
          description: 'Лучший калым на районе',
          imagesPath: '',
          attribute: [
            {
              id: '',
              description: '',
              iconType: '',
            },
          ],
        },
      },
    ],
  },
  {
    id: '2',
    name: 'Test 1',
    address: 'Tu tu fff',
    coordinates: '128 134 156',
    description: 'Best of the best',
    images: '',
    coffeArray: [
      {
        id: '',
        cofeId: '',
        name: '',
        price: 0,
        favorite: false,
        imagesPath: '',
      },
    ],
  },
  {
    id: '3',
    name: 'Test 1',
    address: 'Tu tu fff',
    coordinates: '128 134 156',
    description: 'Best of the best',
    images: '',
    coffeArray: [
      {
        id: '',
        cofeId: '',
        name: '',
        price: 0,
        favorite: false,
        imagesPath: '',
      },
    ],
  },
  {
    id: '4',
    name: 'Test 1',
    address: 'Tu tu fff',
    coordinates: '128 134 156',
    description: 'Best of the best',
    images: '',
    coffeArray: [
      {
        id: '',
        cofeId: '',
        name: '',
        price: 0,
        favorite: false,
        imagesPath: '',
      },
    ],
  },
  {
    id: '5',
    name: 'Test 1',
    address: 'Tu tu fff',
    coordinates: '128 134 156',
    description: 'Best of the best',
    images: '',
    coffeArray: [
      {
        id: '',
        cofeId: '',
        name: '',
        price: 0,
        favorite: false,
        imagesPath: '',
      },
    ],
  },
  {
    id: '6',
    name: 'Test 1',
    address: 'Tu tu fff',
    coordinates: '128 134 156',
    description: 'Best of the best',
    images: '',
    coffeArray: [
      {
        id: '',
        cofeId: '',
        name: '',
        price: 0,
        favorite: false,
        imagesPath: '',
      },
    ],
  },
  {
    id: '7',
    name: 'Test 1',
    address: 'Tu tu fff',
    coordinates: '128 134 156',
    description: 'Best of the best',
    images: '',
    coffeArray: [
      {
        id: '',
        cofeId: '',
        name: '',
        price: 0,
        favorite: false,
        imagesPath: '',
      },
    ],
  },
  {
    id: '8',
    name: 'Test 1',
    address: 'Tu tu fff',
    coordinates: '128 134 156',
    description: 'Best of the best',
    images: '',
    coffeArray: [
      {
        id: '',
        cofeId: '',
        name: '',
        price: 0,
        favorite: false,
        imagesPath: '',
      },
    ],
  },
  {
    id: '9',
    name: 'Test 1',
    address: 'Tu tu fff',
    coordinates: '128 134 156',
    description: 'Best of the best',
    images: '',
    coffeArray: [
      {
        id: '',
        cofeId: '',
        name: '',
        price: 0,
        favorite: false,
        imagesPath: '',
      },
    ],
  },
  {
    id: '10',
    name: 'Test 1',
    address: 'Tu tu fff',
    coordinates: '128 134 156',
    description: 'Best of the best',
    images: '',
    coffeArray: [
      {
        id: '',
        cofeId: '',
        name: '',
        price: 0,
        favorite: false,
        imagesPath: '',
      },
    ],
  },
];
export const coffeDataNoRegSlice = createSlice({
  name: 'coffeDataNoRegState',
  initialState: initialStateCoffeData,
  reducers: {
    addDataCoffe(state, action: PayloadAction<ICoffeDataV2>) {
      const dataUser = action.payload;
      const first = Object.values(dataUser);
      const lenghtState = state.length;
      if (state.length == 1) {
        state.pop();
      } else if (state.length > 1) {
        let counter = 0;
        while (counter != lenghtState) {
          state.pop();
          counter += 1;
        }
      }
      first.map(data => {
        const second: Array<CoffeModel> = Object.values(data);
        second.map(dataCoffe => {
          state.push(dataCoffe);
        });
      });
    },
  },
});

export default coffeDataNoRegSlice.reducer;
export const {addDataCoffe} = coffeDataNoRegSlice.actions;
