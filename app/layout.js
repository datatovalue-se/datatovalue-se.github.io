import './globals.css'
import ThemeProviderWrapper from '@/components/ThemeProviderWrapper/ThemeProviderWrapper'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import styles from './layout.module.css'

import { Box } from '@mui/material'
export const metadata = {
  title: 'DataToValue',
  description: 'DataToValue - From data to value',
  icons: {
    icon: [{ url: '/favicon.ico' }, { url: '/icon.png', type: 'image/png' }],
    apple: [{ url: '/apple-icon.png' }],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <ThemeProviderWrapper>
          <Navbar />
          <Box className={styles.pageLayout}>{children}</Box>
          <Footer />
        </ThemeProviderWrapper>
      </body>
    </html>
  )
}
