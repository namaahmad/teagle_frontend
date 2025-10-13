"use client"
import React, { useState } from 'react'
import { Feed as FeedIcon } from "@mui/icons-material"
import { useI18n, useCurrentLocale } from '@/dictionaries/client';
import "./style.css"

interface IProps {
}
const Section11Component = (props: IProps) => {
    const translate = useI18n();
    return (
        <section className="container-fluid" >

            <div className="row justify-content-center">
                <div className="col-12 col-lg-10">
                    <div className="section-title" style={{ marginBottom: "0.2rem" }}>
                        <div style={{ marginLeft: "20px" }}>
                            <FeedIcon />
                        </div>

                        {translate("articleTeagle")}
                        <div className="logo-badge"><i className='fas fa-chevron-left'> </i></div>
                    </div>
                    <div className="section-subtitle" >
                        {translate("teagleMagDesc")}
                    </div>
                    <div className="main-content-wrapper">
                        <div className="nav-arrow left">
                            <i className="fas fa-chevron-left">
                            </i>
                        </div>
                        <div className="nav-arrow right">
                            <i className="fas fa-chevron-right">
                            </i>
                        </div>
                        <div className="articles-grid">
                            {[1, 1, 1, 1, 1, 1].map((item, index) => (
                                <div key={index} className="article-card">
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

                                            <div className="article-date">
                                                <i className="far fa-calendar-alt">
                                                </i>
                                                ۱۴۰۴/۰۴/۱۸
                                            </div>
                                            <button className="article-btn">
                                                <i className="fas fa-chevron-left">
                                                </i>
                                                مشاهده بیشتر
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Section11Component