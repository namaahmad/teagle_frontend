"use client"
import { useI18n } from '@/dictionaries/client';
import React from 'react'
import logoFooter from "@/components/img/logoFooter.png"
import Image from 'next/image';
import "./footer.css"
type Props = {}

const Footer = (props: Props) => {
    const translate = useI18n();
    return (
        <footer>
            <div className="top">
                <div className="start">
                    <ul>
                        <li><a href="">بروکرها</a></li>
                        <li><a href="">صرافی‌ها</a></li>
                        <li><a href="">پراپ‌فرم‌ها</a></li>
                        <li><a href="">ابزارها</a></li>
                    </ul>
                    <ul>
                        <li><a href="">تحلیل و اخبار</a></li>
                        <li><a href="">آموزش</a></li>
                        <li><a href="">استاد تیگل</a></li>
                        <li><a href="">تیگل‌مگ</a></li>
                        <li><a href="">تیگل کست</a></li>
                    </ul>
                </div>
                <div className="logo">
                    <img src="assets/logox.png" alt="" />
                    <img src="assets/logox-2.png" alt="" />
                </div>
                <div className="end">
                    <ul>
                        <li><a href="">سوالات متداول</a></li>
                        <li><a href="">درباره ما</a></li>
                        <li><a href="">تماس با ما</a></li>
                        <li><a href="">همکاری با ما</a></li>
                        <li><a href=""> حریم خصوصی</a></li>
                    </ul>
                    <ul className="social-media-list">
                        <li><a href="">
                            <img src="assets/social_icons/telegram.svg" alt="" />
                        </a></li>
                        <li><a href="">
                            <img src="assets/social_icons/instagram.svg" alt="" />
                        </a></li>
                        <li><a href="">
                            <img src="assets/social_icons/linkedin.svg" alt="" />
                        </a></li>
                        <li><a href="">
                            <img src="assets/social_icons/youtube.svg" alt="" />
                        </a></li>
                        <li><a href="">
                            <img src="assets/social_icons/aparat.svg" alt="" />
                        </a></li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="bottom">
                <div className="row disclaimer">
                    <p><strong>
                        سلب<br /> مسئولیت
                    </strong></p>
                    <p>معاملات مربوط به بازارهای فارکس، آتی ها، آپشن ها، سهام ، ارزهای رمز نگاری شده یا هر بازار تجاری دیگر
                        توام با سطح بالایی از خطر و ریسک می باشد که ممکن است برای همه سرمایه گذاران مناسب نباشد. همیشه این
                        احتمال وجود دارد که شما بخشی یا تمام سرمایه گذاری اولیه خود را از دست بدهید. بنابراین شما نباید پولی
                        را سرمایه گذاری کنید که توان از دست دادن آن را ندارید.وب سایت ما.</p>
                </div>
                <div className="copy-write row">
                    <p>کلیه حقوق این سایت متعلق به تیگل می باشد</p>
                    <p>طراحی و توسعه توسط : شرکت تیگل</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer