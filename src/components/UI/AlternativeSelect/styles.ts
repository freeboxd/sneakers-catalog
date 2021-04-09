import styled, { css } from 'styled-components';

interface OptionProps {
  onClick: () => void,
  isSelected: boolean,
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Option = styled.button<OptionProps>`
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 2rem;
  height: 6.5rem;
  border-radius: 9px;
  outline: 0;
  border: none;
  cursor: pointer;
  align-items: center;
  font-size: 1.4rem;

  ${props => props.isSelected && css`
    border: solid 1px #63B55C;
  `}

  & + & {
    margin-top: 2rem;
  }
`;

export const Badge = styled.div`
  justify-content: flex-start;
  width: 60%;
  font-size: 1.1rem;
  text-transform: uppercase;
  padding: .2rem 0;
  font-weight: 700;
  border-radius: 5px;
  background-color: #FFCC00;
  color: #9E7D27;
`;


export const OptionLeft = styled.div`
  display: flex;
  flex-direction: column;

  @media all and (min-width: 769px) {
    & ${Badge} {
      position: absolute;
      top: -10px;
      width: auto;
      padding: .2rem 1rem
    }
  }
`;

export const OptionTitle = styled.div`
`;



