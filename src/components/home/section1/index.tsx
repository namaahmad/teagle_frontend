"use client"
import React, { useState } from 'react'
import Link, { LinkProps } from 'next/link';

import { useI18n, useCurrentLocale } from '@/dictionaries/client';


interface IProps {
}
const Section1Component = (props: IProps) => {

    const local = useCurrentLocale()
    return (
        <section>
            <div className="hero-section">
                <div className="candlestick-bg"></div>
                <div className="hero-content">
                    <div className="hero-logo">
                        <h1><span className="t-letter">T</span>eagle</h1>
                        <p className="hero-tagline">TRADER'S SHARP EYE</p>
                        <p className="hero-tagline-fa">تیگل چشم تیزبین تریدر</p>
                    </div>
                    <div className="hero-search">
                        <form className="search-container">
                            <button type="submit" className="search-submit">
                                <i className="fas fa-search"></i>
                                <span>جستجو</span>
                            </button>
                            <input type="text" className="search-input" placeholder="... / پرایفرم / بروکر / صرافی" />
                        </form>
                    </div>
                </div>
            </div>


            <div className="floating-buttons">
                <div className="float-btn" title="ویرایش">
                    <i className="fas fa-edit"></i>
                </div>
                <div className="float-btn" title="ذخیره">
                    <i className="fas fa-save"></i>
                </div>
                <div className="float-btn" title="ماشین حساب">
                    <i className="fas fa-calculator"></i>
                </div>
                <div className="float-btn" title="بالا">
                    <i className="fas fa-arrow-up"></i>
                </div>
            </div>


            <div className="broker-section">
                <div className="broker-container">
                    <div className="broker-item">
                        <div className="broker-logo">
                            <svg width="150" height="50" viewBox="0 0 150 50">
                                <text x="75" y="35" text-anchor="middle" font-size="24" font-weight="bold" fill="#000">Alpari</text>
                                <path d="M30,10 L40,30 L50,10 M35,20 L45,20" stroke="#000" stroke-width="3" fill="none" />
                            </svg>
                        </div>
                        <span className="broker-badge">ADS آ</span>
                    </div>
                    <div className="broker-item">
                        <div className="broker-logo">
                            <svg width="150" height="50" viewBox="0 0 150 50">
                                <text x="75" y="35" text-anchor="middle" font-size="20" font-style="italic" font-weight="bold" fill="#000">xChief</text>
                            </svg>
                        </div>
                        <span className="broker-badge">ADS بررسی پذیره»</span>
                    </div>
                    <div className="broker-item">
                        <div className="broker-logo">
                            <svg width="150" height="50" viewBox="0 0 150 50">
                                <text x="75" y="30" text-anchor="middle" font-size="18" font-weight="bold" fill="#000">CIFC</text>
                                <text x="75" y="45" text-anchor="middle" font-size="12" font-weight="bold" fill="#000">MARKETS</text>
                            </svg>
                        </div>
                        <span className="broker-badge">ADS آ</span>
                    </div>
                    <div className="broker-item">
                        <div className="broker-logo">
                            <svg width="150" height="50" viewBox="0 0 150 50">
                                <text x="75" y="35" text-anchor="middle" font-size="22" font-weight="bold" fill="#000">ERRANTE</text>
                            </svg>
                        </div>
                        <span className="broker-badge">ADS آ</span>
                    </div>
                    <div className="broker-item">
                        <div className="broker-logo">
                            <svg width="150" height="50" viewBox="0 0 150 50">
                                <circle cx="30" cy="25" r="15" fill="#000" />
                                <path d="M35,25 L45,15 L45,35 Z" fill="#000" />
                                <text x="95" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="#000">DELTAFX</text>
                                <text x="95" y="43" text-anchor="middle" font-size="8" fill="#000">This is Forex</text>
                            </svg>
                        </div>
                        <span className="broker-badge">ADS آ</span>
                    </div>
                </div>
            </div>


           
        </section>
    )
}
export default Section1Component