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
        <Flex m={4} justifyContent='center'>
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
                  <ListItem>Designed motion sequences for cobots (Universal Robots UR series and Fanuc CRX series)</ListItem>
                  <ListItem><Highlight query={['Kubernetes (K3s)']} styles={{ py: '1', fontWeight: '600' }}>Set up a lightweight Kubernetes (K3s) cluster for orchestration of microservices on IoT modules</Highlight></ListItem>
                  <ListItem><Highlight query={['Python', 'Flask', 'REST API', 'Docker', 'GitHub Actions']} styles={{ py: '1', fontWeight: '600' }}>Developed and deployed microservices using Python, Flask, REST API, Docker and GitHub Actions CI</Highlight></ListItem>
                  <ListItem><Highlight query={['JavaScript', 'Angular']} styles={{ py: '1', fontWeight: '600' }}>Further developed main user interface (JavaScript, Angular)</Highlight></ListItem>
                </UnorderedList>
              </Box>
              <Box fontSize='sm' as='article' p='5' borderWidth='1px' rounded='md'>
                <Box>
                  Dec 21 - Feb 22, <Link as='a' href='https://www.desy.de/' target='_blank'>DESY</Link>
                </Box>
                <Heading fontSize='18px' my='2'>
                  Machine Learning Intern
                </Heading>
                <UnorderedList>
                  <ListItem><Highlight query={['TensorFlow', 'Keras', 'Weights & Biases', 'Slurm']} styles={{ py: '1', fontWeight: '600' }}>Developed new method for beam parameter detection with artificial neural networks using TensorFlow, Keras and Weights & Biases (trained on DESY’s Maxwell HPC using Slurm)</Highlight></ListItem>
                  <ListItem>Implemented a state estimator to determine unknown system parameters of a particle accelerator</ListItem>
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
                  <ListItem>Coursework: CS 169 (Software Engineering), CS 188 (Artificial Intelligence), ME 231 (Advanced ControlDesign I), UGBA 5 (Entrepreneurship)</ListItem>
                </UnorderedList>
              </Box>
              <Box fontSize='sm' as='article' p='5' borderWidth='1px' rounded='md'>
                <Box>
                  Apr 22 - now, Hamburg University of Technology
                </Box>
                <Heading fontSize='18px' my='2'>
                  M.Sc. Mechatronics
                </Heading>
              </Box>
              <Box fontSize='sm' as='article' p='5' borderWidth='1px' rounded='md'>
                <Box>
                  Oct 18 - Mar 22, Hamburg University of Technology
                </Box>
                <Heading fontSize='18px' my='2'>
                  B.Sc. General Engineering Science
                </Heading>
                <UnorderedList>
                  <ListItem>Standard period of study, Class rank: 15 of 75</ListItem>
                  <ListItem>Thesis: "Motion Planning and Control for Autonomous Grasping with an Underwater Robot"</ListItem>
                  <ListItem><Highlight query={['Python', 'ROS', 'AprilTag']} styles={{ py: '1', fontWeight: '600' }}>Developed a control architecture based on guidance using the AprilTag visual fiducial system and custom path planning and following algorithms, implemented using Python and ROS, tested on a real robot</Highlight></ListItem>
                </UnorderedList>
              </Box>
            </Stack>
          </Box>

        </Flex>
      </ChakraProvider>
    </div>
  )
}
