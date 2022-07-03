import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Personal Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="Memories" title="Memories" thumbnail={thumbInkdrop}>
            A web-blog application for keeping memory notes using React, Redux
            and MongoDB
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="Crypto Price Tracker"
            title="Crypto Price Tracker"
            thumbnail={thumbWalknote}
          >
            A real-time cryptocurrencies price tracker with charts using React
            Native, Rainbow.me, CoinGekoAPI, Axios and ContextAPI
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="H40RX News"
            title="H40RX News"
            thumbnail={thumbFourPainters}
          >
           An iOS/MacOS-based application to display and access hacker news using SwiftUI and Hacker News API
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="Menkiki">
            An app that suggests ramen(noodle) shops based on a given photo of
            the ramen you want to eat
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
