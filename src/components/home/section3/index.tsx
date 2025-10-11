"use client"
import React, { useState } from 'react'
import Link, { LinkProps } from 'next/link';

import { useI18n, useCurrentLocale } from '@/dictionaries/client';
import "./style.css"

interface IProps {
}
const Section3Component = (props: IProps) => {

    const local = useCurrentLocale()
    return (
        <section>
            <div className="section3">
                <div className="container">
                    <div className="section3-title">
                        <span className="icon">
                            <i className="fas fa-chevron-left">
                            </i>
                        </span>
                        صرافی ها
                        <span className="circle-arrow">
                            <i className="far fa-circle">
                            </i>
                        </span>
                    </div>
                    <div className="section3-subtitle">
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
            <div className="section3">
                <div className="container">
                    <div className="section3-title">
                        <span className="icon">
                            <i className="fas fa-chevron-left">
                            </i>
                        </span>
                       پراپفرم ها
                        <span className="circle-arrow">
                            <i className="far fa-circle">
                            </i>
                        </span>
                    </div>
                    <div className="section3-subtitle">
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
export default Section3Component