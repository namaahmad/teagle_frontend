"use client"
import React, { useState } from 'react'
import Link, { LinkProps } from 'next/link';

import { useI18n, useCurrentLocale } from '@/dictionaries/client';
import "./style.css"

interface IProps {
}
const Section9Component = (props: IProps) => {

    const local = useCurrentLocale()
    return (
        <section className="section9">
            <div className="container9">
                <div className="header-section">
                    <div className="header-content9">
                        <div className="header-title">
                            <span>
                                از زبان جامعه نیکگل
                            </span>
                            <i className="fas fa-globe">
                            </i>
                        </div>
                        <div className="header-tabs">
                            <button className="all selected">
                                همه
                            </button>
                            <button>
                                ثبت نظر
                            </button>
                            <button className="yellow">
                                بروکرها
                            </button>
                            <button>
                                پلتفرم ها
                            </button>
                            <button>
                                صرافی ها
                            </button>
                        </div>
                    </div>
                    <div className="map-section">
                        <div className="map-wrapper">
                            <img alt="A stylized world map made of white hexagons on a gray gradient background, with a shadow effect." className="map-img" src="https://placehold.co/900x400/ffffff/cccccc?text=World+Map+with+Hexagons" />
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
                        </div>
                    </div>
                </div>
                <div className="testimonials-section">
                    <div className="testimonials-wrapper">
                        <div className="testimonial-card">
                            <div className="testimonial-header">
                                <span className="testimonial-role">
                                    بروکر
                                </span>
                                <span className="testimonial-name">
                                    علیرضا محمدی
                                </span>
                                <img alt="Profile photo of a user" className="testimonial-avatar" src="https://placehold.co/36x36" />
                            </div>
                            <div className="testimonial-subtitle">
                                مدیر سایت نیکگل
                            </div>
                            <div className="testimonial-text">
                                وبسایت نیکگل یکی از بهترین انتخاب‌هایم برای میزبانی وب و سایت بوده. پشتیبانی عالی و سرعت بالا از مزایای انتخاب نیکگل می‌باشد.
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <div className="testimonial-header">
                                <span className="testimonial-role">
                                    بروکر
                                </span>
                                <span className="testimonial-name">
                                    علیرضا محمدی
                                </span>
                                <img alt="Profile photo of a user" className="testimonial-avatar" src="https://placehold.co/36x36" />
                            </div>
                            <div className="testimonial-subtitle">
                                مدیر سایت نیکگل
                            </div>
                            <div className="testimonial-text">
                                وبسایت نیکگل یکی از بهترین انتخاب‌هایم برای میزبانی وب و سایت بوده. پشتیبانی عالی و سرعت بالا از مزایای انتخاب نیکگل می‌باشد.
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <div className="testimonial-header">
                                <span className="testimonial-role">
                                    بروکر
                                </span>
                                <span className="testimonial-name">
                                    علیرضا محمدی
                                </span>
                                <img alt="Profile photo of a user" className="testimonial-avatar" src="https://placehold.co/36x36" />
                            </div>
                            <div className="testimonial-subtitle">
                                مدیر سایت نیکگل
                            </div>
                            <div className="testimonial-text">
                                وبسایت نیکگل یکی از بهترین انتخاب‌هایم برای میزبانی وب و سایت بوده. پشتیبانی عالی و سرعت بالا از مزایای انتخاب نیکگل می‌باشد.
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <div className="testimonial-header">
                                <span className="testimonial-role">
                                    بروکر
                                </span>
                                <span className="testimonial-name">
                                    علیرضا محمدی
                                </span>
                                <img alt="Profile photo of a user" className="testimonial-avatar" src="https://placehold.co/36x36" />
                            </div>
                            <div className="testimonial-subtitle">
                                مدیر سایت نیکگل
                            </div>
                            <div className="testimonial-text">
                                وبسایت نیکگل یکی از بهترین انتخاب‌هایم برای میزبانی وب و سایت بوده. پشتیبانی عالی و سرعت بالا از مزایای انتخاب نیکگل می‌باشد.
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <div className="testimonial-header">
                                <span className="testimonial-role">
                                    بروکر
                                </span>
                                <span className="testimonial-name">
                                    علیرضا محمدی
                                </span>
                                <img alt="Profile photo of a user" className="testimonial-avatar" src="https://placehold.co/36x36" />
                            </div>
                            <div className="testimonial-subtitle">
                                مدیر سایت نیکگل
                            </div>
                            <div className="testimonial-text">
                                وبسایت نیکگل یکی از بهترین انتخاب‌هایم برای میزبانی وب و سایت بوده. پشتیبانی عالی و سرعت بالا از مزایای انتخاب نیکگل می‌باشد.
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <div className="testimonial-header">
                                <span className="testimonial-role">
                                    بروکر
                                </span>
                                <span className="testimonial-name">
                                    علیرضا محمدی
                                </span>
                                <img alt="Profile photo of a user" className="testimonial-avatar" src="https://placehold.co/36x36" />
                            </div>
                            <div className="testimonial-subtitle">
                                مدیر سایت نیکگل
                            </div>
                            <div className="testimonial-text">
                                وبسایت نیکگل یکی از بهترین انتخاب‌هایم برای میزبانی وب و سایت بوده. پشتیبانی عالی و سرعت بالا از مزایای انتخاب نیکگل می‌باشد.
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <div className="testimonial-header">
                                <span className="testimonial-role">
                                    بروکر
                                </span>
                                <span className="testimonial-name">
                                    علیرضا محمدی
                                </span>
                                <img alt="Profile photo of a user" className="testimonial-avatar" src="https://placehold.co/36x36" />
                            </div>
                            <div className="testimonial-subtitle">
                                مدیر سایت نیکگل
                            </div>
                            <div className="testimonial-text">
                                وبسایت نیکگل یکی از بهترین انتخاب‌هایم برای میزبانی وب و سایت بوده. پشتیبانی عالی و سرعت بالا از مزایای انتخاب نیکگل می‌باشد.
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <div className="testimonial-header">
                                <span className="testimonial-role">
                                    بروکر
                                </span>
                                <span className="testimonial-name">
                                    علیرضا محمدی
                                </span>
                                <img alt="Profile photo of a user" className="testimonial-avatar" src="https://placehold.co/36x36" />
                            </div>
                            <div className="testimonial-subtitle">
                                مدیر سایت نیکگل
                            </div>
                            <div className="testimonial-text">
                                وبسایت نیکگل یکی از بهترین انتخاب‌هایم برای میزبانی وب و سایت بوده. پشتیبانی عالی و سرعت بالا از مزایای انتخاب نیکگل می‌باشد.
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <div className="testimonial-header">
                                <span className="testimonial-role">
                                    بروکر
                                </span>
                                <span className="testimonial-name">
                                    علیرضا محمدی
                                </span>
                                <img alt="Profile photo of a user" className="testimonial-avatar" src="https://placehold.co/36x36" />
                            </div>
                            <div className="testimonial-subtitle">
                                مدیر سایت نیکگل
                            </div>
                            <div className="testimonial-text">
                                وبسایت نیکگل یکی از بهترین انتخاب‌هایم برای میزبانی وب و سایت بوده. پشتیبانی عالی و سرعت بالا از مزایای انتخاب نیکگل می‌باشد.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
export default Section9Component