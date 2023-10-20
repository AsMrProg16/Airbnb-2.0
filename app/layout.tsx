import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css';
import Navbar from "./components/navbar/Navbar";



export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">  
      <body className={roboto.className}>
        <Navbar />  
        {children}
      </body>
    </html>
  )
}
