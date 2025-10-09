


import { getI18n } from '@/dictionaries/server';
import { ApiServices } from '../api/ApiServices';
import { BaseResponse, SiteSettingDto } from '@/dto';
import LoginSection from './LoginSection';


interface IProps {
  params: Promise<{ locale: string }>
}
export default async function LoginPage(props: IProps) {
  const { locale } = await props.params;
  const translate = await getI18n()

  return (
    <section className="contact-section area-padding">
      <div className="container">
        <LoginSection />
      </div>
    </section >
  )
}
