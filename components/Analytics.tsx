"use client";

import Script from "next/script";

export default function Analytics() {
    return (
        <>
            {/* Umami Analytics */}
            <Script
                defer
                src="https://cloud.umami.is/script.js"
                data-website-id="451a5087-9fa8-4adc-8f42-2b3c04000c12"
                strategy="afterInteractive"
            />
        </>
    );
}
