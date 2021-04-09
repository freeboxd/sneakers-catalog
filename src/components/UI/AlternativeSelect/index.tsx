import React, { SetStateAction, useCallback, useState } from 'react';

import {
  Container, Option, OptionTitle, Badge, OptionLeft,
} from './styles';

export interface IAlternativeSelectOption {
  iconSrc?: string;
  badge?: string;
  id: string;
  title: string;
}

interface AlternativeSelectProps {
  onChangeSelectedOption: (option: IAlternativeSelectOption) => void;
  options: IAlternativeSelectOption[];
  defaultOptionId?: string;
}

export const AlternativeSelect: React.FC<AlternativeSelectProps> = ({
  options,
  onChangeSelectedOption,
  defaultOptionId,
}: AlternativeSelectProps) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string>(null);

  useState(() => {
    setSelectedOptionId(defaultOptionId);
  });

  const handleChangeOption = useCallback((value: IAlternativeSelectOption) => {
    setSelectedOptionId(value.id as SetStateAction<string>);
    onChangeSelectedOption(value);
  }, []);

  return (
    <Container>
      {options.length > 0 && (
        <>
          {options.map((option) => (
            <Option
              key={option.id}
              onClick={() => handleChangeOption(option)}
              isSelected={option.id === selectedOptionId}
            >
              <OptionLeft>
                <OptionTitle>{option.title}</OptionTitle>
                {option.badge !== undefined && <Badge>{option.badge}</Badge>}
              </OptionLeft>
              {option.iconSrc && (
                <img alt={option.title} src={option.iconSrc} />
              )}
            </Option>
          ))}
        </>
      )}
    </Container>
  );
};

export default AlternativeSelect;
