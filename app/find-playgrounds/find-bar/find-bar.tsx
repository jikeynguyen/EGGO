'use client';

import dayjs from 'dayjs';
import { UseFormReturn } from 'react-hook-form';
import FindPlaygroundsForm from '../find-playgrounds.form';
import { TFindPlaygroundsSchema } from '../zod/find-playgrounds-schema.zod';
import { getPlaygroundTypeIcon } from '@/app/untils/playground.helper';
import { Button } from '@/app/components/ui/button';
import { useCommonTranslation } from '@/app/hooks/i18n';
import { Drawer } from 'antd';
import { IDisclosureControls } from '@/app/hooks/disclosure.hook';

interface IFindBarProps {
  methods: UseFormReturn<TFindPlaygroundsSchema>;
  onFind: () => void;
  findBarDisclosure: IDisclosureControls;
}

export default function FindBar(props: IFindBarProps) {
  const { methods, onFind, findBarDisclosure } = props;

  const commonTrans = useCommonTranslation();

  const type = methods.watch('type');
  const date = methods.watch('date');
  const from = methods.watch('from');
  const to = methods.watch('to');
  const radius = methods.watch('radius');

  const getFromToText = () => {
    return `${from.format('HH:mm')} - ${to.format('HH:mm')}`;
  };

  return (
    <>
      <div className='transition-background pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full rounded-none border-none p-4 text-zinc-700 duration-300'>
        <div
          className='pointer-events-auto w-full max-w-md cursor-pointer'
          onClick={findBarDisclosure.open}
        >
          <div className='glassmorphism flex w-full justify-between rounded-full px-8'>
            <div className='flex flex-col'>
              <p className='text-xs text-zinc-500'>
                {dayjs(date).format('DD MMM YYYY')}
              </p>
              <p className='text-sm text-zinc-800'>{getFromToText()}</p>
            </div>
            <div className='flex flex-col'>
              <p className='text-xs text-zinc-500'>{commonTrans('Type')}</p>
              <p className='text-sm text-zinc-800'>
                {type ? getPlaygroundTypeIcon(type) : '--'}
              </p>
            </div>
            <div className='flex flex-col'>
              <p className='text-xs text-zinc-500'>{commonTrans('Radius')}</p>
              <p className='text-sm text-zinc-800'>{radius} km</p>
            </div>
          </div>
        </div>
      </div>

      <Drawer
        mask={false}
        closable={false}
        open={findBarDisclosure.isOpen}
        width={'100%'}
        height={'100%'}
        placement='bottom'
        classNames={{
          body: 'flex max-w-md flex-col space-y-4',
        }}
        className='glassmorphism-sm pointer-events-auto'
      >
        <FindPlaygroundsForm methods={methods} />

        <Button
          onClick={() => {
            onFind();
          }}
          variant='gradient'
        >
          {commonTrans('FindInKm', {
            radius,
          })}
        </Button>

        <Button
          onClick={findBarDisclosure.close}
          variant='link'
          className='text-red-500'
        >
          {commonTrans('Close')}
        </Button>
      </Drawer>
    </>
  );
}
