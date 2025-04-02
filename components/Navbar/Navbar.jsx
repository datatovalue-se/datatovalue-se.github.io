'use client'
import Link from 'next/link'
import styles from './navbar.module.css'
import { Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import Image from 'next/image'

const Navbar = () => {
  const theme = useTheme()

  return (
    <Box
      className={styles.navbar}
      sx={{
        backgroundColor: theme.palette.navbar.background,
        transition: 'background-color 1s ease',
      }}
    >
      <Box className={styles.navbarVisible}>
        <Link href={'./'} className={styles.compName}>
          <Image
            src={'/logo1.svg'}
            height={60}
            width={110}
            alt='logotype datatovalue'
          />
        </Link>
      </Box>
    </Box>
  )
}

export default Navbar
