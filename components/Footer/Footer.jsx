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
      className={styles.fullpageSection}
      sx={{
        backgroundColor: theme.palette.footer.background,
        transition: 'background-color 1s ease',
      }}
    >
      <Box className={styles.footerTextBox}>
        <Typography variant='h4' className={styles.footerSubBox}>
          Connect with us
        </Typography>
        <Box className={styles.footerSubBox}>
          <Typography variant='h7' className={'accentHeading2'}>
            <b>Contact</b>
          </Typography>
          <Typography variant='p'>
            Have questions? Reach out at:
            <br />
            <a href='mailto:hello@d2v.se'>hello@d2v.se</a>
          </Typography>
        </Box>
        <Box className={styles.footerSubBox}>
          <Typography variant='h7' className={'accentHeading2'}>
            <b>Exlpore Our Solutions</b>
          </Typography>
          <Typography variant='p'>
            Discover how we can help you unlock value.
            <br />
            <a href='mailto:info@d2v.se' className={styles.link}>
              Request a demo
            </a>
          </Typography>
        </Box>

        <Box className={styles.footerSubBox}>
          <Typography variant='h7' className={'accentHeading2'}>
            <b>LinkedIn</b>
          </Typography>
          <Typography variant='p'>
            Stay up to date with our public <br />
            announcements: <br />
            <a
              href='https://www.linkedin.com/company/data2value/'
              className={styles.link}
            >
              Follow us
            </a>
          </Typography>
        </Box>
      </Box>

      <Box className={styles.footerBottom}>
        <Image
          src={'/logoBlack.svg'}
          height={60}
          width={110}
          alt='logotype datatovalue'
        />
        <Typography variant='p'>
          Improvement intelligence - turning data to value
        </Typography>

        <Typography variant='p' className={styles.footerCopyright}>
          © 2025 Data2Value Sweden AB
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer
