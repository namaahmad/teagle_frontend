"use client"
import React, { useState } from 'react'
import Link, { LinkProps } from 'next/link';

import { useI18n, useCurrentLocale } from '@/dictionaries/client';


interface IProps {
    className?: string
    href: string
    childrens?: any
    children?: any
    baseUrl?: boolean
}
const LinkComponent = (props: IProps) => {

    const local = useCurrentLocale()
    return (
        <Link className={props.className} href={props.baseUrl ? props.href : `/${local}${props.href}`}>
            {props.children}
            {props.childrens}

        </Link>
    )
}
export default LinkComponent