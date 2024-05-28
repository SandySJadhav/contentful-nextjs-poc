import Header from '@/components/templates/header';
import { Footer } from '../footer';

export const Layout = ({ headerData, children }) => {
  return (
    <>
      <Header headerData={headerData} />
      {children}
      <Footer />
    </>
  );
};
