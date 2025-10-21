"use client"
import React, { useState } from 'react'
import Link, { LinkProps } from 'next/link';

import { useI18n, useCurrentLocale } from '@/dictionaries/client';

interface IProps {
}
const Section5Component = (props: IProps) => {
    const translate = useI18n();

    return (
        <>
            <section className="section" id="teagle-cast">
                <header className="header">
                    <div className="title-wrapper">
                        <div className="icon">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_2176_1716)">
                                    <path
                                        d="M9.09131 17.4695H11.3576C11.8217 17.4695 12.2668 17.6599 12.595 17.9986C12.9232 18.3374 13.1076 18.7969 13.1076 19.276V28.0012H14.8576V19.276C14.8576 18.7969 15.0419 18.3374 15.3701 17.9986C15.6983 17.6599 16.1435 17.4695 16.6076 17.4695H18.8738V15.6631H9.09131V17.4695Z"
                                        fill="#262626" />
                                    <path
                                        d="M14 0.000976562C10.8357 0.00411394 7.76571 1.1137 5.29064 3.14887C2.81558 5.18404 1.0814 8.02471 0.370906 11.2077C-0.339588 14.3907 0.0154901 17.7283 1.37825 20.6763C2.741 23.6243 5.03105 26.0088 7.875 27.441L8.64501 25.8152C6.15849 24.5588 4.15758 22.47 2.9684 19.8894C1.77922 17.3087 1.47188 14.3884 2.09655 11.6044C2.72122 8.82035 4.24101 6.33683 6.40821 4.55864C8.57541 2.78046 11.2622 1.81247 14.0307 1.81247C16.7991 1.81247 19.4859 2.78046 21.653 4.55864C23.8202 6.33683 25.34 8.82035 25.9647 11.6044C26.5894 14.3884 26.2821 17.3087 25.0929 19.8894C23.9037 22.47 21.9028 24.5588 19.4163 25.8152L20.1863 27.441C23.0302 26.0088 25.3203 23.6243 26.683 20.6763C28.0458 17.7283 28.4009 14.3907 27.6904 11.2077C26.9799 8.02471 25.2457 5.18404 22.7706 3.14887C20.2956 1.1137 17.2256 0.00411394 14.0613 0.000976562H14Z"
                                        fill="#262626" />
                                    <path
                                        d="M22.1375 19.7183C23.1022 18.1428 23.6122 16.3162 23.6076 14.4525C23.6144 12.9092 23.2728 11.3855 22.61 10.0022C21.9471 8.61887 20.9812 7.41397 19.7888 6.483C18.5964 5.55204 17.2103 4.92059 15.7404 4.63876C14.2705 4.35693 12.7571 4.43243 11.3204 4.8593C9.88368 5.28617 8.56304 6.05267 7.46318 7.09802C6.36332 8.14336 5.51448 9.43882 4.98398 10.8817C4.45347 12.3245 4.25589 13.8751 4.40688 15.4105C4.55786 16.9459 5.05324 18.4239 5.8538 19.7273"
                                        stroke="#262626" strokeWidth="2" strokeMiterlimit="10" />
                                    <path
                                        d="M7.90125 14.4527C8.04241 12.8838 8.74598 11.4259 9.87411 10.3645C11.0022 9.30314 12.4736 8.71484 14 8.71484C15.5264 8.71484 16.9978 9.30314 18.1259 10.3645C19.254 11.4259 19.9576 12.8838 20.0987 14.4527"
                                        stroke="#262626" strokeWidth="2" strokeMiterlimit="10" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2176_1716">
                                        <rect width="28" height="28" fill="white" transform="translate(0 0.000976562)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <h2 className="title">تیگل کست</h2>
                        <span className="icon-arrow"></span>
                    </div>
                    <p className="description">
                        آخرین قسمت ویدئو کست تیگل </p>
                </header>
                <main>
                    <div className="cast-info-box">
                        <img src="assets/podcast-ep-title-back.png" alt="" className="background" />
                        <div className="info">
                            <div className="episode-sesson">
                                <p className="sesson">فصل اول</p>
                                <p className="episode"> / قسمت اول</p>
                                <p className="episode-name">بـــروکــــر</p>
                            </div>
                            <p>
                                در اولین قسمت از این مجموعه، به سراغ تعریف بروکر می‌رویم و نقشی که در دنیای معاملات ایفا
                                می‌کند را بررسی خواهیم کرد.
                            </p>
                            <a className="button">
                                <div className="icon">
                                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M0.5 0.500977V15.501L13.5 8.00436L0.5 0.500977ZM6.37318 5.48498C5.435 6.61647 4.14964 7.40719 2.71627 7.73464C2.61447 7.75543 2.50936 7.75289 2.40861 7.72754C2.30785 7.7022 2.21407 7.65477 2.13426 7.58829C2.05444 7.52181 1.99061 7.43806 1.9475 7.34359C1.90438 7.24911 1.88308 7.14625 1.88519 7.04244V4.08671C1.88592 3.96556 1.91845 3.84661 1.97954 3.74196C2.04063 3.63731 2.12809 3.55042 2.23326 3.49016C2.33843 3.4299 2.45757 3.39838 2.5788 3.39857C2.70002 3.39875 2.8191 3.43093 2.92408 3.49151L6.37318 5.48498ZM1.88519 9.25053C2.99584 9.16122 4.07585 8.84245 5.05698 8.31463C6.03811 7.78681 6.899 7.0613 7.58522 6.18394L9.663 7.4024C9.76796 7.46324 9.85506 7.55047 9.91562 7.65555C9.97618 7.76063 10.0081 7.87971 10.0081 8.00098C10.0081 8.12224 9.97618 8.24132 9.91562 8.3464C9.85506 8.45148 9.76796 8.53905 9.663 8.5999L2.89635 12.5037C2.79137 12.5643 2.67237 12.5964 2.55115 12.5966C2.42993 12.5968 2.31078 12.5653 2.20561 12.505C2.10045 12.4448 2.01289 12.3579 1.95181 12.2532C1.89072 12.1486 1.85819 12.0296 1.85746 11.9085L1.88519 9.25053Z"
                                            fill="white" />
                                    </svg>

                                </div>
                                <span>مشاهده پادکست</span>
                            </a>
                        </div>
                    </div>
                    <a href="" className="podcast-poster-link">
                        <img className="poster" src="assets/cast.png" alt="" />
                        <img className="play-icon" src="assets/play-icon.png" alt="" />
                    </a>
                </main>
            </section>
            <section className="section " id="live-price">
                <header className="header">
                    <div className="title-wrapper">
                        <div className="icon">
                            <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_2176_1480)">
                                    <path
                                        d="M0 12.1665L10.0693 2.09721L15.5931 0.365613C16.9893 -0.0674461 18.4774 -0.110927 19.8965 0.23987C21.3157 0.590666 22.6121 1.32241 23.6458 2.35612C24.6795 3.38984 25.4113 4.68623 25.7621 6.1054C26.1129 7.52458 26.0694 9.01261 25.6364 10.4089L23.9047 15.9327L13.8355 26.002H13.4632C9.93233 25.9021 6.57299 24.4572 4.07208 21.9627C1.57116 19.4683 0.117611 16.1126 0.00864004 12.582L0 12.1665ZM10.9957 3.62967L2.64068 11.976C2.3535 12.2623 2.13736 12.6119 2.00956 12.9968C1.88177 13.3817 1.84586 13.7912 1.90475 14.1924C2.32652 16.6682 3.50693 18.9519 5.28282 20.7278C7.0587 22.5037 9.34237 23.6841 11.8182 24.1059C12.2194 24.1647 12.6289 24.1288 13.0138 24.001C13.3987 23.8732 13.7483 23.6571 14.0346 23.3699L22.3896 15.0149L23.9394 10.0366C24.2296 9.14868 24.3218 8.20802 24.2096 7.28066C24.0975 6.3533 23.7836 5.46172 23.29 4.66862C22.5502 3.49856 21.4448 2.60548 20.1454 2.128C18.846 1.65051 17.4253 1.61534 16.1039 2.02794L10.9957 3.62967Z"
                                        fill="#262626" />
                                    <path
                                        d="M15.5498 5.84637C16.0062 5.38969 16.5878 5.07861 17.2211 4.95251C17.8543 4.8264 18.5107 4.89094 19.1072 5.13794C19.7038 5.38493 20.2137 5.80328 20.5724 6.34009C20.9312 6.87691 21.1226 7.50808 21.1226 8.15373C21.1226 8.79939 20.9312 9.43053 20.5724 9.96735C20.2137 10.5042 19.7038 10.9225 19.1072 11.1695C18.5107 11.4165 17.8543 11.481 17.2211 11.3549C16.5878 11.2288 16.0062 10.9178 15.5498 10.4611C14.9381 9.849 14.5945 9.01908 14.5945 8.15373C14.5945 7.28839 14.9381 6.45844 15.5498 5.84637ZM18.9438 9.24032C19.1573 9.02567 19.3024 8.75259 19.3608 8.45555C19.4193 8.15851 19.3884 7.85079 19.2722 7.57126C19.156 7.29173 18.9596 7.05288 18.7077 6.88486C18.4559 6.71684 18.1599 6.62719 17.8572 6.62719C17.5545 6.62719 17.2585 6.71684 17.0067 6.88486C16.7548 7.05288 16.5584 7.29173 16.4422 7.57126C16.3259 7.85079 16.2951 8.15851 16.3536 8.45555C16.412 8.75259 16.5571 9.02567 16.7706 9.24032C16.9139 9.38508 17.0845 9.49999 17.2725 9.57842C17.4605 9.65684 17.6621 9.69721 17.8658 9.69721C18.0695 9.69721 18.2712 9.65684 18.4592 9.57842C18.6472 9.49999 18.8178 9.38508 18.9611 9.24032H18.9438Z"
                                        fill="#262626" />
                                    <path
                                        d="M10.1234 10.2648L8.89893 11.4893L14.519 17.1094L15.7435 15.8849L10.1234 10.2648Z"
                                        fill="#262626" />
                                    <path
                                        d="M7.50861 12.8679L6.28418 14.0923L11.9043 19.7124L13.1287 18.488L7.50861 12.8679Z"
                                        fill="#262626" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2176_1480">
                                        <rect width="26" height="26" fill="white" transform="translate(0 0.0107422)" />
                                    </clipPath>
                                </defs>
                            </svg>



                        </div>
                        <h2 className="title">قیمت‌های لحظه ای</h2>
                        <span className="icon-arrow"></span>
                    </div>
                    <p className="description">
                        قیمت‌های لحظه ای رمزارز
                    </p>
                </header>
                <main>
                    <div className="list-wrapper">
                        <button className="direction-list-button">
                            <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.93762 -8.52822e-07L14 12L1.93762 24L0.0136469 22.086L6.03119 16.086C8.2963 13.8326 8.2963 10.1674 6.03119 7.91403L-2.34685e-08 1.91403L1.92398 -8.51629e-07L1.93762 -8.52822e-07Z"
                                    fill="#262626" />
                            </svg>

                        </button>
                        <ul className="list-horizontal-scroll">
                            {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
                                <li key={index} className="card-price">
                                    <div className="header">
                                        <p className="currency-name">بیت کوین</p>
                                        <div className="row">
                                            <p className="currency-name-en">BTC</p>
                                            <img className="exchange-log" src="assets/Binance_logo.png" />
                                        </div>
                                        <div className="row">
                                            <p className="price">115,522.32</p>
                                            <p className="price-unit">USDT</p>
                                            <div className="persentage growth">

                                                ۰.۲۳٪
                                            </div>
                                        </div>
                                    </div>

                                    <div className="chart">
                                        <svg viewBox="0 0 200 80" preserveAspectRatio="none">
                                            <polyline
                                                fill="none"
                                                stroke="#f97316"
                                                strokeWidth="2"
                                                points="0,48 20,43 40,46 60,34 80,39 100,26 120,31 140,24 160,27 180,19 200,24"
                                            />
                                        </svg>
                                    </div>
                                </li>
                            ))}

                        </ul>
                        <button className="direction-list-button forward">
                            <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.93762 -8.52822e-07L14 12L1.93762 24L0.0136469 22.086L6.03119 16.086C8.2963 13.8326 8.2963 10.1674 6.03119 7.91403L-2.34685e-08 1.91403L1.92398 -8.51629e-07L1.93762 -8.52822e-07Z"
                                    fill="#262626" />
                            </svg>
                        </button>
                    </div>
                </main>
                <header className="header">
                    <p className="description">
                        قیمت‌های لحظه ای ارز رسمی
                    </p>
                </header>
                <main>
                    <div className="list-wrapper">
                        <button className="direction-list-button">
                            <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.93762 -8.52822e-07L14 12L1.93762 24L0.0136469 22.086L6.03119 16.086C8.2963 13.8326 8.2963 10.1674 6.03119 7.91403L-2.34685e-08 1.91403L1.92398 -8.51629e-07L1.93762 -8.52822e-07Z"
                                    fill="#262626" />
                            </svg>

                        </button>
                        <ul className="list-horizontal-scroll">

                            {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
                                <li key={index} className="card-price">
                                    <div className="header">
                                        <p className="currency-name">بیت کوین</p>
                                        <div className="row">
                                            <p className="currency-name-en">BTC</p>
                                            <img className="exchange-log" src="assets/Binance_logo.png" />
                                        </div>
                                        <div className="row">
                                            <p className="price">115,522.32</p>
                                            <p className="price-unit">USDT</p>
                                            <div className="persentage decline">

                                                ۰.۲۳٪
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chart">
                                        <svg viewBox="0 0 200 80" preserveAspectRatio="none">
                                            <polyline
                                                fill="none"
                                                stroke="#f97316"
                                                strokeWidth="2"
                                                points="0,48 20,43 40,46 60,34 80,39 100,26 120,31 140,24 160,27 180,19 200,24"
                                            />
                                        </svg>
                                    </div>
                                </li>
                            ))}

                        </ul>
                        <button className="direction-list-button forward">
                            <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.93762 -8.52822e-07L14 12L1.93762 24L0.0136469 22.086L6.03119 16.086C8.2963 13.8326 8.2963 10.1674 6.03119 7.91403L-2.34685e-08 1.91403L1.92398 -8.51629e-07L1.93762 -8.52822e-07Z"
                                    fill="#262626" />
                            </svg>
                        </button>
                    </div>
                </main>

            </section>
        </>
    )
}
export default Section5Component