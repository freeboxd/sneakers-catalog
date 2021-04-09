import React from 'react';
import { ICartItem, ISneaker } from '../../../@types/cart';
import Button from '../../UI/Button';
import MaxResImg from '../UI/MaxResImg';
import SmallImg from '../UI/SmallImg';
import useCart from '../../../hooks/cart';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import {
  DetailBody,
  WrapperCardHeader,
  CartItemInfo,
  OrderDetails,
  LowerContainerPrimaryText,
  LowerContainerSecondaryText,
  TotalCostPrice,
  CostContainer,
  InfoContainer,
  WrapperCardSubHeader,
  WrapperCardBody,
  ContinueButtonContainer,
  CardContainer,
  CardWrapper,
  CardBlock,
} from './styles';


interface OrderReviewProps {
  selectedCartItem: ICartItem,
  nextStep(): void,
}

const OrderReview: React.FC<OrderReviewProps> = ({
  selectedCartItem,
  nextStep
}: OrderReviewProps) => {

  const { selectedPaymentMethod, cart } = useCart();

  const themeContext = useContext(ThemeContext);

  return (
    <>
      <DetailBody>
        <MaxResImg
          src={selectedCartItem.product.maxresURL}
        />

        <CardWrapper>
          <CardContainer>
            <CardBlock
              margin='0 0 3rem'
              borderRadius='9px'
            >
              <WrapperCardHeader>Order Summary</WrapperCardHeader>
              
              <WrapperCardBody>
                <SmallImg
                  src={selectedCartItem.product.maxresURL}
                />

                <OrderDetails>
                  <InfoContainer>

                    <WrapperCardSubHeader>{selectedCartItem.product.description}</WrapperCardSubHeader>

                    <CartItemInfo>
                      x {selectedCartItem.quantity}
                      {
                        // Displays color, if exists
                        (selectedCartItem.extraInfo && (selectedCartItem.product as ISneaker).color) && (
                          <>, {(selectedCartItem.product as ISneaker).color}</>)
                      }

                      {
                        // Displays size, if exists
                        (selectedCartItem.extraInfo && selectedCartItem.extraInfo.size) && (
                          <>, Size {selectedCartItem.extraInfo.size}</>)
                      }

                      <br/>
                      Item #{selectedCartItem.id}
                    </CartItemInfo>
                  </InfoContainer>
                
                </OrderDetails>
              </WrapperCardBody>
            </CardBlock>

            <CardBlock
              borderTopRadius='9px'
              paddingTopMobile='3.2rem'
            >
              <WrapperCardHeader>Payment Method</WrapperCardHeader>
              <div>
                <selectedPaymentMethod.icon size='47px' color={themeContext.color.primary} />
                <span
                  style={{
                    marginLeft: '2rem',
                    fontSize: '2rem',
                  }}
                >
                  {selectedPaymentMethod.name}
                </span>
              </div>
              </CardBlock>

            <CardBlock
              borderBottomRadius='9px'
            >
              <CostContainer>
                <span>
                  <LowerContainerPrimaryText>Total Cost</LowerContainerPrimaryText>
                  <LowerContainerSecondaryText>Delivery Included</LowerContainerSecondaryText>
                </span>

                <TotalCostPrice>
                  ${selectedCartItem.quantity * Number(selectedCartItem.product.price)}
                </TotalCostPrice>
              </CostContainer>
            </CardBlock>

            <ContinueButtonContainer>
              <Button
                title='Place order'
                // onClick={() => handleClickContinue()}
                type="button"
              />
            </ContinueButtonContainer>
          </CardContainer>
        </CardWrapper>
        
      
      </DetailBody>
    </>
  );
}

export default OrderReview;