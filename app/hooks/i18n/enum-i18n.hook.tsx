import { useTranslations } from 'next-intl';

export const useEnumTranslation = () => {
  const t = useTranslations('Enum');
  return t;
};
