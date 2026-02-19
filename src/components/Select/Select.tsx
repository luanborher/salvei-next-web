/* eslint-disable prettier/prettier */
import React, { Dispatch, SetStateAction } from 'react';
import SelectComponent, {
  CSSObjectWithLabel,
  components,
} from 'react-select';
import { Label, SelectWrapper } from './styles';

interface IOption {
  value: string;
  label: string;
}

interface SelectProps {
  label?: string;
  required?: boolean;
  styleLabel?: React.CSSProperties;
  value: IOption | null;
  options: IOption[];
  placeholder?: string;
  onChange: (value: IOption | null) => void;
  setIsMenuOpen?: Dispatch<SetStateAction<boolean>>;
}

const customStyles = {
  control: (base: any, state: any) => ({
    ...base,
    border: '1px solid #D1D0D0',
    borderBottom: state.menuIsOpen ? 'none' : '1px solid #D6D5D3',
    borderRadius: state.menuIsOpen ? '8px 8px 0 0' : '8px',
    padding: '0 12px',
    minHeight: '48px',
    minWidth: '100%',
    boxShadow: 'none',
    fontFamily: 'var(--font-area), sans-serif',
    fontWeight: 400,
    fontSize: '14px',
    marginBottom: '0',
    '&:hover': {
      borderColor: 'none',
    },
  }),
  menu: (base: any) => ({
    ...base,
    marginTop: '0',
    borderRadius: '0 0 8px 8px',
    fontFamily: 'var(--font-area), sans-serif',
    fontWeight: 400,
    fontSize: '14px',
    border: '1px solid #D6D5D3',
    borderTop: 'none',
    maxHeight: '246px',
  }),
  menuList: (base: any) => ({
    ...base,
    maxHeight: '246px',
    overflowY: 'auto',
  }),
  valueContainer: (base: any) => ({
    ...base,
    padding: 0,
    fontFamily: 'var(--font-area), sans-serif',
    fontWeight: 400,
    fontSize: '14px',
  }),
  input: (base: any) => ({
    ...base,
    position: 'relative',
    margin: 0,
    padding: 0,
    fontFamily: 'var(--font-area), sans-serif',
    fontWeight: 400,
    fontSize: '14px',
    paddingRight: '58px',
  }),
  singleValue: (base: any) => ({
    ...base,
    color: '#85817B',
    fontFamily: 'var(--font-area), sans-serif',
    fontWeight: 400,
    fontSize: '14px',
  }),
  placeholder: (base: any) => ({
    ...base,
    color: '#85817B',
    fontFamily: 'var(--font-area), sans-serif',
    fontWeight: 400,
    fontSize: '14px',
  }),
  option: (base: any, state: any) => ({
    ...base,
    padding: '13px 12px',
    fontFamily: 'var(--font-area), sans-serif',
    fontWeight: 400,
    fontSize: '14px',
    color: '#85817B',
    backgroundColor: state.isSelected
      ? '#F5F5F5'
      : state.isFocused
        ? '#F5F5F5'
        : base.backgroundColor,
  }),
  dropdownIndicator: (base: any): CSSObjectWithLabel => ({
    ...base,
    position: 'relative',
    color: '#342D23',
    padding: 0,
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& svg': {
      width: '22px',
      height: '22px',
      color: '#342D23',
    },
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
};

const DropdownIndicator = (props: any) => (
  <components.DropdownIndicator {...props}>
    {props?.selectProps?.menuIsOpen && (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', right: '32px' }}>
        <path d="M19 19L15.5 15.5M18 9.5C18 11.1811 17.5015 12.8245 16.5675 14.2223C15.6335 15.6201 14.306 16.7097 12.7528 17.353C11.1996 17.9964 9.49057 18.1646 7.84173 17.8367C6.19289 17.5087 4.67831 16.6991 3.48956 15.5104C2.30081 14.3216 1.4913 12.8072 1.16333 11.1583C0.835353 9.50949 1.00369 7.80036 1.64703 6.24719C2.29038 4.69402 3.37983 3.36649 4.77765 2.4325C6.17546 1.4985 7.81886 1 9.5 1C11.7543 1 13.9164 1.89556 15.5104 3.48962C17.1045 5.08368 18 7.24566 18 9.5Z" stroke="#FF8500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )}

    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: props?.selectProps?.menuIsOpen ? 'rotate(0deg)' : 'rotate(180deg)',
        transition: 'transform 0.2s',
      }}
    >
      <path
        d="M16.6162 15C17.5071 15 17.9533 13.9229 17.3233 13.2929L12.7375 8.70711C12.347 8.31658 11.7138 8.31658 11.3233 8.70711L6.7375 13.2929C6.10754 13.9229 6.5537 15 7.44461 15H16.6162Z"
        fill="#342D23"
      />
    </svg>
  </components.DropdownIndicator>
);

const Select: React.FC<SelectProps> = ({
  label,
  required,
  styleLabel,
  value,
  onChange,
  options,
  placeholder = 'Selecione ou digite sua busca',
  setIsMenuOpen,
}) => {
  const selectValue = value && value.value ? value : null;

  return (
    <SelectWrapper>
      {label && (
        <Label style={styleLabel}>
          {label} {required && <span>*</span>}
        </Label>
      )}

      <SelectComponent
        options={options}
        isMulti={false}
        styles={customStyles}
        value={selectValue}
        onChange={option => onChange(option as IOption)}
        placeholder={placeholder}
        onMenuOpen={() => setIsMenuOpen?.(true)}
        onMenuClose={() => setIsMenuOpen?.(false)}
        components={{ DropdownIndicator }}
      />
    </SelectWrapper>
  );
};

export default Select;
