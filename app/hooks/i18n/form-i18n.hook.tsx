import { useTranslations } from 'next-intl';

export const useFormTranslation = () => {
  const t = useTranslations('Form');
  return t;
};
