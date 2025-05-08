'use client'
import Link from 'next/link'
import styles from './navbar.module.css'
import { Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

const Navbar = () => {
  const theme = useTheme()
  const navbarRef = useRef(null)
  const offsetTopRef = useRef(0)

  useEffect(() => {
    const navbar = navbarRef.current
    if (!navbar) return

    const calculateOffsetTop = () => {
      // temporarily remove sticky class to measure its original position
      navbar.classList.remove(styles.sticky)
      offsetTopRef.current =
        navbar.getBoundingClientRect().top + window.pageYOffset
    }

    const stickNavbar = () => {
      if (window.pageYOffset >= offsetTopRef.current) {
        navbar.classList.add(styles.sticky)
      } else {
        navbar.classList.remove(styles.sticky)
      }
    }

    // initial setup
    calculateOffsetTop()
    stickNavbar()

    window.addEventListener('scroll', stickNavbar)
    window.addEventListener('resize', () => {
      calculateOffsetTop()
      stickNavbar()
    })

    return () => {
      window.removeEventListener('scroll', stickNavbar)
      window.removeEventListener('resize', calculateOffsetTop)
    }
  }, [])

  return (
    <Box
      ref={navbarRef}
      className={styles.navbar}
      sx={{
        backgroundColor: theme.palette.navbar.background,
        transition: 'background-color 1s ease',
      }}
    >
      <Box className={styles.navbarVisible}>
        <Link href={'./'} className={styles.compName}>
          <Image
            src={'/logoWhite.svg'}
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
