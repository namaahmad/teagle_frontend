import { useCurrentLocale, useI18n } from "@/dictionaries/client";
import React, { useEffect, useRef, useState } from "react";
import "./style.css"
import { usePathname, useRouter } from "next/navigation";
export default function LanguageSelector() {
    const translate = useI18n();
    const locale = useCurrentLocale()
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const router = useRouter();

    const changeLanguage = (lang: string) => {
        const newPath = `/${lang}${pathname.replace(/^\/(fa|en)/, "")}`;
        router.push(newPath);
    };
    // بستن dropdown وقتی بیرون کلیک میشه
    useEffect(() => {
        const handleClickOutside = (e: any) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    return (
        <div className="dropdown" ref={dropdownRef}>
            <button
                className="language-btn"
                type="button"
                onClick={() => setOpen(!open)}
            >
                <i className={locale == "fa" ? "flag-icon flag-icon-ir" : "flag-icon flag-icon-us"}></i>
                <span>{locale === "fa" ? translate("persian") : translate("english")}</span>
                <i className="fas fa-chevron-down"></i>
            </button>

            {open && (
                <ul
                    className="dropdown-menu show"
                    style={{ display: "block", position: "absolute", zIndex: 1000 }}
                >
                    <li>
                        <button
                            className={`dropdown-item ${locale === "fa" ? "active" : ""}`}
                            onClick={() => {
                                changeLanguage("fa")
                                setOpen(false);
                            }}
                        >
                            {translate("persian")}
                            <i className="flag-icon flag-icon-ir"></i>
                        </button>
                    </li>
                    <li>
                        <button
                            className={`dropdown-item ${locale === "en" ? "active" : ""}`}
                            onClick={() => {
                                changeLanguage("en")
                                setOpen(false);
                            }}
                        >
                            {translate("english")}
                            <i className="flag-icon flag-icon-us"></i>
                        </button>
                    </li>
                </ul>
            )}
        </div>
    );
}