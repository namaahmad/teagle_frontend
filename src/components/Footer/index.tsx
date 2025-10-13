"use client"
import { useI18n } from '@/dictionaries/client';
import Link from '@/components/LinkComponent';
import React from 'react'
import logoFooter from "@/components/img/logoFooter.png"
import Image from 'next/image';

type Props = {}

const Footer = (props: Props) => {
    const translate = useI18n();
    return (
        <footer>
            <div className="header-section">
                <div className="container mt-4">
                    <div className="row header-content">
                        <div className="col-md-6  p-3 rounded">
                            <h1 className="registration-title">{translate("registerDone")}</h1>
                            <p className="subtitle">{translate("registerDoneDesc")}</p>
                        </div>
                        <div className="col-md-6  p-3 rounded">
                            <form className="email-form">
                                <button type="submit" style={{height:"60px"}} className="submit-btn">{translate("confirm")}</button>
                                <input type="email" className="email-input" placeholder={translate("mail")} required />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-footer">

                <div className="footer-container">
                    <div className="social-icons">
                        <div className="social-icon">
                            <i className="fab fa-telegram"></i>
                        </div>
                        <div className="social-icon">
                            <i className="fab fa-instagram"></i>
                        </div>
                        <div className="social-icon">
                            <i className="fab fa-linkedin"></i>
                        </div>
                        <div className="social-icon">
                            <i className="fab fa-youtube"></i>
                        </div>
                        <div className="social-icon">
                            <i className="fas fa-cog"></i>
                        </div>
                    </div>

                    <div className="footer-center">
                        <div className="footer-links">
                            <div className="link-column">
                                <a href="#" className="link-item">{translate("questions")}</a>
                                <a href="#" className="link-item"></a>
                                <a href="#" className="link-item">تماس با ما</a>
                                <a href="#" className="link-item">همکاری با ما</a>
                                <a href="#" className="link-item">حریم خصوصی</a>
                            </div>
                        </div>

                        <div className="logo-container">
                            <div className="logo-eye">
                               <Image alt={translate("titleApp")}  width={200} height={120} src={logoFooter}/> 
                            </div>
                        </div>

                        <div className="footer-links">
                            <div className="link-column">
                                <a href="#" className="link-item">{translate("brokers")}</a>
                                <a href="#" className="link-item">{translate("exchange")}</a>
                                <a href="#" className="link-item">{translate("propforms")}</a>
                                <a href="#" className="link-item">{translate("operators")}</a>
                            </div>
                            <div className="link-column">
                                <a href="#" className="link-item">تحلیل و اخبار</a>
                                <a href="#" className="link-item">آموزش</a>
                                <a href="#" className="link-item">استاد تیگل</a>
                                <a href="#" className="link-item">تیگل مک</a>
                                <a href="#" className="link-item">تیگل کست</a>
                            </div>
                        </div>
                    </div>

                    <div></div>
                </div>

                <div className="disclaimer-section">
                    <h2 className="disclaimer-title">سلب مسئولیت</h2>
                    <p className="disclaimer-text">
                        معاملات مربوط به بازارهای فارکس، آتی ها، ایشن ها، سهام، ارزهای رمز نگاری شده با هر نائر تجاری دیگر توام با سطح بالایی از خطر و ریسک می باشد که ممکن است برای همه سرمایه گذاران مناسب نباشد. همیشه این احتمال وجود دارد که شما بخشی یا تمام سرمایه گذاری اولیه خود را از دست بدهید، بنابراین شما نباید پولی را سرمایه گذاری کنید که نتوانید از دست دادن آن را تاب بیاورید. وب سایت ما.
                    </p>
                </div>

                <div className="bottom-footer">
                    <div className="footer-copyright">کلیه حقوق این سایت متعلق به تیگل می باشد</div>
                    <div className="footer-copyright">طراحی و توسعه توسط: شرکت تیگل</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer