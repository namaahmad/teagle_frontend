"use client"
import React, { useEffect, useRef, useState } from 'react'
import Link, { LinkProps } from 'next/link';

import { useI18n, useCurrentLocale } from '@/dictionaries/client';
import "./style.css"
import 'chartjs-adapter-date-fns';
import { ScoreSharp as ScoreSharpIcon } from "@mui/icons-material"
import { Chart, registerables } from "chart.js";
import { CandlestickController, CandlestickElement } from 'chartjs-chart-financial';

// ثبت تمام عناصر مورد نیاز
Chart.register(...registerables);
Chart.register(CandlestickController, CandlestickElement);

interface IProps {
}

const Section6Component = (props: IProps) => {
    const translate = useI18n();
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstance = useRef<Chart | null>(null);
    useEffect(() => {
        if (!chartRef.current) return;

        // Generate sample OHLC data
        const generateData = () => {
            const data = [];
            const volumeData = [];
            let basePrice = 95000;
            const days = 150;

            for (let i = 0; i < days; i++) {
                const change = (Math.random() - 0.5) * 5000;
                basePrice += change;
                const open = basePrice;
                const close = basePrice + (Math.random() - 0.5) * 3000;
                const high = Math.max(open, close) + Math.random() * 2000;
                const low = Math.min(open, close) - Math.random() * 2000;

                data.push({
                    x: Date.now() - (days - i) * 24 * 60 * 60 * 1000,
                    o: open,
                    h: high,
                    l: low,
                    c: close
                });

                volumeData.push({
                    x: Date.now() - (days - i) * 24 * 60 * 60 * 1000,
                    y: Math.random() * 2000 + 500
                });
            }

            return { data, volumeData };
        };

        const { data, volumeData } = generateData();

        const ctx = chartRef.current.getContext('2d');
        if (!ctx) return;

        // Destroy existing chart
        if (chartInstance.current) {
            chartInstance.current.destroy();

        }
        if (chartInstance) {

            chartInstance.current = new Chart(ctx, {
                type: 'candlestick' as any,
                data: {
                    datasets: [
                        {
                            label: 'BTCUSDT',
                            data: data.map(d => ({
                                x: d.x,
                                o: d.o,
                                h: d.h,
                                l: d.l,
                                c: d.c
                            })),
                            borderColor: (context: any) => {
                                const point = context.raw;
                                return point && point.c >= point.o ? '#26a69a' : '#ef5350';
                            },
                            backgroundColor: (context: any) => {
                                const point = context.raw;
                                return point && point.c >= point.o ? '#26a69a' : '#ef5350';
                            },
                            borderWidth: 1,
                            yAxisID: 'y',
                        },
                        {
                            label: 'Volume',
                            type: 'bar',
                            data: volumeData,
                            backgroundColor: (context: any) => {
                                const idx = context.dataIndex;
                                if (data[idx]) {
                                    return data[idx].c >= data[idx].o
                                        ? 'rgba(38, 166, 154, 0.3)'
                                        : 'rgba(239, 83, 80, 0.3)';
                                }
                                return 'rgba(38, 166, 154, 0.3)';
                            },
                            yAxisID: 'volume',
                            barThickness: 3,
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    interaction: {
                        intersect: false,
                        mode: 'index',
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            enabled: true,
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            titleColor: '#fff',
                            bodyColor: '#fff',
                            borderColor: '#333',
                            borderWidth: 1,
                        }
                    },
                    scales: {
                        x: {
                            type: 'time',
                            time: {
                                unit: 'day',
                                displayFormats: {
                                    day: 'MMM dd'
                                }
                            },
                            grid: {
                                display: false,
                                drawBorder: false,
                            },
                            ticks: {
                                color: '#9ca3af',
                            }
                        },
                        y: {
                            position: 'right',
                            grid: {
                                color: 'rgba(156, 163, 175, 0.1)',
                                drawBorder: false,
                            },
                            ticks: {
                                color: '#9ca3af',
                                callback: function (value: any) {
                                    return value.toLocaleString();
                                }
                            }
                        },
                        volume: {
                            position: 'right',
                            grid: {
                                display: false,
                            },
                            ticks: {
                                display: false,
                            },
                            max: (context: any) => {
                                const max = Math.max(...volumeData.map(d => d.y));
                                return max * 5;
                            },
                            min: 0
                        }
                    }
                }
            }) as any;
        }


        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);
    return (
        <section className="section " id="chart-price">
            <header className="header">
                <div className="title-wrapper">
                    <div className="icon">
                        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_2176_1256)">
                                <path
                                    d="M30 27.0107C30 27.8064 29.6839 28.5694 29.1213 29.132C28.5587 29.6947 27.7957 30.0107 27 30.0107H5.00002C4.20437 30.0107 3.44132 29.6947 2.87871 29.132C2.3161 28.5694 2.00002 27.8064 2.00002 27.0107C5.46306 26.9194 8.89355 26.3162 12.18 25.2207L13.31 24.8507L11.45 21.3807C11.3842 21.2555 11.3457 21.1177 11.3371 20.9765C11.3285 20.8352 11.3499 20.6938 11.4 20.5615C11.4501 20.4291 11.5277 20.309 11.6277 20.2089C11.7277 20.1088 11.8478 20.031 11.98 19.9807C16.9077 18.0508 21.247 14.8695 24.57 10.7507C24.7837 10.4744 25.0659 10.2589 25.3887 10.1255C25.7116 9.99218 26.0637 9.94571 26.41 9.99072C27.3785 10.1228 28.3634 9.9293 29.21 9.44073C30.0163 9.02742 30.699 8.40831 31.189 7.64615C31.679 6.88399 31.9588 6.00586 32 5.10074C32.0199 3.85845 31.5765 2.65325 30.7563 1.72C29.9361 0.786755 28.7979 0.192329 27.5633 0.0525208C26.3287 -0.0872875 25.0863 0.237549 24.0782 0.963745C23.0701 1.68994 22.3685 2.76547 22.11 3.98074C21.8392 5.22985 22.0652 6.53528 22.74 7.62073C22.9749 7.983 23.0862 8.41156 23.0574 8.84235C23.0285 9.27313 22.8611 9.68301 22.58 10.0107C19.053 14.1811 14.3963 17.2439 9.17001 18.8307L8.00002 19.1907L9.82002 22.5707C9.89349 22.7039 9.93564 22.852 9.94325 23.0038C9.95087 23.1557 9.92376 23.3073 9.86398 23.4471C9.8042 23.5869 9.71334 23.7112 9.59828 23.8106C9.48323 23.91 9.34703 23.9819 9.20003 24.0207C7.55685 24.4281 5.88553 24.7123 4.20003 24.8707C3.92265 24.8958 3.6431 24.8627 3.37927 24.7734C3.11545 24.6842 2.87316 24.5409 2.66794 24.3526C2.46272 24.1643 2.29909 23.9353 2.18752 23.6801C2.07594 23.4249 2.01889 23.1492 2.02002 22.8707V5.01074C2.02002 4.21509 2.33609 3.45201 2.8987 2.8894C3.46131 2.3268 4.22437 2.01074 5.02002 2.01074H21.02V0.0107422H5.02002C3.69394 0.0107422 2.42216 0.537507 1.48448 1.47519C0.5468 2.41287 0.0200195 3.68466 0.0200195 5.01074V27.0107C0.0200195 28.3368 0.5468 29.6086 1.48448 30.5463C2.42216 31.4839 3.69394 32.0107 5.02002 32.0107H27.02C28.3461 32.0107 29.6179 31.4839 30.5556 30.5463C31.4932 29.6086 32.02 28.3368 32.02 27.0107V11.0107H30.02L30 27.0107ZM27 2.01074C27.5934 2.01074 28.1734 2.18668 28.6667 2.51633C29.1601 2.84597 29.5446 3.31449 29.7717 3.86267C29.9987 4.41085 30.0581 5.01407 29.9424 5.59601C29.8266 6.17795 29.5409 6.71249 29.1213 7.13205C28.7018 7.55161 28.1672 7.83734 27.5853 7.95309C27.0034 8.06885 26.4002 8.00944 25.852 7.78238C25.3038 7.55532 24.8353 7.17078 24.5056 6.67743C24.176 6.18408 24 5.60409 24 5.01074C24 4.21509 24.3161 3.45201 24.8787 2.8894C25.4413 2.3268 26.2044 2.01074 27 2.01074Z"
                                    fill="#262626" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2176_1256">
                                    <rect width="32" height="32" fill="white" transform="translate(0 0.0107422)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <h2 className="title"> چارت قیمت‌ها</h2>
                    <span className="icon-arrow"></span>
                </div>
                <p className="description">
                    قیمت‌های لحظه ای رمزارز </p>
            </header>
            <main>
                <div className="chart" >
                    <canvas ref={chartRef}></canvas>
                </div>
            </main>

        </section>

    )
}
export default Section6Component