"use client"
import React, { useState } from 'react'
import Link, { LinkProps } from 'next/link';

import { useI18n, useCurrentLocale } from '@/dictionaries/client';
import "./style.css"

interface IProps {
}
const Section11Component = (props: IProps) => {

    const local = useCurrentLocale()
    return (
        <section className="section11">
            <div className="container11">
                <div className="header11">
                    <div className="header11-title">
                        <span className="icon">
                            <i className="fas fa-square">
                            </i>
                        </span>
                        مقالات تگل
                        <span className="fa-file-alt">
                            <i className="far fa-file-alt">
                            </i>
                        </span>
                    </div>
                    <div className="header11-subtitle">
                        آخرین مقالات تگل
                    </div>
                </div>
                <div className="nav-arrow left">
                    <i className="fas fa-chevron-left">
                    </i>
                </div>
                <div className="nav-arrow right">
                    <i className="fas fa-chevron-right">
                    </i>
                </div>
                <div className="articles-grid">
                    <div className="article-card">
                        <img alt="A digital art image of a golden face with coins floating around it on a yellow background" className="article-image" src="https://placehold.co/370x120/FFD600/222?text=AI+face+with+coins" />
                        <div className="article-content">
                            <div>
                                <div className="article-title">
                                    هوش مصنوعی و ارزدیجیتال
                                </div>
                                <div className="article-desc">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است....
                                </div>
                            </div>
                            <div className="article-footer">
                                <button className="article-btn">
                                    <i className="fas fa-chevron-left">
                                    </i>
                                    مشاهده بیشتر
                                </button>
                                <div className="article-date">
                                    <i className="far fa-calendar-alt">
                                    </i>
                                    ۱۴۰۴/۰۴/۱۸
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="article-card">
                        <img alt="A digital art image of a golden face with coins floating around it on a yellow background, blurred" className="blurred-image" src="https://placehold.co/370x120/FFD600/222?text=AI+face+with+coins" />
                        <div className="article-content">
                            <div>
                                <div className="article-title">
                                    هوش مصنوعی و ارزدیجیتال
                                </div>
                                <div className="article-desc">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است....
                                </div>
                            </div>
                            <div className="article-footer">
                                <button className="article-btn">
                                    <i className="fas fa-chevron-left">
                                    </i>
                                    مشاهده بیشتر
                                </button>
                                <div className="article-date">
                                    <i className="far fa-calendar-alt">
                                    </i>
                                    ۱۴۰۴/۰۴/۱۸
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="article-card">
                        <img alt="A digital art image of a golden face with coins floating around it on a yellow background" className="article-image" src="https://placehold.co/370x120/FFD600/222?text=AI+face+with+coins" />
                        <div className="article-content">
                            <div>
                                <div className="article-title">
                                    هوش مصنوعی و ارزدیجیتال
                                </div>
                                <div className="article-desc">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است....
                                </div>
                            </div>
                            <div className="article-footer">
                                <button className="article-btn">
                                    <i className="fas fa-chevron-left">
                                    </i>
                                    مشاهده بیشتر
                                </button>
                                <div className="article-date">
                                    <i className="far fa-calendar-alt">
                                    </i>
                                    ۱۴۰۴/۰۴/۱۸
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="article-card">
                        <img alt="A digital art image of a golden face with coins floating around it on a yellow background" className="article-image" src="https://placehold.co/370x120/FFD600/222?text=AI+face+with+coins" />
                        <div className="article-content">
                            <div>
                                <div className="article-title">
                                    هوش مصنوعی و ارزدیجیتال
                                </div>
                                <div className="article-desc">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است....
                                </div>
                            </div>
                            <div className="article-footer">
                                <button className="article-btn">
                                    <i className="fas fa-chevron-left">
                                    </i>
                                    مشاهده بیشتر
                                </button>
                                <div className="article-date">
                                    <i className="far fa-calendar-alt">
                                    </i>
                                    ۱۴۰۴/۰۴/۱۸
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="article-card">
                        <img alt="A digital art image of a golden face with coins floating around it on a yellow background" className="article-image" src="https://placehold.co/370x120/FFD600/222?text=AI+face+with+coins" />
                        <div className="article-content">
                            <div>
                                <div className="article-title">
                                    هوش مصنوعی و ارزدیجیتال
                                </div>
                                <div className="article-desc">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است....
                                </div>
                            </div>
                            <div className="article-footer">
                                <button className="article-btn">
                                    <i className="fas fa-chevron-left">
                                    </i>
                                    مشاهده بیشتر
                                </button>
                                <div className="article-date">
                                    <i className="far fa-calendar-alt">
                                    </i>
                                    ۱۴۰۴/۰۴/۱۸
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="article-card">
                        <img alt="A digital art image of a golden face with coins floating around it on a yellow background" className="article-image" src="https://placehold.co/370x120/FFD600/222?text=AI+face+with+coins" />
                        <div className="article-content">
                            <div>
                                <div className="article-title">
                                    هوش مصنوعی و ارزدیجیتال
                                </div>
                                <div className="article-desc">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است....
                                </div>
                            </div>
                            <div className="article-footer">
                                <button className="article-btn">
                                    <i className="fas fa-chevron-left">
                                    </i>
                                    مشاهده بیشتر
                                </button>
                                <div className="article-date">
                                    <i className="far fa-calendar-alt">
                                    </i>
                                    ۱۴۰۴/۰۴/۱۸
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
export default Section11Component