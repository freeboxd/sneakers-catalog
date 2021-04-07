import { useContext } from 'react';
import { CartContext } from '../providers/CartProvider';
import { ICartContext } from '../@types/cart/Cart';

const useCart = (): ICartContext => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('Method must be used within a CartProvider.');
  }

  return context;
};

export default useCart;
