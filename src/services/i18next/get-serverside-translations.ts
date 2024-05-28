import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextConfig from '../../../next.config.js';

const i18n  = nextConfig.i18n;

export const getServerSideTranslations = (locale?: string) => {
  return serverSideTranslations(locale || i18n.defaultLocale, ['common']);
};
