"use client"
import React, { useRef } from 'react'
import useVerticalScrollEvent from '@/hooks/useVerticalScrollEvent'
import { SitesettingDataDto, SiteSettingDto } from '@/dto'
import { useI18n } from '@/dictionaries/client'
import { useCurrentLocale } from '@/dictionaries/client'
import logo from "@/components/img/logo.png"
import Image from 'next/image';
import moment from "moment-jalaali"
import LanguageSelector from '../LanguageSelector'
moment.loadPersian({ usePersianDigits: true,dialect: 'persian-modern' });
interface IProps {
  data?: SiteSettingDto
}
const Header = (props: IProps) => {
  const translate = useI18n();
  const stickyRef = useRef<HTMLDivElement>(null);
  const locale = useCurrentLocale()
  useVerticalScrollEvent((evt: any) => {
    if (evt.currentTarget.scrollY >= 172) {
      (stickyRef.current as HTMLDivElement).classList.add('navbar_fixed');
      return;
    }
    if (evt.currentTarget.scrollY <= 42) {
      (stickyRef.current as HTMLDivElement)?.classList.remove('navbar_fixed');
      return;
    }

  });


  return (
    <header className="header_area" ref={stickyRef}>
      <div className="top-bar">
        <div className="top-bar-right">
          <LanguageSelector/>
          <button className="search-btn">
            <i className="fas fa-search"></i>
            <span>{translate("search")}</span>
          </button>
          <button className="login-btn">
            <i className="fas fa-user"></i>
            <span>{translate("login")}/{translate("register")}</span>
          </button>
        </div>
        <div className="top-bar-left">
          <div className="date-info">
            <span>{moment().format('dddd')}</span>
            <span>{moment().format("YYYY/MM/DD")}</span>
            <span>{moment().format("jYYYY/jMM/jDD")}</span>
          </div>
        </div>
      </div>


      <nav className="main-nav">
        <button className="mobile-menu-btn" >
          <i className="fas fa-bars"></i>
        </button>

        <div className="nav-container">
          <ul className="nav-links" id="navLinks">
            <div className="nav-links-right">
              <li className="nav-item"><a href="#" className="nav-link">{translate("brokers")}</a></li>
              <li className="nav-item"><a href="#" className="nav-link">{translate("exchange")}</a></li>
              <li className="nav-item"><a href="#" className="nav-link">{translate("prims")}</a></li>
              <li className="nav-item"><a href="#" className="nav-link">{translate("analysis")}</a></li>
              <li className="nav-item"><a href="#" className="nav-link">{translate("education")}</a></li>
            </div>

            <div className="nav-links-left">
              <li className="nav-item"><a href="#" className="nav-link">{translate("teagleMarket")}</a></li>
              <li className="nav-item"><a href="#" className="nav-link">{translate("teagleNews")}</a></li>
              <li className="nav-item"><a href="#" className="nav-link">{translate("teagleMag")}</a></li>
              <li className="nav-item"><a href="#" className="nav-link">{translate("contact")}</a></li>
              <li className="nav-item"><a href="#" className="nav-link">{translate("about")}</a></li>
            </div>
          </ul>

          <div className="logo-header">
            <Image src={logo} alt={translate("titleApp")} width={60} height={40} />
          </div>
        </div>
      </nav>

    </header>
  )
}

export default Header