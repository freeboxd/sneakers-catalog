import React from 'react';
import StepBar, { Step } from '../../components/UI/StepBar';

import {
  MainContainer,
  PageTitle,
} from './styles';

type CheckoutProps = {
  currentStep: Step,
  checkoutSteps: Step[],
  children: React.ReactNode,
}

const Checkout: React.FC<CheckoutProps> = ({
  currentStep,
  checkoutSteps,
  children,
}: CheckoutProps) => {
  return (
    <MainContainer>
      <StepBar
        currentStep={currentStep.position}
        steps={checkoutSteps}
      />
      <PageTitle>{currentStep.pageTitle}</PageTitle>

      { children }

    </MainContainer>
  );
}

export default Checkout;