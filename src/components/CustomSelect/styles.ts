'use client';

import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  flex: 1;
`;

export const SelectButton = styled.button<{ $isOpen: boolean }>`
  width: 100%;
  height: 40px;
  padding: 0 12px;
  border: 1px solid
    ${({ $isOpen, theme }) => ($isOpen ? theme.colors.primary : '#cecece')};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: border-color 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.orange3};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SelectedText = styled.span`
  color: ${({ theme }) => theme.colors.label};
  font-family: var(--font-figtree), sans-serif;
  font-weight: 400;
  font-size: 14px;
  text-align: left;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ArrowWrapper = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  transition: transform 0.2s;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const DropdownMenu = styled.div<{ $maxHeight?: number }>`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid #cecece;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  max-height: ${({ $maxHeight }) => ($maxHeight ? `${$maxHeight}px` : 'none')};
  overflow-y: ${({ $maxHeight }) => ($maxHeight ? 'auto' : 'visible')};
  overflow-x: hidden;
`;

export const Option = styled.div<{ isSelected: boolean }>`
  min-height: 40px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-family: var(--font-figtree), sans-serif;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.label};
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.primary : theme.colors.white};
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.white : theme.colors.label};

  span {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  &:hover {
    background-color: ${({ isSelected, theme }) =>
      isSelected ? theme.colors.primary : '#f0f0f0'};
  }

  & + & {
    margin-top: 4px;
  }
`;
