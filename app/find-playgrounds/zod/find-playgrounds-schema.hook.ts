
import { useValidationTranslation } from '@/app/hooks/i18n';
import FindPlaygroundsSchema from './find-playgrounds-schema.zod';

export const useFindPlaygroundSchema = () => {
  const t = useValidationTranslation();
  const schema = FindPlaygroundsSchema(t);

  return schema;
};
