import Header from '@/components/header';

export const Layout = ({ headerData, children }) => {
  return (
    <>
      <Header headerData={headerData} />
      {children}
    </>
  );
};
