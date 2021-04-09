import React from 'react';
import {
  Card,
  CardBody,
} from '../Card';

import {
  Container,
  CardImgContainer,
  CardImg,
  CardTitle,
} from './styles';

export interface CardWithImageProps {
  imgSrc: String,
  title: String,
  children: React.ReactNode,
}

const CardWithImage: React.FC<CardWithImageProps> = ({
  imgSrc,
  title,
  children,
}: CardWithImageProps) => {
  return(
    <Card>
      <Container>
        <CardImgContainer>
          <CardImg src={imgSrc} />
        </CardImgContainer>
        <CardBody>
          <CardTitle>{title}</CardTitle>
          {children}
        </CardBody>
    </Container>
    </Card>
  );
};

export default CardWithImage;
