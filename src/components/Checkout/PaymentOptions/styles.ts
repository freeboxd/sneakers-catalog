import styled from 'styled-components';

export const DetailBody = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2rem;
  column-gap: 2.8rem;
  @media all and (min-width: 769px) {
    margin-top: 5rem;
  }
`;

export const WrapperCard = styled.div`
  width: 100%;
  @media all and (min-width: 769px) {
    padding: 2rem 3rem;
    border-radius: 9px;
    background-color: #F7F7F7;
  }
`;

export const DisappearsBelowTablet = styled.span`
  @media all and (max-width: 769px) {
    display: none;
  }
`;

export const HeaderTitle = styled.h3`
  font-weight: normal;
  @media all and (min-width: 769px) {
    margin-bottom: 1rem;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media all and (min-width: 769px) {
    width: 55%;
  }
`;

export const WrapperCardHeader = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;

  @media all and (min-width: 769px) {
    font-size: 1.4rem;
    margin-bottom: .6rem;
  }
`;

export const CartItemInfo = styled.div`
  color: #A5A5A5;
  @media all and (min-width: 769px) {
    font-size: 1.5rem;
  }
`;

export const DeliveryDetailsContainer = styled.div`
  width: 50%;
  margin-top: 1.6rem;

  @media (min-width: 769px) {
    width: 45%;
    margin: 0;
  }
`;

export const DeliveryDetailsTitle = styled.div`
  font-size: 1.5rem;
`;

export const DeliveryDetailsContent = styled.p`
  color: #A5A5A5;
  font-size: 1.4rem;

  @media (min-width: 769px) {
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
  margin-top: 1rem;
`;

export const CostContainer = styled.span`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (min-width: 769px) {
    width: 45%;
  }
`;

export const EmptyBlock = styled.span`
  width: 55%;
`;

export const LowerContainerSecondaryText = styled.span`
  color: #A5A5A5;
  font-size: 1.45rem;
`;

export const TotalCostPrice = styled.span`
  font-weight: 600;
  font-size: 4.5rem;
  @media all and (min-width: 769px) {
    font-weight: normal;
    font-size: 4.2rem;
  }
`;

export const DisplayFlex = styled.span`
  width: 100%;
  @media (min-width: 769px) {
    display: flex;
  }
`;

export const WrapperCardContainer = styled.div`
  background-color: #F7F7F7;
  padding: 2rem 1.9rem;
  border-radius: 9px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  @media (min-width: 769px) {
    padding: 0;
    background-color: transparent;
  }
`;

export const ContinueButtonContainer = styled.div`
  margin-top: 2rem;
  width: 100%;

  & button {
    width: 100%;
  }

  @media all and (min-width: 769px) {
    display: flex;
    justify-content: flex-end;
    & button {
      max-width: 45%;
    }
  }
`;