import { getTranslations } from 'next-intl/server';

export const getMetadataTranslations = (locale: string) =>
  getTranslations({ locale, namespace: 'MetaData' });
