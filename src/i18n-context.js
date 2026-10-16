import { createContext, useContext } from 'react'

export const LanguageContext = createContext(null)

export function usePortfolioLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('usePortfolioLanguage must be used within LanguageProvider')
  }
  return context
}
