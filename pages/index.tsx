import Link from 'next/link';
import Layout from '../components/Layout';
import Card from './index/Card';
import Discount from './index/Discount';
import {
  Box,
  ButtonReadMore,
  Container,
  Content,
  Header2,
  HomePageStyle,
  SubTitle,
  SubtitleMain,
  Title,
  Main,
  Cards,
} from '../components/HomePage.style';

const IndexPage = () => (
  <Layout>
    <HomePageStyle>
      <Container>
        <Box>
          <Title>IT´S TIME FOR HIKING</Title>
          <SubTitle>LOREMIPSUM DOLOR</SubTitle>
          <ButtonReadMore>Read More</ButtonReadMore>
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            iusmod tempor incididunt ut labore et dolore magna.
          </Content>
        </Box>
      </Container>
      <Main>
        <Header2>LET´S go</Header2>
        <SubtitleMain>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum.{' '}
        </SubtitleMain>
        <Cards>
          <Card
            imgCard='/Card1.png'
            titleCard='Lorem ipsum'
            contentCard='Lorem ipsum dolor sit amet, consectetur  adipisicing...'
          />
          <Card
            imgCard='/Card2.png'
            titleCard='Lorem ipsum'
            contentCard='Lorem ipsum dolor sit amet, consectetur  adipisicing...'
          />
          <Card
            imgCard='/Card3.png'
            titleCard='Lorem ipsum'
            contentCard='Lorem ipsum dolor sit amet, consectetur  adipisicing...'
          />
        </Cards>
      </Main>
      <Discount></Discount>
    </HomePageStyle>
  </Layout>
);

export default IndexPage;
