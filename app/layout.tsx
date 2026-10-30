import { oficina } from './data/oficina';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: `${oficina.nome} | Mecânica automotiva`,
  description: `${oficina.nome} é uma oficina mecânica em Joinville - SC. Conheça nossos serviços de manutenção automotiva e entre em contato para solicitar um orçamento.`,
  
  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "AJ União | Oficina Mecânica em Joinville",
    description:
      `Conheça a ${oficina.nome}, oficina mecânica em Joinville - SC. Serviços de manutenção automotiva e atendimento especializado.`,
    url: "https://www.ajuniao.com.br/",
    siteName: "AJ União",
    locale: "pt_BR",
    type: "website",
  },

};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang='pt-BR' className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className='min-h-full flex flex-col'>{children}</body>
    </html>
  );
}
