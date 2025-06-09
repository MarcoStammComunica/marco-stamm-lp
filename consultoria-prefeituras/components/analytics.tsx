"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import Script from "next/script"

// ID de medição do GA4
const GA_MEASUREMENT_ID = "G-PXLN843YYS"

export function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname) {
      window.gtag?.("config", GA_MEASUREMENT_ID, {
        page_path: pathname,
      })
    }
  }, [pathname])

  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  )
}

// Função para rastrear eventos de conversão
export function trackConversion(action: string, category: string, label: string, value?: number) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    })
    console.log(`Conversão rastreada: ${action} - ${category} - ${label}`)
  }
}
