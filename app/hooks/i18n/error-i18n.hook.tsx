import { useTranslations } from 'next-intl';

export const useErrorTranslation = () => {
  const t = useTranslations('Error');
  return t;
};
