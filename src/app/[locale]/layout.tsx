import localFont from "next/font/local";
import { ReactElement, ReactNode, Suspense, useEffect } from "react";
import "./layout.css"
import "flag-icon-css/css/flag-icons.min.css";
import { getCurrentLocale, getI18n } from "@/dictionaries/server";
import { ApiServices } from "./api/ApiServices";
import { BaseResponse, SiteSettingDto } from "@/dto";
import SiteLayout from "@/components/SiteLayout";
const Abar = localFont({
  src: [{
    path: "../../../public/fonts/AbarMid-Regular.woff",
    style: "normal"
  },
  {
    path: "../../../public/fonts/AbarHigh-Regular.woff",
    style: "normal"
  },
  {
    path: "../../../public/fonts/AbarLow-Regular.woff",
    style: "normal"
  },
  {
    path: "../../../public/fonts/AbarMid-SemiBold.woff",
    style: "bold"
  },
  {
    path: "../../../public/fonts/AbarMid-Bold.woff",
    style: "bold"
  },
  ]
});

type AppPropsWithLayout = {
  children: ReactElement
}
export default async function RootLayout(props: AppPropsWithLayout) {
  const locale = await getCurrentLocale();
  const translate = await getI18n()
  const loadSiteData = async () => {
    // const res = await ApiServices.site.getSetting()
    // if (res.status == 200) {
    //   const repo: BaseResponse<SiteSettingDto> = await res.json()
    //   return repo.result
    //   //console.log(repo)
    // }
    return undefined
  }
  var siteData = await loadSiteData()

  return (
    <html lang={locale} dir={locale == "fa" ? "rtl" : "ltr"}  >
      <title>{translate("titleApp")}</title>

      <head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="teagle.ir,a.gheblenama" />
        <meta name="author" content="ahmad gheblenama" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        {/* <link
          rel="stylesheet"
          href={locale == "fa" ? "/css/bootstrap_rtl.min.css" : "/css/bootstrap.min.css"}
          crossOrigin="anonymous"
        /> */}

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

      </head>
      <body suppressHydrationWarning={true} >
        <style >{`
        html, body {
          font-family: ${Abar.style.fontFamily};
        }
          a{
           font-family: ${Abar.style.fontFamily} !important;
          }
      `}</style>
        <SiteLayout local={locale} siteData={siteData}>

          {props.children}
        </SiteLayout>
      </body>
    </html>
  )
}