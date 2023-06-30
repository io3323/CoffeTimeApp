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
    name: 'Мафия',
    address: 'Улица 25-го октебря',
    coordinates: '128 134 156',
    description:
      'Ресторан итальянской, японской и европейской кухни. К услугам посетителей — залы на 50, 100 человек на двух этажах для проведения встреч, мероприятий. В цокольном этаже — кальянная.',
    images:
      'https://media-cdn.tripadvisor.com/media/photo-s/09/8e/7a/c8/caption.jpg',
    coffeArray: [
      {
        id: '01',
        cofeId: '001',
        name: 'Шницель мясной',
        price: 100,
        favorite: false,
        imagesPath:
          'https://vkusno-i-prosto.ru/wp-content/uploads/2012/07/44993920_s.jpg',
        productInfo: {
          id: '0001',
          productName: 'Шницель мясной',
          price: 100,
          cofeId: '00001',
          cofeName: 'Мафия',
          favarite: false,
          description:
            'Самый нежный и вкусный шницель, только в нашем ресторане',
          imagesPath: 'https://www.edimdoma.ru/retsepty/49511-venskiy-shnitsel',
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
        name: 'Калифорния ролы',
        price: 345,
        favorite: false,
        imagesPath: 'https://mega-vkusno.ru/assets/images/blog/sushi-2853382-1280.jpg',
        productInfo: {
          id: '0002',
          productName: 'Калифорния ролы',
          price: 345,
          cofeId: '00002',
          cofeName: 'Мафия',
          favarite: false,
          description: 'Самые свежие суши только в нашем ресторане',
          imagesPath:
            'https://mega-vkusno.ru/assets/images/blog/sushi-2853382-1280.jpg',
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
        name: 'Филадельфия рол',
        price: 765,
        favorite: false,
        imagesPath:
          'https://www.povarenok.ru/data/cache/2014feb/15/50/647044_35246-710x550x.jpg',
        productInfo: {
          id: '0003',
          productName: 'Филадельфия рол',
          price: 765,
          cofeId: '00003',
          cofeName: 'Мафия',
          favarite: false,
          description: 'Самые вкусные ролы',
          imagesPath: 'https://www.povarenok.ru/data/cache/2014feb/15/50/647044_35246-710x550x.jpg',
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
        imagesPath:
          'https://s1.eda.ru/StaticContent/Photos/150525210126/150601174518/p_O.jpg',
        productInfo: {
          id: '0004',
          productName: 'Паста корбанара',
          price: 854,
          cofeId: '00004',
          cofeName: 'Мафия',
          favarite: false,
          description: 'Лучшая паста на районе',
          imagesPath:
            'https://s1.eda.ru/StaticContent/Photos/150525210126/150601174518/p_O.jpg',
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
        name: 'Картошка с грибами',
        price: 210,
        favorite: false,
        imagesPath: 'https://img1.russianfood.com/dycontent/images_upl/545/big_544045.jpg',
        productInfo: {
          id: '0005',
          productName: 'Картошка с грибами',
          price: 210,
          cofeId: '00005',
          cofeName: 'Мафия',
          favarite: false,
          description: 'Самая лучшая и нежная картошка ',
          imagesPath: 'https://img1.russianfood.com/dycontent/images_upl/545/big_544045.jpg',
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
        name: 'Пироги',
        price: 345,
        favorite: false,
        imagesPath: 'https://static.1000.menu/img/content/19872/-placindy-placindy-s-kartoshkoi_1491923286_1_max.jpg',
        productInfo: {
          id: '0006',
          productName: 'Самые аппетитные пироги',
          price: 345,
          cofeId: '00006',
          cofeName: 'Марасейка',
          favarite: false,
          description: 'Лучший калым на районе',
          imagesPath: 'https://static.1000.menu/img/content/19872/-placindy-placindy-s-kartoshkoi_1491923286_1_max.jpg',
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
    name: 'Ла Токанэ',
    address: 'Strada Sverdlov, 37',
    coordinates: '128 134 156',
    description:
      'Самый лучший ресторан по выпичке и плациндам, для семейного время препровождения',
    images: '',
    coffeArray: [
      {
        id: '01',
        cofeId: '001',
        name: 'Шницель мясной',
        price: 100,
        favorite: false,
        imagesPath: 'https://www.edimdoma.ru/retsepty/49511-venskiy-shnitsel',
        productInfo: {
          id: '0001',
          productName: 'Шницель мясной',
          price: 100,
          cofeId: '00001',
          cofeName: 'Мафия',
          favarite: false,
          description:
            'Самый нежный и вкусный шницель, только в нашем ресторане',
          imagesPath: 'https://www.edimdoma.ru/retsepty/49511-venskiy-shnitsel',
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
        name: 'Калифорния ролы',
        price: 345,
        favorite: false,
        imagesPath: '',
        productInfo: {
          id: '0002',
          productName: 'Калифорния ролы',
          price: 345,
          cofeId: '00002',
          cofeName: 'Мафия',
          favarite: false,
          description: 'Самые свежие суши только в нашем ресторане',
          imagesPath: 'https://www.edimdoma.ru/retsepty/50070-roll-kaliforniya',
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
        name: 'Филадельфия рол',
        price: 765,
        favorite: false,
        imagesPath: 'https://iv.avtosushi.ru/shop/show/roll-filadelfiya',
        productInfo: {
          id: '0003',
          productName: 'Филадельфия рол',
          price: 765,
          cofeId: '00003',
          cofeName: 'Мафия',
          favarite: false,
          description: 'Самые вкусные ролы',
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
        imagesPath:
          'https://www.vsegdavkusno.ru/recipes/pasta-karbonara-klassicheskiy-recept',
        productInfo: {
          id: '0004',
          productName: 'Паста корбанара',
          price: 854,
          cofeId: '00004',
          cofeName: 'Мафия',
          favarite: false,
          description: 'Лучшая паста на районе',
          imagesPath:
            'https://www.vsegdavkusno.ru/recipes/pasta-karbonara-klassicheskiy-recept',
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
        name: 'Картошка с грибами',
        price: 210,
        favorite: false,
        imagesPath: 'https://lifehacker.ru/kartoshka-s-gribami-recepty/',
        productInfo: {
          id: '0005',
          productName: 'Картошка с грибами',
          price: 210,
          cofeId: '00005',
          cofeName: 'Мафия',
          favarite: false,
          description: 'Самая лучша и нежная картошка ',
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
        name: 'Пироги',
        price: 345,
        favorite: false,
        imagesPath: '',
        productInfo: {
          id: '0006',
          productName: 'Самые аппетитные пироги',
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
    id: '3',
    name: 'Шинок Куманёк',
    address: 'Strada Sverdlov, 37',
    coordinates: '128 134 156',
    description: 'Best of the best',
    images:
      'https://media-cdn.tripadvisor.com/media/photo-s/18/69/28/d1/photo0jpg.jpg',
    coffeArray: [
      {
        id: '01',
        cofeId: '001',
        name: 'Шницель мясной',
        price: 100,
        favorite: false,
        imagesPath: 'https://www.edimdoma.ru/retsepty/49511-venskiy-shnitsel',
        productInfo: {
          id: '0001',
          productName: 'Шницель мясной',
          price: 100,
          cofeId: '00001',
          cofeName: 'Мафия',
          favarite: false,
          description:
            'Самый нежный и вкусный шницель, только в нашем ресторане',
          imagesPath: 'https://www.edimdoma.ru/retsepty/49511-venskiy-shnitsel',
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
        name: 'Калифорния ролы',
        price: 345,
        favorite: false,
        imagesPath: '',
        productInfo: {
          id: '0002',
          productName: 'Калифорния ролы',
          price: 345,
          cofeId: '00002',
          cofeName: 'Мафия',
          favarite: false,
          description: 'Самые свежие суши только в нашем ресторане',
          imagesPath: 'https://www.edimdoma.ru/retsepty/50070-roll-kaliforniya',
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
        name: 'Филадельфия рол',
        price: 765,
        favorite: false,
        imagesPath: 'https://iv.avtosushi.ru/shop/show/roll-filadelfiya',
        productInfo: {
          id: '0003',
          productName: 'Филадельфия рол',
          price: 765,
          cofeId: '00003',
          cofeName: 'Мафия',
          favarite: false,
          description: 'Самые вкусные ролы',
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
        imagesPath:
          'https://www.vsegdavkusno.ru/recipes/pasta-karbonara-klassicheskiy-recept',
        productInfo: {
          id: '0004',
          productName: 'Паста корбанара',
          price: 854,
          cofeId: '00004',
          cofeName: 'Мафия',
          favarite: false,
          description: 'Лучшая паста на районе',
          imagesPath:
            'https://www.vsegdavkusno.ru/recipes/pasta-karbonara-klassicheskiy-recept',
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
        name: 'Картошка с грибами',
        price: 210,
        favorite: false,
        imagesPath: 'https://lifehacker.ru/kartoshka-s-gribami-recepty/',
        productInfo: {
          id: '0005',
          productName: 'Картошка с грибами',
          price: 210,
          cofeId: '00005',
          cofeName: 'Мафия',
          favarite: false,
          description: 'Самая лучша и нежная картошка ',
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
        name: 'Пироги',
        price: 345,
        favorite: false,
        imagesPath: '',
        productInfo: {
          id: '0006',
          productName: 'Самые аппетитные пироги',
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
    id: '4',
    name: 'Крикова',
    address: 'ул. Правды, 14',
    coordinates: '128 134 156',
    description: 'Ресторан котоыре передает настоящий дух торжества',
    images:
      'https://media-cdn.tripadvisor.com/media/photo-s/16/0f/4b/c2/caption.jpg',
    coffeArray: [
      {
        id: '01',
        cofeId: '001',
        name: 'Шницель мясной',
        price: 100,
        favorite: false,
        imagesPath: 'https://www.edimdoma.ru/retsepty/49511-venskiy-shnitsel',
        productInfo: {
          id: '0001',
          productName: 'Шницель мясной',
          price: 100,
          cofeId: '00001',
          cofeName: 'Мафия',
          favarite: false,
          description:
            'Самый нежный и вкусный шницель, только в нашем ресторане',
          imagesPath: 'https://www.edimdoma.ru/retsepty/49511-venskiy-shnitsel',
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
        name: 'Калифорния ролы',
        price: 345,
        favorite: false,
        imagesPath: '',
        productInfo: {
          id: '0002',
          productName: 'Калифорния ролы',
          price: 345,
          cofeId: '00002',
          cofeName: 'Мафия',
          favarite: false,
          description: 'Самые свежие суши только в нашем ресторане',
          imagesPath: 'https://www.edimdoma.ru/retsepty/50070-roll-kaliforniya',
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
        name: 'Филадельфия рол',
        price: 765,
        favorite: false,
        imagesPath: 'https://iv.avtosushi.ru/shop/show/roll-filadelfiya',
        productInfo: {
          id: '0003',
          productName: 'Филадельфия рол',
          price: 765,
          cofeId: '00003',
          cofeName: 'Мафия',
          favarite: false,
          description: 'Самые вкусные ролы',
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
        imagesPath:
          'https://www.vsegdavkusno.ru/recipes/pasta-karbonara-klassicheskiy-recept',
        productInfo: {
          id: '0004',
          productName: 'Паста корбанара',
          price: 854,
          cofeId: '00004',
          cofeName: 'Мафия',
          favarite: false,
          description: 'Лучшая паста на районе',
          imagesPath:
            'https://www.vsegdavkusno.ru/recipes/pasta-karbonara-klassicheskiy-recept',
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
        name: 'Картошка с грибами',
        price: 210,
        favorite: false,
        imagesPath: 'https://lifehacker.ru/kartoshka-s-gribami-recepty/',
        productInfo: {
          id: '0005',
          productName: 'Картошка с грибами',
          price: 210,
          cofeId: '00005',
          cofeName: 'Мафия',
          favarite: false,
          description: 'Самая лучша и нежная картошка ',
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
        name: 'Пироги',
        price: 345,
        favorite: false,
        imagesPath: '',
        productInfo: {
          id: '0006',
          productName: 'Самые аппетитные пироги',
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
    id: '5',
    name: 'La Vida',
    address: 'ул. 25 Октября, 72',
    coordinates: '128 134 156',
    description: 'Ресторан с самой вкусной пиццей',
    images:
      'https://media-cdn.tripadvisor.com/media/photo-s/11/bf/0a/f8/caption.jpg',
    coffeArray: [
      {
        id: '01',
        cofeId: '001',
        name: 'Шницель мясной',
        price: 100,
        favorite: false,
        imagesPath: 'https://www.edimdoma.ru/retsepty/49511-venskiy-shnitsel',
        productInfo: {
          id: '0001',
          productName: 'Шницель мясной',
          price: 100,
          cofeId: '00001',
          cofeName: 'Мафия',
          favarite: false,
          description:
            'Самый нежный и вкусный шницель, только в нашем ресторане',
          imagesPath: 'https://www.edimdoma.ru/retsepty/49511-venskiy-shnitsel',
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
        name: 'Калифорния ролы',
        price: 345,
        favorite: false,
        imagesPath: '',
        productInfo: {
          id: '0002',
          productName: 'Калифорния ролы',
          price: 345,
          cofeId: '00002',
          cofeName: 'Мафия',
          favarite: false,
          description: 'Самые свежие суши только в нашем ресторане',
          imagesPath: 'https://www.edimdoma.ru/retsepty/50070-roll-kaliforniya',
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
        name: 'Филадельфия рол',
        price: 765,
        favorite: false,
        imagesPath: 'https://iv.avtosushi.ru/shop/show/roll-filadelfiya',
        productInfo: {
          id: '0003',
          productName: 'Филадельфия рол',
          price: 765,
          cofeId: '00003',
          cofeName: 'Мафия',
          favarite: false,
          description: 'Самые вкусные ролы',
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
        imagesPath:
          'https://www.vsegdavkusno.ru/recipes/pasta-karbonara-klassicheskiy-recept',
        productInfo: {
          id: '0004',
          productName: 'Паста корбанара',
          price: 854,
          cofeId: '00004',
          cofeName: 'Мафия',
          favarite: false,
          description: 'Лучшая паста на районе',
          imagesPath:
            'https://www.vsegdavkusno.ru/recipes/pasta-karbonara-klassicheskiy-recept',
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
        name: 'Картошка с грибами',
        price: 210,
        favorite: false,
        imagesPath: 'https://lifehacker.ru/kartoshka-s-gribami-recepty/',
        productInfo: {
          id: '0005',
          productName: 'Картошка с грибами',
          price: 210,
          cofeId: '00005',
          cofeName: 'Мафия',
          favarite: false,
          description: 'Самая лучша и нежная картошка ',
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
        name: 'Пироги',
        price: 345,
        favorite: false,
        imagesPath: '',
        productInfo: {
          id: '0006',
          productName: 'Самые аппетитные пироги',
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
    id: '6',
    name: 'Mega Grill',
    address: 'Шевченко, 92',
    coordinates: '128 134 156',
    description: 'Ресторан с самым лучшим мясом',
    images:
      'https://media-cdn.tripadvisor.com/media/photo-p/17/0b/69/ec/mega-grill-logo.jpg',
    coffeArray: [
      {
        id: '01',
        cofeId: '001',
        name: 'Шницель мясной',
        price: 100,
        favorite: false,
        imagesPath: 'https://www.edimdoma.ru/retsepty/49511-venskiy-shnitsel',
        productInfo: {
          id: '0001',
          productName: 'Шницель мясной',
          price: 100,
          cofeId: '00001',
          cofeName: 'Мафия',
          favarite: false,
          description:
            'Самый нежный и вкусный шницель, только в нашем ресторане',
          imagesPath: 'https://www.edimdoma.ru/retsepty/49511-venskiy-shnitsel',
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
        name: 'Калифорния ролы',
        price: 345,
        favorite: false,
        imagesPath: '',
        productInfo: {
          id: '0002',
          productName: 'Калифорния ролы',
          price: 345,
          cofeId: '00002',
          cofeName: 'Мафия',
          favarite: false,
          description: 'Самые свежие суши только в нашем ресторане',
          imagesPath: 'https://www.edimdoma.ru/retsepty/50070-roll-kaliforniya',
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
        name: 'Филадельфия рол',
        price: 765,
        favorite: false,
        imagesPath: 'https://iv.avtosushi.ru/shop/show/roll-filadelfiya',
        productInfo: {
          id: '0003',
          productName: 'Филадельфия рол',
          price: 765,
          cofeId: '00003',
          cofeName: 'Мафия',
          favarite: false,
          description: 'Самые вкусные ролы',
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
        imagesPath:
          'https://www.vsegdavkusno.ru/recipes/pasta-karbonara-klassicheskiy-recept',
        productInfo: {
          id: '0004',
          productName: 'Паста корбанара',
          price: 854,
          cofeId: '00004',
          cofeName: 'Мафия',
          favarite: false,
          description: 'Лучшая паста на районе',
          imagesPath:
            'https://www.vsegdavkusno.ru/recipes/pasta-karbonara-klassicheskiy-recept',
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
        name: 'Картошка с грибами',
        price: 210,
        favorite: false,
        imagesPath: 'https://lifehacker.ru/kartoshka-s-gribami-recepty/',
        productInfo: {
          id: '0005',
          productName: 'Картошка с грибами',
          price: 210,
          cofeId: '00005',
          cofeName: 'Мафия',
          favarite: false,
          description: 'Самая лучша и нежная картошка ',
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
        name: 'Пироги',
        price: 345,
        favorite: false,
        imagesPath: '',
        productInfo: {
          id: '0006',
          productName: 'Самые аппетитные пироги',
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
    id: '7',
    name: 'Way Cup',
    address: 'ул. Свердлова, 71',
    coordinates: '128 134 156',
    description: 'Best of the best',
    images:
      'https://media-cdn.tripadvisor.com/media/photo-s/11/a5/ea/a7/caption.jpg',
    coffeArray: [
      {
        id: '01',
        cofeId: '001',
        name: 'Шницель мясной',
        price: 100,
        favorite: false,
        imagesPath: 'https://www.edimdoma.ru/retsepty/49511-venskiy-shnitsel',
        productInfo: {
          id: '0001',
          productName: 'Шницель мясной',
          price: 100,
          cofeId: '00001',
          cofeName: 'Мафия',
          favarite: false,
          description:
            'Самый нежный и вкусный шницель, только в нашем ресторане',
          imagesPath: 'https://www.edimdoma.ru/retsepty/49511-venskiy-shnitsel',
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
        name: 'Калифорния ролы',
        price: 345,
        favorite: false,
        imagesPath: '',
        productInfo: {
          id: '0002',
          productName: 'Калифорния ролы',
          price: 345,
          cofeId: '00002',
          cofeName: 'Мафия',
          favarite: false,
          description: 'Самые свежие суши только в нашем ресторане',
          imagesPath: 'https://www.edimdoma.ru/retsepty/50070-roll-kaliforniya',
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
        name: 'Филадельфия рол',
        price: 765,
        favorite: false,
        imagesPath: 'https://iv.avtosushi.ru/shop/show/roll-filadelfiya',
        productInfo: {
          id: '0003',
          productName: 'Филадельфия рол',
          price: 765,
          cofeId: '00003',
          cofeName: 'Мафия',
          favarite: false,
          description: 'Самые вкусные ролы',
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
        imagesPath:
          'https://www.vsegdavkusno.ru/recipes/pasta-karbonara-klassicheskiy-recept',
        productInfo: {
          id: '0004',
          productName: 'Паста корбанара',
          price: 854,
          cofeId: '00004',
          cofeName: 'Мафия',
          favarite: false,
          description: 'Лучшая паста на районе',
          imagesPath:
            'https://www.vsegdavkusno.ru/recipes/pasta-karbonara-klassicheskiy-recept',
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
        name: 'Картошка с грибами',
        price: 210,
        favorite: false,
        imagesPath: 'https://lifehacker.ru/kartoshka-s-gribami-recepty/',
        productInfo: {
          id: '0005',
          productName: 'Картошка с грибами',
          price: 210,
          cofeId: '00005',
          cofeName: 'Мафия',
          favarite: false,
          description: 'Самая лучша и нежная картошка ',
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
        name: 'Пироги',
        price: 345,
        favorite: false,
        imagesPath: '',
        productInfo: {
          id: '0006',
          productName: 'Самые аппетитные пироги',
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
    id: '8',
    name: 'Кафе Капучино',
    address: 'ул. Карла Маркса, 151 ТЦ Исток',
    coordinates: '128 134 156',
    description: 'Best of the best',
    images:
      'https://media-cdn.tripadvisor.com/media/photo-s/07/35/43/59/cafe-cappuccino.jpg',
    coffeArray: [
      {
        id: '01',
        cofeId: '001',
        name: 'Шницель мясной',
        price: 100,
        favorite: false,
        imagesPath: 'https://www.edimdoma.ru/retsepty/49511-venskiy-shnitsel',
        productInfo: {
          id: '0001',
          productName: 'Шницель мясной',
          price: 100,
          cofeId: '00001',
          cofeName: 'Мафия',
          favarite: false,
          description:
            'Самый нежный и вкусный шницель, только в нашем ресторане',
          imagesPath: 'https://www.edimdoma.ru/retsepty/49511-venskiy-shnitsel',
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
        name: 'Калифорния ролы',
        price: 345,
        favorite: false,
        imagesPath: '',
        productInfo: {
          id: '0002',
          productName: 'Калифорния ролы',
          price: 345,
          cofeId: '00002',
          cofeName: 'Мафия',
          favarite: false,
          description: 'Самые свежие суши только в нашем ресторане',
          imagesPath: 'https://www.edimdoma.ru/retsepty/50070-roll-kaliforniya',
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
        name: 'Филадельфия рол',
        price: 765,
        favorite: false,
        imagesPath: 'https://iv.avtosushi.ru/shop/show/roll-filadelfiya',
        productInfo: {
          id: '0003',
          productName: 'Филадельфия рол',
          price: 765,
          cofeId: '00003',
          cofeName: 'Мафия',
          favarite: false,
          description: 'Самые вкусные ролы',
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
        imagesPath:
          'https://www.vsegdavkusno.ru/recipes/pasta-karbonara-klassicheskiy-recept',
        productInfo: {
          id: '0004',
          productName: 'Паста корбанара',
          price: 854,
          cofeId: '00004',
          cofeName: 'Мафия',
          favarite: false,
          description: 'Лучшая паста на районе',
          imagesPath:
            'https://www.vsegdavkusno.ru/recipes/pasta-karbonara-klassicheskiy-recept',
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
        name: 'Картошка с грибами',
        price: 210,
        favorite: false,
        imagesPath: 'https://lifehacker.ru/kartoshka-s-gribami-recepty/',
        productInfo: {
          id: '0005',
          productName: 'Картошка с грибами',
          price: 210,
          cofeId: '00005',
          cofeName: 'Мафия',
          favarite: false,
          description: 'Самая лучша и нежная картошка ',
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
        name: 'Пироги',
        price: 345,
        favorite: false,
        imagesPath: '',
        productInfo: {
          id: '0006',
          productName: 'Самые аппетитные пироги',
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
    id: '9',
    name: 'Villa Rich',
    address: 'ул.Царёва 2Б, Тирасполь 3300 Молдова',
    coordinates: '128 134 156',
    description: 'Best of the best',
    images:
      'https://media-cdn.tripadvisor.com/media/photo-s/13/7b/28/dc/caption.jpg',
    coffeArray: [
      {
        id: '01',
        cofeId: '001',
        name: 'Шницель мясной',
        price: 100,
        favorite: false,
        imagesPath: 'https://www.edimdoma.ru/retsepty/49511-venskiy-shnitsel',
        productInfo: {
          id: '0001',
          productName: 'Шницель мясной',
          price: 100,
          cofeId: '00001',
          cofeName: 'Мафия',
          favarite: false,
          description:
            'Самый нежный и вкусный шницель, только в нашем ресторане',
          imagesPath: 'https://www.edimdoma.ru/retsepty/49511-venskiy-shnitsel',
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
        name: 'Калифорния ролы',
        price: 345,
        favorite: false,
        imagesPath: '',
        productInfo: {
          id: '0002',
          productName: 'Калифорния ролы',
          price: 345,
          cofeId: '00002',
          cofeName: 'Мафия',
          favarite: false,
          description: 'Самые свежие суши только в нашем ресторане',
          imagesPath: 'https://www.edimdoma.ru/retsepty/50070-roll-kaliforniya',
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
        name: 'Филадельфия рол',
        price: 765,
        favorite: false,
        imagesPath: 'https://iv.avtosushi.ru/shop/show/roll-filadelfiya',
        productInfo: {
          id: '0003',
          productName: 'Филадельфия рол',
          price: 765,
          cofeId: '00003',
          cofeName: 'Мафия',
          favarite: false,
          description: 'Самые вкусные ролы',
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
        imagesPath:
          'https://www.vsegdavkusno.ru/recipes/pasta-karbonara-klassicheskiy-recept',
        productInfo: {
          id: '0004',
          productName: 'Паста корбанара',
          price: 854,
          cofeId: '00004',
          cofeName: 'Мафия',
          favarite: false,
          description: 'Лучшая паста на районе',
          imagesPath:
            'https://www.vsegdavkusno.ru/recipes/pasta-karbonara-klassicheskiy-recept',
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
        name: 'Картошка с грибами',
        price: 210,
        favorite: false,
        imagesPath: 'https://lifehacker.ru/kartoshka-s-gribami-recepty/',
        productInfo: {
          id: '0005',
          productName: 'Картошка с грибами',
          price: 210,
          cofeId: '00005',
          cofeName: 'Мафия',
          favarite: false,
          description: 'Самая лучша и нежная картошка ',
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
        name: 'Пироги',
        price: 345,
        favorite: false,
        imagesPath: '',
        productInfo: {
          id: '0006',
          productName: 'Самые аппетитные пироги',
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
    id: '10',
    name: 'Dolce Vita',
    address: '25th October St',
    coordinates: '128 134 156',
    description: 'Best of the best',
    images:
      'https://media-cdn.tripadvisor.com/media/photo-s/16/c7/63/34/grosse-auswahl-von-leckeren.jpg',
    coffeArray: [
      {
        id: '01',
        cofeId: '001',
        name: 'Шницель мясной',
        price: 100,
        favorite: false,
        imagesPath: 'https://www.edimdoma.ru/retsepty/49511-venskiy-shnitsel',
        productInfo: {
          id: '0001',
          productName: 'Шницель мясной',
          price: 100,
          cofeId: '00001',
          cofeName: 'Мафия',
          favarite: false,
          description:
            'Самый нежный и вкусный шницель, только в нашем ресторане',
          imagesPath: 'https://www.edimdoma.ru/retsepty/49511-venskiy-shnitsel',
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
        name: 'Калифорния ролы',
        price: 345,
        favorite: false,
        imagesPath: '',
        productInfo: {
          id: '0002',
          productName: 'Калифорния ролы',
          price: 345,
          cofeId: '00002',
          cofeName: 'Мафия',
          favarite: false,
          description: 'Самые свежие суши только в нашем ресторане',
          imagesPath: 'https://www.edimdoma.ru/retsepty/50070-roll-kaliforniya',
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
        name: 'Филадельфия рол',
        price: 765,
        favorite: false,
        imagesPath: 'https://iv.avtosushi.ru/shop/show/roll-filadelfiya',
        productInfo: {
          id: '0003',
          productName: 'Филадельфия рол',
          price: 765,
          cofeId: '00003',
          cofeName: 'Мафия',
          favarite: false,
          description: 'Самые вкусные ролы',
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
        imagesPath:
          'https://www.vsegdavkusno.ru/recipes/pasta-karbonara-klassicheskiy-recept',
        productInfo: {
          id: '0004',
          productName: 'Паста корбанара',
          price: 854,
          cofeId: '00004',
          cofeName: 'Мафия',
          favarite: false,
          description: 'Лучшая паста на районе',
          imagesPath:
            'https://www.vsegdavkusno.ru/recipes/pasta-karbonara-klassicheskiy-recept',
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
        name: 'Картошка с грибами',
        price: 210,
        favorite: false,
        imagesPath: 'https://lifehacker.ru/kartoshka-s-gribami-recepty/',
        productInfo: {
          id: '0005',
          productName: 'Картошка с грибами',
          price: 210,
          cofeId: '00005',
          cofeName: 'Мафия',
          favarite: false,
          description: 'Самая лучша и нежная картошка ',
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
        name: 'Пироги',
        price: 345,
        favorite: false,
        imagesPath: '',
        productInfo: {
          id: '0006',
          productName: 'Самые аппетитные пироги',
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
