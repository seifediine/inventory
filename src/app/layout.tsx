import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import DashboardWrapper from './DashboardWrapper'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gestion du Stock',
  description:
    'Gérez votre inventaire, vos achats et vos ventes en toute liberté',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <DashboardWrapper>{children}</DashboardWrapper>
      </body>
    </html>
  )
}
