"use client"
import React, { useState } from 'react'
import Link, { LinkProps } from 'next/link';
import { School as SchoolIcon } from "@mui/icons-material"
import { useI18n, useCurrentLocale } from '@/dictionaries/client';
import Image from 'next/image';
import "./style.css"

interface IProps {
}
const Section8Component = (props: IProps) => {

    const translate = useI18n();
    return (
        <>
            <section className="section " id="totrial">
                <header className="header">
                    <div className="title-wrapper">
                        <div className="icon">
                            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_2176_1792)">
                                    <path
                                        d="M29 7.00434L14.4956 0.0283203L0 7.00434L0.451329 7.80657C1.53611 9.71989 2.82353 11.5146 4.29203 13.1607V23.738L4.45133 23.895C7.09245 26.5143 10.6796 27.9952 14.4268 28.0132C18.174 28.0312 21.7756 26.5848 24.4425 23.9909L24.708 23.7293V13.1607C25.4897 12.2835 26.2167 11.3604 26.885 10.3964V20.7384H28.6549V10.5359C28.655 9.4454 28.7527 8.35699 28.9469 7.28336L29 7.00434ZM22.9734 22.9969C20.681 25.098 17.6662 26.266 14.5354 26.266C11.4045 26.266 8.3898 25.098 6.09734 22.9969V16.9539C6.10039 16.7895 6.15051 16.6294 6.24194 16.4919C6.33338 16.3544 6.4624 16.2451 6.61411 16.1768C6.76583 16.1084 6.93406 16.0837 7.09941 16.1055C7.26477 16.1272 7.42051 16.1946 7.54867 16.2999C9.54751 17.9981 11.7569 19.4397 14.1239 20.5901L14.5044 20.782L14.8938 20.5901C17.27 19.4557 19.4887 18.0255 21.4956 16.3347C21.6243 16.2291 21.7809 16.1616 21.947 16.1401C22.1131 16.1187 22.282 16.1442 22.4341 16.2136C22.5861 16.283 22.715 16.3935 22.8058 16.5323C22.8966 16.6711 22.9455 16.8324 22.9469 16.9975L22.9734 22.9969ZM13.2389 18.0962C8.82795 15.6177 5.14464 12.0544 2.54867 7.75425L13.8053 2.33039C14.0452 2.21016 14.3105 2.14749 14.5796 2.14749C14.8488 2.14749 15.1141 2.21016 15.354 2.33039L26.5133 7.75425C23.9147 12.0524 20.232 15.6151 15.823 18.0962C15.4158 18.32 14.9574 18.4374 14.4911 18.4374C14.0249 18.4374 13.5665 18.32 13.1593 18.0962H13.2389Z"
                                        fill="#262626" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2176_1792">
                                        <rect width="29" height="28" fill="white" transform="translate(0 0.0107422)" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                        <h2 className="title"> دوره‌های آموزشی </h2>
                        <span className="icon-arrow"></span>
                    </div>
                    <p className="description">
                        گام به گام از سطوح پایه تا پیشرفته </p>
                </header>
                <div className="main-content-wrapper">
                    <div className="courses-row">
                        <div className="course-card">
                            <div className="course-title">
                                دوره آموزشی فارکس
                            </div>
                            <div className="course-subtitle">
                                از پایه تا پیشرفته
                            </div>
                            <div className="course-free">
                                % کاملا رایگان
                            </div>
                            <div className="course-list">
                                <div className="course-list-item first">
                                    <span className="item-icon">
                                        ۱
                                    </span>
                                    <span className="item-text">
                                        فارکس چیست؟
                                    </span>

                                </div>
                                <div className="course-list-item two">
                                    <span className="item-icon">
                                        ۲
                                    </span>
                                    <span className="item-text">
                                        فارکس چیست؟
                                    </span>

                                </div>
                                <div className="course-list-item three">
                                    <span className="item-icon">
                                        ۳
                                    </span>
                                    <span className="item-text">
                                        فارکس چیست؟
                                    </span>

                                </div>
                            </div>
                            <button className="course-btn">
                                شروع یادگیری
                            </button>
                        </div>
                        <div className="course-card">
                            <div className="course-title">
                                دوره آموزشی ارزدیجیتال
                            </div>
                            <div className="course-subtitle">
                                از پایه تا پیشرفته
                            </div>
                            <div className="course-free">
                                % کاملا رایگان
                            </div>
                            <div className="course-list">
                                <div className="course-list-item first">
                                    <span className="item-icon">
                                        ۱
                                    </span>
                                    <span className="item-text">
                                        ارزدیجیتال به زبان کاملا ساده | ورود به دنیای کریپتوکارنسی
                                    </span>

                                </div>
                                <div className="course-list-item two">
                                    <span className="item-icon">
                                        ۲
                                    </span>
                                    <span className="item-text">
                                        ارزدیجیتال به زبان کاملا ساده | ورود به دنیای کریپتوکارنسی
                                    </span>

                                </div>
                                <div className="course-list-item three">
                                    <span className="item-icon">
                                        ۳
                                    </span>
                                    <span className="item-text">
                                        ارزدیجیتال به زبان کاملا ساده | ورود به دنیای کریپتوکارنسی
                                    </span>

                                </div>
                            </div>
                            <button className="course-btn">
                                شروع یادگیری
                            </button>
                        </div>

                    </div>
                </div>

            </section>
            <section id="social-media">
                <h3 className="title">به شبکه‌های اجتماعی ما بپیوندید</h3>
                <p>با ثبت نام در تگیل میتونی تو کل بازار های جهانی فعالیت کنی</p>
                <ul className="social-media-list">
                    <li>
                        <a className="button" href="">
                            <img src="assets/social_icons/telegram.svg" alt="" className="icon" />
                            <span>تلگرام</span>
                        </a>
                    </li>
                    <li>
                        <a className="button" href="">
                            <img src="assets/social_icons/instagram.svg" alt="" className="icon" />
                            <span>اینستاگرام</span>
                        </a>
                    </li>
                    <li>
                        <a className="button" href="">
                            <img src="assets/social_icons/linkedin.svg" alt="" className="icon" />
                            <span>لینکدین</span>
                        </a>
                    </li>
                    <li>
                        <a className="button" href="">
                            <img src="assets/social_icons/youtube.svg" alt="" className="icon" />
                            <span>یوتیوب</span>
                        </a>
                    </li>
                    <li>
                        <a className="button" href="">
                            <img src="assets/social_icons/aparat.svg" alt="" className="icon" />
                            <span>آپارات</span>
                        </a>
                    </li>
                </ul>
            </section>
        </>
    )
}
export default Section8Component