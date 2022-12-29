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
