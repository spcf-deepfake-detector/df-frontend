import { Flex, Stack, Text, Title, Group, Image } from "@mantine/core";

// Components
import UploadCard from "../UploadCard.jsx";
import Container from "../Container.jsx";

// CSS Modules
import classes from "./UploadSection.module.css";

// Media
import CCISLogo from "../../assets/images/CCIS.png";
import SPCFLogo from "../../assets/images/SPCF.png";
import ICTDULogo from "../../assets/images/ICTDU.png";

const images = [CCISLogo, SPCFLogo, ICTDULogo];

export default function UploadSection({ ...props }) {
  const logoImages = images.map((image, index) => (
    <Image key={"image" + index} src={image} w={{ base: 65, md: 50 }} />
  ));

  return (
    <section className={classes.UploadSection} {...props}>
      <Container py={120}>
        <Group justify={{ base: "center" }}>{logoImages}</Group>
        <Flex
          align="center"
          gap={50}
          h={{ base: 500, md: 600 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack
            gap="lg"
            w={{ base: 700, md: 1000 }}
            align={{ base: "center", md: "" }}
          >
            <Title fz={{ base: 55, md: 38, lg: 50 }} c="white">
              Stay protected against deepfake manipulation
            </Title>
            <Text fz={{ base: 13, md: 15, lg: 20 }} c="white">
              Our deepfake detection solution offers 90% accuracy for video
              content, identifying if it's real or manipulated using advanced
              AI-powered technology.
            </Text>
          </Stack>
          <UploadCard />
        </Flex>
      </Container>
    </section>
  );
}
