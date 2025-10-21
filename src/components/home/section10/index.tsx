"use client"
import React, { useState } from 'react'

import { useI18n, useCurrentLocale } from '@/dictionaries/client';

interface IProps {
}
const Section10Component = (props: IProps) => {
    const translate = useI18n();
    return (
        <section className="section " id="teagle-mag">
        <header className="header">
          <div className="title-wrapper">
            <div className="icon">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2176_1668)">
                  <path
                    d="M12 2.56836L0 0.0117188V24.0117L12 21.4551L24 24.0117V0.0117188L12 2.56836ZM13.9275 3.66934L22.0425 1.94028C20.1062 6.12248 16.8456 9.57337 12.75 11.7753V5.12501C12.7471 4.78614 12.8626 4.45661 13.0769 4.1916C13.2913 3.92658 13.5916 3.74219 13.9275 3.66934ZM11.25 5.11024V12.5511C8.69912 13.76 5.95702 14.5297 3.1425 14.827C2.93388 14.8466 2.72343 14.8229 2.52466 14.7575C2.32589 14.6921 2.14323 14.5863 1.98848 14.4471C1.83373 14.3078 1.71029 14.1382 1.62616 13.9491C1.54203 13.76 1.49905 13.5556 1.5 13.3491V1.84424L10.065 3.66934C10.3998 3.74018 10.6999 3.92177 10.9155 4.18389C11.131 4.446 11.2491 4.77288 11.25 5.11024ZM12 19.9403L1.5 22.157V16.3935C10.1925 16.1201 18.5625 11.2211 22.5 4.35655V22.157L12 19.9403Z"
                    fill="#262626" />
                </g>
                <defs>
                  <clipPath id="clip0_2176_1668">
                    <rect width="24" height="24" fill="white" transform="translate(0 0.0117188)" />
                  </clipPath>
                </defs>
              </svg>

            </div>
            <h2 className="title">تیگل مگ</h2>
            <span className="icon-arrow"></span>
          </div>
          <p className="description">
            آخرین مقالات تیگل</p>
        </header>
        <main>
          <div className="top">
            <a href="">
              <img src="assets/m1.png" alt="" />
            </a>
            <div className="col">
              <a href="">
                <img src="assets/m2.png" alt="" />
              </a>
              <img src="assets/mag.png" alt="" />
            </div>
            <a href="">
              <img src="assets/m3.png" alt="" />

            </a>
          </div>
          <a href="">
            <img src="assets/m4.png" alt="" />

          </a>
        </main>

      </section>
    )
}
export default Section10Component