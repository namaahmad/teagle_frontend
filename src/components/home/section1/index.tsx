"use client"
import React, { useState } from 'react'
import Link, { LinkProps } from 'next/link';

import { useI18n, useCurrentLocale } from '@/dictionaries/client';
import "./style.css"

interface IProps {
}
const Section1Component = (props: IProps) => {
    const translate = useI18n();
    return (
        <section className="first-impression">
            <div className="wrapper">
                <h1><span className="t-letter">T</span>eagle</h1>
                <div className="slogan">
                    <p className="en-slogan">Trader &apos; s sharp eye</p>
                    <p>تیگــل چشم تیز‌بین تریدر</p>
                </div>
                <div className="search-box-wrapper">
                    <label className="search-box">
                        <button className="button-cta">
                            <div className="icon">
                                <svg width="23" height="24" viewBox="0 0 23 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M22.9927 22.4701L19.5039 18.974C19.1606 18.6282 18.9432 18.1773 18.8867 17.6933C18.8301 17.2093 18.9376 16.7204 19.192 16.3048C20.5313 14.1351 21.027 11.5491 20.5849 9.03792C20.1428 6.52678 18.7937 4.26549 16.7939 2.68369C14.7941 1.10188 12.2829 0.309768 9.73743 0.457803C7.19196 0.605838 4.78958 1.68372 2.98662 3.48668C1.18366 5.28964 0.105776 7.69205 -0.0422587 10.2375C-0.190294 12.783 0.601844 15.2942 2.18365 17.294C3.76545 19.2938 6.02669 20.6429 8.53784 21.085C11.049 21.5271 13.6351 21.0314 15.8048 19.6921C16.2203 19.4377 16.7093 19.3302 17.1932 19.3867C17.6772 19.4433 18.1282 19.6606 18.4739 20.004L21.97 23.4928L22.9927 22.4701ZM10.3721 19.7864C8.60697 19.7878 6.88109 19.2656 5.41285 18.2858C3.94461 17.3061 2.79998 15.9128 2.12384 14.2824C1.44769 12.6519 1.27042 10.8574 1.61442 9.12618C1.95843 7.3949 2.80824 5.80458 4.05637 4.55645C5.30449 3.30832 6.89484 2.45849 8.62612 2.11448C10.3574 1.77048 12.1518 1.94776 13.7823 2.6239C15.4128 3.30004 16.806 4.44467 17.7858 5.91291C18.7656 7.38115 19.2877 9.10703 19.2863 10.8722C19.2844 13.2358 18.3446 15.502 16.6732 17.1733C15.0019 18.8447 12.7357 19.7844 10.3721 19.7864Z"
                                        fill="#333333" />
                                </svg>
                            </div>
                            <span>جست و جو</span>
                        </button>
                        <input type="search" placeholder="صرافی / بروکر / پراپفرم / ..." name="" id="" />
                    </label>
                </div>
            </div>
        </section>
    )
}
export default Section1Component