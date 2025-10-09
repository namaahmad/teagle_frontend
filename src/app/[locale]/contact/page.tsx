


import { getI18n } from '@/dictionaries/server';
import { ApiServices } from '../api/ApiServices';
import { BaseResponse, SiteSettingDto } from '@/dto';


interface IProps {
  params: Promise<{ locale: string }>
}
export default async function ContactPage(props: IProps) {
  const { locale } = await props.params;
  const translate = await getI18n()
  const loadSiteData = async () => {
    const res = await ApiServices.site.getSetting()
    if (res.status == 200) {
      const repo: BaseResponse<SiteSettingDto> = await res.json()
      return repo.result
      //console.log(repo)
    }

  }
  var siteData = await loadSiteData()
  return (
    <section className="contact-section area-padding">
      <div className="container">
        <div className="d-none d-sm-block mb-5 pb-4">
           <iframe
            src="https://maps.google.com/maps?q=%D8%A7%D8%B5%D9%81%D9%87%D8%A7%D9%86+%D8%AF%D8%A7%D9%86%D8%B4%DA%AF%D8%A7%D9%87+%D8%A7%D8%B3%D9%86%D9%88%D8%A7%D8%AA%DA%A9&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> 
         
      </div>
      <div className="row">
        <div className="col-12">
          <h2 className="contact-title">{translate("GetTouch")}</h2>
        </div>
        <div className="col-lg-8">
          <form
            className="form-contact contact_form"
            action="#"
            method="post"
            id="contactForm"
          >
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <textarea
                    className="form-control w-100"
                    name="message"
                    id="message"
                    cols={30}
                    rows={9}
                    required
                    placeholder={translate("EnterMessage")}
                  ></textarea>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    name="name"
                    id="name"
                    type="text"
                    placeholder={translate("EnterName")}
                    required
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    name="email"
                    id="email"
                    required
                    placeholder={translate("EnterPhone")}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <input
                    className="form-control"
                    name="subject"
                    id="subject"
                    type="text"
                    required
                    placeholder={translate("EnterSubject")}
                  />
                </div>
              </div>
            </div>
            <div className="form-group mt-3">
              <button type="submit" className="button button-contactForm">
                {translate("sendMsg")}
              </button>
            </div>
          </form>
        </div>
        <div className="col-lg-4">
          <div className="media contact-info">
            <span className="contact-info__icon">
              <i className="ti-home"></i>
            </span>
            <div className="media-body">
              <h3>{translate("address")}</h3>
              <p>{siteData?.siteSettingData.address}</p>
            </div>
          </div>
          <div className="media contact-info">
            <span className="contact-info__icon">
              <i className="ti-tablet"></i>
            </span>
            <div className="media-body">
              <h3>
                <a href="tel:454545654">{siteData?.siteSettingData.phone}</a>
              </h3>
              <p> {translate("Saturday")} - {translate("wensday")} : 8:00  - 17:00 </p>
            </div>
          </div>
          <div className="media contact-info">
            <span className="contact-info__icon">
              <i className="ti-email"></i>
            </span>
            <div className="media-body">
              <h3>
                <a href="/cdn-cgi/l/email-protection#c9babcb9b9a6bbbd89aaa6a5a6bba5a0abe7aaa6a4">
                  <span
                    className="__cf_email__"
                    data-cfemail="89fafcf9f9e6fbfdc9eae6e5e6fbe5e0eba7eae6e4"
                  >
                    {translate("email")}
                  </span>
                </a>
              </h3>
              <p>agheblenama04@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section >
  )
}
