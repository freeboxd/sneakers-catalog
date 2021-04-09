import React, { useCallback, useEffect } from 'react';

import { BuildingBank } from '@styled-icons/fluentui-system-filled/BuildingBank';
import { CreditCard } from '@styled-icons/bootstrap/CreditCard';
import { CcApplePay } from '@styled-icons/fa-brands/CcApplePay';
import { IPaymentMethod } from '../../../../@types/payment';
import useCart from '../../../../hooks/cart';
import AlternativeSelect, {
  IAlternativeSelectOption,
} from '../../../UI/AlternativeSelect';

import { Container, HeaderTitle, PaymentMethodsContainer } from './styles';

const PaymentOptionsSelect: React.FC = () => {
  const { changeSelectedPaymentMethod } = useCart();

  const paymentMethods: IPaymentMethod[] = [
    {
      name: 'Online Banking',
      badge: 'Save $10',
      iconSrc: 'online_banking.png',
      id: 'online-banking',
      icon: BuildingBank,
    },
    {
      name: 'Card Payment',
      iconSrc: 'mastercard_visa.png',
      id: 'card-payment',
      icon: CreditCard,
    },
    {
      name: 'Apple Pay',
      iconSrc: 'apple_pay.png',
      id: 'apple-play',
      icon: CcApplePay,
    },
  ];

  useEffect(() => {
    changeSelectedPaymentMethod(paymentMethods[0]);
  }, []);

  const mapAllPaymentMethodsToAlternativeSelectOption = useCallback(() => {
    const options = paymentMethods.map(({
      name, id, iconSrc, badge,
    }) => {
      const alternativeSelectOption: IAlternativeSelectOption = {
        title: name,
        id,
        iconSrc,
      };

      if (badge) {
        alternativeSelectOption.badge = badge;
      }

      return alternativeSelectOption;
    });

    return options;
  }, [paymentMethods]);

  const handleChangePaymentMethod = useCallback(
    (option: IAlternativeSelectOption) => {
      const paymentMethod: IPaymentMethod = paymentMethods.find(
        (pm) => pm.id === option.id,
      );

      changeSelectedPaymentMethod(paymentMethod);
    },
    [],
  );

  return (
    <Container>
      <HeaderTitle>Select your payment method</HeaderTitle>

      <PaymentMethodsContainer>
        <AlternativeSelect
          onChangeSelectedOption={(option) => handleChangePaymentMethod(option)}
          options={mapAllPaymentMethodsToAlternativeSelectOption()}
          defaultOptionId={paymentMethods[0].id}
        />
      </PaymentMethodsContainer>
    </Container>
  );
};

export default PaymentOptionsSelect;
