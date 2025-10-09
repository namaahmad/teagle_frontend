"use client"
import React, { useState } from 'react'
import Link, { LinkProps } from 'next/link';

import { useI18n, useCurrentLocale } from '@/dictionaries/client';
import "./style.css"

interface IProps {
}
const Section7Component = (props: IProps) => {

    const local = useCurrentLocale()
    return (
        <section className='container'>
            <div className="section-header">
                <div className="title-wrapper">
                    <h2 className="section-title">قیمت‌های لحظه ای</h2>
                    <div className="logo-badge">ن</div>
                    <div className="price-icon">
                        <svg viewBox="0 0 24 24" fill="none">
                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                            <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                    </div>
                </div>
                <p className="section-subtitle">قیمت‌های لحظه ای رمزارز</p>
            </div>
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
                                    <div className="crypto-icon" style={{ background: "#f7931a;" }}>
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
                                        <polyline fill="none" stroke="#ef4444" stroke-width="2"
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
                                    <div className="crypto-icon" style={{ background: "#627eea;" }}>
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
                                        <polyline fill="none" stroke="#ef4444" stroke-width="2"
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
                                    <div className="crypto-icon" style={{ background: "#26a17b;" }}>
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
                                        <polyline fill="none" stroke="#10b981" stroke-width="2"
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
                                    <div className="crypto-icon" style={{ background: "#23292f;" }}>
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
                                        <polyline fill="none" stroke="#ef4444" stroke-width="2"
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
                                    <div className="crypto-icon" style={{ background: "#f3ba2f;" }}>
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
                                        <polyline fill="none" stroke="#10b981" stroke-width="2"
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
                                        <polyline fill="none" stroke="#ef4444" stroke-width="2"
                                            points="0,18 15,20 30,24 45,20 60,22 75,26 90,23 105,25 120,28" />
                                    </svg>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </section>
    )
}
export default Section7Component