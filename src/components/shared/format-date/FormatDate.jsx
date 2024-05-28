import { useRouter } from 'next/navigation';

export const formatDateFunc = ({ date, locale }) => {
  if (!locale || !date) return null;

  return new Intl.DateTimeFormat(locale, {
    dateStyle: 'long',
  }).format(new Date(date));
};

export const FormatDate = (props) => {
  const { locale: localeFromRouter } = useRouter();

  if (!localeFromRouter) return null;

  return <>{formatDateFunc({ ...props, locale: localeFromRouter })}</>;
};
