"use client"
import { useI18n } from '@/dictionaries/client';
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
                                <button type="submit" style={{ height: "60px" }} className="submit-btn">{translate("confirm")}</button>
                                <input type="email" className="email-input" placeholder={translate("mail")} required />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-footer">

                
                <div className="footer-center">

                        <div className="footer-links">
                            <div className="link-column1">
                                <a href="#" className="link-item">{translate("brokers")}</a>
                                <a href="#" className="link-item">{translate("exchange")}</a>
                                <a href="#" className="link-item">{translate("propforms")}</a>
                                <a href="#" className="link-item">{translate("operators")}</a>
                            </div>
                            <div className="link-column1">
                                <a href="#" className="link-item">{translate("analysisAndNews")}</a>
                                <a href="#" className="link-item">{translate("education")}</a>
                                <a href="#" className="link-item">{translate("teagleMaster")}</a>
                                <a href="#" className="link-item">{translate("teagleMag")}</a>
                                <a href="#" className="link-item">{translate("teagleCast")}</a>
                            </div>
                        </div>
                        <div className="logo-container">
                            <div className="logo-eye">
                                <Image alt={translate("titleApp")} width={200} height={120} src={logoFooter} />
                            </div>
                        </div>
                        <div className="footer-links">
                            <div className="link-column">

                                <div className="d-flex justify-content-between align-items-center">
                                    <a href="#" className="link-item">{translate("questions")}</a>
                                    <div className="social-icon">
                                        <i className="fab fa-telegram"></i>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <a href="#" className="link-item">{translate("aboutUs")}</a>
                                    <div className="social-icon">
                                        <i className="fab fa-instagram"></i>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <a href="#" className="link-item">{translate("contactUs")}</a>
                                    <div className="social-icon">
                                        <i className="fab fa-linkedin"></i>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <a href="#" className="link-item">{translate("workUs")}</a>
                                    <div className="social-icon">
                                        <i className="fab fa-youtube"></i>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <a href="#" className="link-item">{translate("privacy")}</a>
                                    <div className="social-icon">
                                        <i className="fas fa-cog"></i>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                <hr className="border-white disclaimer-section"  ></hr>
                <div className="disclaimer-section">
                    <h2 className="disclaimer-title"> {translate("disclaimer")}</h2>
                    <p className="disclaimer-text">
                        {translate("disclaimerDesc")}
                    </p>
                </div>

                <div className="bottom-footer">
                    <div className="footer-copyright">{translate("copyRight")}</div>
                    <div className="footer-copyright">{translate("designBy")}</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer