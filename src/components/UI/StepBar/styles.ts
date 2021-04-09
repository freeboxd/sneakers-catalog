import styled, { css } from 'styled-components';

interface StepBlockCircleProps {
  isActive?: boolean,
}

interface StepBlockTitleProps {
  isActive?: boolean,
}

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  text-align: center;
  @media all and (max-width: 769px) {
    display: none;
  }
`;

export const StepBlock = styled.span`
  position: relative;
  flex: 1;
  &:after {
    content:'';
    width:100%;/* size of your margin */
    border-bottom:1px solid #E8E8E8;
    position:absolute;
    top:10%;
    /* left: 100%; */
    z-index: 10;
  }
  &:first-of-type:before {
    display: none;
  }

  &:last-of-type:after {
    display: none;
  }

`;

export const StepBlockContainer = styled.div`
  position: relative;
`;

export const StepBlockCircle = styled.div<StepBlockCircleProps>`
  width: 15px;
  margin: 0 auto 2.2rem;
  height: 15px;
  position: relative;
  z-index: 20;
  border-radius: 50%;
  ${(props) => (props.isActive
    ? css`
      background-color: #61CB46;
    `
    : css`
      background-color: #E8E8E8;
    `)}
`;

export const StepBlockTitle = styled.span<StepBlockTitleProps>`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.75rem;
  cursor: default;

  ${(props) => !props.isActive
    && css`
      color: #BEBEBE;
    `}
`;
