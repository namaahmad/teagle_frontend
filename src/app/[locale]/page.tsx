

import { ApiServices } from './api/ApiServices';
import { BaseResponse, PageDataDto } from '@/dto';
import { ComponentType } from '@/enum';
import { notFound } from 'next/navigation';
import Section1Component from '@/components/home/section1';
import Section2Component from '@/components/home/section2';
import Section4Component from '@/components/home/section4';
import Section5Component from '@/components/home/section5';
import Section6Component from '@/components/home/section6';
import Section7Component from '@/components/home/section7';
import Section8Component from '@/components/home/section8';
import Section9Component from '@/components/home/section9';
import Section10Component from '@/components/home/section10';
import Section11Component from '@/components/home/section11';
import Section12Component from '@/components/home/section12';

interface IProps {
  params: Promise<{ locale: string }>
}

export default async function HomePage(props: IProps) {
  const { locale } = await props.params;
  // var data: BaseResponse<PageDataDto> = {} as any
  // var res = await ApiServices.site.getPageData("home", locale)
  // if (res.status == 200) {
  //   data = await res.json()
  // }
  // else {
  //   return notFound();
  // }
  // const renderComponent = (componentType: ComponentType, componentContent: any, key: number) => {
  //   switch (componentType) {
  //     case ComponentType.HomeBanner:
  //       return <HomeBanner key={key} data={componentContent} />
  //     case ComponentType.AboutComponent:
  //       return <About key={key} data={componentContent} />
  //     case ComponentType.ServiceComponent:
  //       return <Services key={key} data={componentContent} />
  //     case ComponentType.StatsComponent:
  //       return <Stats key={key} data={componentContent} />
  //     case ComponentType.PortfolioComponent:
  //       return <Portfolio key={key} data={componentContent} />
  //     case ComponentType.TestimonialsComponent:
  //       return <Testimonials key={key} data={componentContent} />
  //     case ComponentType.HomeNewsComponent:
  //       return <HomeNewsComponent key={key} data={componentContent} />
  //     default:
  //       return <></>
  //   }
  // }
  return (
    <>
      <Section1Component />
      <Section2Component />
      <Section4Component />
      <Section5Component />
      <Section6Component />
      <Section7Component />
      <Section8Component />
      <Section9Component />
      <Section10Component />
      <Section11Component />
      <Section12Component />
    </>
  )
}
