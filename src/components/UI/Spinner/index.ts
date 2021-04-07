import styled, { keyframes } from 'styled-components';

const load8 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.span`
  position: relative;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  font-size: 10px;
  text-indent: -9999em;
  border-top: .5rem solid rgba(255, 255, 255, 0.2);
  border-right: .5rem solid rgba(255, 255, 255, 0.2);
  border-bottom: .5rem solid rgba(255, 255, 255, 0.2);
  border-left: .5rem solid #ffffff;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: ${load8} 1.1s infinite linear;
  animation: ${load8} 1.1s infinite linear;
  &:after {
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
  }
`;

export default Spinner;