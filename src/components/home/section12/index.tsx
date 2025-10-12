"use client"
import React, { useState } from 'react'
import Link, { LinkProps } from 'next/link';

import { useI18n, useCurrentLocale } from '@/dictionaries/client';
import "./style.css"

interface IProps {
}
const Section12Component = (props: IProps) => {

    const local = useCurrentLocale()
    return (
        <section className="section12">
            <div className="warning-section">
                <div className="warning-content">
                    <div className="warning-title">
                        هشدار کلاه برداری
                    </div>
                    <div className="warning-subtitle">
                        FRUAD CUTION
                        <span className="warning-icon">
                            <i className="fas fa-exclamation-triangle" style={{ fontSize: "2.2rem", color: "#FFD23B", border: "3px solid #fff", borderRadius: "10px", background: "#fff", padding: "6px 12px 6px 12px" }}>
                            </i>
                        </span>
                    </div>
                    <div className="warning-list">
                        <div className="warning-item">
                            <button className="more-btn">
                                بیشتر
                            </button>
                            <span>
                                <b>
                                    لورم ایپسوم:
                                </b>
                                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                            </span>
                            <i className="fas fa-exclamation-triangle">
                            </i>
                        </div>
                        <div className="warning-item">
                            <button className="more-btn">
                                بیشتر
                            </button>
                            <span>
                                <b>
                                    لورم ایپسوم:
                                </b>
                                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                            </span>
                            <i className="fas fa-exclamation-triangle">
                            </i>
                        </div>
                        <div className="warning-item">
                            <button className="more-btn">
                                بیشتر
                            </button>
                            <span>
                                <b>
                                    لورم ایپسوم:
                                </b>
                                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                            </span>
                            <i className="fas fa-exclamation-triangle">
                            </i>
                        </div>
                    </div>
                    <button className="view-more-btn">
                        مشاهده بیشتر
                    </button>
                </div>
                <div className="warning-illustration">
                    <svg fill="none" height="100%" style={{ display: "block" }} viewBox="0 0 480 320" width="100%" xmlns="http://www.w3.org/2000/svg">
                        <path d="M480 0C480 176 480 320 480 320H0V0H480Z" fill="#FFD23B">
                        </path>
                        <path d="M420 60C420 60 410 30 350 30C290 30 270 60 270 60" stroke="#222" strokeLinecap="round" strokeWidth="8">
                        </path>
                        <path d="M420 60C420 60 430 120 350 120C270 120 270 60 270 60" stroke="#222" strokeLinecap="round" strokeWidth="8">
                        </path>
                        <path d="M350 120C350 120 340 200 420 200" stroke="#222" strokeLinecap="round" strokeWidth="8">
                        </path>
                        <path d="M420 200C420 200 440 220 420 260C400 300 350 300 350 300" stroke="#222" strokeLinecap="round" strokeWidth="8">
                        </path>
                        <ellipse cx="390" cy="90" fill="#fff" rx="30" ry="22" stroke="#222" strokeWidth="8">
                        </ellipse>
                        <ellipse cx="390" cy="90" fill="#222" rx="12" ry="10">
                        </ellipse>
                        <path d="M370 80C370 80 375 70 390 70C405 70 410 80 410 80" stroke="#222" strokeLinecap="round" strokeWidth="4">
                        </path>
                    </svg>
                </div>
            </div>
            <div className="testimonial-section">
                <div className="testimonial-box">
                    <span className="testimonial-quote">
                        ”
                    </span>
                    <div className="testimonial-header">
                        <span className="testimonial-name">
                            رضا بیاتی
                        </span>
                        <span className="testimonial-avatar">
                            <img alt="عکس پروفایل مرد ایرانی با پس‌زمینه ساده، چهره جدی، نور طبیعی" src="https://placehold.co/44x44" style={{ width: "44px", height: "44px", borderRadius: "50%", objectFit: "cover" }} />
                        </span>
                        <span className="testimonial-role">
                            مدیر شرکت تحلیل بازار
                        </span>
                    </div>
                    <div className="testimonial-text">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                    </div>
                    <ul className="testimonial-list">
                        <li>
                            کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.
                        </li>
                        <li>
                            تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                        </li>
                    </ul>
                </div>
            </div>
        </section >
    )
}
export default Section12Component