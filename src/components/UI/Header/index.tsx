import React from 'react';
import Image from 'next/image';
import { ArrowLeftShort } from '@styled-icons/bootstrap/ArrowLeftShort';

import {
  HeaderElement,
  Container,
  Title,
  BackButton,
  BackButtonContainer,
} from './styles';

interface HeaderProps {
  title: string;
  previous?: any;
  onClickBackButton?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  previous,
  onClickBackButton,
}: HeaderProps) => (
  <HeaderElement id="main-header">
    <Container>
      <BackButtonContainer>
        {previous && (
        <BackButton onClick={() => onClickBackButton()}>
          <ArrowLeftShort />
          Back
        </BackButton>
        )}
      </BackButtonContainer>
      <Title>{title}</Title>
      <div>
        <Image
          alt="User profile image"
          src="/userProfileImg.png"
          width={36}
          height={36}
        />
      </div>
    </Container>
  </HeaderElement>
);

export default Header;
