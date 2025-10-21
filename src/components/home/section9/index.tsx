"use client"
import React, { useState } from 'react'
import Link, { LinkProps } from 'next/link';

import { useI18n, useCurrentLocale } from '@/dictionaries/client';
import "./style.css"

import dynamic from 'next/dynamic';
const WorldMap = dynamic(() => import('@/components/WorldMap'), { ssr: false });
interface IProps {
}
const Section9Component = (props: IProps) => {

    const translate = useI18n();
    return (
        <section className="section " id="teagle-comments">
            <header className="header">
                <div className="title-wrapper">
                    <div className="icon">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M26 13.0025C25.9956 10.6962 25.3777 8.43257 24.2098 6.44387C23.0418 4.45516 21.3658 2.813 19.3537 1.6858C17.3416 0.558604 15.0659 -0.0130273 12.76 0.0295609C10.454 0.0721491 8.20098 0.727427 6.23189 1.92815L6.10999 1.98504L5.92313 2.11501C3.14665 4.03211 1.22428 6.95362 0.562289 10.2621C-0.099701 13.5705 0.550541 17.0067 2.37561 19.8446C4.20068 22.6824 7.05758 24.6995 10.3426 25.4696C13.6275 26.2396 17.0833 25.7024 19.9794 23.9713L25.545 25.5475L23.9688 19.9981C25.3037 17.9098 26.0089 15.4811 26 13.0025ZM23.7413 14.3106C22.6674 15.4789 21.5077 16.5653 20.2719 17.5606C19.5373 15.4325 18.5814 13.3874 17.42 11.4588C19.1668 9.85499 20.6769 8.01116 21.905 5.98252C23.3941 7.86897 24.2474 10.1786 24.3425 12.58C24.3747 13.2131 24.1591 13.8339 23.7413 14.3106ZM15.4213 20.77C13.7979 19.2258 12.3609 17.497 11.1394 15.6188C12.9316 14.7894 14.6175 13.7473 16.1606 12.515C17.3071 14.4329 18.2261 16.478 18.8988 18.6088C17.7872 19.3958 16.6256 20.1096 15.4213 20.7456V20.77ZM1.60876 13.0269C1.61099 11.9063 1.77798 10.792 2.10437 9.72C3.38289 9.61623 4.64519 9.36543 5.86625 8.97252C6.62554 11.0231 7.58058 12.9957 8.71813 14.8631C7.05209 15.4753 5.32076 15.8924 3.55875 16.1063C3.13466 16.1619 2.70574 16.0481 2.36502 15.7895C2.02431 15.5309 1.79929 15.1485 1.73876 14.725C1.65842 14.1545 1.62039 13.5787 1.625 13.0025L1.60876 13.0269ZM6.90625 3.40691L7.01188 3.3419C7.53188 3.10627 8.63688 3.63438 10.0831 4.85313C9.11041 5.63418 8.04302 6.28938 6.90625 6.80315C6.36188 4.61753 6.63813 3.66691 6.90625 3.40691ZM7.38562 8.36314C8.78903 7.74954 10.1014 6.94575 11.2856 5.97439C12.7908 7.54347 14.1329 9.26122 15.2913 11.1013C13.7485 12.351 12.053 13.3994 10.2456 14.2213C9.10044 12.3706 8.14757 10.4077 7.40186 8.36314H7.38562ZM16.5262 9.98814C15.342 8.14612 13.9814 6.42363 12.4637 4.845C13.396 3.92228 14.2143 2.89121 14.9012 1.77378C16.5585 2.0592 18.1319 2.7085 19.5081 3.675C19.6866 3.79435 19.8396 3.94793 19.9584 4.12677C20.0772 4.30562 20.1593 4.50618 20.2001 4.71696C20.2409 4.92774 20.2396 5.14455 20.1961 5.3548C20.1526 5.56504 20.0679 5.76459 19.9469 5.94191C18.973 7.42807 17.8306 8.7967 16.5425 10.0206L16.5262 9.98814ZM12.5938 2.31001C12.2014 2.82012 11.7752 3.30331 11.3181 3.75628C10.6844 3.18814 9.98952 2.69217 9.24625 2.27752C10.2079 1.93831 11.2109 1.73059 12.2281 1.66002C12.7319 1.62752 12.9106 1.91188 12.5938 2.31001ZM4.9725 4.95063C5.02097 5.75331 5.15442 6.54863 5.37061 7.32317C5.36681 7.34739 5.36681 7.37204 5.37061 7.39626C4.79282 7.58402 4.204 7.73598 3.6075 7.85126C3.53015 7.86339 3.45095 7.85334 3.37906 7.8223C3.30718 7.79126 3.24554 7.74053 3.20133 7.67591C3.15711 7.61128 3.13211 7.53546 3.12922 7.45721C3.12633 7.37896 3.14568 7.30146 3.18501 7.23375C3.68286 6.39865 4.28638 5.63127 4.98063 4.95063H4.9725ZM2.68937 17.7963C5.06021 17.6193 7.39239 17.0965 9.61186 16.2444C10.8378 18.1403 12.2593 19.9022 13.8531 21.5013C12.3954 22.1769 10.8878 22.7392 9.34375 23.1831C8.73018 23.3543 8.07399 23.2785 7.51563 22.9719C5.40574 21.7957 3.71995 19.9848 2.69751 17.7963H2.68937ZM19.6869 22.2081L19.3781 22.4194C17.4949 23.6997 15.2691 24.3822 12.9919 24.3775C12.448 24.3754 11.905 24.3346 11.3669 24.2556C16.0259 22.6729 20.2632 20.0499 23.7575 16.5856C23.4326 17.5794 22.9704 18.5229 22.3844 19.3888L22.165 19.7057L23.1563 23.1913L19.6869 22.2081Z"
                                fill="#262626" />
                        </svg>


                    </div>
                    <h2 className="title"> از زبان جامعه تیگل</h2>

                </div>

            </header>
            <main>
                <div className="row actions">
                    <button id="button-open-comment-section">
                        <div className="icon">
                            <svg width="23" height="19" viewBox="0 0 23 19" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_2176_4574)">
                                    <path
                                        d="M20.3981 0.773926L20.1825 0.517578H2.7887L2.57308 0.773926C1.28312 2.29353 0.435001 4.11614 0.115498 6.05536C-0.204005 7.99457 0.0165552 9.98079 0.754625 11.8109L2.01963 11.118C1.6158 10.0525 1.40904 8.92686 1.40871 7.7924C1.41247 5.93661 1.96332 4.12007 2.99712 2.55453C3.12971 2.35607 3.31155 2.19259 3.52614 2.07888C3.74073 1.96517 3.98133 1.90482 4.2262 1.90326H18.745C18.9898 1.90482 19.2304 1.96517 19.445 2.07888C19.6596 2.19259 19.8414 2.35607 19.974 2.55453C21.0128 4.11673 21.5649 5.93336 21.5649 7.78894C21.5649 9.64451 21.0128 11.4611 19.974 13.0233C19.8492 13.2318 19.6702 13.4052 19.4547 13.5267C19.2392 13.6482 18.9946 13.7135 18.745 13.7162H17.3721L17.5303 15.4552C17.5358 15.5177 17.5236 15.5805 17.495 15.6369C17.4663 15.6932 17.4223 15.7411 17.3677 15.7752C17.3131 15.8094 17.2499 15.8286 17.1849 15.8308C17.1198 15.833 17.0554 15.8181 16.9984 15.7878L13.0596 13.7092H10.5153V15.0949H12.6715L19.2265 18.5591L18.9175 15.0949H20.1609L20.3765 14.8386C22.0569 12.8582 22.9749 10.3785 22.9749 7.8201C22.9749 5.26167 22.0569 2.78198 20.3765 0.801624L20.3981 0.773926Z"
                                        fill="white" />
                                    <path
                                        d="M-1.52588e-05 15.0809H2.15623C2.53748 15.0809 2.90314 15.2268 3.17272 15.4867C3.44231 15.7466 3.59373 16.0991 3.59373 16.4666V18.5451H5.03123V16.4666C5.03123 16.0991 5.18271 15.7466 5.45229 15.4867C5.72187 15.2268 6.08749 15.0809 6.46873 15.0809H8.53874V13.6952H6.45435C6.0731 13.6952 5.70748 13.5492 5.4379 13.2893C5.16832 13.0295 5.01685 12.677 5.01685 12.3095V10.2656H3.57935V12.3095C3.57935 12.677 3.42792 13.0295 3.15833 13.2893C2.88875 13.5492 2.52309 13.6952 2.14185 13.6952H-0.0144043L-1.52588e-05 15.0809Z"
                                        fill="white" />
                                    <path d="M12.2404 7.0791H10.8029V8.46478H12.2404V7.0791Z" fill="white" />
                                    <path d="M16.5671 7.0791H15.1296V8.46478H16.5671V7.0791Z" fill="white" />
                                    <path d="M6.47595 8.46484H7.91345V7.07916H6.47595V8.46484Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2176_4574">
                                        <rect width="23" height="18" fill="white" transform="translate(0 0.510742)" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                        <span>ثبت نظر</span>
                    </button>
                    <ul className="filter-list-single-select">
                        <li>
                            <label className="filter-item" htmlFor="filter-comment1">
                                <input name="filter-item-news" id="filter-comment1" defaultChecked type="radio" className="" />
                                <span>همه</span>
                            </label>
                        </li>
                        <li>
                            <label className="filter-item" htmlFor="filter-comment3">
                                <input name="filter-item-news" id="filter-comment3" type="radio" className="" />
                                <span>بروکرها</span>
                            </label>
                        </li>
                        <li>
                            <label className="filter-item" htmlFor="filter-comment4">
                                <input name="filter-item-news" id="filter-comment4" type="radio" className="" />
                                <span>صرافی‌ها</span>
                            </label>
                        </li>
                        <li>
                            <label className="filter-item" htmlFor="filter-comment5">
                                <input name="filter-item-news" id="filter-comment5" type="radio" className="" />
                                <span>پراپفرم‌ها</span>
                            </label>
                        </li>


                    </ul>
                </div>
                <WorldMap />
                <div className="map-popup">
                    <img alt="Profile photo of a user" className="popup-avatar" src="https://placehold.co/38x38" />
                    <img alt="Iran flag" className="popup-flag" src="https://placehold.co/22x16/008753/ffffff?text=IR" />
                    <div className="popup-name">
                        علیرضا محمدی
                    </div>
                    <div className="popup-role">
                        مدیر سایت نیکگل
                    </div>
                    <div className="popup-text">
                        وبسایت نیکگل یکی از بهترین انتخاب‌هایم برای میزبانی وب و سایت بوده. پشتیبانی عالی و سرعت بالا از مزایای انتخاب نیکگل می‌باشد.
                    </div>
                </div>
                <ul id="comment-list">
                    <li className="comment-card">
                        <article>
                            <div className="header">
                                <div className="row" style={{ gap: "8px" }}>
                                    <img className="profile-image" src="assets/profile.png" />
                                    <div className="profile-detaile">
                                        <span className="name">علی رضا محمدی</span>
                                        <span className="position">مدیر شرکت تحلیل بازار</span>
                                    </div>
                                </div>
                                <span className="rol">بروکر</span>
                            </div>
                            <p> نشبتمن تبسی تیست تمسیتب س نمتیس نیتسبنم تیس نمکنیسبت کمسشی مکبتیسم ت </p>
                        </article>
                    </li>
                    <li className="comment-card">
                        <article>
                            <div className="header">
                                <div className="row" style={{ gap: "8px" }}>
                                    <img className="profile-image" src="assets/profile.png" />
                                    <div className="profile-detaile">
                                        <span className="name">علی رضا محمدی</span>
                                        <span className="position">مدیر شرکت تحلیل بازار</span>
                                    </div>
                                </div>
                                <span className="rol">بروکر</span>
                            </div>
                            <p> نشبتمن تبسی تیست تمسیتب س نمتیس نیتسبنم تیس نمکنیسبت کمسشی مکبتیسم ت </p>
                        </article>
                    </li>
                    <li className="comment-card">
                        <article>
                            <div className="header">
                                <div className="row" style={{ gap: "8px" }}>
                                    <img className="profile-image" src="assets/profile.png" />
                                    <div className="profile-detaile">
                                        <span className="name">علی رضا محمدی</span>
                                        <span className="position">مدیر شرکت تحلیل بازار</span>
                                    </div>
                                </div>
                                <span className="rol">بروکر</span>
                            </div>
                            <p> نشبتمن تبسی تیست کمسشی مکبتیسم ت </p>
                        </article>
                    </li>
                    <li className="comment-card">
                        <article>
                            <div className="header">
                                <div className="row" style={{ gap: "8px" }}>
                                    <img className="profile-image" src="assets/profile.png" />
                                    <div className="profile-detaile">
                                        <span className="name">علی رضا محمدی</span>
                                        <span className="position">مدیر شرکت تحلیل بازار</span>
                                    </div>
                                </div>
                                <span className="rol">بروکر</span>
                            </div>
                            <p> نشبتمن تبسی تیست تمسیتب س نمتیس نیتسبنم تیس نمکنیسبت کمسشی مکبتیسم ت </p>
                        </article>
                    </li>
                    <li className="comment-card">
                        <article>
                            <div className="header">
                                <div className="row" style={{ gap: "8px" }}>
                                    <img className="profile-image" src="assets/profile.png" />
                                    <div className="profile-detaile">
                                        <span className="name">علی رضا محمدی</span>
                                        <span className="position">مدیر شرکت تحلیل بازار</span>
                                    </div>
                                </div>
                                <span className="rol">بروکر</span>
                            </div>
                            <p> نشبتمن تبسی تیست تمسیتب س نمتیس نیتسبنم تیس نمکنیسبت کمسشی مکبتیسم ت </p>
                        </article>
                    </li>
                    <li className="comment-card">
                        <article>
                            <div className="header">
                                <div className="row" style={{ gap: "8px" }}>
                                    <img className="profile-image" src="assets/profile.png" />
                                    <div className="profile-detaile">
                                        <span className="name">علی رضا محمدی</span>
                                        <span className="position">مدیر شرکت تحلیل بازار</span>
                                    </div>
                                </div>
                                <span className="rol">بروکر</span>
                            </div>
                            <p> نشبتمن تبسی تیست نیتسبنم تیس نمکنیسبت کمسشی مکبتیسم ت </p>
                        </article>
                    </li>
                    <li className="comment-card">
                        <article>
                            <div className="header">
                                <div className="row" style={{ gap: "8px" }}>
                                    <img className="profile-image" src="assets/profile.png" />
                                    <div className="profile-detaile">
                                        <span className="name">علی رضا محمدی</span>
                                        <span className="position">مدیر شرکت تحلیل بازار</span>
                                    </div>
                                </div>
                                <span className="rol">بروکر</span>
                            </div>
                            <p> نشبتمن تبسی تیستس نمتیس نیتسبنم ت کمسشی مکبتیسم ت </p>
                        </article>
                    </li>
                    <li className="comment-card">
                        <article>
                            <div className="header">
                                <div className="row" style={{ gap: "8px" }}>
                                    <img className="profile-image" src="assets/profile.png" />
                                    <div className="profile-detaile">
                                        <span className="name">علی رضا محمدی</span>
                                        <span className="position">مدیر شرکت تحلیل بازار</span>
                                    </div>
                                </div>
                                <span className="rol">بروکر</span>
                            </div>
                            <p> نشبتمن تبسی تیست تمسیتب س نمتیس نیتسبنم تیس نمکنیسبت کمسشی مکبتیسم ت </p>
                        </article>
                    </li>
                    <li className="comment-card">
                        <article>
                            <div className="header">
                                <div className="row" style={{ gap: "8px" }}>
                                    <img className="profile-image" src="assets/profile.png" />
                                    <div className="profile-detaile">
                                        <span className="name">علی رضا محمدی</span>
                                        <span className="position">مدیر شرکت تحلیل بازار</span>
                                    </div>
                                </div>
                                <span className="rol">بروکر</span>
                            </div>
                            <p> نشبتمن تبسی تیست مکبتیسم ت </p>
                        </article>
                    </li>

                </ul>
            </main>

        </section>
    )
}
export default Section9Component