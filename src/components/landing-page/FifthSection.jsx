import Container from "../Container";
import SectionTitle from "../titles/SectionTitle.jsx";
import { Grid, Image, Title, Text, Avatar, Flex } from "@mantine/core";
import Laptop from "../../assets/images/Laptop.jpg";
import Ipad from "../../assets/images/Ipad.jpg";
import ArrowRight from "../../assets/icons/ArrowRight.png";

export default function FifthSection() {
  return (
    <section>
      <Container py={64}>
        <SectionTitle
          title="The Surge of Deepfake Scams"
          subtitle="In-Depth Look of Growing Threat of AI Deception"
          color="black"
          mb={36}
        />

        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }} mb={{ base: 0, md: 60 }}>
            <Image src={Ipad} radius={12} />
          </Grid.Col>
          <Grid.Col
            span={{ base: 12, md: 6 }}
            py={{ base: 20, md: 40 }}
            mb={{ base: 40, md: 60 }}
          >
            <Title order={1}>
              Finance worker pays out $25 million after video call with deepfake
            </Title>
            <Text mt={16} size="lg">
              Heidi Swan, who is a 62 year old healthcare worker eventually fell
              victim to a sophisticated scam involving deepfake technology that
              impersonated Elon Musk.
            </Text>

            <a
              href="https://edition.cnn.com/2024/02/04/asia/deepfake-cfo-scam-hong-kong-intl-hnk/index.html"
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              <Flex align="center" justify="start" mt={30}>
                <Avatar color="blue" variant="filled" radius="xl" mr={16}>
                  <img src={ArrowRight} alt="" />
                </Avatar>
                <Text td="underline" c="black">
                  Read More About This
                </Text>
              </Flex>
            </a>
          </Grid.Col>

          <Grid.Col
            span={{ base: 12, md: 6 }}
            py={{ base: 20, md: 40 }}
            order={{ base: 4, md: 3 }}
          >
            <Title order={1}>
              High-tech thieves use AI to create deepfakes of Elon Musk, scam
              millions from Americans
            </Title>
            <Text mt={16} size="lg">
              A finance worker at a multinational firm was tricked into paying
              out $25 million to fraudsters using deepfake technology to pose as
              the company’s chief financial officer in a video conference call,
              according to Hong Kong police.
            </Text>

            <a
              href="https://economictimes.indiatimes.com/news/international/us/beware-high-tech-thieves-use-ai-to-create-deepfakes-of-elon-musk-scam-millions-from-americans-heres-how-they-do-it/articleshow/115708724.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst"
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              <Flex align="center" justify="start" mt={30}>
                <Avatar color="blue" variant="filled" radius="xl" mr={16}>
                  <img src={ArrowRight} alt="" />
                </Avatar>
                <Text td="underline" c="black">
                  Read More About This
                </Text>
              </Flex>
            </a>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 3, md: 4 }}>
            <Image src={Laptop} radius={12} />
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
}
