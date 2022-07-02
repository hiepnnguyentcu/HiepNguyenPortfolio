import { Container, Heading, Box, Text } from '@chakra-ui/react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react'

import { List, ListItem, UnorderedList } from '@chakra-ui/react'

import { SimpleGrid } from '@chakra-ui/react'

import Layout from '../components/layouts/article'

const Resume = () => (
  <Layout title="Resume">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Education
      </Heading>

      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Text flex="1" textAlign="left" fontWeight="bold">
                Texas Christian University
              </Text>

              <Text textAlign="right" fontWeight="bold">
                2020 - 2024
              </Text>

              <AccordionIcon />
            </AccordionButton>
          </h2>

          <AccordionPanel pb={10}>
            <h3>
              <SimpleGrid columns={2} spacing={10} marginBottom={5}>
                <Box bg="" height="20px">
                  <Text flex="1" textAlign="left" fontWeight="bold">
                    Bachelor of Computer Science
                  </Text>
                </Box>
                <Box bg="" height="20px" marginRight="20px">
                  <Text flex="1" textAlign="right" fontWeight="bold">
                    GPA: 3.7/4.0
                  </Text>
                </Box>
              </SimpleGrid>
            </h3>

            <p>
              I am currently pursuing a Bachelor of Science in Computer Science,
              minoring in Mathematics. I am also a member of the John V. Roach
              Honors College at Texas Christian University.
            </p>

            <p>
              Here are some of my achievements at Texas Christian University:
            </p>

            <UnorderedList marginLeft={10}>
              <ListItem>Faculty Scholarship - 22.000USD per year.</ListItem>
              <ListItem>Dean's List Fall 2020 and Spring 2021.</ListItem>
              <ListItem>
                Internship Scholarship - Career Readiness - Summer 2021, Spring
                and Summer 2022.
              </ListItem>
            </UnorderedList>

            <List />
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold">
                Tran Phu High School for Gifted Students
              </Box>
              <Box flex="1" textAlign="right" fontWeight="bold">
                2017 - 2020
              </Box>

              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <h3>
              <SimpleGrid columns={2} spacing={10} marginBottom={5}>
                <Box bg="" height="20px">
                  <Text flex="1" textAlign="left" fontWeight="bold">
                    Physics Specialization
                  </Text>
                </Box>
              </SimpleGrid>
            </h3>

            <p>
              I was a student at Tran Phu High School for Gifted Students,
              located in Hai Phong - Vietnam. I was active in my science
              competitions and I have achieved some awards in Robotics/ Embedded
              Systems.
            </p>

            <p>Here are some of my awards:</p>

            <UnorderedList marginLeft={10}>
              <ListItem>
                Medal of Achievement at 23rd International Exhibition of
                Inventics and Conference, by National Institute of Inventics,
                Iasi, Romania.
              </ListItem>
              <ListItem>
                Gold Medal - Bangkok IPITEx 2019, by the National Research
                Council of Thailand.
              </ListItem>

              <ListItem>
                Gold Medal - Bangkok IPITEx 2019, by Manila Young Inventors
                Association.
              </ListItem>

              <ListItem>
                Participated in Vietnam Science and Engineering Fair 2018 -
                2019.
              </ListItem>
            </UnorderedList>

            <List />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Heading as="h3" fontSize={20} mb={4} marginTop="30px">
        Work Experience
      </Heading>

      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Text flex="1" textAlign="left" fontWeight="bold">
                FPT Software LTD.
              </Text>

              <Text textAlign="right" fontWeight="bold">
                Summer 2022
              </Text>

              <AccordionIcon />
            </AccordionButton>
          </h2>

          <AccordionPanel pb={10}>
            <h3>
              <SimpleGrid columns={2} spacing={10} marginBottom={5}>
                <Box bg="" height="20px">
                  <Text flex="1" textAlign="left" fontWeight="bold">
                    Associate Software Engineer
                  </Text>
                </Box>
              </SimpleGrid>
            </h3>

            <UnorderedList marginLeft={10}>
              <ListItem>
                Architected a mobile front-end service for regular users and
                administrators to view employee’s profiles, internal news, post
                feedbacks and questions by creating module, reusable React
                Native components, Redux and AntDesign.
              </ListItem>
              <ListItem>
                Integrated CRUD API requests from front-end to back-end services
                and display corresponding data sets to interface using Axios and
                Postman.
              </ListItem>
              <ListItem>
                Developed protected routes for administrators to perform user
                management methods including create new users, delete deprecated
                users, and display all users’ data.
              </ListItem>

              <ListItem>
                Implemented Bearer Authorization for API calls, hashed access
                tokens and refresh tokens using Bcrypt and stored hashed tokens
                into AsyncStorage for optimized usage.
              </ListItem>
            </UnorderedList>

            <List />
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold">
                MISA JSC.
              </Box>
              <Box flex="1" textAlign="right" fontWeight="bold">
                Summer 2021
              </Box>

              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <h3>
              <SimpleGrid columns={2} spacing={10} marginBottom={5}>
                <Box bg="" height="20px">
                  <Text flex="1" textAlign="left" fontWeight="bold">
                    Software Engineer Intern
                  </Text>
                </Box>
              </SimpleGrid>
            </h3>
            <UnorderedList marginLeft={10}>
              <ListItem>
                Designed and optimized large-scale automatic e-invoice
                web-crawlers to save 10 hours a week for 8 major distributors
                using Selenium/ BeautifulSoup4 with Python.
              </ListItem>
              <ListItem>
                Collected data and trained recognition models with 70% accuracy
                average to legally bypass captcha images for each distributor
                using a CRNN + CTC loss model
              </ListItem>

              <ListItem>
                Deployed e-invoice web-crawlers as internal APIs using
                Kubernetes, and tested API calls using Postman.
              </ListItem>
            </UnorderedList>
            <List />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Heading as="h3" fontSize={20} mb={4} marginTop="30px">
        Technical Skills
      </Heading>

      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Text flex="1" textAlign="left" fontWeight="bold">
                Programming Languages
              </Text>
              <AccordionIcon />
            </AccordionButton>
          </h2>

          <AccordionPanel pb={5}>
            <UnorderedList marginLeft={10}>
              <ListItem>Java/JavaScript, Swift, Python, C/C++</ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Text flex="1" textAlign="left" fontWeight="bold">
                Operating Systems
              </Text>
              <AccordionIcon />
            </AccordionButton>
          </h2>

          <AccordionPanel pb={5}>
            <UnorderedList marginLeft={10}>
              <ListItem>MacOS, Windows, Unix/ Linux</ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Text flex="1" textAlign="left" fontWeight="bold">
                Familiar Frameworks & Tools
              </Text>
              <AccordionIcon />
            </AccordionButton>
          </h2>

          <AccordionPanel pb={5}>
            <UnorderedList marginLeft={10}>
              <ListItem>
                Web Development: React.JS, Redux, MongoDB, Express.JS, Node.JS
              </ListItem>
              <ListItem>
                Mobile Development: React Native, SwiftUI/ UIKit
              </ListItem>
              <ListItem>Others: Figma, Postman </ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Heading as="h3" fontSize={20} mb={4} marginTop="30px">
        Extra-curricular Activities
      </Heading>

      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Text flex="1" textAlign="left" fontWeight="bold">
                Sounde LLC.
              </Text>

              <Text textAlign="right" fontWeight="bold">
                Spring 2022
              </Text>

              <AccordionIcon />
            </AccordionButton>
          </h2>

          <AccordionPanel pb={5}>
            <h3>
              <SimpleGrid columns={2} spacing={10} marginBottom={5}>
                <Box bg="" height="20px">
                  <Text flex="1" textAlign="left" fontWeight="bold">
                    Volunteer Software Engineer
                  </Text>
                </Box>
              </SimpleGrid>
            </h3>

            <UnorderedList marginLeft={10}>
              <ListItem>
                Developed onboarding storyboards for first-time and returning
                users, and implemented past-users authentication using UIKit and
                Firebase.
              </ListItem>
            </UnorderedList>

            <List />
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold">
                JPMorgan Chase & Co.
              </Box>

              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <h3>
              <SimpleGrid columns={2} spacing={10} marginBottom={5}>
                <Text flex="1" textAlign="left" fontWeight="bold">
                  Software Engineering Virtual Experience
                </Text>
              </SimpleGrid>
            </h3>
            <UnorderedList marginLeft={10}>
              <ListItem>
                Interface with stock data feed website using Python.
              </ListItem>
              <ListItem>
                Display data visually using ReactJS and TypeScript.
              </ListItem>
            </UnorderedList>
            <List />
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold">
                Vietnamese Student Association at TCU
              </Box>

              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <h3>
              <SimpleGrid columns={2} spacing={10} marginBottom={5}>
                <Text flex="1" textAlign="left" fontWeight="bold">
                  Vice President of Technology
                </Text>
              </SimpleGrid>
            </h3>
            <UnorderedList marginLeft={10}>
              <ListItem>
                Designed 40+ graphical products (event posters, flyers, and
                presentations) using Canva Pro and Adobe Photoshop.
              </ListItem>
              <ListItem>
                Responsible for audio-visual coordination during in-person
                events.{' '}
              </ListItem>
            </UnorderedList>
            <List />
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold">
                Vietnam Olympiad in Informatics Community{' '}
              </Box>

              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <h3>
              <SimpleGrid columns={2} spacing={10} marginBottom={5}>
                <Text flex="1" textAlign="left" fontWeight="bold">
                  Volunteer Translator
                </Text>
              </SimpleGrid>
            </h3>
            <UnorderedList marginLeft={10}>
              <ListItem>
                Translated 30+ competitive programming problems from renowned
                contests including ACM-ICPC, COCI, Atcoder DP Educational from
                English to Vietnamese.
              </ListItem>
            </UnorderedList>
            <List />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  </Layout>
)

export default Resume
export { getServerSideProps } from '../components/chakra'
