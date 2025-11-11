import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KVN LLM | AI Portfolio',
  description: 'Kevin\'s AI-powered portfolio with integrated knowledge graph',
  keywords: ['AI', 'LLM', 'Portfolio', 'Machine Learning', 'Knowledge Graph'],
  authors: [{ name: 'Kevin' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

