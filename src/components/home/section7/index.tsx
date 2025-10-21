"use client"
import React, { useState } from 'react'
import Link, { LinkProps } from 'next/link';

import { useI18n, useCurrentLocale } from '@/dictionaries/client';
import "./style.css"
import { Insights as InsightsIcon } from "@mui/icons-material"
interface IProps {
}
const Section7Component = (props: IProps) => {

    const translate = useI18n();
    return (
        <section className="section " id="live-price-table">
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
                <div className="main-content-wrapper">
                    <div className="table-container">
                        <table className="price-table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>ارزدیجیتال</th>
                                    <th>قیمت روز</th>
                                    <th>قیمت تومانی</th>
                                    <th>معاملات روزانه</th>
                                    <th>حجم بازار</th>
                                    <th>روزانه</th>
                                    <th>هفتگی</th>
                                    <th>خرید و فروش</th>
                                    <th>نمودار هفتگی</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td><span className="row-number">۱</span></td>
                                    <td>
                                        <div className="crypto-info">
                                            <div className="crypto-details">
                                                <div className="crypto-name">بیت کوین</div>
                                                <div className="crypto-symbol">BTC</div>
                                            </div>
                                            <div className="crypto-icon" style={{ background: "#f7931a" }}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                                                    <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span className="price">$۱۱۳,۰۰۳</span></td>
                                    <td><span className="volume">۱۲,۸۲۲,۸۸۴ تومان</span></td>
                                    <td><span className="market-cap">۳۴۳,۰۶۴,۶۰۸,۱۲۶</span></td>
                                    <td><span className="market-cap">$۲,۲۵۱,۳۹۷,۸۰۸,۵۴۱</span></td>
                                    <td><span className="change positive">۲.۴۶% +</span></td>
                                    <td><span className="change positive">۳.۱۴% +</span></td>
                                    <td>
                                        <div className="action-icons">
                                            <div className="action-icon">
                                                <svg viewBox="0 0 24 24" fill="none">
                                                    <circle cx="12" cy="12" r="10" />
                                                </svg>
                                            </div>
                                            <div className="action-icon">
                                                <svg viewBox="0 0 24 24" fill="none">
                                                    <path d="M6 9l6 6 6-6" />
                                                </svg>
                                            </div>
                                            <div className="action-icon">
                                                <svg viewBox="0 0 24 24" fill="none">
                                                    <circle cx="12" cy="12" r="1" />
                                                    <circle cx="12" cy="5" r="1" />
                                                    <circle cx="12" cy="19" r="1" />
                                                </svg>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="chart-cell">
                                        <div className="mini-chart">
                                            <svg viewBox="0 0 120 40" preserveAspectRatio="none">
                                                <polyline fill="none" stroke="#ef4444" strokeWidth="2"
                                                    points="0,25 15,20 30,22 45,18 60,15 75,20 90,18 105,22 120,20" />
                                            </svg>
                                        </div>
                                    </td>
                                </tr>


                                <tr>
                                    <td><span className="row-number">۲</span></td>
                                    <td>
                                        <div className="crypto-info">
                                            <div className="crypto-details">
                                                <div className="crypto-name">اتریوم</div>
                                                <div className="crypto-symbol">ETH</div>
                                            </div>
                                            <div className="crypto-icon" style={{ background: "#627eea" }}>
                                                <svg width="18" height="28" viewBox="0 0 18 28" fill="white">
                                                    <path d="M8.5 0L0 14l8.5 5 8.5-5L8.5 0zM0 15.5l8.5 12 8.5-12-8.5 5-8.5-5z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span className="price">$۴,۱۵۳</span></td>
                                    <td><span className="volume">۴۴۱,۰۲۴,۴۵۸ تومان</span></td>
                                    <td><span className="market-cap">۲۳۰,۸۹,۷۷۸,۸۹۸</span></td>
                                    <td><span className="market-cap">$۵۰۱,۳۶۱,۱۹۱,۵۴۰</span></td>
                                    <td><span className="change positive">۷.۴۸% +</span></td>
                                    <td><span className="change negative">۱۱.۰۲% -</span></td>
                                    <td>
                                        <div className="action-icons">
                                            <div className="action-icon">
                                                <svg viewBox="0 0 24 24" fill="none">
                                                    <circle cx="12" cy="12" r="10" />
                                                </svg>
                                            </div>
                                            <div className="action-icon">
                                                <svg viewBox="0 0 24 24" fill="none">
                                                    <path d="M6 9l6 6 6-6" />
                                                </svg>
                                            </div>
                                            <div className="action-icon">
                                                <svg viewBox="0 0 24 24" fill="none">
                                                    <circle cx="12" cy="12" r="1" />
                                                    <circle cx="12" cy="5" r="1" />
                                                    <circle cx="12" cy="19" r="1" />
                                                </svg>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="chart-cell">
                                        <div className="mini-chart">
                                            <svg viewBox="0 0 120 40" preserveAspectRatio="none">
                                                <polyline fill="none" stroke="#ef4444" strokeWidth="2"
                                                    points="0,20 15,22 30,25 45,20 60,18 75,22 90,25 105,28 120,26" />
                                            </svg>
                                        </div>
                                    </td>
                                </tr>


                                <tr>
                                    <td><span className="row-number">۳</span></td>
                                    <td>
                                        <div className="crypto-info">
                                            <div className="crypto-details">
                                                <div className="crypto-name">تتر</div>
                                                <div className="crypto-symbol">USDT</div>
                                            </div>
                                            <div className="crypto-icon" style={{ background: "#26a17b" }}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                                                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span className="price">$۱.۰۰۰</span></td>
                                    <td><span className="volume">۱۰۵,۳۳۸ تومان</span></td>
                                    <td><span className="market-cap">۱۱۸,۵۵۰,۸۸۲,۶۹۹</span></td>
                                    <td><span className="market-cap">$۱۷۲,۰۸۳,۴۷۸,۳۹۳</span></td>
                                    <td><span className="change negative">۰.۰۲% -</span></td>
                                    <td><span className="change positive">۰.۰۰% +</span></td>
                                    <td>
                                        <div className="action-icons">
                                            <div className="action-icon">
                                                <svg viewBox="0 0 24 24" fill="none">
                                                    <circle cx="12" cy="12" r="10" />
                                                </svg>
                                            </div>
                                            <div className="action-icon">
                                                <svg viewBox="0 0 24 24" fill="none">
                                                    <path d="M6 9l6 6 6-6" />
                                                </svg>
                                            </div>
                                            <div className="action-icon">
                                                <svg viewBox="0 0 24 24" fill="none">
                                                    <circle cx="12" cy="12" r="1" />
                                                    <circle cx="12" cy="5" r="1" />
                                                    <circle cx="12" cy="19" r="1" />
                                                </svg>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="chart-cell">
                                        <div className="mini-chart">
                                            <svg viewBox="0 0 120 40" preserveAspectRatio="none">
                                                <polyline fill="none" stroke="#10b981" strokeWidth="2"
                                                    points="0,30 15,28 30,29 45,27 60,26 75,27 90,28 105,27 120,28" />
                                            </svg>
                                        </div>
                                    </td>
                                </tr>


                                <tr>
                                    <td><span className="row-number">۴</span></td>
                                    <td>
                                        <div className="crypto-info">
                                            <div className="crypto-details">
                                                <div className="crypto-name">ریپل</div>
                                                <div className="crypto-symbol">XRP</div>
                                            </div>
                                            <div className="crypto-icon" style={{ background: "#23292f" }}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                                                    <path d="M20 7l-8 8-8-8M20 17l-8-8-8 8" />
                                                </svg>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span className="price">$۲.۸۱۳</span></td>
                                    <td><span className="volume">۲۹۹,۰۶۵ تومان</span></td>
                                    <td><span className="market-cap">۵۵,۰۴۷,۳۰۸,۸۲۶</span></td>
                                    <td><span className="market-cap">$۱۶۸,۱۱۸,۱۷۲,۲۰۳</span></td>
                                    <td><span className="change positive">۶.۵۵% +</span></td>
                                    <td><span className="change negative">۸.۴۰% -</span></td>
                                    <td>
                                        <div className="action-icons">
                                            <div className="action-icon">
                                                <svg viewBox="0 0 24 24" fill="none">
                                                    <circle cx="12" cy="12" r="10" />
                                                </svg>
                                            </div>
                                            <div className="action-icon">
                                                <svg viewBox="0 0 24 24" fill="none">
                                                    <path d="M6 9l6 6 6-6" />
                                                </svg>
                                            </div>
                                            <div className="action-icon">
                                                <svg viewBox="0 0 24 24" fill="none">
                                                    <circle cx="12" cy="12" r="1" />
                                                    <circle cx="12" cy="5" r="1" />
                                                    <circle cx="12" cy="19" r="1" />
                                                </svg>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="chart-cell">
                                        <div className="mini-chart">
                                            <svg viewBox="0 0 120 40" preserveAspectRatio="none">
                                                <polyline fill="none" stroke="#ef4444" strokeWidth="2"
                                                    points="0,22 15,24 30,20 45,25 60,22 75,28 90,24 105,26 120,25" />
                                            </svg>
                                        </div>
                                    </td>
                                </tr>


                                <tr>
                                    <td><span className="row-number">۵</span></td>
                                    <td>
                                        <div className="crypto-info">
                                            <div className="crypto-details">
                                                <div className="crypto-name">بایننس کوین</div>
                                                <div className="crypto-symbol">BNB</div>
                                            </div>
                                            <div className="crypto-icon" style={{ background: "#f3ba2f" }}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                                                    <path d="M12 2l3.5 3.5L12 9 8.5 5.5 12 2zM2 12l3.5-3.5L9 12l-3.5 3.5L2 12zm10 0l3.5-3.5L19 12l-3.5 3.5L12 12zm-3.5 3.5L12 19l3.5-3.5L12 12l-3.5 3.5z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span className="price">$۱.۰۱۴</span></td>
                                    <td><span className="volume">۱۰۷,۸۲۵,۹۷۴ تومان</span></td>
                                    <td><span className="market-cap">۴۴,۰۸۳,۳۷۲,۸۶۲</span></td>
                                    <td><span className="market-cap">$۱۳۱,۱۸۷,۱۶,۲۶۷</span></td>
                                    <td><span className="change positive">۵.۷۱% +</span></td>
                                    <td><span className="change positive">۸.۶۴% +</span></td>
                                    <td>
                                        <div className="action-icons">
                                            <div className="action-icon">
                                                <svg viewBox="0 0 24 24" fill="none">
                                                    <circle cx="12" cy="12" r="10" />
                                                </svg>
                                            </div>
                                            <div className="action-icon">
                                                <svg viewBox="0 0 24 24" fill="none">
                                                    <path d="M6 9l6 6 6-6" />
                                                </svg>
                                            </div>
                                            <div className="action-icon">
                                                <svg viewBox="0 0 24 24" fill="none">
                                                    <circle cx="12" cy="12" r="1" />
                                                    <circle cx="12" cy="5" r="1" />
                                                    <circle cx="12" cy="19" r="1" />
                                                </svg>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="chart-cell">
                                        <div className="mini-chart">
                                            <svg viewBox="0 0 120 40" preserveAspectRatio="none">
                                                <polyline fill="none" stroke="#10b981" strokeWidth="2"
                                                    points="0,35 15,32 30,28 45,30 60,25 75,22 90,20 105,18 120,15" />
                                            </svg>
                                        </div>
                                    </td>
                                </tr>


                                <tr>
                                    <td><span className="row-number">۶</span></td>
                                    <td>
                                        <div className="crypto-info">
                                            <div className="crypto-details">
                                                <div className="crypto-name">سولانا</div>
                                                <div className="crypto-symbol">SOL</div>
                                            </div>
                                            <div className="crypto-icon" style={{ background: "linear-gradient(135deg, #9945ff, #14f195)" }}  >
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                                                    <path d="M4 14l12-10M4 10l12-6M4 6l12 10" />
                                                </svg>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span className="price">$۲۲۳</span></td>
                                    <td><span className="volume">۲۳,۷۱۶,۹۲۹ تومان</span></td>
                                    <td><span className="market-cap">۴۶,۲۵۶,۸۴۵,۱۵۷</span></td>
                                    <td><span className="market-cap">$۱۳۱,۱۸۷,۳۲۹,۶۰۴</span></td>
                                    <td><span className="change positive">۷.۳۴% +</span></td>
                                    <td><span className="change negative">۸.۵۰% -</span></td>
                                    <td>
                                        <div className="action-icons">
                                            <div className="action-icon">
                                                <svg viewBox="0 0 24 24" fill="none">
                                                    <circle cx="12" cy="12" r="10" />
                                                </svg>
                                            </div>
                                            <div className="action-icon">
                                                <svg viewBox="0 0 24 24" fill="none">
                                                    <path d="M6 9l6 6 6-6" />
                                                </svg>
                                            </div>
                                            <div className="action-icon">
                                                <svg viewBox="0 0 24 24" fill="none">
                                                    <circle cx="12" cy="12" r="1" />
                                                    <circle cx="12" cy="5" r="1" />
                                                    <circle cx="12" cy="19" r="1" />
                                                </svg>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="chart-cell">
                                        <div className="mini-chart">
                                            <svg viewBox="0 0 120 40" preserveAspectRatio="none">
                                                <polyline fill="none" stroke="#ef4444" strokeWidth="2"
                                                    points="0,18 15,20 30,24 45,20 60,22 75,26 90,23 105,25 120,28" />
                                            </svg>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </main>


        </section>



    )
}
export default Section7Component