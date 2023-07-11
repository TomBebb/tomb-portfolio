"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import { useMemo } from 'react'
import { usePathname } from 'next/navigation'
import { NavItem, navItems } from './nav'

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
  const fullTitle = useMemo(() => currMenuTitle + " - Portfolio", [currMenuTitle])
  return (
    <html lang="en">
      <head>
        <title>
          {fullTitle}
        </title>
      </head>
      <body className={inter.className}>
        <Navbar
          navTitle={currMenuTitle}
          curr={currMenuItem}
        />

        {children}
      </body>
    </html>
  )
}
