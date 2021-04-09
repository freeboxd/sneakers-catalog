import React from 'react';
import { ICartItem, ISneaker } from '../../../@types/cart/Cart';
import PaymentMethodSelect from './PaymentMethodSelect';
import Button from '../../UI/Button';
import MaxResImg from '../UI/MaxResImg';
import SmallImg from '../UI/SmallImg';

import {
  DetailBody,
  WrapperCardContainer,
  WrapperCardHeader,
  CartItemInfo,
  DeliveryDetailsTitle,
  DeliveryDetailsContent,
  OrderDetails,
  LowerContainerPrimaryText,
  LowerContainerSecondaryText,
  TotalCostPrice,
  CostContainer,
  InfoContainer,
  DeliveryDetailsContainer,
  EmptyBlock,
  DisplayFlex,
  HeaderTitle,
  DisappearsBelowTablet,
  WrapperCard,
  ContinueButtonContainer,
} from './styles';

import usePayWithMyBank from '../../../hooks/payWithMyBank';
import useCart from '../../../hooks/cart';

interface PaymentOptionsProps {
  selectedCartItem: ICartItem,
  nextStep(): void,
}

const PaymentOptions: React.FC<PaymentOptionsProps> = ({
  selectedCartItem,
  nextStep,
}: PaymentOptionsProps) => {

  // Callback for when PayWithMyBank.establish runs successfully
  const handlePayWithMyBankEstablishSuccess = () => {
    nextStep();
  }

  // Callback for when PayWithMyBank.establish fails
  const handlePayWithMyBankEstablishFailure = () => {
    //
  }

  const { PayWithMyBankEstablish } = usePayWithMyBank(handlePayWithMyBankEstablishSuccess, handlePayWithMyBankEstablishFailure);
  const { selectedPaymentMethod, cart } = useCart();

  const handleClickContinue = () => {

    // Opens PayWithMyBank integration when 'online-banking' is selected
    if (selectedPaymentMethod.id === 'online-banking') {

      PayWithMyBankEstablish(cart[0]);

    } else {
      nextStep();
    }

  };

  return (
    <>
      <DetailBody>
        <MaxResImg
          src={selectedCartItem.product.maxresURL}
        />

        <WrapperCard>
          <WrapperCardContainer>

            <SmallImg
              src={selectedCartItem.product.maxresURL}
            />

            <OrderDetails>
              <InfoContainer>
                <DisappearsBelowTablet>
                  <HeaderTitle>Cart total</HeaderTitle>
                </DisappearsBelowTablet>
                
                <WrapperCardHeader>{selectedCartItem.product.description}</WrapperCardHeader>

                <CartItemInfo>
                  x {selectedCartItem.quantity}
                  {
                    // Displays size, if exists
                    (selectedCartItem.extraInfo && selectedCartItem.extraInfo.size) && (
                      <>, Size {selectedCartItem.extraInfo.size}</>)
                  }
                  {
                    // Displays color, if exists
                    (selectedCartItem.extraInfo && (selectedCartItem.product as ISneaker).color) && (
                      <>, {(selectedCartItem.product as ISneaker).color}</>)
                  }

                  <br/>
                  Item #{selectedCartItem.id}
                </CartItemInfo>
              </InfoContainer>

              <DeliveryDetailsContainer>
                <DeliveryDetailsTitle>
                  <HeaderTitle>
                    Delivery Details
                  </HeaderTitle>
                </DeliveryDetailsTitle>
                <DeliveryDetailsContent>
                  John Smith<br/>
                  Phone no: 01312428200<br/>
                  Address: Redwood City, 2000.<br/>
                </DeliveryDetailsContent>
              </DeliveryDetailsContainer>
            
            </OrderDetails>

            <DisplayFlex>
              <EmptyBlock/>
              <CostContainer>
                  <span>
                    <LowerContainerPrimaryText>Total Cost</LowerContainerPrimaryText>
                    <LowerContainerSecondaryText>Delivery Included</LowerContainerSecondaryText>
                  </span>
                
                  <TotalCostPrice>
                    ${selectedCartItem.quantity * Number(selectedCartItem.product.price)}
                  </TotalCostPrice>
              </CostContainer>
            </DisplayFlex>
          </WrapperCardContainer>

          <PaymentMethodSelect/>

          
          <ContinueButtonContainer>
            <Button
              title='Continue'
              onClick={() => handleClickContinue()}
              type="button"
            />
          </ContinueButtonContainer>
        </WrapperCard>
        
      
      </DetailBody>
    </>
  );
}

export default PaymentOptions;