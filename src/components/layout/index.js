import Header from '@/components/header';

export default function Layout({ headerData, children }) {
  return (
    <>
      <Header headerData={headerData} />
      {children}
    </>
  );
};
