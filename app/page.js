import Image from 'next/image'
import styles from './page.module.css'
import Reveal from '@/components/Reveal'
import { Typography, Box } from '@mui/material'

export default function Home() {
  return (
    <Box className={styles.page}>
      <Box className={styles.pageSection}>
        <Reveal>
          <Typography variant='h4'>
            In collaboration we develop novel methodology, ways of working and
            customized support structures to <b>utilize information</b>  and
            make it <b>accessible</b> and <b>practically useful</b>
          </Typography>
        </Reveal>
      </Box>

      <Box className={styles.pageSection}>
        <Reveal>
          <Typography variant='h2'>
            Make work <b style={{ color: 'var(--customGreen)' }}>easier</b>,{' '}
            <b style={{ color: 'var(--customBlue)' }}>transparent</b> and more{' '}
            <b style={{ color: 'var(--customOrange)' }}>engaging</b> with handy
            access to relevant information and data
          </Typography>
        </Reveal>

        <Image
          className={styles.bgLogo}
          src='/logoBg1.svg'
          height={600}
          width={900}
          alt='logotype datatovalue'
        />
      </Box>

      <Box className={styles.pageSection}>
        <Reveal>
          <Typography variant='h3'>Coming soon</Typography>
        </Reveal>

        <Box className={styles.textParagraph}>
          <Reveal>
            <Typography variant='h6'>
              Interested in establishing structures that effectively enables to
              structure your information and knowledge and turn validated data
              into actions and value?
            </Typography>
          </Reveal>
        </Box>
        <Box className={styles.textParagraph}>
          <Reveal>
            <Typography variant='h6'>
              We are in the midst of pilot testing packages of integrated new
              methodologies, ways of working and digital support structures to
              <b>significantly improve</b> our partners <b>capacity</b> to use
              data and information{' '}
              <b>
                for easing work load, fact based decisions and improvement work.
              </b>
            </Typography>
          </Reveal>
        </Box>

        <Box className={styles.textParagraph}>
          <Reveal>
            <Typography variant='h6'>
              For more information and possible collaboration opportunities{' '}
              <br />
              please <b style={{ color: 'blue' }}>contact us</b>
            </Typography>
          </Reveal>
        </Box>
      </Box>
    </Box>
  )
}
