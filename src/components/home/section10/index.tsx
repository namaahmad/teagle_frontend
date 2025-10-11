"use client"
import React, { useState } from 'react'
import Link, { LinkProps } from 'next/link';

import { useI18n, useCurrentLocale } from '@/dictionaries/client';
import "./style.css"

interface IProps {
}
const Section10Component = (props: IProps) => {

    const local = useCurrentLocale()
    return (
        <section className="section10">
            <div className="container10">
                <div className="header10">
                    <div className="header10-top">
                        <i className="fas fa-chevron-left">
                        </i>
                        <span className="header10-title">
                            تیگل مگ
                            <i className="far fa-newspaper">
                            </i>
                        </span>
                    </div>
                    <div className="header10-desc">
                        آخرین مقالات تیگل
                    </div>
                </div>
                <div className="main-grid">
                    <div className="card">
                        <img alt="Closeup of gold bars with a blurred background, warm yellow lighting" className="card-bg" src="https://placehold.co/400x220?text=Gold+bars+closeup&amp;font=roboto" />
                        <div className="card-overlay">
                        </div>
                        <div className="card-content">
                            <div className="card-title">
                                به روایت تیگل
                            </div>
                            <button className="card-btn">
                                <i className="fas fa-chevron-left">
                                </i>
                                مشاهده بیشتر
                            </button>
                        </div>
                    </div>
                    <div className="center-logo">
                        <div className="logo-content">
                            <div style={{ position: "relative", display: "inline-block;" }}>
                                <span className="logo-teagle" style={{ position: "relative" }}>
                                    TEAGLE
                                    <span className="logo-eye" style={{ position: "absolute", left: "50%", top: "54%", transform: "translate(-50%,-50%);" }}>
                                        <svg fill="none" height="32" style={{ verticalAlign: "middle" }}  viewBox="0 0 60 32" width="60" xmlns="http://www.w3.org/2000/svg">
                                            <ellipse cx="30" cy="16" fill="#222" rx="28" ry="12">
                                            </ellipse>
                                            <ellipse cx="30" cy="16" fill="#FFD600" rx="8" ry="8">
                                            </ellipse>
                                            <ellipse cx="30" cy="16" fill="#222" rx="4" ry="4">
                                            </ellipse>
                                        </svg>
                                    </span>
                                </span>
                            </div>
                            <div className="logo-magazine">
                                MAGAZINE
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img alt="Macro shot of gold coins with a yellow color overlay, abstract background" className="card-bg" src="https://placehold.co/400x220?text=Gold+coins+macro+shot&amp;font=roboto" />
                        <div className="card-overlay">
                        </div>
                        <div className="card-content">
                            <div className="card-title">
                                تیگل آی
                            </div>
                            <button className="card-btn">
                                <i className="fas fa-chevron-left">
                                </i>
                                مشاهده بیشتر
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img alt="Woman sitting in an office with plants and a motivational poster in the background, grayscale" className="card-bg" src="https://placehold.co/400x220?text=Woman+in+office+with+plants&amp;font=roboto" />
                        <div className="card-overlay card-overlay-dark">
                        </div>
                        <div className="card-content">
                            <div className="card-title">
                                تحلیل هفتگی
                            </div>
                            <button className="card-btn">
                                <i className="fas fa-chevron-left">
                                </i>
                                مشاهده بیشتر
                            </button>
                        </div>
                    </div>
                </div>
                <div className="motion-class">
                    <div className="motion-card">
                        <img alt="Person in yellow shirt writing with a pen on a financial chart, yellow overlay" className="motion-bg" src="https://placehold.co/1200x160?text=Person+writing+with+pen+on+chart&amp;font=roboto" />
                        <div className="motion-overlay">
                        </div>
                        <div className="motion-content">
                            <div className="motion-title">
                                کلاس موشن
                                <span className="motion-play">
                                    <i className="fas fa-play">
                                    </i>
                                </span>
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