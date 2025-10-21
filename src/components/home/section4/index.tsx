"use client"
import React, { useState } from 'react'
import { VolumeUp as VolumeUpIcon } from "@mui/icons-material"

import { useI18n, useCurrentLocale } from '@/dictionaries/client';

interface IProps {
}
const Section4Component = (props: IProps) => {

    const local = useCurrentLocale()
    const translate = useI18n();
    return (
        <section className="section no-inline-padding" id="teagle-news">
            <section className="start-section">
                <header className="header">
                    <div className="title-wrapper">
                        <div className="icon">
                            <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M30.6692 5.02407L30.4397 4.51001L3.12148 1.00049V7.38682L0.297841 8.04916L0.188103 8.70163C-0.0627012 10.3399 -0.0627012 12.0063 0.188103 13.6446L0.297841 14.307L3.12148 14.9594V21.3556L19.0155 19.2894L15.5534 27.0005H22.8569L27.1472 18.2218L30.5395 17.7769L30.759 17.253C31.5781 15.3166 32 13.2381 32 11.1385C32 9.03895 31.5781 6.96041 30.759 5.02407H30.6692ZM20.2428 5.19214C16.8311 8.83336 12.4312 11.4216 7.57141 12.6461C7.27811 12.7148 6.97292 12.7168 6.67874 12.6519C6.38457 12.587 6.10904 12.4569 5.87286 12.2714C5.63668 12.0859 5.44598 11.8498 5.31507 11.5808C5.18415 11.3119 5.11642 11.017 5.11697 10.7184V4.37159C5.11594 4.23115 5.14513 4.09212 5.20259 3.96373C5.26004 3.83534 5.34444 3.72055 5.45017 3.62701C5.5559 3.53347 5.68053 3.46333 5.81577 3.42125C5.951 3.37918 6.09372 3.36614 6.23444 3.383L20.2428 5.19214ZM2.05388 12.7054C2.05388 12.2012 1.97408 11.7168 1.97408 11.183C1.97408 10.6492 1.97406 10.1944 2.05388 9.66057L3.1015 9.42332V12.9526L2.05388 12.7054ZM20.2827 25.0233H18.5566L21.2705 18.983L22.8668 18.7754C23.042 18.7589 23.2184 18.7886 23.3783 18.8615C23.5381 18.9343 23.6756 19.0478 23.7769 19.1903C23.8782 19.3329 23.9397 19.4994 23.9551 19.6731C23.9705 19.8467 23.9393 20.0213 23.8646 20.1792L22.0387 23.9062C21.8801 24.2319 21.6344 24.5083 21.3283 24.7052C21.0222 24.9022 20.6675 25.0122 20.3026 25.0233H20.2827ZM29.0529 15.9678L6.22445 18.9336C6.08296 18.952 5.93915 18.94 5.8027 18.8987C5.66625 18.8573 5.54034 18.7874 5.43348 18.6937C5.32662 18.6 5.2413 18.4847 5.18325 18.3555C5.12521 18.2264 5.09578 18.0864 5.09699 17.945V15.0583C11.9276 14.1221 18.1605 10.6959 22.5775 5.44915L29.0229 6.27957C30.191 9.39167 30.191 12.8161 29.0229 15.9282L29.0529 15.9678Z"
                                    fill="#262626" />
                            </svg>


                        </div>
                        <h2 className="title">تیگل نیوز</h2>
                        <span className="icon-arrow"></span>
                    </div>
                    <p className="description">
                        تمامی خدمات ذکر شده با قیمت‌های استثنایی عرضه می‌شود.
                    </p>
                </header>
                <main>
                    <ul className="filter-list-single-select">
                        <li>
                            <label className="filter-item" htmlFor="fiter-news1">
                                <input name="filter-item-news" id="fiter-news1" defaultChecked type="radio" className="" />
                                <span>همه</span>
                            </label>
                        </li>
                        <li>
                            <label className="filter-item" htmlFor="fiter-news2">
                                <input name="filter-item-news" id="fiter-news2" type="radio" className="" />
                                <span>برگزیده‌ها</span>
                            </label>
                        </li>
                        <li>
                            <label className="filter-item" htmlFor="fiter-news3">
                                <input name="filter-item-news" id="fiter-news3" type="radio" className="" />
                                <span>بروکرها</span>
                            </label>
                        </li>
                        <li>
                            <label className="filter-item" htmlFor="fiter-news4">
                                <input name="filter-item-news" id="fiter-news4" type="radio" className="" />
                                <span>صرافی‌ها</span>
                            </label>
                        </li>
                        <li>
                            <label className="filter-item" htmlFor="fiter-news5">
                                <input name="filter-item-news" id="fiter-news5" type="radio" className="" />
                                <span>فارکس</span>
                            </label>
                        </li>
                        <li>
                            <label className="filter-item" htmlFor="fiter-news6">
                                <input name="filter-item-news" id="fiter-news6" type="radio" className="" />
                                <span>ارزدیجیتال</span>
                            </label>
                        </li>
                        <li>
                            <label className="filter-item" htmlFor="fiter-news7">
                                <input name="filter-item-news" id="fiter-news7" type="radio" className="" />
                                <span>طلا</span>
                            </label>
                        </li>

                    </ul>
                    <ul className="news-list">
                        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
                            <li key={index} className="news-card">
                                <a href="">
                                    <article>
                                        <div className="image-wrapper">
                                            <img src="assets/news_image.png" alt="" />
                                        </div>
                                        <div className="content">
                                            <p className="title">هوش مصنوعی و ارزدیجیتال</p>
                                            <p>
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                                                طراحان گرافیک است...
                                            </p>
                                            <div className="details-wrapper">
                                                <div className="date">۱۴۰۴/۰۴/۱۸</div>
                                                <span className="chip agree">۲۵</span>
                                                <span className="chip disagree">۲۵</span>
                                            </div>
                                        </div>
                                    </article>
                                </a>
                            </li>
                        ))}


                    </ul>
                </main>
            </section>
            <section className="end-section">
                <div>
                    <ul className="filter-list-single-select">
                        <li>
                            <label className="filter-item" htmlFor="fiter-news-end1">
                                <input name="filter-item-news-end" id="fiter-news-end1" defaultChecked type="radio" className="" />
                                <span>پر‌خواننده‌ترین</span>
                            </label>
                        </li>
                        <li>
                            <label className="filter-item" htmlFor="fiter-news-end2">
                                <input name="filter-item-news-end" id="fiter-news-end2" type="radio" className="" />
                                <span>جدید‌ترین</span>
                            </label>
                        </li>
                        <li>
                            <label className="filter-item" htmlFor="fiter-news-end3">
                                <input name="filter-item-news-end" id="fiter-news-end3" type="radio" className="" />
                                <span> پر‌بحث‌‌‌ترین</span>
                            </label>
                        </li>
                    </ul>
                </div>
                <div>
                    <ol className="news-list">
                        <li>
                            <article>
                                <a href="">
                                    بورس لندن نخستین پلتفرم بلاکچینی ویژه صندوق‌های خصوصی را راه‌اندازی کرد
                                </a>
                            </article>
                        </li>
                        <li>
                            <article>
                                <a href="">
                                    بورس لندن نخستین پلتفرم بلاکچینی ویژه صندوق‌های خصوصی را راه‌اندازی کرد
                                </a>
                            </article>
                        </li>
                        <li>
                            <article>
                                <a href="">
                                    بورس لندن نخستین پلتفرم بلاکچینی ویژه صندوق‌های خصوصی را راه‌اندازی کرد
                                </a>
                            </article>
                        </li>
                        <li>
                            <article>
                                <a href="">
                                    بورس لندن نخستین پلتفرم بلاکچینی ویژه صندوق‌های خصوصی را راه‌اندازی کرد
                                </a>
                            </article>
                        </li>
                        <li>
                            <article>
                                <a href="">
                                    بورس لندن نخستین پلتفرم بلاکچینی ویژه صندوق‌های خصوصی را راه‌اندازی کرد
                                </a>
                            </article>
                        </li>
                        <li>
                            <article>
                                <a href="">
                                    بورس لندن نخستین پلتفرم بلاکچینی ویژه صندوق‌های خصوصی را راه‌اندازی کرد
                                </a>
                            </article>
                        </li>
                        <li>
                            <article>
                                <a href="">
                                    بورس لندن نخستین پلتفرم بلاکچینی ویژه صندوق‌های خصوصی را راه‌اندازی کرد
                                </a>
                            </article>
                        </li>
                        <li>
                            <article>
                                <a href="">
                                    بورس لندن نخستین پلتفرم بلاکچینی ویژه صندوق‌های خصوصی را راه‌اندازی کرد
                                </a>
                            </article>
                        </li>
                        <li>
                            <article>
                                <a href="">
                                    بورس لندن نخستین پلتفرم بلاکچینی ویژه صندوق‌های خصوصی را راه‌اندازی کرد
                                </a>
                            </article>
                        </li>
                        <li>
                            <article>
                                <a href="">
                                    بورس لندن نخستین پلتفرم بلاکچینی ویژه صندوق‌های خصوصی را راه‌اندازی کرد
                                </a>
                            </article>
                        </li>
                    </ol>
                </div>
            </section>
        </section>

    )
}
export default Section4Component