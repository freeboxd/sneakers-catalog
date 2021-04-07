interface IProduct {
  id: string;
  price: string;
  maxresURL: string;
  description: string;
  thumbnailURL: string;
  currency: string;
}

interface ISneaker extends IProduct {
  color: string;
}

interface ICartContext {
  addItem(cartItem: IAddItemArgs): number;
  removeItem(cartItemId: number): ICartItem;
  clear(): void;
  cart: ICartItem[];
}

interface IAddItemArgs {
  product: IProduct,
  quantity: number,
  extraInfo: ICartItemExtraInfo,
}

interface ICartItem {
  id: number,
  product: IProduct,
  quantity: number,
  extraInfo?: ICartItemExtraInfo,
}

interface ICartItemExtraInfo {
  size?: number,
}

