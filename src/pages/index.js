import Landing from "@/components/landing";
import getContentfulClient from "@/services/contentful/client";

export default function Home({ pageData }) {
  return (<Landing pageData={pageData}/>);
}

export async function getStaticProps({ preview, locale }) {
  const headerData = await getContentfulClient({ preview }).getEntries({
    content_type: 'header',
    locale
  });

  const landingPages = await getContentfulClient({ preview }).getEntries({
    content_type: 'landingPage',
    include: 7,
    locale
  });

  let pageData = {};

  landingPages.items.forEach(({ fields }) => {
    if (fields.title === "Home" || fields.title === "Heim") {
      pageData = fields;
    }
  })

  return {
    props: {
      pageData,
      headerData: headerData?.items?.[0],
      previewActive: preview ?? false
    }
  };
}