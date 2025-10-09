import { useCurrentLocale, useI18n } from '@/dictionaries/client';
import { SitesettingDataDto } from '@/dto'
import React, { useEffect } from 'react'

interface IProps {
  data?: SitesettingDataDto
}

const TopNav = (props: IProps) => {
  const translate = useI18n();
  const locale = useCurrentLocale()
 
  return (
    <div className="top_menu row m0">
      <div className="container">
        <div className="float-left">
          <a className="dn_btn" href="">
            <i className="ti-mobile"></i>{props.data?.phone}
          </a>
          <span className="dn_btn">
            {" "}
            <i className="ti-location-pin"></i> {props.data?.address}
          </span>
        </div>
        <div className="float-right">
          <span className="follow_us" style={{ float: locale == "fa" ? "right" : "left" }}>{translate("followUs")} : </span>
          <ul className="list header_social">
            <li>
              <a href={props.data?.facebookAddress}>
                <i className="ti-facebook"></i>
              </a>
            </li>
            <li>
              <a href={props.data?.twitterAddress}>
                <i className="ti-twitter"></i>
              </a>
            </li>
            <li>
              <a href={props.data?.instagramAddress}>
                <i className="ti-instagram"></i>
              </a>
            </li>
            <li>
              <a href={props.data?.skypeAddress}>
                <i className="ti-skype"></i>
              </a>
            </li>
            <li>
              <a href={props.data?.vimeoAddress}>
                <i className="ti-vimeo"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TopNav