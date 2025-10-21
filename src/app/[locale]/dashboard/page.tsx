


import { BaseResponse, PageDataDto } from '@/dto';
import { ComponentType } from '@/enum';
import { notFound } from 'next/navigation';

interface IProps {
  params: Promise<{ locale: string }>
}

export default async function HomePage(props: IProps) {
  const { locale } = await props.params;

  return (
    <>
      
    </>
  )
}
