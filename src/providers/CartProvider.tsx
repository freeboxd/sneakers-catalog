import React, { createContext, useState } from 'react';

export const CartContext = createContext<ICartContext>({} as ICartContext);

export const CartProvider: React.FC = ({ children }) => {
  // State storing the cart items
  const [cart, setCart] = useState<ICartItem[]>([] as ICartItem[]);

  // Adds a new item to the cart
  const addItem = ({ product, quantity, extraInfo }: IAddItemArgs) => {
    const newCart = [...cart];

    const cartItem: ICartItem = {
      id: cart.length,
      product,
      quantity,
      extraInfo,
    };

    newCart.push(cartItem);

    setCart(newCart);

    return newCart.length;
  };

  // Removes an item from the cart by it's id
  const removeItem = (cartItemId: number) => {
    const cartItemToDelete = cart.find((item) => item.id = cartItemId);

    if (!cartItemToDelete) {
      throw new Error('Cart item not found.');
    }

    const newCart = cart.splice(cartItemId, 1);

    setCart(newCart);

    return cartItemToDelete;
  };

  const clear = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ addItem, removeItem, cart, clear }}
    >
      {children}
    </CartContext.Provider>
  );
};
