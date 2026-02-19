'use client';

import { useState, InputHTMLAttributes, forwardRef } from 'react';

import EyeIcon from '../Icons/EyeIcon';
import EyeClosedIcon from '../Icons/EyeClosedIcon';

import { ErrorMessage, InputWrapper, Label, StyledInput } from './styles';
import SearchIcon from '../Icons/SearchIcon';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isPassword?: boolean;
  error?: string;
  isFilter?: boolean;
  styleLabel?: React.CSSProperties;
  required?: boolean;
  maskFunction?: (value: string) => string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      isPassword = false,
      label,
      error,
      isFilter = false,
      required = false,
      maskFunction,
      styleLabel,
      ...props
    },
    ref,
  ) => {
    const [isVisible, setIsVisible] = useState(false);

    const { value, onChange, ...restProps } = props;
    const controlledWithoutHandler = value !== undefined && !onChange;

    const maskOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (maskFunction) {
        const masked = maskFunction(e.target.value);
        e.target.value = masked;
        if (onChange) {
          onChange(e);
        }
      }
    };

    return (
      <InputWrapper $hasLabel={!!label}>
        {label && (
          <Label style={styleLabel}>
            {label} {required && <span>*</span>}
          </Label>
        )}

        {isPassword ? (
          <>
            <StyledInput
              ref={ref}
              type={isVisible ? 'text' : 'password'}
              onChange={maskFunction ? maskOnChange : onChange}
              $hasPaddingRight
              {...restProps}
              {...(controlledWithoutHandler
                ? { defaultValue: value }
                : { value, onChange })}
            />

            {isVisible ? (
              <EyeIcon onClick={() => setIsVisible(!isVisible)} />
            ) : (
              <EyeClosedIcon onClick={() => setIsVisible(!isVisible)} />
            )}
          </>
        ) : (
          <>
            <StyledInput
              ref={ref}
              onChange={maskFunction ? maskOnChange : onChange}
              {...restProps}
              {...(controlledWithoutHandler
                ? { defaultValue: value }
                : { value, onChange })}
            />

            {isFilter && <SearchIcon />}
          </>
        )}

        {error && <ErrorMessage>{error}</ErrorMessage>}
      </InputWrapper>
    );
  },
);

export default Input;
