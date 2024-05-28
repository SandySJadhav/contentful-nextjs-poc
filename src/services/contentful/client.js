import { createClient } from 'contentful';

const getContentfulClient = ({ preview, previewData }) => createClient({
  space: previewData?.space ?? process.env.CONTENTFUL_SPACE_ID,
  accessToken: preview
    ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
    : process.env.CONTENTFUL_ACCESS_TOKEN,
  environment: previewData?.environment ?? process.env.CONTENTFUL_ENVIRONMENT,
  host: preview ? 'preview.contentful.com' : 'cdn.contentful.com'
});

export default getContentfulClient;
