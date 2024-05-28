import getContentfulClient from "@/services/contentful/client";
import { getServerSideTranslations } from "@/services/i18next/get-serverside-translations";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      Body
    </main>
  );
}

export const getStaticProps = async ({ locale, draftMode: preview }) => {
  const headerData = await getContentfulClient({ preview }).getEntry({
    content_type: 'header',
    locale
  });
  return {
    revalidate: 999999,
    props: {
      headerData,
      previewActive: !!preview,
      ...(await getServerSideTranslations(locale))
    }
  };
}