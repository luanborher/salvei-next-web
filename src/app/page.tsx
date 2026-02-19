'use client';

import EnterprisesPage from '@/components/Pages/EnterprisesPage/EnterprisesPage';
import Navbar from '@/components/Navbar/Navbar';
import { MasterLayoutContainer, MasterLayoutContent } from './styles';

const Enterprises = () => {
  return (
    <MasterLayoutContainer>
      <Navbar />
      <MasterLayoutContent id="page">
        <EnterprisesPage />
      </MasterLayoutContent>
    </MasterLayoutContainer>
  );
};

export default Enterprises;
