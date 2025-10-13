"use client"
import React, { useState } from 'react'
import Link, { LinkProps } from 'next/link';

import { useI18n, useCurrentLocale } from '@/dictionaries/client';
import "./style.css"
import section12_1Img from "@/components/img/section12_1.svg"
import Image from 'next/image';
interface IProps {
}
const Section12Component = (props: IProps) => {

    const translate = useI18n();
    return (
        <section className="section12">
            <div className="warning-section">
                <div className="warning-content">
                    <div className='row'>
                        <div className='col-6'>
                            <span className="warning-icon">
                                <i className="fas fa-exclamation-triangle" style={{ fontSize: "5.2rem", color: "#FFD23B", border: "2px solid #fff", borderRadius: "10px", background: "#fff", padding: "3px 6px 3px 6px" }}>
                                </i>
                            </span>
                        </div>
                        <div className='col-6'>
                            <div className="warning-title">
                                {translate("scamAlert")}
                            </div>
                            <div className="warning-subtitle">
                                {translate("fRUADCUTION")}

                            </div>
                        </div>

                    </div>

                    <div className="warning-list">
                        {[1, 1, 1].map((item, index) => (
                            <div key={index} className="warning-item">
                                <i className="fas fa-exclamation-triangle">
                                </i>
                                <span className='warning-list-text'>
                                    <b>
                                        لورم ایپسوم:
                                    </b>
                                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                                </span>

                                <button className="more-btn">
                                    {translate("more")} <i className='fas fa-chevron-left' />
                                </button>
                            </div>
                        ))}


                    </div>
                    <button className="view-more-btn">
                        {translate("moreView")} <i className='fas fa-chevron-left' />
                    </button>
                    <br />
                </div>
                <div className="warning-illustration">
                    <Image src={section12_1Img} alt={translate("scamAlert")} />
                </div>
            </div>
            <div className="testimonial-section">
                <div className="testimonial-box">

                    <div className="testimonial-header">
                        <div className='row col-12'>
                            <div className='col-4 testimonial-avatar-col'>
                                <span className="testimonial-quote">
                                    ”
                                </span>
                                <span className="testimonial-avatar">
                                    <img alt="عکس پروفایل مرد ایرانی با پس‌زمینه ساده، چهره جدی، نور طبیعی" src="https://placehold.co/44x44" style={{ width: "64px", height: "64px", borderRadius: "50%", objectFit: "cover" }} />

                                </span>

                            </div>
                            <div className='col-8'>
                                <span className="testimonial-name">
                                    رضا بیاتی
                                </span>
                                <br />
                                <span className="testimonial-role">
                                    مدیر شرکت تحلیل بازار
                                </span>
                            </div>

                        </div>

                    </div>
                    <div className="testimonial-text10">
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