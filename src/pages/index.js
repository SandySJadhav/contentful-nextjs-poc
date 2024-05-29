import Landing from "@/components/landing";
import getContentfulClient from "@/services/contentful/client";

export default function Home() {
  return (<Landing />);
}

export async function getStaticProps({ preview, locale }) {
  const headerData = await getContentfulClient({ preview }).getEntries({
    content_type: 'header',
    locale
  });

  const pageData = {};

  return {
    props: {
      pageData,
      headerData: headerData?.items?.[0],
      previewActive: preview ?? false
    }
  };
}