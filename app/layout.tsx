import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'CLITech - Developer Documentation & CLI Reference',
  description: 'Complete CLI documentation with installation guides, command reference, error lookup, and troubleshooting for developers.',
  generator: 'CLITech',
  robots: 'index, follow',
  metadataBase: new URL('https://clitech.dev'),
  openGraph: {
    title: 'CLITech - Developer Documentation',
    description: 'Complete CLI documentation with installation guides and error lookup',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
  other: {
    'google-adsense-account': 'ca-pub-1727042318749362',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1727042318749362"
        crossOrigin="anonymous"
        strategy="beforeInteractive"
      />
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
