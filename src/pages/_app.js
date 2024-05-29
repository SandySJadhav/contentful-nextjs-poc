import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react';
import { appWithTranslation } from 'next-i18next';
import '../styles/globals.scss';
import { useRouter } from 'next/router';
import { Layout } from '@/components/layout';

const App = ({ Component, pageProps }) => {
  const { locale } = useRouter();
  const isPreview = pageProps.previewActive ?? false;
  return (
    <ContentfulLivePreviewProvider
      enableInspectorMode={isPreview}
      enableLiveUpdates={isPreview}
      locale={locale || 'en-US'}
    >
      <Layout headerData={pageProps.headerData}>
        <Component {...pageProps} />
      </Layout>
    </ContentfulLivePreviewProvider>
  );
};

export default appWithTranslation(App);
