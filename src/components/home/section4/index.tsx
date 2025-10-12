"use client"
import React, { useState } from 'react'
import { VolumeUp as VolumeUpIcon } from "@mui/icons-material"

import { useI18n, useCurrentLocale } from '@/dictionaries/client';
import "./style.css"

interface IProps {
}
const Section4Component = (props: IProps) => {

    const local = useCurrentLocale()
    const translate = useI18n();
    return (
        <section className="container-fluid">
            <div className='row justify-content-center'>
                <div className="col-12 col-lg-10">
                    <section className="ads-section">

                        <div className="ads-container">
                            <div className="ad-placeholder">ADS</div>
                            <div className="ad-placeholder">ADS</div>
                        </div>

                    </section>
                </div>

            </div>
            <div className='row justify-content-center'>
                <div className="col-12 col-lg-10">
                    <section className="main-section">
                        <div className="row">
                            <div className='col-8'>
                                <div className="section-header">
                                    <div className="title-wrapper4">
                                        <div className="news-icon">
                                            <VolumeUpIcon />
                                        </div>
                                        <h2 className="section-title4">{translate("teagleNews")} </h2>
                                        <div className="logo-badge"><i className='fas fa-chevron-left'> </i></div>

                                    </div>
                                    <p className="section-subtitle">{translate("exchangeDescription")}</p>
                                </div>
                                <div className="filter-tabs">
                                    <button className="tab active">{translate("all")}</button>
                                    <button className="tab">{translate("brokers")}</button>
                                    <button className="tab">{translate("plateforms")}</button>
                                    <button className="tab">{translate("exchange")}</button>
                                    <button className="tab">{translate("forex")}</button>
                                    <button className="tab">{translate("digitalCurrency")}</button>
                                    <button className="tab">{translate("gold")}</button>
                                </div>
                                <div >

                                    <div className="news-grid">

                                        <article className="news-card">
                                            <div className="card-image">
                                                <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop" alt="News" />
                                                <div className="image-overlay"></div>
                                            </div>
                                            <div className="card-content">
                                                <h3 className="card-title">هوش مصنوعی و ارزدیجیتال</h3>
                                                <p className="card-description">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است...</p>
                                                <div className="card-footer">
                                                    <div className="card-meta">
                                                        <span className="meta-badge gold">۵ دقیقه</span>
                                                        <span className="meta-badge dark">۱۸ نفر</span>
                                                        <div className="card-date">
                                                            <svg viewBox="0 0 24 24" fill="none">
                                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                                                <line x1="3" y1="10" x2="21" y2="10"></line>
                                                            </svg>
                                                            ۱۴۰۳/۰۸/۱۸
                                                        </div>
                                                    </div>
                                                    <div className="bookmark-icon">
                                                        <svg viewBox="0 0 24 24" fill="none">
                                                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>


                                        <article className="news-card">
                                            <div className="card-image">
                                                <img src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop" alt="News" />
                                                <div className="image-overlay"></div>
                                            </div>
                                            <div className="card-content">
                                                <h3 className="card-title">هوش مصنوعی و ارزدیجیتال</h3>
                                                <p className="card-description">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است...</p>
                                                <div className="card-footer">
                                                    <div className="card-meta">
                                                        <span className="meta-badge gold">۵ دقیقه</span>
                                                        <span className="meta-badge dark">۱۸ نفر</span>
                                                        <div className="card-date">
                                                            <svg viewBox="0 0 24 24" fill="none">
                                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                                                <line x1="3" y1="10" x2="21" y2="10"></line>
                                                            </svg>
                                                            ۱۴۰۳/۰۸/۱۸
                                                        </div>
                                                    </div>
                                                    <div className="bookmark-icon">
                                                        <svg viewBox="0 0 24 24" fill="none">
                                                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>


                                        <article className="news-card">
                                            <div className="card-image">
                                                <img src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&h=400&fit=crop" alt="News" />
                                                <div className="image-overlay"></div>
                                            </div>
                                            <div className="card-content">
                                                <h3 className="card-title">هوش مصنوعی و ارزدیجیتال</h3>
                                                <p className="card-description">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است...</p>
                                                <div className="card-footer">
                                                    <div className="card-meta">
                                                        <span className="meta-badge gold">۵ دقیقه</span>
                                                        <span className="meta-badge dark">۱۸ نفر</span>
                                                        <div className="card-date">
                                                            <svg viewBox="0 0 24 24" fill="none">
                                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                                                <line x1="3" y1="10" x2="21" y2="10"></line>
                                                            </svg>
                                                            ۱۴۰۳/۰۸/۱۸
                                                        </div>
                                                    </div>
                                                    <div className="bookmark-icon">
                                                        <svg viewBox="0 0 24 24" fill="none">
                                                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>


                                        <article className="news-card">
                                            <div className="card-image">
                                                <img src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=600&h=400&fit=crop" alt="News" />
                                                <div className="image-overlay"></div>
                                            </div>
                                            <div className="card-content">
                                                <h3 className="card-title">هوش مصنوعی و ارزدیجیتال</h3>
                                                <p className="card-description">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است...</p>
                                                <div className="card-footer">
                                                    <div className="card-meta">
                                                        <span className="meta-badge gold">۵ دقیقه</span>
                                                        <span className="meta-badge dark">۱۸ نفر</span>
                                                        <div className="card-date">
                                                            <svg viewBox="0 0 24 24" fill="none">
                                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                                                <line x1="3" y1="10" x2="21" y2="10"></line>
                                                            </svg>
                                                            ۱۴۰۳/۰۸/۱۸
                                                        </div>
                                                    </div>
                                                    <div className="bookmark-icon">
                                                        <svg viewBox="0 0 24 24" fill="none">
                                                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>


                                        <article className="news-card">
                                            <div className="card-image">
                                                <img src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop" alt="News" />
                                                <div className="image-overlay"></div>
                                            </div>
                                            <div className="card-content">
                                                <h3 className="card-title">هوش مصنوعی و ارزدیجیتال</h3>
                                                <p className="card-description">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است...</p>
                                                <div className="card-footer">
                                                    <div className="card-meta">
                                                        <span className="meta-badge gold">۵ دقیقه</span>
                                                        <span className="meta-badge dark">۱۸ نفر</span>
                                                        <div className="card-date">
                                                            <svg viewBox="0 0 24 24" fill="none">
                                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                                                <line x1="3" y1="10" x2="21" y2="10"></line>
                                                            </svg>
                                                            ۱۴۰۳/۰۸/۱۸
                                                        </div>
                                                    </div>
                                                    <div className="bookmark-icon">
                                                        <svg viewBox="0 0 24 24" fill="none">
                                                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                        <article className="news-card">
                                            <div className="card-image">
                                                <img src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop" alt="News" />
                                                <div className="image-overlay"></div>
                                            </div>
                                            <div className="card-content">
                                                <h3 className="card-title">هوش مصنوعی و ارزدیجیتال</h3>
                                                <p className="card-description">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است...</p>
                                                <div className="card-footer">
                                                    <div className="card-meta">
                                                        <span className="meta-badge gold">۵ دقیقه</span>
                                                        <span className="meta-badge dark">۱۸ نفر</span>
                                                        <div className="card-date">
                                                            <svg viewBox="0 0 24 24" fill="none">
                                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                                                <line x1="3" y1="10" x2="21" y2="10"></line>
                                                            </svg>
                                                            ۱۴۰۳/۰۸/۱۸
                                                        </div>
                                                    </div>
                                                    <div className="bookmark-icon">
                                                        <svg viewBox="0 0 24 24" fill="none">
                                                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </div>

                                </div>
                            </div>
                            <div className="col-4">
                                <aside className=" sidebar">
                                    <div className="sidebar-tabs">
                                        <button className="sidebar-tab active">{translate("mostVisited")}</button>
                                        <button className="sidebar-tab">{translate("mostLatest")}</button>
                                        <button className="sidebar-tab">{translate("mostDiscussed")}</button>
                                    </div>
                                    <ol className="sidebar-list">
                                        <li className="sidebar-item">
                                            <div className="item-number">۱.</div>
                                            <p className="item-text">بورس لندن نخستین پلتفرم بلاکچینی ویژه صندوق‌های خصوصی را راه‌اندازی کرد</p>
                                        </li>
                                        <li className="sidebar-item">
                                            <div className="item-number">۲.</div>
                                            <p className="item-text">بورس لندن نخستین پلتفرم بلاکچینی ویژه صندوق‌های خصوصی را راه‌اندازی کرد</p>
                                        </li>
                                        <li className="sidebar-item">
                                            <div className="item-number">۳.</div>
                                            <p className="item-text">بورس لندن نخستین پلتفرم بلاکچینی ویژه صندوق‌های خصوصی را راه‌اندازی کرد</p>
                                        </li>
                                        <li className="sidebar-item">
                                            <div className="item-number">۴.</div>
                                            <p className="item-text">بورس لندن نخستین پلتفرم بلاکچینی ویژه صندوق‌های خصوصی را راه‌اندازی کرد</p>
                                        </li>
                                        <li className="sidebar-item">
                                            <div className="item-number">۵.</div>
                                            <p className="item-text">بورس لندن نخستین پلتفرم بلاکچینی ویژه صندوق‌های خصوصی را راه‌اندازی کرد</p>
                                        </li>
                                        <li className="sidebar-item">
                                            <div className="item-number">۶.</div>
                                            <p className="item-text">بورس لندن نخستین پلتفرم بلاکچینی ویژه صندوق‌های خصوصی را راه‌اندازی کرد</p>
                                        </li>
                                        <li className="sidebar-item">
                                            <div className="item-number">۷.</div>
                                            <p className="item-text">بورس لندن نخستین پلتفرم بلاکچینی ویژه صندوق‌های خصوصی را راه‌اندازی کرد</p>
                                        </li>
                                        <li className="sidebar-item">
                                            <div className="item-number">۸.</div>
                                            <p className="item-text">بورس لندن نخستین پلتفرم بلاکچینی ویژه صندوق‌های خصوصی را راه‌اندازی کرد</p>
                                        </li>
                                        <li className="sidebar-item">
                                            <div className="item-number">۹.</div>
                                            <p className="item-text">بورس لندن نخستین پلتفرم بلاکچینی ویژه صندوق‌های خصوصی را راه‌اندازی کرد</p>
                                        </li>
                                        <li className="sidebar-item">
                                            <div className="item-number">۱۰.</div>
                                            <p className="item-text">بورس لندن نخستین پلتفرم بلاکچینی ویژه صندوق‌های خصوصی را راه‌اندازی کرد</p>
                                        </li>
                                    </ol>
                                </aside>
                            </div>

                        </div>

                    </section>
                </div>
            </div>
        </section>
    )
}
export default Section4Component