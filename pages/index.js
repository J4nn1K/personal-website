import '@fontsource/inter/400.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'

import { FaLinkedin, FaGithub } from 'react-icons/fa'

import Head from 'next/head'
import {
  ChakraProvider,
  extendTheme,
  Box,
  Stack,
  Text,
  Heading,
  Button,
  Link,
  Center,
  Divider,
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'


const theme = extendTheme({
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  }
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
        <Center>

          <Box m={2} pt={100}>
            <Heading>Jannik Jorge Grothusen</Heading>
            <Text>Making what I want since 2000.</Text>
            <Divider my={4} />
            <Center>
              <Stack direction='row' spacing={2}>
                <Button as='a' target='_blank' leftIcon={<EmailIcon />} href='mailto:jannik@grothusen.de' colorScheme='teal'>
                  Email
                </Button>
                <Button as='a' target='_blank' leftIcon={<FaLinkedin />} href='https://www.linkedin.com/in/jannikjorgegrothusen/'>
                  LinkedIn
                </Button>
                <Button as='a' target='_blank' leftIcon={<FaGithub />} href='https://github.com/J4nn1K/'>
                  GitHub
                </Button>
              </Stack>
            </Center>

            {/* <Box p={5} shadow='md' borderWidth='1px'>
              <Heading fontSize='xl'>GoodBytz GmbH</Heading>
              <Text mt={4}>The future can be even brighter but a goal without a plan is just a wish</Text>
            </Box> */}

          </Box>

        </Center>
      </ChakraProvider>
    </div>
  )
}
