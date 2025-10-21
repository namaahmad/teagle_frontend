"use client"
import React, { useState } from 'react'
import { useI18n, useCurrentLocale } from '@/dictionaries/client';

interface IProps {
}
const Section11Component = (props: IProps) => {
    const translate = useI18n();
    return (
        <>
            <section className="no-inline-padding ad-section">
                <a className="ad-item" style={{ borderRadius: "0" }}>
                    <span>ADS</span>
                </a>
            </section>

            <section id="teagle-articles" className="section">
                <header className="header">
                    <div className="title-wrapper">
                        <div className="icon">
                            <svg width="22" height="29" viewBox="0 0 22 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_2176_4587)">
                                    <path
                                        d="M6.79102 0.0117188L6.51677 0.318934C4.9738 2.05015 2.93732 3.31023 0.658054 3.94402L0 4.11955V28.0117L1.00538 27.9152C8.68698 27.1924 15.9304 24.1431 21.6892 19.208L22 18.9534V0.0117188H6.79102ZM6.29742 2.98728V4.8393L4.06726 4.44434C4.86375 4.02916 5.61673 3.54121 6.31572 2.98728H6.29742ZM19.1849 18.9534C14.1945 22.8236 8.18194 25.2851 1.81885 26.0631V7.93774C1.81443 7.67803 1.87005 7.42063 1.98175 7.18407C2.09344 6.94751 2.2584 6.7377 2.46475 6.56977C2.67109 6.40184 2.91365 6.27999 3.17496 6.21298C3.43627 6.14596 3.70984 6.13546 3.97588 6.18225L8.11628 6.90201V1.7672H20.1629V16.9258C20.1646 17.312 20.0779 17.6938 19.9089 18.0442C19.7399 18.3946 19.4927 18.705 19.1849 18.9534Z"
                                        fill="#333333" />
                                    <path d="M17.3294 8.97363H4.66138V10.7291H17.3294V8.97363Z" fill="#333333" />
                                    <path d="M17.3294 12.8271H4.66138V14.5826H17.3294V12.8271Z" fill="#333333" />
                                    <path d="M17.3294 16.6797H4.66138V18.4352H17.3294V16.6797Z" fill="#333333" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2176_4587">
                                        <rect width="22" height="28" fill="white" transform="translate(0 0.0117188)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <h2 className="title">مقالات تیگل</h2>
                        <span className="icon-arrow"></span>
                    </div>
                    <p className="description">
                        آخرین مقالات تیگل
                    </p>
                </header>
                <main style={{ paddingTop: "50px" }}>
                    <div className="list-wrapper" style={{ marginBottom: "var(--gap-mid)" }}>
                        <button className="direction-list-button">
                            <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.93762 -8.52822e-07L14 12L1.93762 24L0.0136469 22.086L6.03119 16.086C8.2963 13.8326 8.2963 10.1674 6.03119 7.91403L-2.34685e-08 1.91403L1.92398 -8.51629e-07L1.93762 -8.52822e-07Z"
                                    fill="#262626" />
                            </svg>

                        </button>
                        <ul className="list-horizontal-scroll">
                            <li className="card-article">
                                <a href="">
                                    <article className="content-wrapper">
                                        <img className="image-wrapper" src="assets/article-card-image.png" alt="" />

                                        <div>
                                            <h3 className="title">
                                                هوش مصنوعی و ارزدیجیتال
                                            </h3>
                                            <p>
                                                هوش مصنوعی و ارزدیجیتال
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                                                طراحان گرافیک است
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                                                طراحان گرافیک است
                                            </p>
                                        </div>
                                        <div className="details-wrapper">
                                            <span className="date-with-icon">
                                                ۱۴۰۴/۰۴/۱۸
                                            </span>
                                            <div className="button">
                                                مشاهده بیشتر
                                            </div>
                                        </div>
                                    </article>
                                </a>
                            </li>
                            <li className="card-article">
                                <a href="">
                                    <article className="content-wrapper">
                                        <img className="image-wrapper" src="assets/article-card-image.png" alt="" />

                                        <div>
                                            <h3 className="title">
                                                هوش مصنوعی و ارزدیجیتال
                                            </h3>
                                            <p>
                                                هوش مصنوعی و ارزدیجیتال
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                                                طراحان گرافیک است
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                                                طراحان گرافیک است
                                            </p>
                                        </div>
                                        <div className="details-wrapper">
                                            <span className="date-with-icon">
                                                ۱۴۰۴/۰۴/۱۸
                                            </span>
                                            <div className="button">
                                                مشاهده بیشتر
                                            </div>
                                        </div>
                                    </article>
                                </a>
                            </li>
                            <li className="card-article">
                                <a href="">
                                    <article className="content-wrapper">
                                        <img className="image-wrapper" src="assets/article-card-image.png" alt="" />

                                        <div>
                                            <h3 className="title">
                                                هوش مصنوعی و ارزدیجیتال
                                            </h3>
                                            <p>
                                                هوش مصنوعی و ارزدیجیتال
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                                                طراحان گرافیک است
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                                                طراحان گرافیک است
                                            </p>
                                        </div>
                                        <div className="details-wrapper">
                                            <span className="date-with-icon">
                                                ۱۴۰۴/۰۴/۱۸
                                            </span>
                                            <div className="button">
                                                مشاهده بیشتر
                                            </div>
                                        </div>
                                    </article>
                                </a>
                            </li>
                            <li className="card-article">
                                <a href="">
                                    <article className="content-wrapper">
                                        <img className="image-wrapper" src="assets/article-card-image.png" alt="" />

                                        <div>
                                            <h3 className="title">
                                                هوش مصنوعی و ارزدیجیتال
                                            </h3>
                                            <p>
                                                هوش مصنوعی و ارزدیجیتال
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                                                طراحان گرافیک است
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                                                طراحان گرافیک است
                                            </p>
                                        </div>
                                        <div className="details-wrapper">
                                            <span className="date-with-icon">
                                                ۱۴۰۴/۰۴/۱۸
                                            </span>
                                            <div className="button">
                                                مشاهده بیشتر
                                            </div>
                                        </div>
                                    </article>
                                </a>
                            </li>
                            <li className="card-article">
                                <a href="">
                                    <article className="content-wrapper">
                                        <img className="image-wrapper" src="assets/article-card-image.png" alt="" />

                                        <div>
                                            <h3 className="title">
                                                هوش مصنوعی و ارزدیجیتال
                                            </h3>
                                            <p>
                                                هوش مصنوعی و ارزدیجیتال
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                                                طراحان گرافیک است
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                                                طراحان گرافیک است
                                            </p>
                                        </div>
                                        <div className="details-wrapper">
                                            <span className="date-with-icon">
                                                ۱۴۰۴/۰۴/۱۸
                                            </span>
                                            <div className="button">
                                                مشاهده بیشتر
                                            </div>
                                        </div>
                                    </article>
                                </a>
                            </li>

                        </ul>
                        <button className="direction-list-button forward">
                            <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.93762 -8.52822e-07L14 12L1.93762 24L0.0136469 22.086L6.03119 16.086C8.2963 13.8326 8.2963 10.1674 6.03119 7.91403L-2.34685e-08 1.91403L1.92398 -8.51629e-07L1.93762 -8.52822e-07Z"
                                    fill="#262626" />
                            </svg>
                        </button>
                    </div>
                    <div className="list-wrapper">
                        <button className="direction-list-button">
                            <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.93762 -8.52822e-07L14 12L1.93762 24L0.0136469 22.086L6.03119 16.086C8.2963 13.8326 8.2963 10.1674 6.03119 7.91403L-2.34685e-08 1.91403L1.92398 -8.51629e-07L1.93762 -8.52822e-07Z"
                                    fill="#262626" />
                            </svg>

                        </button>
                        <ul className="list-horizontal-scroll">
                            <li className="card-article">
                                <a href="">
                                    <article className="content-wrapper">
                                        <img className="image-wrapper" src="assets/article-card-image.png" alt="" />

                                        <div>
                                            <h3 className="title">
                                                هوش مصنوعی و ارزدیجیتال
                                            </h3>
                                            <p>
                                                هوش مصنوعی و ارزدیجیتال
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                                                طراحان گرافیک است
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                                                طراحان گرافیک است
                                            </p>
                                        </div>
                                        <div className="details-wrapper">
                                            <span className="date-with-icon">
                                                ۱۴۰۴/۰۴/۱۸
                                            </span>
                                            <div className="button">
                                                مشاهده بیشتر
                                            </div>
                                        </div>
                                    </article>
                                </a>
                            </li>
                            <li className="card-article">
                                <a href="">
                                    <article className="content-wrapper">
                                        <img className="image-wrapper" src="assets/article-card-image.png" alt="" />

                                        <div>
                                            <h3 className="title">
                                                هوش مصنوعی و ارزدیجیتال
                                            </h3>
                                            <p>
                                                هوش مصنوعی و ارزدیجیتال
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                                                طراحان گرافیک است
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                                                طراحان گرافیک است
                                            </p>
                                        </div>
                                        <div className="details-wrapper">
                                            <span className="date-with-icon">
                                                ۱۴۰۴/۰۴/۱۸
                                            </span>
                                            <div className="button">
                                                مشاهده بیشتر
                                            </div>
                                        </div>
                                    </article>
                                </a>
                            </li>
                            <li className="card-article">
                                <a href="">
                                    <article className="content-wrapper">
                                        <img className="image-wrapper" src="assets/article-card-image.png" alt="" />

                                        <div>
                                            <h3 className="title">
                                                هوش مصنوعی و ارزدیجیتال
                                            </h3>
                                            <p>
                                                هوش مصنوعی و ارزدیجیتال
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                                                طراحان گرافیک است
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                                                طراحان گرافیک است
                                            </p>
                                        </div>
                                        <div className="details-wrapper">
                                            <span className="date-with-icon">
                                                ۱۴۰۴/۰۴/۱۸
                                            </span>
                                            <div className="button">
                                                مشاهده بیشتر
                                            </div>
                                        </div>
                                    </article>
                                </a>
                            </li>
                            <li className="card-article">
                                <a href="">
                                    <article className="content-wrapper">
                                        <img className="image-wrapper" src="assets/article-card-image.png" alt="" />

                                        <div>
                                            <h3 className="title">
                                                هوش مصنوعی و ارزدیجیتال
                                            </h3>
                                            <p>
                                                هوش مصنوعی و ارزدیجیتال
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                                                طراحان گرافیک است
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                                                طراحان گرافیک است
                                            </p>
                                        </div>
                                        <div className="details-wrapper">
                                            <span className="date-with-icon">
                                                ۱۴۰۴/۰۴/۱۸
                                            </span>
                                            <div className="button">
                                                مشاهده بیشتر
                                            </div>
                                        </div>
                                    </article>
                                </a>
                            </li>
                            <li className="card-article">
                                <a href="">
                                    <article className="content-wrapper">
                                        <img className="image-wrapper" src="assets/article-card-image.png" alt="" />

                                        <div>
                                            <h3 className="title">
                                                هوش مصنوعی و ارزدیجیتال
                                            </h3>
                                            <p>
                                                هوش مصنوعی و ارزدیجیتال
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                                                طراحان گرافیک است
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                                                طراحان گرافیک است
                                            </p>
                                        </div>
                                        <div className="details-wrapper">
                                            <span className="date-with-icon">
                                                ۱۴۰۴/۰۴/۱۸
                                            </span>
                                            <div className="button">
                                                مشاهده بیشتر
                                            </div>
                                        </div>
                                    </article>
                                </a>
                            </li>

                        </ul>
                        <button className="direction-list-button forward">
                            <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.93762 -8.52822e-07L14 12L1.93762 24L0.0136469 22.086L6.03119 16.086C8.2963 13.8326 8.2963 10.1674 6.03119 7.91403L-2.34685e-08 1.91403L1.92398 -8.51629e-07L1.93762 -8.52822e-07Z"
                                    fill="#262626" />
                            </svg>
                        </button>
                    </div>
                </main>
            </section>
        </>
    )
}
export default Section11Component