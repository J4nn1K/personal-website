import '@fontsource/inter/400.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'

import Head from 'next/head'
import {
  ChakraProvider, 
  extendTheme, 
  Box, 
  Stack, 
  Text, 
  Heading, 
  Button, 
  Link 
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'


const theme = extendTheme({
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  }
  // colors = {
  //   gray: {
  //     100: '#F5F5F5',
  //     200: '#D8D8D8',
  //     300: '#BBBBBB',
  //     400: '#9E9E9E',
  //     500: '#818181',
  //     600: '#646464',
  //     700: '#474747',
  //     800: '#2A2A2A',
  //     900: '#0D0D0D',
  //   }
  // }
})


export default function Home() {
  return (
    <div>
      <Head>
        <title>Jannik Jorge Grothusen</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#F5F5F5" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0D0D0D" media="(prefers-color-scheme: dark)" />
        <meta name="description" content="A personal website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ChakraProvider theme={theme}>
        <Box m={2}>
          <Heading>Jannik Jorge Grothusen</Heading>
          <Stack direction='row' spacing={2}>
            <Button leftIcon={<EmailIcon />} colorScheme='teal' variant='solid'>
              Email
            </Button>
            <Button href='https://www.linkedin.com/in/jannikjorgegrothusen/' isExternal>
              LinkedIn
            </Button>
            <Button href='https://github.com/J4nn1K/' isExternal>
              GitHub
            </Button>
          </Stack>

          {/* <Link href='https://www.linkedin.com/in/jannikjorgegrothusen/' isExternal>LinkedIn</Link> */}
          {/* <Link href='https://github.com/J4nn1K/' isExternal>GitHub</Link> */}
        </Box>
      </ChakraProvider>
    </div>
  )
}
