import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import StarsCanvas from './components/StarsCvs'
import Contact from './components/Contact'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Haytham\'s Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
		<StarsCanvas />
		<Navbar/>
	  	{children}
	  </body>
    </html>
  )
}
