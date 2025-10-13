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
        <section className="container-fluid" >

            <div className="row justify-content-center">
                <div className="col-12 col-lg-12">
                    <div className="header9-section">
                        <div className="header9-content9">
                            <div className="header9-title">
                                <span>
                                    {translate("teagleJameh")}
                                </span>
                                <i className="fas fa-globe">
                                </i>
                            </div>
                            <div className="header9-tabs">


                                <button >
                                    {translate("brokers")}
                                </button>
                                <button>
                                    {translate("plateforms")}
                                </button>
                                <button>
                                    {translate("exchange")}
                                </button>
                                <button className="btnall yellow">
                                    <div className="chevron-left-all"><i className='fas fa-chevron-left'> </i></div>
                                    {translate("all")}
                                </button>
                                <button className="all selected">
                                    <div className="chevron-left"><i className='fas fa-chevron-left'> </i></div>
                                    {translate("commentRegister")}
                                    <div className="chevron-left"><i className='fas fa-comment'> </i></div>
                                </button>
                            </div>
                        </div>
                        <div className="map-section">
                            <div className="map-wrapper">
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
                            </div>
                        </div>
                    </div>
                    <div className="testimonials-section">
                        <div className="testimonials-wrapper">
                            {[1, 1, 1, 1, 1, 6, 7, 8, 9].map((item,index) => (
                                <div key={index} className="testimonial-card">
                                    <div className="testimonial-header9">
                                        <div className="d-flex gap-2">
                                            <img alt="Profile photo of a user" className="testimonial-avatar" src="https://placehold.co/36x36" />
                                            <span className="testimonial-name">
                                                علیرضا محمدی
                                            </span>

                                        </div>
                                        <div>
                                            <span className="testimonial-role">
                                                بروکر
                                            </span>
                                        </div>



                                    </div>
                                    <div className="testimonial-subtitle">
                                        مدیر سایت نیکگل
                                    </div>
                                    <div className="testimonial-text">
                                        وبسایت نیکگل یکی از بهترین انتخاب‌هایم برای میزبانی وب و سایت بوده. پشتیبانی عالی و سرعت بالا از مزایای انتخاب نیکگل می‌باشد.
                                    </div>
                                </div>
                            ))}


                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
export default Section9Component