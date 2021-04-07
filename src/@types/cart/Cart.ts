export interface IProduct {
  id: string;
  price: string;
  maxresURL: string;
  description: string;
  thumbnailURL: string;
  currency: string;
}

export interface ISneaker extends IProduct {
  color: string;
}

export interface ICartContext {
  addItem(cartItem: IAddItemArgs): number;
  removeItem(cartItemId: number): ICartItem;
  clear(): void;
  cart: ICartItem[];
}

export interface IAddItemArgs {
  product: IProduct,
  quantity: number,
  extraInfo: ICartItemExtraInfo,
}

export interface ICartItem {
  id: number,
  product: IProduct,
  quantity: number,
  extraInfo?: ICartItemExtraInfo,
}

export interface ICartItemExtraInfo {
  size?: number,
}
