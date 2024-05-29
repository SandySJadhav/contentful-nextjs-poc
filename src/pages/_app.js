import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react';
import { appWithTranslation } from 'next-i18next';
import '../styles/globals.scss';
import { useRouter } from 'next/router';
import { Layout } from '@/components/layout';

const App = ({ Component, pageProps }) => {
  const { locale } = useRouter();
  const isPreview = pageProps.previewActive ?? false;

  const handleExitPreview = () => {
    fetch("/api/cancel-preview", {
      method: "POST"
    }).finally(() => {
      window.location.reload();
    })
  }

  return (
    <ContentfulLivePreviewProvider
      enableInspectorMode={isPreview}
      enableLiveUpdates={isPreview}
      locale={locale || 'en-US'}
    >
      <Layout headerData={pageProps.headerData}>
        <Component {...pageProps} />
        {isPreview && <div
          className='fixed cursor-pointer left-[50%] translate-x-[-50%] bottom-10 bg-green-400 text-white p-6 rounded-md hover:bg-red-500'
          title='Remove preview mode'
          onClick={handleExitPreview}
        >Preview mode enabled!</div>}
      </Layout>
    </ContentfulLivePreviewProvider>
  );
};

export default appWithTranslation(App);
