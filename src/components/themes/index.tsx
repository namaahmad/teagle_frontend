"use client"
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { DefaultTheme } from './theme';
interface Iprops {
    children: any
}
export default function ThemeComponent(props: Iprops) {
    return (
        <ThemeProvider theme={ DefaultTheme.default } >
        { props.children }
        </ThemeProvider>
    )
}