import styled from 'styled-components';

interface ImgProps {
  src: string,
}

const SmallImg = styled.div<ImgProps>`
  background: url(${(props) => props.src}) no-repeat center center;
  background-size: auto 120%;
  border-radius: 9px;
  width: 30%;
  margin-bottom: 5.8rem;

  @media all and (min-width: 769px) {
    display: none;
  }
`;

export default SmallImg;
