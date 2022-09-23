import Link from 'next/link';
import Layout from '../components/Layout';
import {
  ButtonReadMore,
  Container,
  Content,
  HomePageStyle,
  SubTitle,
  Title,
} from './index/HomePage.style';

const IndexPage = () => (
  <Layout>
    <HomePageStyle>
      <Container>
        <Title>IT´S TIME FOR HIKING</Title>
        <SubTitle>LOREMIPSUM DOLOR</SubTitle>
        <ButtonReadMore>Read More</ButtonReadMore>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do iusmod
          tempor incididunt ut labore et dolore magna.
        </Content>
      </Container>
    </HomePageStyle>
  </Layout>
);

export default IndexPage;
