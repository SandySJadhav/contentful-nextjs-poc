import { LanguageSelector } from '@/components/features/language-selector';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

export const Header = ({ headerData }) => {
  console.log('🚀 headerData', headerData);
  const { t } = useTranslation();
  return (
    <header className="py-5">
      <nav>
        <div className="flex items-center justify-between">
          <Link href="/" title={t('common.homepage')}>
            {/* <Image /> */}
          </Link>
          <LanguageSelector />
        </div>
      </nav>
    </header>
  );
};
