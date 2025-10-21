"use client"
import { useI18n } from '@/dictionaries/client';
import React from 'react'
import logox from "@/components/img/logox.png"
import logox2 from "@/components/img/logox-2.png"
import telegramIcon from "@/components/img/social_icons/telegram.svg"
import instagramIcon from "@/components/img/social_icons/instagram.svg"
import linkedinIcon from "@/components/img/social_icons/linkedin.svg"
import youtubeIcon from "@/components/img/social_icons/youtube.svg"
import aparatIcon from "@/components/img/social_icons/aparat.svg"
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
                        <li><a href="">{translate("brokers")}</a></li>
                        <li><a href="">{translate("exchange")}</a></li>
                        <li><a href="">{translate("propforms")}</a></li>
                        <li><a href="">{translate("tools")}</a></li>
                    </ul>
                    <ul>
                        <li><a href="">{translate("analysisAndNews")} </a></li>
                        <li><a href="">{translate("education")}</a></li>
                        <li><a href="">{translate("teagleMaster")}</a></li>
                        <li><a href="">{translate("teagleMag")}</a></li>
                        <li><a href=""> {translate("teagleCast")}</a></li>
                    </ul>
                </div>
                <div className="logo">
                    <Image src={logox} alt="" />
                    <Image src={logox2} alt="" />
                </div>
                <div className="end">
                    <ul>
                        <li><a href="">{translate("questions")}</a></li>
                        <li><a href="">{translate("aboutUs")}</a></li>
                        <li><a href=""> {translate("contactUs")} </a></li>
                        <li><a href=""> {translate("workUs")} </a></li>
                        <li><a href=""> {translate("privacy")} </a></li>
                    </ul>
                    <ul className="social-media-list">
                        <li><a href="">
                            <Image src={telegramIcon} alt="" />
                        </a></li>
                        <li><a href="">
                            <Image src={instagramIcon} alt="" />
                        </a></li>
                        <li><a href="">
                            <Image src={linkedinIcon} alt="" />
                        </a></li>
                        <li><a href="">
                            <Image src={youtubeIcon} alt="" />
                        </a></li>
                        <li><a href="">
                            <Image src={aparatIcon} alt="" />
                        </a></li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="bottom">
                <div className="row disclaimer">
                    <p><strong>
                        {translate("disclaimer1")}<br /> {translate("disclaimer2")}
                    </strong></p>
                    <p>{translate("disclaimerDesc")}</p>
                </div>
                <div className="copy-write row">
                    <p>{translate("copyRight")}</p>
                    <p>{translate("designBy")}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer