import getContentfulClient from "@/services/contentful/client";
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

export async function getStaticProps({ preview, locale }) {
  const headerData = await getContentfulClient({ preview }).getEntries({
    content_type: 'header',
    locale
  });
  return {
    props: {
      headerData: headerData?.items?.[0],
      previewActive: preview ?? false
    }
  };
}