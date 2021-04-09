import React, { useState } from 'react';
import Head from 'next/head';
import useCart from '../../hooks/cart';
import { ICartContext, ICartItem } from '../../@types/cart';
import PaymentOptions from '../../components/Checkout/PaymentOptions';
import OrderReview from '../../components/Checkout/OrderReview';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import CheckoutComponent from '../../components/Checkout';
import Header from '../../components/UI/Header';

import { useCallback } from 'react';
import { Step } from '../../components/UI/StepBar';

const Checkout: React.FC = () => {
  const { cart, clearCart }: ICartContext =  useCart();
  const [currentStepId, setCurrentStepId] = useState(1);
  const [selectedCartItem, setSelectedCartItem] = useState({} as ICartItem);
  const router = useRouter();

  useEffect(() => {
    // Redirects to home if there is not cart items
    if (cart.length === 0) router.push('/');
  
    setSelectedCartItem(cart[0]);
  }, [cart]);
  
  
  const checkoutSteps: Step[] = [
    {
      id: 'cart',
      title: 'Cart',
      pageTitle: '',
      component: null,
      position: 1,
    },
    {
      id: 'payment-options',
      title: 'Payment Options',
      pageTitle: 'Checkout',
      component: PaymentOptions,
      position: 2,
    },
    {
      id: 'receipt',
      title: 'Receipt',
      pageTitle: 'Review and confirmation',
      component: OrderReview,
      position: 3,
    }
  ];

  // Returns the current step
  const currentStep: Step = useCallback(() => {
    return (checkoutSteps[currentStepId]) as Step;
  }, [currentStepId])();

  // Goes to the next step of the checkout if possible
  const nextStep = () => {
    if (currentStepId < checkoutSteps.length + 1) {
      setCurrentStepId(checkoutSteps.findIndex((step) => step.position === currentStepId + 1) + 1);
    }
  }

  const handleClickBackButton = () => {
    const previousStep = checkoutSteps.find(step => step.position === currentStepId);

    if (currentStepId > 0 && previousStep.component !== null) {
      setCurrentStepId(currentStepId - 1);
    } else {
      clearCart();
      router.back();
    }
  }

  return (
    <>
      <Head>
        <title>{currentStep.pageTitle} - Trustly Frontend Challenge</title>
      </Head>
      
      <Header
        title={currentStep.pageTitle}
        previous={true}
        onClickBackButton={() => handleClickBackButton()}
      />

      {
        // Fallback for the no selected cart item situation
        (selectedCartItem === undefined || selectedCartItem.product === undefined)
        ? (<></>) : (
        <>
          <main>
            <CheckoutComponent
              currentStep={currentStep}
              checkoutSteps={checkoutSteps}
            >
              {
                // Dynamically renders the step components
                React.createElement(currentStep.component, {
                  selectedCartItem,
                  nextStep,
                } as any)
              }
            </CheckoutComponent>
          </main>
        </>
      )}
    </>
  );
};

export default Checkout;