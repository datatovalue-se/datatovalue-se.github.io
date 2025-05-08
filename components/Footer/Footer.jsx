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
        <Box className={styles.footerTextBox}>
          <Box className={styles.footerSubBox}>
            <Typography variant='h7' className={'accentHeading'}>
              <b>Mission</b>
            </Typography>
            <Typography variant='p' >
              We support the welfare sector in developing fact based high
              quality and cost effective services - from data to value
            </Typography>
          </Box>

          <Box className={styles.footerRight}>
            <Box className={styles.footerSubBox}>
              <Typography variant='h7' className={'accentHeading'}>
               <b>Contact</b> 
              </Typography>
              <Typography variant='p' >
                <a href='mailto:info@d2v.se'>info@d2v.se</a>
              </Typography>
            </Box>

            <Box className={styles.footerSubBox}>
              <Typography variant='h7' className={'accentHeading'}>
                <b>Follow us</b>
              </Typography>
              <Typography variant='p' >
                <a href='https://www.linkedin.com/company/data2value/'>Linkedin</a>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
