import { useTranslations } from 'next-intl';

export type TInfoTranslation = (value: any, options?: any) => any;

export const useInfoTranslation = () => {
  const t = useTranslations('Info');
  return t;
};
