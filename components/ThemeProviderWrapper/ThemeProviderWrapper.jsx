'use client'

import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { useMemo } from 'react'
import { createTheme } from '@mui/material/styles'
import { getDesignTokens } from '@/app/theme'

const ThemeProviderWrapper = ({ children }) => {
  const theme = useMemo(() => createTheme(getDesignTokens()), [])
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default ThemeProviderWrapper
