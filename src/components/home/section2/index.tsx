"use client"
import React, { useState } from 'react'
import Link, { LinkProps } from 'next/link';

import { useI18n, useCurrentLocale } from '@/dictionaries/client';
import "./style.css"

interface IProps {
}
const Section2Component = (props: IProps) => {

    const local = useCurrentLocale()
    return (
        <section>
            <div className="container">
                <div className="section-title">
                    <span className="icon">
                        <i className="fas fa-chevron-left">
                        </i>
                    </span>
                    نبض بازار
                    <span className="circle-arrow">
                        <i className="far fa-circle">
                        </i>
                    </span>
                </div>
                <div className="section-subtitle">
                    تمامی خدمات ذکر شده با قیمت‌های استثنایی عرضه می‌شود.
                </div>
                <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
                    <div className="market-box">
                        <div className="market-box-header">
                            <div className="section-title">
                                <span className="icon">
                                    <i className="fas fa-chevron-left">
                                    </i>
                                </span>
                                بروکرها
                            </div>
                            <div className="date">
                                1403/04/18
                            </div>
                        </div>
                        <div className="market-box-content">
                            <strong>
                                بروکر مونتا مارکس همکاری استراتژیک خود را با FX Blue آغاز کرد.
                            </strong>
                            <br />
                            بروکر مونتا مارکس با اعلام همکاری رسمی خود با FX Blue، دسترسی کاربران به ابزارهای پیشرفته تحلیل و اتوماسیون معاملات را گسترش می‌دهد. این مشارکت جدید، فرصت‌های نوین معاملاتی برای معامله‌گران فراهم می‌کند تا با استفاده از سیستم‌های تحلیل حرفه‌ای، کپی تریدینگ پیشرفته و ابزارهای معاملاتی نوین، استراتژی‌های خود را بهبود بخشند.
                            <br />
                            این مشارکت جدید، فرصت‌های نوینی برای معامله‌گران فراهم می‌کند تا با استفاده از سیستم‌های تحلیل حرفه‌ای، کپی تریدینگ پیشرفته و ابزارهای معاملاتی نوین، استراتژی‌های خود را بهبود بخشند. این مشارکت جدید، فرصت‌های نوینی برای معامله‌گران فراهم می‌کند تا با استفاده از سیستم‌های تحلیل حرفه‌ای، کپی تریدینگ پیشرفته و ابزارهای معاملاتی نوین، استراتژی‌های خود را بهبود بخشند.
                        </div>
                        <div className="market-box-footer">
                            <a className="more-info" href="#">
                                اطلاعات بیشتر
                            </a>
                        </div>
                        <div className="market-box-sidebar">
                            <div className="sidebar-title">
                                <span className="icon">
                                    <i className="fas fa-chevron-left">
                                    </i>
                                </span>
                                بروکرها
                            </div>
                            <button className="sidebar-btn active">
                                <span className="icon">
                                    <i className="fas fa-chevron-left">
                                    </i>
                                </span>
                                پلتفرم‌ها
                            </button>
                            <button className="sidebar-btn">
                                <span className="icon">
                                    <i className="fas fa-chevron-left">
                                    </i>
                                </span>
                                صرافی‌ها
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section2">
                <div className="container">
                    <div className="section2-title">
                        <span className="icon">
                            <i className="fas fa-chevron-left">
                            </i>
                        </span>
                        بروکرها
                        <span className="circle-arrow">
                            <i className="far fa-circle">
                            </i>
                        </span>
                    </div>
                    <div className="section2-subtitle">
                        تمامی خدمات ذکر شده با قیمت‌های استثنایی عرضه می‌شود.
                    </div>
                    <div className="brokers-carousel">
                        <button className="carousel-arrow">
                            <i className="fas fa-chevron-right">
                            </i>
                        </button>
                        <div className="broker-card">
                            <span className="card-chat">
                                <i className="far fa-comment-dots">
                                </i>
                            </span>
                            <img alt="لوگوی QPO finance با زمینه سفید و نوشته خاکستری" className="broker-logo" src="https://placehold.co/80x40?text=QPO+finance&amp;font=roboto" />
                            <div className="broker-title">
                                اوپوفاینس
                            </div>
                            <div className="broker-subtitle">
                                Opofinance
                            </div>
                            <div className="broker-info">
                                <div className="broker-info-row">
                                    <span className="icon">
                                        <i className="fas fa-fire">
                                        </i>
                                    </span>
                                    <span className="label">
                                        کالندر
                                    </span>
                                </div>
                                <div className="broker-info-row">
                                    <span className="label">
                                        سال تاسیس:
                                    </span>
                                    <span>
                                        2021
                                    </span>
                                </div>
                                <div className="broker-info-row">
                                    <span className="label">
                                        حداقل واریز:
                                    </span>
                                    <span>
                                        100 دلار
                                    </span>
                                </div>
                            </div>
                            <div className="broker-actions">
                                <button className="broker-btn">
                                    سایت بروکر
                                </button>
                                <button className="broker-btn active">
                                    بررسی بروکر
                                </button>
                            </div>
                        </div>
                        <div className="broker-card">
                            <span className="card-chat">
                                <i className="far fa-comment-dots">
                                </i>
                            </span>
                            <img alt="لوگوی QPO finance با زمینه سفید و نوشته آبی" className="broker-logo" src="https://placehold.co/80x40?text=QPO+finance+blue&amp;font=roboto" />
                            <div className="broker-title">
                                اوپوفاینس
                            </div>
                            <div className="broker-subtitle">
                                Opofinance
                            </div>
                            <div className="broker-info">
                                <div className="broker-info-row">
                                    <span className="icon">
                                        <i className="fas fa-fire">
                                        </i>
                                    </span>
                                    <span className="label">
                                        کالندر
                                    </span>
                                </div>
                                <div className="broker-info-row">
                                    <span className="label">
                                        سال تاسیس:
                                    </span>
                                    <span>
                                        2021
                                    </span>
                                </div>
                                <div className="broker-info-row">
                                    <span className="label">
                                        حداقل واریز:
                                    </span>
                                    <span>
                                        100 دلار
                                    </span>
                                </div>
                            </div>
                            <div className="broker-actions">
                                <button className="broker-btn active">
                                    سایت بروکر
                                </button>
                                <button className="broker-btn black">
                                    بررسی بروکر
                                </button>
                            </div>
                        </div>
                        <div className="broker-card">
                            <span className="card-chat">
                                <i className="far fa-comment-dots">
                                </i>
                            </span>
                            <img alt="لوگوی QPO finance با زمینه سفید و نوشته خاکستری" className="broker-logo" src="https://placehold.co/80x40?text=QPO+finance&amp;font=roboto" />
                            <div className="broker-title">
                                اوپوفاینس
                            </div>
                            <div className="broker-subtitle">
                                Opofinance
                            </div>
                            <div className="broker-info">
                                <div className="broker-info-row">
                                    <span className="icon">
                                        <i className="fas fa-fire">
                                        </i>
                                    </span>
                                    <span className="label">
                                        کالندر
                                    </span>
                                </div>
                                <div className="broker-info-row">
                                    <span className="label">
                                        سال تاسیس:
                                    </span>
                                    <span>
                                        2021
                                    </span>
                                </div>
                                <div className="broker-info-row">
                                    <span className="label">
                                        حداقل واریز:
                                    </span>
                                    <span>
                                        100 دلار
                                    </span>
                                </div>
                            </div>
                            <div className="broker-actions">
                                <button className="broker-btn">
                                    سایت بروکر
                                </button>
                                <button className="broker-btn black">
                                    بررسی بروکر
                                </button>
                            </div>
                        </div>
                        <div className="broker-card">
                            <span className="card-chat">
                                <i className="far fa-comment-dots">
                                </i>
                            </span>
                            <img alt="لوگوی QPO finance با زمینه سفید و نوشته خاکستری" className="broker-logo" src="https://placehold.co/80x40?text=QPO+finance&amp;font=roboto" />
                            <div className="broker-title">
                                اوپوفاینس
                            </div>
                            <div className="broker-subtitle">
                                Opofinance
                            </div>
                            <div className="broker-info">
                                <div className="broker-info-row">
                                    <span className="icon">
                                        <i className="fas fa-fire">
                                        </i>
                                    </span>
                                    <span className="label">
                                        کالندر
                                    </span>
                                </div>
                                <div className="broker-info-row">
                                    <span className="label">
                                        سال تاسیس:
                                    </span>
                                    <span>
                                        2021
                                    </span>
                                </div>
                                <div className="broker-info-row">
                                    <span className="label">
                                        حداقل واریز:
                                    </span>
                                    <span>
                                        100 دلار
                                    </span>
                                </div>
                            </div>
                            <div className="broker-actions">
                                <button className="broker-btn">
                                    سایت بروکر
                                </button>
                                <button className="broker-btn">
                                    بررسی بروکر
                                </button>
                            </div>
                        </div>
                        <div className="broker-card">
                            <span className="card-chat">
                                <i className="far fa-comment-dots">
                                </i>
                            </span>
                            <img alt="لوگوی QPO finance با زمینه سفید و نوشته خاکستری" className="broker-logo" src="https://placehold.co/80x40?text=QPO+finance&amp;font=roboto" />
                            <div className="broker-title">
                                اوپوفاینس
                            </div>
                            <div className="broker-subtitle">
                                Opofinance
                            </div>
                            <div className="broker-info">
                                <div className="broker-info-row">
                                    <span className="icon">
                                        <i className="fas fa-fire">
                                        </i>
                                    </span>
                                    <span className="label">
                                        کالندر
                                    </span>
                                </div>
                                <div className="broker-info-row">
                                    <span className="label">
                                        سال تاسیس:
                                    </span>
                                    <span>
                                        2021
                                    </span>
                                </div>
                                <div className="broker-info-row">
                                    <span className="label">
                                        حداقل واریز:
                                    </span>
                                    <span>
                                        100 دلار
                                    </span>
                                </div>
                            </div>
                            <div className="broker-actions">
                                <button className="broker-btn">
                                    سایت بروکر
                                </button>
                                <button className="broker-btn">
                                    بررسی بروکر
                                </button>
                            </div>
                        </div>
                        <button className="carousel-arrow">
                            <i className="fas fa-chevron-left">
                            </i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Section2Component