import './globals.css'
import localFont from 'next/font/local'

// Font
const jakarta = localFont({ src: './fonts/PlusJakartaSans-VariableFont_wght.ttf' })

//Components
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: 'Leadster: Chatbot de Marketing para Aumentar Geração de Leads',
  description: 'Conheça a Leadster, um Chatbot de Marketing Conversacional para Aumentar a Geração de Leads Qualificados no seu Site. Visite e saiba mais!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jakarta.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
