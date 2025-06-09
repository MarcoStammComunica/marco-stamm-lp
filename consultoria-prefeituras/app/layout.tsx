import type React from "react"
import { Analytics } from "@/components/analytics"
import { ThemeProvider } from "@/components/theme-provider"
import "@/app/globals.css"
import { Suspense } from "react"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Marco Stamm - Comunicação para Prefeituras</title>
        <meta
          name="description"
          content="Transforme sua equipe em uma estrutura de comunicação profissional em 30 dias"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Suspense>{children}</Suspense>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
