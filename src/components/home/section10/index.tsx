"use client"
import React, { useState } from 'react'
import Link, { LinkProps } from 'next/link';
import { BrokenImage as BrokenImageIcon } from "@mui/icons-material"
import { useI18n, useCurrentLocale } from '@/dictionaries/client';
import "./style.css"
import Image from 'next/image';
import section10Img from "@/components/img/section10.svg"

interface IProps {
}
const Section10Component = (props: IProps) => {
    const translate = useI18n();
    return (
        <section className="container-fluid" >

            <div className="row justify-content-center">
                <div className="col-12 col-lg-10">
                    <div className="section-title" style={{ marginBottom: "0.2rem" }}>
                        <div style={{ marginLeft: "20px" }}>
                            <BrokenImageIcon />
                        </div>

                        {translate("teagleMag")}
                        <div className="logo-badge"><i className='fas fa-chevron-left'> </i></div>
                    </div>
                    <div className="section-subtitle" >
                        {translate("teagleMagDesc")}
                    </div>
                    <div className="main-content-wrapper">
                        <div className="container-fluid px-4 px-md-5 py-4" >
                            <div className="row g-4 justify-content-center">
                                <div className="col-12 col-md-4 d-flex">
                                    <div className="card-custom w-100">
                                        <img alt="تصویر یک زن نشسته پشت میز کار با گیاه و تابلو در پس‌زمینه" src="https://placehold.co/600x600/222/fff?text=&amp;font=roboto" />
                                        <div className="overlay">
                                        </div>
                                        <div className="card-content-custom left">
                                            <div className="card-title-custom">
                                                تحلیل هفتگی
                                            </div>
                                            <button className="card-btn-custom">
                                                <i className="fas fa-chevron-left">
                                                </i>
                                                مشاهده بیشتر
                                            </button>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-12 col-md-4 d-flex">
                                  
                                    <div className="row">
                                        <div className="col-12 mb-2">
                                            <div className="card-custom w-100">
                                                <img alt="تصویر سکه‌های طلا که در هوا پخش شده‌اند و یک کیف پول طلایی" src="https://placehold.co/600x600/FFD333/181818?text=&amp;font=roboto" />
                                                <div className="overlay">
                                                </div>
                                                <div className="card-content-custom mt-4 left">
                                                    <div className="card-title-custom">
                                                        تیگل آی
                                                    </div>
                                                    <button className="card-btn-custom">
                                                        <i className="fas fa-chevron-left">
                                                        </i>
                                                        مشاهده بیشتر
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                           <Image alt={translate("teagleMag")} src={section10Img}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 d-flex">
                                    <div className="card-custom w-100">
                                        <img alt="تصویر شمش طلا و سکه‌های طلا روی هم چیده شده در پس‌زمینه تار و طلایی" src="https://placehold.co/600x600/gold/fff?text=&amp;font=roboto" />
                                        <div className="overlay">
                                        </div>
                                        <div className="card-content-custom center">
                                            <div className="card-title-custom">
                                                به روایت تیگل
                                            </div>
                                            <button className="card-btn-custom">
                                                <i className="fas fa-chevron-left">
                                                </i>
                                                مشاهده بیشتر
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>



                            <div className="motion-class mb-4 mt-4">
                                <img alt="تصویر دست فردی که با خودکار روی نمودارهای مالی و داده‌های آماری کار می‌کند، نمودارهای زرد رنگ در پیش‌زمینه" src="https://placehold.co/1800x300/FFD333/181818?text=&amp;font=roboto" />
                                <div className="motion-overlay">
                                </div>
                                <div className="motion-content">
                                    <div className="motion-title">
                                        کلاس موشن
                                    </div>
                                    <div className="motion-play">
                                        <i className="fas fa-play">
                                        </i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ads-bar">
                ADS
            </div>
        </section >
    )
}
export default Section10Component