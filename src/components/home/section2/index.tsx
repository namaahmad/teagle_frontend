"use client"
import React, { useState } from 'react'
import Link, { LinkProps } from 'next/link';

import { useI18n, useCurrentLocale } from '@/dictionaries/client';
import "./style.css"

interface IProps {
}
const Section2Component = (props: IProps) => {

    const local = useCurrentLocale()
    const translate = useI18n();
    return (
        <section >
            <div className="container-fluid" style={{ paddingTop: "2.5rem", paddingBottom: 0 }}>
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-10">
                        <div className="section-title" style={{ marginBottom: "0.2rem" }}>
                            <i className="fas fa-arrow-left">
                            </i>
                            <span className="yellow-dot">
                                ■
                            </span>
                            {translate("nabzBazar")}
                        </div>
                        <div className="section-subtitle" style={{ marginBottom: "2.5rem" }}>
                            {translate("exchangeDescription")}
                        </div>
                        <div className="main-content-wrapper">
                            <div className="brokers-sidebar">
                                <div className="active sidebar-title">

                                    {translate("brokers")}
                                    <i className="fas fa-arrow-left">
                                    </i>
                                </div>
                                <button className="sidebar-btn">

                                   {translate("plateforms")}
                                    <i className="fas fa-arrow-left">
                                    </i>
                                </button>
                                <button className="sidebar-btn">

                                    {translate("exchange")}
                                    <i className="fas fa-arrow-left">
                                    </i>
                                </button>
                            </div>
                            <div className="market-card">
                                <div className="date">
                                    1403/04/18
                                </div>
                                <div className="card-title">
                                    بروکر مونتا ماکسس همکاری استراتژیک خود را با FX Blue آغاز کرد.
                                </div>
                                <div className="card-text">
                                    بروکر مونتا ماکسس با اعلام همکاری رسمی خود با Blue FX، دسترسی کاربران به ابزارهای پیشرفته تحلیل و اتوماسیون معاملات را گسترش می‌دهد. این مشارکت جدید، فرصت‌های توانایی برای معامله‌گران فراهم می‌کند تا با استفاده از سیستم‌های تحلیل حرفه‌ای، کپی تریدینگ پیشرفته و ابزارهای معاملاتی نوین، استراتژی‌های خود را بهبود بخشند.
                                </div>
                                <div className="card-text">
                                    این همکاری جدید، فرصت‌های توانایی برای معامله‌گران فراهم می‌کند تا با استفاده از سیستم‌های تحلیل حرفه‌ای، کپی تریدینگ پیشرفته و ابزارهای معاملاتی نوین، استراتژی‌های خود را بهبود بخشند. این مشارکت جدید، فرصت‌های توانایی برای معامله‌گران فراهم می‌کند تا با استفاده از سیستم‌های اخبار، هواهای کپی تریدینگ پیشرفته و ابزارهای معاملاتی نوین، استراتژی‌های خود را بهبود بخشند.
                                </div>
                                <a className="more-info" href="#">
                                    اطلاعات بیشتر
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-divider">
            </div>
            <div className="container-fluid brokers-section">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-10">
                        <div className="section-title" style={{ marginBottom: "0.2rem" }}>
                            <i className="fas fa-globe">
                            </i>
                            <span className="yellow-dot">
                                ■
                            </span>
                            {translate("brokers")}
                        </div>
                        <div className="section-subtitle" style={{ marginBottom: "2.5rem" }}>
                            {translate("exchangeDescription")}
                        </div>
                        <div className="brokers-carousel-wrapper">
                            <button className="carousel-arrow left">
                                <i className="fas fa-chevron-right">
                                </i>
                            </button>
                            <div className="brokers-cards-row">
                                <div className="broker-card">
                                    <i className="far fa-comment-alt">
                                    </i>
                                    <img alt="لوگوی QPO finance با پس‌زمینه سفید و نوشته خاکستری" className="broker-logo" src="https://placehold.co/80x40?text=QPO+Logo" />
                                    <div className="broker-title">
                                        اوپوفایننس
                                    </div>
                                    <div className="broker-subtitle">
                                        Opofinance
                                    </div>
                                    <div className="broker-info" style={{ marginBottom: "0.3rem" }}>
                                        <span>
                                            <i className="fas fa-fire">
                                            </i>
                                            <span className="info-label">
                                                کالشر
                                            </span>
                                        </span>
                                        <span className="info-label">
                                            سال تاسیس
                                        </span>
                                        <span className="info-label">
                                            حداقل واریز
                                        </span>
                                    </div>
                                    <div className="broker-info" style={{ marginBottom: "1.1rem" }}>
                                        <span className="info-value">
                                        </span>
                                        <span className="info-value">
                                            2021
                                        </span>
                                        <span className="info-value">
                                            $100
                                        </span>
                                    </div>
                                    <div className="broker-actions">
                                        <button className="btn broker-site">
                                            سایت بروکر
                                        </button>
                                        <button className="btn">
                                            بررسی بروکر
                                        </button>
                                    </div>
                                </div>
                                <div className="broker-card">
                                    <i className="far fa-comment-alt">
                                    </i>
                                    <img alt="لوگوی QPO finance با پس‌زمینه سفید و نوشته آبی" className="broker-logo" src="https://placehold.co/80x40?text=QPO+Logo+Blue" />
                                    <div className="broker-title">
                                        اوپوفایننس
                                    </div>
                                    <div className="broker-subtitle">
                                        Opofinance
                                    </div>
                                    <div className="broker-info" style={{ marginBottom: "0.3rem" }}>
                                        <span>
                                            <i className="fas fa-fire">
                                            </i>
                                            <span className="info-label">
                                                کالشر
                                            </span>
                                        </span>
                                        <span className="info-label">
                                            سال تاسیس
                                        </span>
                                        <span className="info-label">
                                            حداقل واریز
                                        </span>
                                    </div>
                                    <div className="broker-info" style={{ marginBottom: "1.1rem" }}>
                                        <span className="info-value">
                                        </span>
                                        <span className="info-value">
                                            2021
                                        </span>
                                        <span className="info-value">
                                            $100
                                        </span>
                                    </div>
                                    <div className="broker-actions">
                                        <button className="btn broker-site">
                                            سایت بروکر
                                        </button>
                                        <button className="btn">
                                            بررسی بروکر
                                        </button>
                                    </div>
                                </div>
                                <div className="broker-card">
                                    <i className="far fa-comment-alt">
                                    </i>
                                    <img alt="لوگوی QPO finance با پس‌زمینه سفید و نوشته خاکستری" className="broker-logo" src="https://placehold.co/80x40?text=QPO+Logo" />
                                    <div className="broker-title">
                                        اوپوفایننس
                                    </div>
                                    <div className="broker-subtitle">
                                        Opofinance
                                    </div>
                                    <div className="broker-info" style={{ marginBottom: "0.3rem" }}>
                                        <span>
                                            <i className="fas fa-fire">
                                            </i>
                                            <span className="info-label">
                                                کالشر
                                            </span>
                                        </span>
                                        <span className="info-label">
                                            سال تاسیس
                                        </span>
                                        <span className="info-label">
                                            حداقل واریز
                                        </span>
                                    </div>
                                    <div className="broker-info" style={{ marginBottom: "1.1rem" }}>
                                        <span className="info-value">
                                        </span>
                                        <span className="info-value">
                                            2021
                                        </span>
                                        <span className="info-value">
                                            $100
                                        </span>
                                    </div>
                                    <div className="broker-actions">
                                        <button className="btn broker-site">
                                            سایت بروکر
                                        </button>
                                        <button className="btn">
                                            بررسی بروکر
                                        </button>
                                    </div>
                                </div>
                                <div className="broker-card">
                                    <i className="far fa-comment-alt">
                                    </i>
                                    <img alt="لوگوی QPO finance با پس‌زمینه سفید و نوشته خاکستری" className="broker-logo" src="https://placehold.co/80x40?text=QPO+Logo" />
                                    <div className="broker-title">
                                        اوپوفایننس
                                    </div>
                                    <div className="broker-subtitle">
                                        Opofinance
                                    </div>
                                    <div className="broker-info" style={{ marginBottom: "0.3rem" }}>
                                        <span>
                                            <i className="fas fa-fire">
                                            </i>
                                            <span className="info-label">
                                                کالشر
                                            </span>
                                        </span>
                                        <span className="info-label">
                                            سال تاسیس
                                        </span>
                                        <span className="info-label">
                                            حداقل واریز
                                        </span>
                                    </div>
                                    <div className="broker-info" style={{ marginBottom: "1.1rem" }}>
                                        <span className="info-value">
                                        </span>
                                        <span className="info-value">
                                            2021
                                        </span>
                                        <span className="info-value">
                                            $100
                                        </span>
                                    </div>
                                    <div className="broker-actions">
                                        <button className="btn broker-site">
                                            سایت بروکر
                                        </button>
                                        <button className="btn">
                                            بررسی بروکر
                                        </button>
                                    </div>
                                </div>
                                <div className="broker-card">
                                    <i className="far fa-comment-alt">
                                    </i>
                                    <img alt="لوگوی QPO finance با پس‌زمینه سفید و نوشته خاکستری" className="broker-logo" src="https://placehold.co/80x40?text=QPO+Logo" />
                                    <div className="broker-title">
                                        اوپوفایننس
                                    </div>
                                    <div className="broker-subtitle">
                                        Opofinance
                                    </div>
                                    <div className="broker-info" style={{ marginBottom: "0.3rem" }} >
                                        <span>
                                            <i className="fas fa-fire">
                                            </i>
                                            <span className="info-label">
                                                کالشر
                                            </span>
                                        </span>
                                        <span className="info-label">
                                            سال تاسیس
                                        </span>
                                        <span className="info-label">
                                            حداقل واریز
                                        </span>
                                    </div>
                                    <div className="broker-info" style={{ marginBottom: "1.1rem" }}>
                                        <span className="info-value">
                                        </span>
                                        <span className="info-value">
                                            2021
                                        </span>
                                        <span className="info-value">
                                            $100
                                        </span>
                                    </div>
                                    <div className="broker-actions">
                                        <button className="btn broker-site">
                                            سایت بروکر
                                        </button>
                                        <button className="btn">
                                            بررسی بروکر
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-arrow right">
                                <i className="fas fa-chevron-left">
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
             <div className="section-divider">
            </div>
            <div className="container-fluid brokers-section">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-10">
                        <div className="section-title" style={{ marginBottom: "0.2rem" }}>
                            <i className="fas fa-globe">
                            </i>
                            <span className="yellow-dot">
                                ■
                            </span>
                            {translate("exchange")}
                        </div>
                        <div className="section-subtitle" style={{ marginBottom: "2.5rem" }}>
                            {translate("exchangeDescription")}
                        </div>
                        <div className="brokers-carousel-wrapper">
                            <button className="carousel-arrow left">
                                <i className="fas fa-chevron-right">
                                </i>
                            </button>
                            <div className="brokers-cards-row">
                                <div className="broker-card">
                                    <i className="far fa-comment-alt">
                                    </i>
                                    <img alt="لوگوی QPO finance با پس‌زمینه سفید و نوشته خاکستری" className="broker-logo" src="https://placehold.co/80x40?text=QPO+Logo" />
                                    <div className="broker-title">
                                        اوپوفایننس
                                    </div>
                                    <div className="broker-subtitle">
                                        Opofinance
                                    </div>
                                    <div className="broker-info" style={{ marginBottom: "0.3rem" }}>
                                        <span>
                                            <i className="fas fa-fire">
                                            </i>
                                            <span className="info-label">
                                                کالشر
                                            </span>
                                        </span>
                                        <span className="info-label">
                                            سال تاسیس
                                        </span>
                                        <span className="info-label">
                                            حداقل واریز
                                        </span>
                                    </div>
                                    <div className="broker-info" style={{ marginBottom: "1.1rem" }}>
                                        <span className="info-value">
                                        </span>
                                        <span className="info-value">
                                            2021
                                        </span>
                                        <span className="info-value">
                                            $100
                                        </span>
                                    </div>
                                    <div className="broker-actions">
                                        <button className="btn broker-site">
                                            سایت بروکر
                                        </button>
                                        <button className="btn">
                                            بررسی بروکر
                                        </button>
                                    </div>
                                </div>
                                <div className="broker-card">
                                    <i className="far fa-comment-alt">
                                    </i>
                                    <img alt="لوگوی QPO finance با پس‌زمینه سفید و نوشته آبی" className="broker-logo" src="https://placehold.co/80x40?text=QPO+Logo+Blue" />
                                    <div className="broker-title">
                                        اوپوفایننس
                                    </div>
                                    <div className="broker-subtitle">
                                        Opofinance
                                    </div>
                                    <div className="broker-info" style={{ marginBottom: "0.3rem" }}>
                                        <span>
                                            <i className="fas fa-fire">
                                            </i>
                                            <span className="info-label">
                                                کالشر
                                            </span>
                                        </span>
                                        <span className="info-label">
                                            سال تاسیس
                                        </span>
                                        <span className="info-label">
                                            حداقل واریز
                                        </span>
                                    </div>
                                    <div className="broker-info" style={{ marginBottom: "1.1rem" }}>
                                        <span className="info-value">
                                        </span>
                                        <span className="info-value">
                                            2021
                                        </span>
                                        <span className="info-value">
                                            $100
                                        </span>
                                    </div>
                                    <div className="broker-actions">
                                        <button className="btn broker-site">
                                            سایت بروکر
                                        </button>
                                        <button className="btn">
                                            بررسی بروکر
                                        </button>
                                    </div>
                                </div>
                                <div className="broker-card">
                                    <i className="far fa-comment-alt">
                                    </i>
                                    <img alt="لوگوی QPO finance با پس‌زمینه سفید و نوشته خاکستری" className="broker-logo" src="https://placehold.co/80x40?text=QPO+Logo" />
                                    <div className="broker-title">
                                        اوپوفایننس
                                    </div>
                                    <div className="broker-subtitle">
                                        Opofinance
                                    </div>
                                    <div className="broker-info" style={{ marginBottom: "0.3rem" }}>
                                        <span>
                                            <i className="fas fa-fire">
                                            </i>
                                            <span className="info-label">
                                                کالشر
                                            </span>
                                        </span>
                                        <span className="info-label">
                                            سال تاسیس
                                        </span>
                                        <span className="info-label">
                                            حداقل واریز
                                        </span>
                                    </div>
                                    <div className="broker-info" style={{ marginBottom: "1.1rem" }}>
                                        <span className="info-value">
                                        </span>
                                        <span className="info-value">
                                            2021
                                        </span>
                                        <span className="info-value">
                                            $100
                                        </span>
                                    </div>
                                    <div className="broker-actions">
                                        <button className="btn broker-site">
                                            سایت بروکر
                                        </button>
                                        <button className="btn">
                                            بررسی بروکر
                                        </button>
                                    </div>
                                </div>
                                <div className="broker-card">
                                    <i className="far fa-comment-alt">
                                    </i>
                                    <img alt="لوگوی QPO finance با پس‌زمینه سفید و نوشته خاکستری" className="broker-logo" src="https://placehold.co/80x40?text=QPO+Logo" />
                                    <div className="broker-title">
                                        اوپوفایننس
                                    </div>
                                    <div className="broker-subtitle">
                                        Opofinance
                                    </div>
                                    <div className="broker-info" style={{ marginBottom: "0.3rem" }}>
                                        <span>
                                            <i className="fas fa-fire">
                                            </i>
                                            <span className="info-label">
                                                کالشر
                                            </span>
                                        </span>
                                        <span className="info-label">
                                            سال تاسیس
                                        </span>
                                        <span className="info-label">
                                            حداقل واریز
                                        </span>
                                    </div>
                                    <div className="broker-info" style={{ marginBottom: "1.1rem" }}>
                                        <span className="info-value">
                                        </span>
                                        <span className="info-value">
                                            2021
                                        </span>
                                        <span className="info-value">
                                            $100
                                        </span>
                                    </div>
                                    <div className="broker-actions">
                                        <button className="btn broker-site">
                                            سایت بروکر
                                        </button>
                                        <button className="btn">
                                            بررسی بروکر
                                        </button>
                                    </div>
                                </div>
                                <div className="broker-card">
                                    <i className="far fa-comment-alt">
                                    </i>
                                    <img alt="لوگوی QPO finance با پس‌زمینه سفید و نوشته خاکستری" className="broker-logo" src="https://placehold.co/80x40?text=QPO+Logo" />
                                    <div className="broker-title">
                                        اوپوفایننس
                                    </div>
                                    <div className="broker-subtitle">
                                        Opofinance
                                    </div>
                                    <div className="broker-info" style={{ marginBottom: "0.3rem" }} >
                                        <span>
                                            <i className="fas fa-fire">
                                            </i>
                                            <span className="info-label">
                                                کالشر
                                            </span>
                                        </span>
                                        <span className="info-label">
                                            سال تاسیس
                                        </span>
                                        <span className="info-label">
                                            حداقل واریز
                                        </span>
                                    </div>
                                    <div className="broker-info" style={{ marginBottom: "1.1rem" }}>
                                        <span className="info-value">
                                        </span>
                                        <span className="info-value">
                                            2021
                                        </span>
                                        <span className="info-value">
                                            $100
                                        </span>
                                    </div>
                                    <div className="broker-actions">
                                        <button className="btn broker-site">
                                            سایت بروکر
                                        </button>
                                        <button className="btn">
                                            بررسی بروکر
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-arrow right">
                                <i className="fas fa-chevron-left">
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
             <div className="section-divider">
            </div>
             <div className="container-fluid brokers-section">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-10">
                        <div className="section-title" style={{ marginBottom: "0.2rem" }}>
                            <i className="fas fa-globe">
                            </i>
                            <span className="yellow-dot">
                                ■
                            </span>
                            {translate("propforms")}
                        </div>
                        <div className="section-subtitle" style={{ marginBottom: "2.5rem" }}>
                            {translate("exchangeDescription")}
                        </div>
                        <div className="brokers-carousel-wrapper">
                            <button className="carousel-arrow left">
                                <i className="fas fa-chevron-right">
                                </i>
                            </button>
                            <div className="brokers-cards-row">
                                <div className="broker-card">
                                    <i className="far fa-comment-alt">
                                    </i>
                                    <img alt="لوگوی QPO finance با پس‌زمینه سفید و نوشته خاکستری" className="broker-logo" src="https://placehold.co/80x40?text=QPO+Logo" />
                                    <div className="broker-title">
                                        اوپوفایننس
                                    </div>
                                    <div className="broker-subtitle">
                                        Opofinance
                                    </div>
                                    <div className="broker-info" style={{ marginBottom: "0.3rem" }}>
                                        <span>
                                            <i className="fas fa-fire">
                                            </i>
                                            <span className="info-label">
                                                کالشر
                                            </span>
                                        </span>
                                        <span className="info-label">
                                            سال تاسیس
                                        </span>
                                        <span className="info-label">
                                            حداقل واریز
                                        </span>
                                    </div>
                                    <div className="broker-info" style={{ marginBottom: "1.1rem" }}>
                                        <span className="info-value">
                                        </span>
                                        <span className="info-value">
                                            2021
                                        </span>
                                        <span className="info-value">
                                            $100
                                        </span>
                                    </div>
                                    <div className="broker-actions">
                                        <button className="btn broker-site">
                                            سایت بروکر
                                        </button>
                                        <button className="btn">
                                            بررسی بروکر
                                        </button>
                                    </div>
                                </div>
                                <div className="broker-card">
                                    <i className="far fa-comment-alt">
                                    </i>
                                    <img alt="لوگوی QPO finance با پس‌زمینه سفید و نوشته آبی" className="broker-logo" src="https://placehold.co/80x40?text=QPO+Logo+Blue" />
                                    <div className="broker-title">
                                        اوپوفایننس
                                    </div>
                                    <div className="broker-subtitle">
                                        Opofinance
                                    </div>
                                    <div className="broker-info" style={{ marginBottom: "0.3rem" }}>
                                        <span>
                                            <i className="fas fa-fire">
                                            </i>
                                            <span className="info-label">
                                                کالشر
                                            </span>
                                        </span>
                                        <span className="info-label">
                                            سال تاسیس
                                        </span>
                                        <span className="info-label">
                                            حداقل واریز
                                        </span>
                                    </div>
                                    <div className="broker-info" style={{ marginBottom: "1.1rem" }}>
                                        <span className="info-value">
                                        </span>
                                        <span className="info-value">
                                            2021
                                        </span>
                                        <span className="info-value">
                                            $100
                                        </span>
                                    </div>
                                    <div className="broker-actions">
                                        <button className="btn broker-site">
                                            سایت بروکر
                                        </button>
                                        <button className="btn">
                                            بررسی بروکر
                                        </button>
                                    </div>
                                </div>
                                <div className="broker-card">
                                    <i className="far fa-comment-alt">
                                    </i>
                                    <img alt="لوگوی QPO finance با پس‌زمینه سفید و نوشته خاکستری" className="broker-logo" src="https://placehold.co/80x40?text=QPO+Logo" />
                                    <div className="broker-title">
                                        اوپوفایننس
                                    </div>
                                    <div className="broker-subtitle">
                                        Opofinance
                                    </div>
                                    <div className="broker-info" style={{ marginBottom: "0.3rem" }}>
                                        <span>
                                            <i className="fas fa-fire">
                                            </i>
                                            <span className="info-label">
                                                کالشر
                                            </span>
                                        </span>
                                        <span className="info-label">
                                            سال تاسیس
                                        </span>
                                        <span className="info-label">
                                            حداقل واریز
                                        </span>
                                    </div>
                                    <div className="broker-info" style={{ marginBottom: "1.1rem" }}>
                                        <span className="info-value">
                                        </span>
                                        <span className="info-value">
                                            2021
                                        </span>
                                        <span className="info-value">
                                            $100
                                        </span>
                                    </div>
                                    <div className="broker-actions">
                                        <button className="btn broker-site">
                                            سایت بروکر
                                        </button>
                                        <button className="btn">
                                            بررسی بروکر
                                        </button>
                                    </div>
                                </div>
                                <div className="broker-card">
                                    <i className="far fa-comment-alt">
                                    </i>
                                    <img alt="لوگوی QPO finance با پس‌زمینه سفید و نوشته خاکستری" className="broker-logo" src="https://placehold.co/80x40?text=QPO+Logo" />
                                    <div className="broker-title">
                                        اوپوفایننس
                                    </div>
                                    <div className="broker-subtitle">
                                        Opofinance
                                    </div>
                                    <div className="broker-info" style={{ marginBottom: "0.3rem" }}>
                                        <span>
                                            <i className="fas fa-fire">
                                            </i>
                                            <span className="info-label">
                                                کالشر
                                            </span>
                                        </span>
                                        <span className="info-label">
                                            سال تاسیس
                                        </span>
                                        <span className="info-label">
                                            حداقل واریز
                                        </span>
                                    </div>
                                    <div className="broker-info" style={{ marginBottom: "1.1rem" }}>
                                        <span className="info-value">
                                        </span>
                                        <span className="info-value">
                                            2021
                                        </span>
                                        <span className="info-value">
                                            $100
                                        </span>
                                    </div>
                                    <div className="broker-actions">
                                        <button className="btn broker-site">
                                            سایت بروکر
                                        </button>
                                        <button className="btn">
                                            بررسی بروکر
                                        </button>
                                    </div>
                                </div>
                                <div className="broker-card">
                                    <i className="far fa-comment-alt">
                                    </i>
                                    <img alt="لوگوی QPO finance با پس‌زمینه سفید و نوشته خاکستری" className="broker-logo" src="https://placehold.co/80x40?text=QPO+Logo" />
                                    <div className="broker-title">
                                        اوپوفایننس
                                    </div>
                                    <div className="broker-subtitle">
                                        Opofinance
                                    </div>
                                    <div className="broker-info" style={{ marginBottom: "0.3rem" }} >
                                        <span>
                                            <i className="fas fa-fire">
                                            </i>
                                            <span className="info-label">
                                                کالشر
                                            </span>
                                        </span>
                                        <span className="info-label">
                                            سال تاسیس
                                        </span>
                                        <span className="info-label">
                                            حداقل واریز
                                        </span>
                                    </div>
                                    <div className="broker-info" style={{ marginBottom: "1.1rem" }}>
                                        <span className="info-value">
                                        </span>
                                        <span className="info-value">
                                            2021
                                        </span>
                                        <span className="info-value">
                                            $100
                                        </span>
                                    </div>
                                    <div className="broker-actions">
                                        <button className="btn broker-site">
                                            سایت بروکر
                                        </button>
                                        <button className="btn">
                                            بررسی بروکر
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-arrow right">
                                <i className="fas fa-chevron-left">
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Section2Component