'use client'
import Link from 'next/link'
import styles from './footer.module.css'
import { Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Typography } from '@mui/material'
import Image from 'next/image'

const Footer = () => {
  const theme = useTheme()

  return (
    <Box
      className={styles.footer}
      sx={{
        backgroundColor: theme.palette.footer.background,
        transition: 'background-color 1s ease',
      }}
    >
      <Box className={styles.footerVisible}>
        <Link href={'./'} className={styles.compName}>
          <Image
            src='/logo1.svg'
            height={60}
            width={110}
            alt='logotype datatovalue'
          />
        </Link>
        <Box className={styles.footerTextBox}>
          <Typography variant='h6' className={styles.footerText}>
            We support the welfare sector in developing fact based high quality
            and cost effective services <br />- from data to value
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
