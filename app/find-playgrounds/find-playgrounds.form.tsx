'use client';

import { AddressInputForm } from '@/components/common/form/address-input-form';

import AntdDatePickerForm from '@/components/common/form/antd/antd-date-picker-form';
import AntdSliderForm from '@/components/common/form/antd/antd-slider-form';
import AntdSwitchForm from '@/components/common/form/antd/antd-switch-form';
import AntdTimePickerForm from '@/components/common/form/antd/antd-time-picker-form';
import PlaygroundInputForm from '@/components/common/form/playground-input.form';
import { BookingMinuteStep } from '@/constants';
import { useCommonTranslation, useFormTranslation } from '@/hooks/i18n';
import { Divider } from 'antd';
import { UseFormReturn } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import { MapID } from './find-playgrounds.constant';
import { TFindPlaygroundsSchema } from './zod/find-playgrounds-schema.zod';

interface IFindPlaygroundsFormProps {
  methods: UseFormReturn<TFindPlaygroundsSchema>;
  className?: string;
}

export default function FindPlaygroundsForm({
  methods,
  className,
}: IFindPlaygroundsFormProps) {
  const commonTrans = useCommonTranslation();
  const formTrans = useFormTranslation();
  const radius = methods.watch('radius');
  const bookable = methods.watch('bookable');

  return (
    <form className={twMerge('w-full space-y-4', className)}>
      <AddressInputForm
        mapId={MapID.PLAYGROUND}
        name='location'
        label={commonTrans('Address')}
        control={methods.control}
      />
      <PlaygroundInputForm
        name='type'
        control={methods.control}
        size='large'
        className='w-full'
      />
      <div className='relative w-full space-y-4'>
        <AntdSliderForm
          min={1}
          max={20}
          step={1}
          name='radius'
          label={commonTrans('Radius')}
          control={methods.control}
        />

        <Divider />
        <div className='mb flex w-full items-center justify-between'>
          <p className='text-md font-semibold text-primary'>
            {formTrans('FindPlayground.Bookable.Label')}
          </p>
          <AntdSwitchForm
            name='bookable'
            control={methods.control}
            containerClassName='w-fit'
          />
        </div>
        <div
          className='my-2 border-l-4 border-orange-500 bg-orange-100 p-2 text-orange-700'
          role='alert'
        >
          <p>{commonTrans('TheFeatureIsUnderDevelopment')}</p>
        </div>
        {/* </div> */}
        <AntdDatePickerForm
          name='date'
          label={formTrans('FindPlayground.Date.Label')}
          placeholder={formTrans('FindPlayground.Date.Placeholder')}
          control={methods.control}
          className='w-full'
          size='large'
          inputReadOnly
          disabled={!bookable}
        />

        <div className='flex w-full items-center justify-between gap-2'>
          <AntdTimePickerForm
            name='from'
            label={commonTrans('From')}
            control={methods.control}
            size='large'
            className='w-full'
            format='HH:mm'
            needConfirm={false}
            inputReadOnly
            minuteStep={BookingMinuteStep}
            disabled={!bookable}
          />
          <AntdTimePickerForm
            name='to'
            label={commonTrans('To')}
            control={methods.control}
            size='large'
            className='w-full'
            format='HH:mm'
            needConfirm={false}
            inputReadOnly
            minuteStep={BookingMinuteStep}
            disabled={!bookable}
          />
        </div>
        <p className='absolute right-0 top-0 text-xs text-zinc-500'>
          {commonTrans('FindInKm', { radius })}
        </p>
      </div>
    </form>
  );
}
