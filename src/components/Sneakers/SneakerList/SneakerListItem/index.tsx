import React, { useCallback } from 'react';
import CardWithImage from '../../../UI/CardWithImage';
import Select from '../../../UI/Select';
import { useFormik } from 'formik';
import Button from '../../../UI/Button';
import { useRouter } from 'next/router';
import { ICartContext, ISneaker } from '../../../../@types/cart';

import {
  SneakerOptionsContainer,
  ProductPrice,
  Form,
  SelectContainer,
} from './styles';
import useCart from '../../../../hooks/cart';

interface SneakerListItemProps {
  sneaker: ISneaker
}

const SneakerListItem: React.FC<SneakerListItemProps> = ({sneaker}: SneakerListItemProps) => {

  const router = useRouter();

  const cartContext: ICartContext = useCart();

  const formik = useFormik({
    enableReinitialize: true,

    initialValues: {
      size: 41,
      quantity: 1,
    },

    onSubmit: async (values) => {
      // Add new cartItem to the cart
      cartContext.addItem({
        product: sneaker,
        quantity: values.quantity,
        extraInfo: {
          size: values.size,
        }
      });

      // Navigate to the next page
      router.push('/checkout');
    },
  });

  const sneakerSizes = [34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44];
  const sneakerQuantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const sneakerSizeOptions = useCallback(
    () => sneakerSizes.map(size => (
        <option key={size} value={size}>
          {size}
        </option>
      )),
    [],
  );

  const sneakerQuantitiesOptions = useCallback(
    () => sneakerQuantities.map(quantity => (
        <option key={quantity} value={quantity}>
          {quantity}
        </option>
      )),
    [],
  );

  return (
    <CardWithImage
      title={sneaker.description}
      imgSrc={sneaker.thumbnailURL}
    >
      <Form onSubmit={formik.handleSubmit}>
        <SneakerOptionsContainer>
          <SelectContainer>
            <label>Size</label>
            <Select
              name="size"
              label='Size'
              value={formik.values.size}
              options={sneakerSizeOptions()}
              onChange={formik.handleChange}
            />
          </SelectContainer>

          <SelectContainer>
            <label>Quantity</label>
            <Select
              name="quantity"
              label='Quantity'
              value={formik.values.quantity}
              options={sneakerQuantitiesOptions()}
              onChange={formik.handleChange}
            />
          </SelectContainer>

        </SneakerOptionsContainer>
        <ProductPrice>{'$ ' + sneaker.price}</ProductPrice>

        <Button
          title='Add to cart'
          type='submit'
        />
      </Form>
    </CardWithImage>
  );
}

export default SneakerListItem;