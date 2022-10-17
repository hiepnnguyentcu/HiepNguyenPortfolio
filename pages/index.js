import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  Image,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

//import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        I&apos;m a Computer Science student at Texas Christian University!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Hiep Nguyen
          </Heading>
          <p>
            Specialized in Front-end Development <br></br>Mobile Applications
            (React Native/ Swift) and Web (React.JS){' '}
          </p>

          <br></br>

          <p>
            Email: hiepnguyentcu@gmail.com <br></br>Phone: (+1) 682-252-8179
          </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="200px"
            h="200px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              borderRadius="full"
              boxSize="200px"
              src="images/hiepnnguyen.jpeg"
              layout="fill"
              objectFit="cover"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Hiep Nguyen is a rising junior at Texas Christian University,
          currently pursuing Bachelor of Computer Science. After woking as a
          Software Engineer at multiple companies including FPT Software - a
          global software outsourcing corporation, and MISA JSC - a SaaS
          provider for domestic and global clients he decided to pursue a career
          in full-stack development (Web/ Mobile). He is currently sharpening
          his front-end skills with real world projects at work.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/resume" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My resume
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>Summer 2022</BioYear>
          Software Engineer Intern at FPT Software LTD.
        </BioSection>
        <BioSection>
          <BioYear>Summer 2021</BioYear>
          Software Engineer Intern at MISA JSC.
        </BioSection>
        <BioSection>
          <BioYear>Fall 2020</BioYear>
          Enrolled in Texas Christian University (Computer Science)
        </BioSection>
        <BioSection>
          <BioYear>2017 to 2020</BioYear>
          Enrolled in Tran Phu High School For Gifted Students (Physics)
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Find me at
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/hiepnnguyentcu" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @hiepnnguyentcu
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link
              href="https://www.linkedin.com/in/hiepnnguyentcu/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @hiepnnguyentcu
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink href="/projects" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Personal Projects
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'

/*
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          <Link href="https://illust.odoruinu.net/" target="_blank">
            Drawing
          </Link>
          , Playing Drums,{' '}
          <Link href="https://500px.com/p/craftzdog" target="_blank">
            Photography
          </Link>
          , Leica, Machine Learning
        </Paragraph>
      </Section>
*/
