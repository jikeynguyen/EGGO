import { useTranslations } from 'next-intl';

export type TValidationTranslation = (value: any, options?: any) => any;

export const useValidationTranslation = (): TValidationTranslation => {
  const t = useTranslations('Validation');
  return t;
};
