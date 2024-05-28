import { Layout } from "@/components/templates/layout";
import getContentfulClient from "@/services/contentful/client";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ headerData }) {
  return (
    <Layout headerData={headerData}>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
      </main>
    </Layout>
  );
}

export async function getServerSideProps({
  preview,
  locale,
  locales,
  defaultLocale
}) {
  const lang = locales?.includes(locale) ? locale : defaultLocale;
  const headerData = await getContentfulClient({ preview }).getEntry({
    content_type: 'header',
    locale: lang
  });
  return {
    props: {
      headerData
    }
  };
}