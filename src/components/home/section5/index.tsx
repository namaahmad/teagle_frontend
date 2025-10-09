"use client"
import React, { useState } from 'react'
import Link, { LinkProps } from 'next/link';

import { useI18n, useCurrentLocale } from '@/dictionaries/client';
import "./style.css"

interface IProps {
}
const Section5Component = (props: IProps) => {

    const local = useCurrentLocale()
    return (
        <section>
            <section className="podcast-section">
                <div className="container">
                    <div className="podcast-wrapper">

                        <div className="video-container">
                            <img src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&h=600&fit=crop" alt="Podcast" />
                            <div className="video-overlay">
                                <div className="play-button">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="episode-badge">
                                <div className="episode-title">فصل اول</div>
                                <div className="episode-subtitle">
                                    <span className="yellow">بروک</span><span className="black">ر - اپیزود ۱</span>
                                </div>
                            </div>
                        </div>


                        <div className="content-container">
                            <div className="shape-background"></div>
                            <div className="content-wrapper">
                                <div className="header-top">
                                    <div className="podcast-icon">
                                        <svg viewBox="0 0 24 24" fill="none">
                                            <circle cx="12" cy="12" r="3" />
                                            <path d="M12 1v6m0 6v6M1 12h6m6 0h6" />
                                            <circle cx="12" cy="12" r="8" />
                                        </svg>
                                    </div>
                                    <div className="main-title">تیکل کست</div>
                                    <div className="logo-badge">ن</div>
                                </div>
                                <p className="subtitle-text">آخرین قسمت ویدیو کست تیکل</p>

                                <h1 className="season-title">SEASON<br />One</h1>

                                <div className="episode-info">
                                    <div className="episode-number">فصل اول</div>
                                    <div className="episode-name">بــــروکـــــر</div>
                                    <div className="episode-number">قسمت اول /</div>
                                </div>

                                <p className="episode-description">
                                    در اولین قسمت از این مجموعه به سراغ تعریف بروکر می‌رویم و نقشی که در دنیای معاملات ایفا می‌کند را بررسی خواهیم کرد.
                                </p>

                                <button className="watch-button">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                    مشاهده پادکست
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="crypto-section">
                <div className="container">
                    <div className="section-header">
                        <div className="title-wrapper">
                            <h2 className="section-title">قیمت‌های لحظه ای</h2>
                            <div className="crypto-logo">ن</div>
                            <div className="crypto-icon">
                                <svg viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                        </div>
                        <p className="section-subtitle">قیمت‌های لحظه ای رمزارز</p>
                    </div>


                    <div className="carousel-wrapper">
                        <button className="carousel-nav prev" >
                            <svg viewBox="0 0 24 24">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>
                        <button className="carousel-nav next" >
                            <svg viewBox="0 0 24 24">
                                <path d="M9 18l6-6-6-6" />
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
                                                stroke-width="2"
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
                                                stroke-width="2"
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
                                                stroke-width="2"
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
                                                stroke-width="2"
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
                                                stroke-width="2"
                                                points="0,53 20,48 40,51 60,39 80,44 100,30 120,35 140,28 160,31 180,23 200,28"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
export default Section5Component