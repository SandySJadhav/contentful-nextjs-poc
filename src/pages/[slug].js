import Landing from "@/components/landing";
import getContentfulClient from "@/services/contentful/client";

export default function Home({ pageData }) {
  return (<Landing pageData={pageData} />);
}

export async function getStaticPaths({ locales = [] }) {
  const res = await getContentfulClient({ preview: false }).getEntries({
    content_type: 'landingPage'
  });
  const landingPages = res?.items?.filter(({ fields }) => {
    return fields.title !== "home" && fields.title !== "heim"
  });
  const paths = landingPages.map(({ fields }) => ({
    params: { slug: fields.title }
  }));
  const pathWithLocales = [];
  paths.forEach(path => {
    return locales.forEach(locale => pathWithLocales.push({ ...path, locale }));
  });
  return { paths: pathWithLocales, fallback: 'blocking' };
}

export async function getStaticProps({ preview, locale, params }) {
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
    if (fields.title === params.slug) {
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