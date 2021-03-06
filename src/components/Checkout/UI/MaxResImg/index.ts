import styled from 'styled-components';

interface ImgProps {
  src: string,
}

const MaxResImg = styled.div<ImgProps>`
  background: url(${(props) => props.src}) no-repeat center center;
  background-size: auto 120%;
  border-radius: 9px;
  width: 100%;
  height: auto;
  min-height: 589px;
  
  @media all and (min-width: 769px) {
    width: 43%;
  }

  @media all and (max-width: 769px) {
    display: none;
  }
`;

export default MaxResImg;
