import classes from "./SecondSection.module.css";
import { Title, Text, Image, Box, Flex } from "@mantine/core";

// Icons
import EmoteCaptureIcon from "../../assets/icons/EmoteCaptureIcon.svg";
import RobotIcon from "../../assets/icons/RobotIcon.svg";
import LineChartIcon from "../../assets/icons/LineChartIcon.svg";

// Components
import Container from "../Container.jsx";
import FeatureCard from "../cards/FeatureCard.jsx";

const cardData = [
  {
    image: EmoteCaptureIcon,
    title: "Face Detection & Alignment",
    description:
      "The system analyzes the facial features, expressions, and movements of individuals in the video.",
  },
  {
    image: RobotIcon,
    title: "Behavioral Pattern Recognition",
    description:
      "Our AI compares the video's behavioral patterns against a database of both real and deepfake content.",
  },
  {
    image: LineChartIcon,
    title: "Report Generation & Analysis",
    description:
      "A detailed report is generated, providing insights into the video's authenticity.",
  },
];

export default function SecondSection({ ...props }) {
  const mappedCards = cardData.map(({ image, title, description }) => (
    <FeatureCard key={title} gap={24} flex={1}>
      <Image w={35} src={image} alt={title} />
      <Title order={2} fw={500}>
        {title}
      </Title>

      <Text>{description}</Text>
    </FeatureCard>
  ));

  return (
    <section className={classes.SecondSection} {...props}>
      <Container>
        <Title order={1} ta="center" mb={24}>
          How Our Deepfake Detector{" "}
          <span className={classes.blueText}>Detects Manipulated Videos</span>
        </Title>

        <Text fz={{ base: "md", sm: "xl" }} ta="center" mb={24}>
          <span className={classes.boldText}>
            SPCF ICTDU Deepfake Video Detection
          </span>{" "}
          ensures video authenticity by detecting deepfake manipulations. It
          identifies altered videos and distinguishes them from genuine
          recordings, helping prevent fraud and misuse of AI-generated content
          in video verification systems.
        </Text>

        <Box>
          <Flex
            mx="auto"
            direction={{ base: "column", sm: "row" }}
            align="stretch"
            gap={32}
            className={classes.cardContainer}
          >
            {mappedCards}
          </Flex>
        </Box>
      </Container>
    </section>
  );
}
