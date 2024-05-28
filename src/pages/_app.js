import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react';
import { appWithTranslation } from 'next-i18next';
import { Urbanist } from 'next/font/google';
import '../styles/globals.scss';
import { useRouter } from 'next/router';

import { Layout } from '@/components/templates/layout';

const urbanist = Urbanist({ subsets: ['latin'], variable: '--font-urbanist' });

const App = ({ Component, pageProps }) => {
  console.log('🚀 pageProps,', pageProps);
  const { locale } = useRouter();
  return (
    <ContentfulLivePreviewProvider
      enableInspectorMode={pageProps.previewActive}
      enableLiveUpdates={pageProps.previewActive}
      locale={locale || 'en-US'}
    >
      <>
        <main className={`${urbanist.variable} font-sans`}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
        <div id="portal" className={`${urbanist.variable} font-sans`} />
      </>
    </ContentfulLivePreviewProvider>
  );
};

export default appWithTranslation(App);
