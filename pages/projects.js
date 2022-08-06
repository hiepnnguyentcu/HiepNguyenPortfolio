import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbEthrift from '../public/images/works/ethrift_01.png'
import thumbCryptoTracker from '../public/images/works/cryptotracker.png'
import thumbH40RXNews from '../public/images/works/h40rxnews.png'
import thumbMemories from '../public/images/works/memories.png'

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Personal Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            link="https://github.com/hiepnnguyentcu/EThrift"
            title="EThrift"
            thumbnail={thumbEthrift}
          >
            EThrift is a role-based fashion marketplace mobile application with
            friendly user-interface for easy buy and trade!
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            link="https://github.com/hiepnnguyentcu/CryptoTracker"
            title="Crypto Price Tracker"
            thumbnail={thumbCryptoTracker}
          >
            A real-time cryptocurrencies price tracker with charts using React
            Native, Rainbow.me, CoinGekoAPI, Axios and ContextAPI
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            link="https://github.com/hiepnnguyentcu/H4X0R-News"
            title="H40RX News"
            thumbnail={thumbH40RXNews}
          >
            An iOS/MacOS-based application to display and access hacker news
            using SwiftUI and Hacker News API
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            link="https://github.com/hiepnnguyentcu/Memories-Blog"
            thumbnail={thumbMemories}
            title="Memories"
          >
            A web-blog application for keeping memory notes and images using React, Redux
            and MongoDB
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />
      </Section>
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'
