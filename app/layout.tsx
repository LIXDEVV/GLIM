import type { Metadata } from 'next'
import { Courier_Prime } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const courierPrime = Courier_Prime({ weight: '400', subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Glim AI bot",
  description: 'Broadcasting live from the Nightosphere',
  generator: 'GLIM',
  icons: {
    icon: [
      {
        url: 'https://ibb.co/qMKTKPvh',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: 'https://ibb.co/qMKTKPvh',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: 'https://ibb.co/qMKTKPvh',
        type: 'image/svg+xml',
      },
    ],
    apple: 'https://ibb.co/qMKTKPvh',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
