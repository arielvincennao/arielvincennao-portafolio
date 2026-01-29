import { Cinzel, Tinos, Cormorant_Garamond } from 'next/font/google'

export const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-cinzel',
})

export const tinos = Tinos({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-tinos',
})

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-cormorant-garamond',
})
