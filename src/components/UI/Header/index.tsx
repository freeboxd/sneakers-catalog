import React from 'react';
import Image from 'next/image';
import {ArrowLeftShort} from '@styled-icons/bootstrap/ArrowLeftShort';

import {
  HeaderElement,
  HeaderContainer,
  HeaderTitle,
  BackButton
} from './styles';

interface HeaderProps {
  title: string;
  previous?: any;
}

const Header: React.FC<HeaderProps> = ({ title, previous }: HeaderProps) => {
  return (
    <HeaderElement id="main-header">
      <HeaderContainer>
        <div>
          {previous && (
            <BackButton>
              <ArrowLeftShort />
              Back
            </BackButton>
          )}
        </div>
        <HeaderTitle>{title}</HeaderTitle>
        <div>
          <Image
            alt="User profile image"
            src="/userProfileImg.png"
            width={36}
            height={36}
          />
        </div>
      </HeaderContainer>
    </HeaderElement>
  );
};
    
export default Header;