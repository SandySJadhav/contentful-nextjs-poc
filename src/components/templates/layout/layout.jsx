import Header from '@/components/templates/header';

export const Layout = ({ headerData, children }) => {
  return (
    <>
      <Header headerData={headerData} />
      {children}
      {/* <Footer /> */}
    </>
  );
};
