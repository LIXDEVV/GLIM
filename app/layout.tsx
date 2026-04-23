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
        url: '[url=https://postimages.org/][img]https://i.postimg.cc/xq3g0gvs/favicon.jpg[/img][/url]',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '[url=https://postimages.org/][img]https://i.postimg.cc/xq3g0gvs/favicon.jpg[/img][/url]',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '[url=https://postimages.org/][img]https://i.postimg.cc/xq3g0gvs/favicon.jpg[/img][/url]',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
