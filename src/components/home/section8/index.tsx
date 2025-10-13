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
        <section className="container-fluid" >

            <div className="row justify-content-center">
                <div className="col-12 col-lg-10">
                    <div className="section-title" style={{ marginBottom: "0.2rem" }}>
                        <div style={{ marginLeft: "20px" }}>
                            <SchoolIcon />
                        </div>

                        {translate("trainingCourse")}
                        <div className="logo-badge"><i className='fas fa-chevron-left'> </i></div>
                    </div>
                    <div className="section-subtitle" >
                        {translate("trainingCourseDesc")}
                    </div>
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
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className="col-12 col-lg-12">
                    <div className="social-section">
                        <div className="social-bg">
                            <img alt="تصویر پس‌زمینه با خطوط و نمودارهای مالی و ساختمان‌های شهری به سبک مینیمال و رنگ خاکستری تیره"  src="https://placehold.co/1200x300/222/222?text=&amp;font=roboto" />
                        </div>
                        <div className="social-content">
                            <div className="social-title">
                                به شبکه‌های اجتماعی ما بپیوندید
                            </div>
                            <div className="social-desc">
                                با ثبت نام در شبکه‌های اجتماعی توکل میتونی توی بازارهای جهانی فعالیت کنی
                            </div>
                            <div className="social-icons-row">
                                <button className="social-icon-btn telegram">
                                    <span className="icon">
                                        <i className="fab fa-telegram-plane">
                                        </i>
                                    </span>
                                    تلگرام
                                </button>
                                <button className="social-icon-btn instagram">
                                    <span className="icon">
                                        <i className="fab fa-instagram">
                                        </i>
                                    </span>
                                    اینستاگرام
                                </button>
                                <button className="social-icon-btn linkedin">
                                    <span className="icon">
                                        <i className="fab fa-linkedin-in">
                                        </i>
                                    </span>
                                    لینکدین
                                </button>
                                <button className="social-icon-btn youtube">
                                    <span className="icon">
                                        <i className="fab fa-youtube">
                                        </i>
                                    </span>
                                    یوتیوب
                                </button>
                                <button className="social-icon-btn aparat">
                                    <span className="icon">
                                        <i className="fas fa-play">
                                        </i>
                                    </span>
                                    آپارات
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Section8Component