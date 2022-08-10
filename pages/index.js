import '@fontsource/inter/400.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'

import { FaLinkedin, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

import Head from 'next/head'
import {
  ChakraProvider,
  extendTheme,
  Box,
  Flex,
  Stack,
  Text,
  Heading,
  Button,
  ButtonGroup,
  LinkBox,
  Link,
  Center,
  Divider,
  Highlight,
  UnorderedList,
  ListItem
} from '@chakra-ui/react'
import { EmailIcon, ExternalLinkIcon } from '@chakra-ui/icons'


const theme = extendTheme({
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  fontSizes: {
    sm: '14px',
  }
})


export default function Home() {
  return (
    <div>
      <Head>
        <title>Jannik Grothusen</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#F5F5F5" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0D0D0D" media="(prefers-color-scheme: dark)" />
        <meta name="description" content="A personal website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ChakraProvider theme={theme}>
        <Flex m={8} justifyContent='center'>
          <Box maxW='3xl'>
            <Heading mt={8} mb={1} fontSize='3xl'>Jannik Jorge Grothusen</Heading>
            <Text mb={4} fontSize='sm'>
              <Highlight query='UC Berkeley' styles={{ py: '1', fontWeight: '600' }}>
                Concurrent Enrollment Student at UC Berkeley
              </Highlight>
            </Text>
            <Text fontSize='sm'>
              Designing holistic solutions. Passionate about engineering, entrepreneurship and graphic design.
            </Text>
            {/* <Text>
              Helping developers build a faster web. Teaching about web development, serverless, and React / Next.js.
            </Text> */}
            <ButtonGroup mt={4} size='sm'>
              <Button as='a' target='_blank' leftIcon={<EmailIcon />} href='mailto:jannik@grothusen.de' color='white' background='gray.800' _hover={{ bg: 'black' }} _active={{ bg: 'black' }}>
                {/* <Button as='a' target='_blank' leftIcon={<EmailIcon />} href='mailto:jannik@grothusen.de' colorScheme='teal'> */}
                {/* <Button as='a' target='_blank' leftIcon={<EmailIcon />} href='mailto:jannik@grothusen.de'> */}
                Email
              </Button>
              <Button as='a' target='_blank' leftIcon={<FaLinkedin />} href='https://www.linkedin.com/in/jannikjorgegrothusen/'>
                LinkedIn
              </Button>
              <Button as='a' target='_blank' leftIcon={<FaGithub />} href='https://github.com/J4nn1K/'>
                GitHub
              </Button>
            </ButtonGroup>
            {/* <Heading mt={12} mb={4}>Skills</Heading> */}

            <Heading mt={12} mb={4} fontSize='2xl'>Experience</Heading>

            <Stack spacing={4}>
              <Box fontSize='sm' as='article' p='4' borderWidth='1px' rounded='md'>
                <Box >
                  Mar 22 - Jul 22, <Link as='a' href='https://goodbytz.com/' target='_blank'>GoodBytz</Link>
                </Box>
                <Heading fontSize='18px' my='2'>
                  Software Engineering Intern
                </Heading>
                <UnorderedList mb='2'>
                  <ListItem><Highlight query={['Python', 'Flask', 'MongoDB', 'Plotly Dash', 'GitHub Actions', 'Docker']} styles={{ py: '1', fontWeight: '600' }}>Build multiple microservices for monitoring using Python, Flask, MongoDB, Plotly Dash and integrated them into a CI-pipeline using GitHub Actions and Docker</Highlight></ListItem>
                  <ListItem><Highlight query={['Kubernetes', 'K3s', 'Elastic Stack']} styles={{ py: '1', fontWeight: '600' }}>Set up and operated a Kubernetes cluster for service orchestration using K3s with Elastic Stack for log aggregation and monitoring</Highlight></ListItem>
                  <ListItem><Highlight query={['Angular']} styles={{ py: '1', fontWeight: '600' }}>Further developed main user interface using Angular</Highlight></ListItem>
                  <ListItem>Developed and optimized motion sequences for cobots (Universal Robots UR series)</ListItem>
                </UnorderedList>
                {/* <Text mb='2' noOfLines='3'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </Text> */}
                {/* <Text fontWeight='bold'>Technologies:</Text><Text>Python, Flask, Angular, REST API, Git, GitHub Actions, Docker, Kubernetes</Text> */}
                {/* <Link as='a' color='teal.400' href='#' fontWeight='bold'>
                  Read more
                </Link> */}
              </Box>
              <Box fontSize='sm' as='article' p='5' borderWidth='1px' rounded='md'>
                <Box>
                  Dec 21 - Feb 22, <Link as='a' href='https://www.desy.de/' target='_blank'>DESY</Link>
                </Box>
                <Heading fontSize='18px' my='2'>
                  Machine Learning Intern
                </Heading>
                <UnorderedList>
                  <ListItem><Highlight query={['TensorFlow Keras', 'Slurm', 'Weights & Biases']} styles={{ py: '1', fontWeight: '600' }}>Created neural networks for recognition of electron beam characteristics using TensorFlow Keras and trained on DESY's Maxwell HPC cluster using Slurm and Weights & Biases</Highlight></ListItem>
                  <ListItem><Highlight query={['Python']} styles={{ py: '1', fontWeight: '600' }}>Implemented a Unscented Kalman Filter to determine unknown system parameters of a particle accelerator in Python</Highlight></ListItem>

                </UnorderedList>
              </Box>
            </Stack>

            <Heading mt={12} mb={4} fontSize='2xl'>Education</Heading>
            <Stack spacing={4}>
              <Box fontSize='sm' as='article' p='5' borderWidth='1px' rounded='md'>
                <Box>
                  Aug 22 - May 23, University of California, Berkeley
                </Box>
                <Heading fontSize='18px' my='2'>
                  Concurrent Enrollment Student
                </Heading>
                <UnorderedList mb='2'>
                  <ListItem>Invited by UC Berkeley's Department of Mechanical Engineering</ListItem>
                  <ListItem><Highlight query={['ISAP Scholarship']} styles={{ py: '1', fontWeight: '600' }}>Awarded a ISAP Scholarship by German Academic Exchange Service</Highlight></ListItem>
                </UnorderedList>
                {/* <Text mb='3' noOfLines='3'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </Text> */}
                {/* <Text fontWeight='bold'>Technologies:</Text><Text>Python, Flask, Angular, REST API, Git, GitHub Actions, Docker, Kubernetes</Text> */}
              </Box>
              <Box fontSize='sm' as='article' p='5' borderWidth='1px' rounded='md'>
                <Box>
                  Apr 22 - now, Hamburg University of Technology
                </Box>
                <Heading fontSize='18px' my='2'>
                  M.Sc. Mechatronics
                </Heading>
                {/* <Text mb='3' noOfLines='3'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </Text> */}
                {/* <Text fontWeight='bold'>Technologies:</Text><Text>Python, Flask, Angular, REST API, Git, GitHub Actions, Docker, Kubernetes</Text> */}
              </Box>
              <Box fontSize='sm' as='article' p='5' borderWidth='1px' rounded='md'>
                <Box>
                  Oct 18 - Mar 22, Hamburg University of Technology
                </Box>
                <Heading fontSize='18px' my='2'>
                  B.Sc. General Engineering Science
                </Heading>
                <UnorderedList>
                  <ListItem><Highlight query={['mechatronics']} styles={{ py: '1', fontWeight: '600' }}>Spezialized in mechatronics</Highlight></ListItem>
                  <ListItem><Highlight query={['ROS (Python)']} styles={{ py: '1', fontWeight: '600' }}>Developed a control architecture for autonomous grasping with an underwater robot in ROS (Python)</Highlight></ListItem>
                </UnorderedList>

                {/* <Text fontWeight='bold'>Technologies:</Text><Text>Python, Flask, Angular, REST API, Git, GitHub Actions, Docker, Kubernetes</Text> */}
              </Box>
            </Stack>
          </Box>

        </Flex>
      </ChakraProvider>
    </div>
  )
}
