"use client"
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import { useMemo } from 'react'
import { usePathname } from 'next/navigation'
import { NavItem, navItems } from './nav'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const path = usePathname()
  const currMenuItem = useMemo<NavItem | undefined>(
    () => navItems.find(ni => path === ni.pathname), [path])

  const currMenuTitle = useMemo(() => currMenuItem?.name ?? "", [currMenuItem])
  return (
    <div>
      <Head>
      </Head>
        <Navbar
        navTitle={currMenuTitle}
         curr={currMenuItem}
         />

        {children}
        </div>
  )
}
