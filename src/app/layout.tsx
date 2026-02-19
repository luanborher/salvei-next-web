import Providers from '@/components/Providers/Providers';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

// importação de fontes

const area = localFont({
  src: [
    {
      path: '../../public/fonts/Area_Extended_Thin.otf',
      style: 'normal',
      weight: '100',
    },
    {
      path: '../../public/fonts/Area_Extended_Regular.otf',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../../public/fonts/Area_Extended_SemiBold.otf',
      style: 'semi-bold',
      weight: '600',
    },
    {
      path: '../../public/fonts/Area_Extended_Bold.otf',
      style: 'normal',
      weight: '700',
    },
    {
      path: '../../public/fonts/Area_Extended_ExtraBold.otf',
      style: 'normal',
      weight: '800',
    },
  ],
  variable: '--font-area',
});

//

export const metadata: Metadata = {
  title: 'Salvei - Entretenimento',
  description: 'Salvei - Entretenimento',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="pt">
      <body className={`${area.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
