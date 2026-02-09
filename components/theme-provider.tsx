'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider 
      {...props}
      attribute="class"           // adds .dark to <html>
      defaultTheme="system"       // respects system preference by default
      enableSystem                // enables system detection
      disableTransitionOnChange   // optional: removes flash when switching
    >
      {children}
    </NextThemesProvider>
  )
}