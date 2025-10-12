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
        <section className="container-fluid" >

            <div className="row justify-content-center">
                <div className="col-12 col-lg-10">
                    <div className="section-title" style={{ marginBottom: "0.2rem" }}>
                        <div style={{ marginLeft: "20px" }}>
                            <ScoreSharpIcon />
                        </div>

                        {translate("priceChart")}
                        <div className="logo-badge"><i className='fas fa-chevron-left'> </i></div>
                    </div>
                    <div className="section-subtitle" >
                        {translate("priceChartDesc")}
                    </div>
                    <div className="main-content-wrapper">

                        <div className="chart" >
                            <canvas ref={chartRef}></canvas>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default Section6Component