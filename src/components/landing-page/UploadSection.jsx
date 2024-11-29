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
    <Image key={"image" + index} src={image} h={{ base: 50, md: 50 }} />
  ));

  return (
    <section className={classes.UploadSection} {...props}>
      <Container py={120}>
        <Group className={classes.ImagesPosition}>{logoImages}</Group>
        <Flex
          align="center"
          gap={{ base: 35, md: 40 }}
          mt={{ base: 25, md: 0 }}
          justify="space-between"
          h={500}
          direction={{ base: "column", md: "row" }}
        >
          <Stack
            gap="lg"
            align={{ base: "center", md: "" }}
            className={classes.TextWidth}
          >
            <Title fz={{ base: 35, sm: 50, md: 45, lg: 50 }} c="white">
              Stay Protected Against Deepfake Manipulation
            </Title>
            <Text fz={{ base: 14, md: 18, lg: 20 }} c="white">
              Our deepfake detection uses AI-powered technology to identify
              whether video content is real or manipulated.
            </Text>
          </Stack>
          <UploadCard />
        </Flex>
      </Container>
    </section>
  );
}
