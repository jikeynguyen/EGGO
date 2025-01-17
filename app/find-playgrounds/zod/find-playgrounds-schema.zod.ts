import { PlaygroundType } from '@/generated/schema';
import { TValidationTranslation } from '@/hooks/i18n';
import dayjs, { type Dayjs } from 'dayjs';
import * as z from 'zod';

const FindPlaygroundsSchema = (t: TValidationTranslation) =>
  z.object({
    type: z.nativeEnum(PlaygroundType, {
      message: t('FindPlayground.Type.Required'),
      required_error: t('FindPlayground.Type.Required'),
    }),
    radius: z
      .number()
      .int()
      .min(1, {
        message: t('FindPlayground.Radius.Min', { number: 1000 }),
      })
      .max(20, {
        message: t('FindPlayground.Radius.Max', { number: 20000 }),
      }),
    location: z.object({
      lat: z.number(),
      lng: z.number(),
      address: z.string().optional(),
    }),
    date: z.instanceof(dayjs as unknown as typeof Dayjs),
    from: z.instanceof(dayjs as unknown as typeof Dayjs),
    to: z.instanceof(dayjs as unknown as typeof Dayjs),
    bookable: z.boolean().optional(),
  });

export type TFindPlaygroundsSchema = z.infer<
  ReturnType<typeof FindPlaygroundsSchema>
>;

export default FindPlaygroundsSchema;
