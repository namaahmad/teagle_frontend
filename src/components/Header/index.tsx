"use client"
import React, { useRef } from 'react'
import TopNav from '../TopNav'
import useVerticalScrollEvent from '@/hooks/useVerticalScrollEvent'
import { SitesettingDataDto, SiteSettingDto } from '@/dto'
import { useI18n } from '@/dictionaries/client'
import { useCurrentLocale } from '@/dictionaries/client'

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
          <button className="language-btn">
            <div className="flag-icon"></div>
            <span>{locale == "fa" ? translate("persian") : translate("english")}</span>
            <i className="fas fa-chevron-down"></i>
          </button>
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
            <span>چهارشنبه</span>
            <span>۱۷سپتامبر ۲۰۲۵</span>
            <span>۱۴۰۴ / ۶ / ۲۶</span>
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
            <svg width="80" height="60" viewBox="0 0 100 80">
              <path d="M10,40 Q10,10 40,10 L60,10 Q90,10 90,40 Q90,70 60,70 L40,70 Q10,70 10,40 Z" fill="#1a1a1a" transform="rotate(-15 50 40)" />
              <circle cx="45" cy="40" r="18" fill="#ffc107" />
              <circle cx="45" cy="40" r="8" fill="#1a1a1a" />
            </svg>
          </div>
        </div>
      </nav>

    </header>
  )
}

export default Header