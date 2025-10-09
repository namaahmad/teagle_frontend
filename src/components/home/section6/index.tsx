"use client"
import React, { useState } from 'react'
import Link, { LinkProps } from 'next/link';

import { useI18n, useCurrentLocale } from '@/dictionaries/client';
import "./style.css"

interface IProps {
}
const Section6Component = (props: IProps) => {

    const local = useCurrentLocale()
    return (
        <section>
            <section className="podcast-section">
             چارت قیمت ها
            </section>
           
        </section>
    )
}
export default Section6Component