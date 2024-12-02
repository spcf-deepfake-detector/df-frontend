import classes from "./FourthSection.module.css";

// Components
import Container from "../Container.jsx";
import SectionTitle from "../titles/SectionTitle.jsx";
import FeatureCard from "../cards/FeatureCard.jsx";
import { Title, Text, Grid } from "@mantine/core";

const cardData = [
  {
    title: "Preventing Misinformation",
    description:
      "Deepfakes can be used to spread false information, especially in news, politics, and social media. A deepfake detector helps identify and stop the distribution of manipulated content, ensuring viewers are not misled.",
  },
  {
    title: "Protecting Personal and Reputation",
    description:
      "Deepfakes can be used to spread false information, especially in news, politics, and social media. A deepfake detector helps identify and stop the distribution of manipulated content, ensuring viewers are not misled.",
  },
  {
    title: "Safeguarding Against Fraud",
    description:
      "Deepfakes can be used to impersonate individuals, including CEOs, politicians, or celebrities, for fraudulent purposes like financial scams or blackmail. A deepfake detector helps prevent these malicious acts by identifying manipulated videos.",
  },
  {
    title: "Maintaining Social Media Integrity",
    description:
      "Deepfake videos can go viral quickly on social media, causing widespread harm before they are flagged.",
  },
  {
    title: "Defending Against  Threats",
    description:
      " Deepfakes can be used for phishing or social engineering attacks, where fraudsters impersonate trusted figures. A deepfake detector helps prevent these cybersecurity risks by detecting altered videos before they are exploited.",
  },
  {
    title: "Public Awareness and Education",
    description:
      "As deepfakes become more common, raising awareness about their existence and potential harms is crucial. Deepfake detectors play an educational role by showing people how to spot manipulated content and promoting a more informed society.",
  },
];

export default function FourthSection({ ...props }) {
  const mappedCards = cardData.map(({ title, description }) => (
    <Grid.Col span={{ base: 12, sm: 6, md: 4 }} key={title}>
      <FeatureCard gap={24} h="100%">
        <Title fz={{ base: 24, md: 34 }} fw={500}>
          {title}
        </Title>
        <Text>{description}</Text>
      </FeatureCard>
    </Grid.Col>
  ));

  return (
    <section className={classes.FourthSection} {...props}>
      <Container>
        <SectionTitle
          title="Ensuring Content Authenticity"
          subtitle="The Importance of using Deepfake Detection"
          color="white"
          mb={36}
        />

        <Grid gutter={28}>{mappedCards}</Grid>
      </Container>
    </section>
  );
}
