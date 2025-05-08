import Image from 'next/image'
import styles from './page.module.css'
import Reveal from '@/components/Reveal'
import { Typography, Box, Button } from '@mui/material'
import TextSwitcher from '@/components/TextSwitcher'

export default function Home() {
  const texts = [
    <Typography key='1' variant='h3'>
      Make work <b style={{ color: 'var(--secondaryColorOriginal)' }}>easier</b>
      , <b style={{ color: 'var(--nonFunctionalColor)' }}>transparent</b> and
      more <b style={{ color: 'var(--indicatorColor)' }}>engaging</b> with handy
      access to feedback and actionable data
    </Typography>,
    <Typography key='2' variant='h3'>
      We provide groundbreaking 
      <b style={{ color: 'var(--secondaryColorOriginal)' }}> tailored support structures </b>
      that enable better ways of working and
      <b style={{ color: 'var(--nonFunctionalColor)' }}> paradigm-shifting </b>
      use of information and data
    </Typography>,
     <Typography key='1' variant='h3'>
     In collaboration we support the welfare sector in developing<b style={{ color: 'var(--secondaryColorOriginal)' }}> fact based</b>
     , <b style={{ color: 'var(--nonFunctionalColor)' }}> high quality </b> and
      <b style={{ color: 'var(--indicatorColor)' }}> cost effective </b> services - from data to value
   </Typography>
  ]

  return (
    <Box className={styles.page}>
      <Box className={styles.fullpageSection}>
        <Box className={styles.landing}>
          <Box className={styles.landingTextBox}>
          <Reveal>
            <TextSwitcher texts={texts} />
          </Reveal>
          </Box>

          <Image
            className={styles.bgLogo}
            src='/logoBg1.svg'
            height={600}
            width={900}
            alt='logotype datatovalue'
          />
        </Box>
      </Box>

      <Box className={`${styles.fullpageSection} ${styles.fullpageComingSoon} `} >
        <Box className={styles.comingSoon}>
          <Reveal>
            <Typography className={'accentHeading'} variant='h7'>
              {' '}
              <b>Coming soon</b>
            </Typography>
          </Reveal>

          <Reveal>
            <Typography className={styles.comingSoonTextUpper} variant='h5'>
              <b>
                Join Us in Shaping the Future of Information Support
              </b>
            </Typography>
          </Reveal>

          <Box className={styles.comingSoonBottomBox}>
            <Reveal>
              <Typography variant='h7'>

                We're pioneering the next generation of support structures - systems that effectively
                 <b> organize information and knowledge</b>, transforming validated data into <b>actionable insights</b> and
                <b> real value</b>. 
                <br/>
                <br/>

                We invite visionary partners to explore <b>pilot collaborations</b> that redefine
                how data can be structured and applied. By combining <b>new methodologies</b>, innovative 
                <b> ways of working</b>, and <b>AI-powered digital support structures</b>, we aim to enable:

                <ul className={styles.customList}>
                  <li>
                    Lighter workloads
                  </li>
                  <li>
                    Smarter decisions
                  </li>
                  <li>
                    Engaging and sustainable improvement work
                  </li>
                  <li>
                    Less dependencies on specific systems
                  </li>
                </ul>
                Let's build the future of knowledge-driven transformation - together.
                
              </Typography>
            </Reveal>
          </Box>
          <Reveal>
            <Button variant='primary' href='mailto:info@d2v.se'>
              Explore Opportunities
            </Button>
          </Reveal>
        </Box>
      </Box>
    </Box>
  )
}
