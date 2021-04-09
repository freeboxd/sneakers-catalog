import React from 'react';
import {
  Container,
  StepBlock,
  StepBlockContainer,
  StepBlockCircle,
  StepBlockTitle,
} from './styles';

export interface Step {
  id: string,
  title: string,
  pageTitle: string,
  component: React.FC,
}

interface StepBarProps {
  steps: Step[],
  currentStep: number,
}

const StepBar: React.FC<StepBarProps> = ({
  steps,
  currentStep,
}: StepBarProps) => {
  return (
    <Container>
      {steps.length > 0 && steps.map((step, index) => {
        const isActive = index + 1 <= currentStep;
        return (
          <StepBlock key={step.id}>
            <StepBlockContainer>
              <StepBlockCircle isActive={isActive}/>
              <StepBlockTitle isActive={isActive}>{step.title}</StepBlockTitle>
            </StepBlockContainer>
          </StepBlock>
        )
      })}
    </Container>
  );
};

export default StepBar;