"use client"
import React, { useState } from 'react'
import Link, { LinkProps } from 'next/link';

import { useI18n, useCurrentLocale } from '@/dictionaries/client';
import "./style.css"
import { AutoMode as TaskIcon, LocalOffer as LocalOfferIcon } from "@mui/icons-material"
import sesction5Svg from "@/components/img/sesction5.svg"
import section5_1Img from "@/components/img/section5_1.png"
import Image from 'next/image';
interface IProps {
}
const Section5Component = (props: IProps) => {
    const translate = useI18n();

    return (
        <section className="container-fluid" >

            <div className="row justify-content-center">
                <div className="col-12 col-lg-10">
                    <div className="section-title" style={{ marginBottom: "0.2rem" }}>
                        <div style={{ marginLeft: "20px" }}>
                            <TaskIcon />
                        </div>

                        {translate("teagleCast")}
                        <div className="logo-badge"><i className='fas fa-chevron-left'> </i></div>
                    </div>
                    <div className="section-subtitle" style={{ marginBottom: "2.5rem" }}>
                        {translate("teagleCastDesc")}
                    </div>
                    <div className="main-content-wrapper">

                        <Image alt={translate("teagleCast")} className="imgCast" src={sesction5Svg} />
                        <video width="640" height="360" className="videoCast" controls poster={section5_1Img.src}>

                        </video>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-lg-10">
                    <div className="section-title" style={{ marginBottom: "0.2rem" }}>
                        <div style={{ marginLeft: "20px" }}>
                            <LocalOfferIcon />
                        </div>

                        {translate("instantPrices")}
                        <div className="logo-badge"><i className='fas fa-chevron-left'> </i></div>
                    </div>
                    <div className="section-subtitle" style={{ marginBottom: "2.5rem" }}>
                        {translate("instantPricesDesc")}
                    </div>
                    <div className="main-content-wrapper">
                        <div className="carousel-wrapper">
                            <button className="carousel-nav prev" >
                                <svg viewBox="0 0 24 24">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </button>
                            <button className="carousel-nav next" >
                                <svg viewBox="0 0 24 24">
                                    <path d="M15 18l-6-6 6-6" />
                                </svg>
                            </button>


                            <div className="carousel-container">
                                <div className="carousel-track" id="crypto1Track">

                                    <div className="crypto-card">
                                        <div className="card-header">
                                            <div className="coin-info">
                                                <div className="coin-name">بیت کوین</div>
                                                <div className="coin-pair">Binance / BTC</div>
                                            </div>
                                            <div className="coin-icon">
                                                <svg viewBox="0 0 24 24" fill="none">
                                                    <circle cx="12" cy="12" r="10" />
                                                    <path d="M12 6v12M6 12h12" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="price-info">
                                            <div className="price-change positive">۰.۳۴% +</div>
                                            <div className="price-amount">USDT ۱۱۵,۵۲۲.۳۱</div>
                                            <div className="price-value">۱۱۵,۵۲۲.۳۱</div>
                                        </div>
                                        <div className="chart-container">
                                            <svg viewBox="0 0 200 80" preserveAspectRatio="none">
                                                <polyline
                                                    fill="none"
                                                    stroke="#f97316"
                                                    strokeWidth="2"
                                                    points="0,48 20,43 40,46 60,34 80,39 100,26 120,31 140,24 160,27 180,19 200,24"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="crypto-card">
                                        <div className="card-header">
                                            <div className="coin-info">
                                                <div className="coin-name">بیت کوین</div>
                                                <div className="coin-pair">Binance / BTC</div>
                                            </div>
                                            <div className="coin-icon">
                                                <svg viewBox="0 0 24 24" fill="none">
                                                    <circle cx="12" cy="12" r="10" />
                                                    <path d="M12 6v12M6 12h12" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="price-info">
                                            <div className="price-change positive">۰.۳۴% +</div>
                                            <div className="price-amount">USDT ۱۱۵,۵۲۲.۳۱</div>
                                            <div className="price-value">۱۱۵,۵۲۲.۳۱</div>
                                        </div>
                                        <div className="chart-container">
                                            <svg viewBox="0 0 200 80" preserveAspectRatio="none">
                                                <polyline
                                                    fill="none"
                                                    stroke="#f97316"
                                                    strokeWidth="2"
                                                    points="0,54 20,49 40,52 60,40 80,45 100,31 120,36 140,29 160,32 180,24 200,29"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="crypto-card">
                                        <div className="card-header">
                                            <div className="coin-info">
                                                <div className="coin-name">بیت کوین</div>
                                                <div className="coin-pair">Binance / BTC</div>
                                            </div>
                                            <div className="coin-icon">
                                                <svg viewBox="0 0 24 24" fill="none">
                                                    <circle cx="12" cy="12" r="10" />
                                                    <path d="M12 6v12M6 12h12" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="price-info">
                                            <div className="price-change positive">۰.۳۴% +</div>
                                            <div className="price-amount">USDT ۱۱۵,۵۲۲.۳۱</div>
                                            <div className="price-value">۱۱۵,۵۲۲.۳۱</div>
                                        </div>
                                        <div className="chart-container">
                                            <svg viewBox="0 0 200 80" preserveAspectRatio="none">
                                                <polyline
                                                    fill="none"
                                                    stroke="#f97316"
                                                    strokeWidth="2"
                                                    points="0,56 20,51 40,54 60,42 80,47 100,33 120,38 140,30 160,33 180,25 200,30"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="crypto-card">
                                        <div className="card-header">
                                            <div className="coin-info">
                                                <div className="coin-name">بیت کوین</div>
                                                <div className="coin-pair">Binance / BTC</div>
                                            </div>
                                            <div className="coin-icon">
                                                <svg viewBox="0 0 24 24" fill="none">
                                                    <circle cx="12" cy="12" r="10" />
                                                    <path d="M12 6v12M6 12h12" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="price-info">
                                            <div className="price-change positive">۰.۳۴% +</div>
                                            <div className="price-amount">USDT ۱۱۵,۵۲۲.۳۱</div>
                                            <div className="price-value">۱۱۵,۵۲۲.۳۱</div>
                                        </div>
                                        <div className="chart-container">
                                            <svg viewBox="0 0 200 80" preserveAspectRatio="none">
                                                <polyline
                                                    fill="none"
                                                    stroke="#f97316"
                                                    strokeWidth="2"
                                                    points="0,51 20,46 40,49 60,37 80,42 100,29 120,34 140,26 160,29 180,21 200,26"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="crypto-card">
                                        <div className="card-header">
                                            <div className="coin-info">
                                                <div className="coin-name">بیت کوین</div>
                                                <div className="coin-pair">Binance / BTC</div>
                                            </div>
                                            <div className="coin-icon">
                                                <svg viewBox="0 0 24 24" fill="none">
                                                    <circle cx="12" cy="12" r="10" />
                                                    <path d="M12 6v12M6 12h12" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="price-info">
                                            <div className="price-change positive">۰.۳۴% +</div>
                                            <div className="price-amount">USDT ۱۱۵,۵۲۲.۳۱</div>
                                            <div className="price-value">۱۱۵,۵۲۲.۳۱</div>
                                        </div>
                                        <div className="chart-container">
                                            <svg viewBox="0 0 200 80" preserveAspectRatio="none">
                                                <polyline
                                                    fill="none"
                                                    stroke="#f97316"
                                                    strokeWidth="2"
                                                    points="0,53 20,48 40,51 60,39 80,44 100,30 120,35 140,28 160,31 180,23 200,28"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-lg-10">
                  
                    <div className="section-subtitle" style={{ marginBottom: "2.5rem" }}>
                        {translate("instantPricesDesc1")}
                    </div>
                    <div className="main-content-wrapper">
                        <div className="carousel-wrapper">
                            <button className="carousel-nav prev" >
                                <svg viewBox="0 0 24 24">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </button>
                            <button className="carousel-nav next" >
                                <svg viewBox="0 0 24 24">
                                    <path d="M15 18l-6-6 6-6" />
                                </svg>
                            </button>


                            <div className="carousel-container">
                                <div className="carousel-track" id="crypto1Track">

                                    <div className="crypto-card">
                                        <div className="card-header">
                                            <div className="coin-info">
                                                <div className="coin-name">بیت کوین</div>
                                                <div className="coin-pair">Binance / BTC</div>
                                            </div>
                                            <div className="coin-icon">
                                                <svg viewBox="0 0 24 24" fill="none">
                                                    <circle cx="12" cy="12" r="10" />
                                                    <path d="M12 6v12M6 12h12" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="price-info">
                                            <div className="price-change positive">۰.۳۴% +</div>
                                            <div className="price-amount">USDT ۱۱۵,۵۲۲.۳۱</div>
                                            <div className="price-value">۱۱۵,۵۲۲.۳۱</div>
                                        </div>
                                        <div className="chart-container">
                                            <svg viewBox="0 0 200 80" preserveAspectRatio="none">
                                                <polyline
                                                    fill="none"
                                                    stroke="#f97316"
                                                    strokeWidth="2"
                                                    points="0,48 20,43 40,46 60,34 80,39 100,26 120,31 140,24 160,27 180,19 200,24"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="crypto-card">
                                        <div className="card-header">
                                            <div className="coin-info">
                                                <div className="coin-name">بیت کوین</div>
                                                <div className="coin-pair">Binance / BTC</div>
                                            </div>
                                            <div className="coin-icon">
                                                <svg viewBox="0 0 24 24" fill="none">
                                                    <circle cx="12" cy="12" r="10" />
                                                    <path d="M12 6v12M6 12h12" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="price-info">
                                            <div className="price-change positive">۰.۳۴% +</div>
                                            <div className="price-amount">USDT ۱۱۵,۵۲۲.۳۱</div>
                                            <div className="price-value">۱۱۵,۵۲۲.۳۱</div>
                                        </div>
                                        <div className="chart-container">
                                            <svg viewBox="0 0 200 80" preserveAspectRatio="none">
                                                <polyline
                                                    fill="none"
                                                    stroke="#f97316"
                                                    strokeWidth="2"
                                                    points="0,54 20,49 40,52 60,40 80,45 100,31 120,36 140,29 160,32 180,24 200,29"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="crypto-card">
                                        <div className="card-header">
                                            <div className="coin-info">
                                                <div className="coin-name">بیت کوین</div>
                                                <div className="coin-pair">Binance / BTC</div>
                                            </div>
                                            <div className="coin-icon">
                                                <svg viewBox="0 0 24 24" fill="none">
                                                    <circle cx="12" cy="12" r="10" />
                                                    <path d="M12 6v12M6 12h12" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="price-info">
                                            <div className="price-change positive">۰.۳۴% +</div>
                                            <div className="price-amount">USDT ۱۱۵,۵۲۲.۳۱</div>
                                            <div className="price-value">۱۱۵,۵۲۲.۳۱</div>
                                        </div>
                                        <div className="chart-container">
                                            <svg viewBox="0 0 200 80" preserveAspectRatio="none">
                                                <polyline
                                                    fill="none"
                                                    stroke="#f97316"
                                                    strokeWidth="2"
                                                    points="0,56 20,51 40,54 60,42 80,47 100,33 120,38 140,30 160,33 180,25 200,30"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="crypto-card">
                                        <div className="card-header">
                                            <div className="coin-info">
                                                <div className="coin-name">بیت کوین</div>
                                                <div className="coin-pair">Binance / BTC</div>
                                            </div>
                                            <div className="coin-icon">
                                                <svg viewBox="0 0 24 24" fill="none">
                                                    <circle cx="12" cy="12" r="10" />
                                                    <path d="M12 6v12M6 12h12" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="price-info">
                                            <div className="price-change positive">۰.۳۴% +</div>
                                            <div className="price-amount">USDT ۱۱۵,۵۲۲.۳۱</div>
                                            <div className="price-value">۱۱۵,۵۲۲.۳۱</div>
                                        </div>
                                        <div className="chart-container">
                                            <svg viewBox="0 0 200 80" preserveAspectRatio="none">
                                                <polyline
                                                    fill="none"
                                                    stroke="#f97316"
                                                    strokeWidth="2"
                                                    points="0,51 20,46 40,49 60,37 80,42 100,29 120,34 140,26 160,29 180,21 200,26"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="crypto-card">
                                        <div className="card-header">
                                            <div className="coin-info">
                                                <div className="coin-name">بیت کوین</div>
                                                <div className="coin-pair">Binance / BTC</div>
                                            </div>
                                            <div className="coin-icon">
                                                <svg viewBox="0 0 24 24" fill="none">
                                                    <circle cx="12" cy="12" r="10" />
                                                    <path d="M12 6v12M6 12h12" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="price-info">
                                            <div className="price-change positive">۰.۳۴% +</div>
                                            <div className="price-amount">USDT ۱۱۵,۵۲۲.۳۱</div>
                                            <div className="price-value">۱۱۵,۵۲۲.۳۱</div>
                                        </div>
                                        <div className="chart-container">
                                            <svg viewBox="0 0 200 80" preserveAspectRatio="none">
                                                <polyline
                                                    fill="none"
                                                    stroke="#f97316"
                                                    strokeWidth="2"
                                                    points="0,53 20,48 40,51 60,39 80,44 100,30 120,35 140,28 160,31 180,23 200,28"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Section5Component