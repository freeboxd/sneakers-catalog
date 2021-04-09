import styled, { css } from 'styled-components';

import SmallImg from '../UI/SmallImg';

interface CardBlockProps {
  margin?: string,
  borderTopRadius?: string,
  borderBottomRadius?: string,
  borderRadius?: string,
  paddingTopMobile?: string,
}

// pré mudanaças
export const DetailBody = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2rem;
  column-gap: 2.8rem;
  @media all and (min-width: 769px) {
    margin-top: 5rem;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  @media all and (min-width: 769px) {
    display: flex;
    flex-flow: row wrap;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media all and (min-width: 769px) {
    width: 55%;
  }
`;

export const WrapperCardHeader = styled.h3`
  margin-bottom: 1.8rem;
  font-size: 2rem;

  @media all and (min-width: 769px) {
    font-size: 1.4rem;
    margin-bottom: .6rem;
  }
`;


export const WrapperCardSubHeader = styled.h3`
  /* font-size: 2rem; */
  font-weight: normal;
  margin: 1.5rem 0 .5rem;

  @media all and (min-width: 769px) {
    font-size: 1.4rem;
    margin-bottom: .6rem;
  }
`;

export const CartItemInfo = styled.div`
  color: #A5A5A5;
  line-height: 2.3rem;
  @media all and (min-width: 769px) {
    font-size: 1.5rem;
  }
`;

export const OrderDetails = styled.div`
  width: 70%;
  margin-bottom: 1.5rem;
  padding-left: 3rem;

  @media (min-width: 769px) {
    width: 100%;
    padding: 0;
    display: flex;
    align-items: flex-start;
  }
`;

export const LowerContainerPrimaryText = styled.h4`
  font-size: 1.9rem;
  font-weight: normal;
  margin: 1rem 0 .5rem;
`;

export const LowerContainerSecondaryText = styled.span`
  color: #A5A5A5;
  font-size: 1.75rem;
  @media  all and (min-width: 769px) {
    font-size: 1.45rem;
  }
`;

export const CostContainer = styled.span`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 2rem 0;
  border-top: solid 1px #D6D6D6;
  align-items: center;
  @media  all and (min-width: 769px) {
    width: 100%;
    border-top: none;
    padding: 0;
  }
`;

export const TotalCostPrice = styled.span`
  font-weight: 600;
  font-size: 6rem;
  @media all and (min-width: 769px) {
    font-size: 5rem;
  }
`;

export const DisplayFlex = styled.span`
  width: 100%;
  @media (min-width: 769px) {
    display: flex;
  }
`;

export const WrapperCardBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  & ${SmallImg} {
    margin: 0;
    min-height: 13rem;
  }

  @media (min-width: 769px) {
    padding: 0;
    background-color: transparent;
  }
`;


export const CardWrapper = styled.div`
  width: 67%;
  @media all and (min-width: 769px) {
    padding: 6rem 5rem;
    border-radius: 9px;
    background-color: #F7F7F7;
  }
`;

export const CardBlock = styled.div<CardBlockProps>`
  width: 100%;
  background-color: #F7F7F7;
  padding: 1.8rem 2rem;
  
  ${props => css`
    margin: ${props.margin};
    border-bottom-right-radius: ${props.borderBottomRadius};
    border-bottom-left-radius: ${props.borderBottomRadius};
    border-top-right-radius: ${props.borderTopRadius};
    border-top-left-radius: ${props.borderTopRadius};
    border-radius: ${props.borderRadius};
  `}

  @media all and (min-width: 769px) {
    padding: 0;
    height: auto;
    background-color: transparent;
    border-radius: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 50%;

    &:nth-child(odd) {
      padding-right: 2rem;
    }
  }

  @media all and (max-width: 769px) {
    ${props => css`
      padding-top: ${props.paddingTopMobile}
    `}
  }
`;

export const WrapperCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    width: 50%;
    padding: 0;
  }
`;

export const PaymentMethodContainer = styled.div`
  width: 100%;
`;

export const ContinueButtonContainer = styled.div`
  margin-top: 2rem;
  width: 100%;

  & button {
    width: 100%;
  }

  @media all and (min-width: 769px) {
    margin: 0;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 50%;
    & button {
      max-width: 100%;
      height: auto;
    }
  }
`;