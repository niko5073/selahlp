import './globals.css'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'

const figtree = Figtree({ subsets: ['latin'], variable: '--font-figtree' })

export const metadata: Metadata = {
  title: 'Selah - Your Cloud Management Agent',
  description: 'Intelligent cloud infrastructure management and optimization with Selah',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${figtree.className} bg-background tracking-wide`}>{children}</body>
    </html>
  )
} 