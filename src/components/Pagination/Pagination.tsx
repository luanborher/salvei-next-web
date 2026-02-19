import React from 'react';
import { Pagination as PaginationItem } from '@mui/material';

import { PaginationWrapper } from './styles';

interface PaginationProps {
  handleChange: (_: unknown, value: number) => void;
  page: number;
  itens: number;
  itemsPerPage?: number;
  itensLength?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  handleChange,
  page,
  itens,
  itemsPerPage = 10,
  itensLength = 10,
}) => {
  return (
    <PaginationWrapper>
      <div className="text">
        Mostrando {itensLength} de {itens || 0}
      </div>

      {itens > 0 && (
        <PaginationItem
          count={Math.ceil(itens / itemsPerPage)}
          page={page}
          defaultPage={page}
          onChange={handleChange}
          shape="rounded"
          sx={{
            fontFamily: 'var(--font-area)',
            fontSize: '16px',
            '& .MuiPaginationItem-root.Mui-selected': {
              backgroundColor: '#FF8500 !important',
              color: '#fff !important',
              fontFamily: 'var(--font-area)',
              fontSize: '16px',
              opacity: 1,
              borderRadius: '8px',
              fontWeight: 700,
              fontStyle: 'Bold',
              lineHeight: '26px',
              textAlign: 'center',
            },
            '& .MuiPaginationItem-root': {
              backgroundColor: '#ffffff',
              fontFamily: 'var(--font-area)',
              fontSize: '16px',
              color: '#85817B',
              fontWeight: 700,
              fontStyle: 'Bold',
              lineHeight: '26px',
              textAlign: 'center',
            },
            '& .MuiButtonBase-root.MuiPaginationItem-previousNext': {
              color: '#85817B',
            },
            '& .MuiButtonBase-root.MuiPaginationItem-previousNext:disabled': {
              color: '#ffffff',
              opacity: 1,
            },
          }}
        />
      )}
    </PaginationWrapper>
  );
};

export default Pagination;
