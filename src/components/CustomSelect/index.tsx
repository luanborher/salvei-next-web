'use client';

import { useState, useRef, useEffect } from 'react';
import ArrowDownIcon from '@/components/Icons/ArrowDownIcon';
import * as S from './styles';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  menuMaxHeight?: number;
}

// TODO: ajustar select

export const CustomSelect = ({
  options,
  value,
  onChange,
  placeholder = 'Selecione',
  menuMaxHeight = 300,
}: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(opt => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <S.Container ref={containerRef}>
      <S.SelectButton onClick={() => setIsOpen(!isOpen)} $isOpen={isOpen}>
        <S.SelectedText>{selectedOption?.label || placeholder}</S.SelectedText>
        <S.ArrowWrapper $isOpen={isOpen}>
          <ArrowDownIcon />
        </S.ArrowWrapper>
      </S.SelectButton>

      {isOpen && (
        <S.DropdownMenu $maxHeight={menuMaxHeight}>
          {options.map(option => (
            <S.Option
              key={option.value}
              onClick={() => handleSelect(option.value)}
              isSelected={option.value === value}
            >
              <span>{option.label}</span>
            </S.Option>
          ))}
        </S.DropdownMenu>
      )}
    </S.Container>
  );
};
