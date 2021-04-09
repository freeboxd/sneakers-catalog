import { StyledIcon } from '@styled-icons/styled-icon';

export interface IPaymentMethod {
  name: string,
  badge?: string,
  iconSrc?: string,
  id: string,
  icon: StyledIcon,
}