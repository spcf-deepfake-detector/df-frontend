import classes from "./Footer.module.css";
import {
  ActionIcon,
  Stack,
  Text,
  Title,
  Flex,
  Image,
  Group,
} from "@mantine/core";

// Icons
import TelephoneIcon from "../../assets/icons/TelephoneIcon.svg";
import MailIcon from "../../assets/icons/MailIcon.svg";
import FacebookIcon from "../../assets/icons/FacebookIcon.svg";

// Logos
import SPCF from "../../assets/images/SPCF.png";
import ICTDU from "../../assets/images/ICTDU.png";
import CCIS from "../../assets/images/CCIS.png";

// Components
import Container from "../Container.jsx";
import AppTitle from "../titles/AppTitle.jsx";
import IconLabel from "../labels/IconLabel.jsx";

const iconData = {
  contactUs: [
    {
      icon: TelephoneIcon,
      label: {
        title: "SPCF ICTDU",
        description: "0919-069-2914",
      },
    },
    {
      icon: MailIcon,
      label: {
        title: "Email",
        description: "spcf.ictdu@spcf.edu.ph",
      },
    },
  ],
};

export default function Footer({ ...props }) {
  const mappedContactUs = iconData.contactUs.map((dataProps) => (
    <IconLabel key={dataProps.label.title} {...dataProps} />
  ));

  return (
    <footer className={classes.Footer} {...props}>
      <div className={classes.SectionOne}>
        <Container py={48}>
          <Flex
            align="start"
            wrap="no-wrap"
            direction={{ base: "column", sm: "row" }}
            gap={32}
          >
            <Stack flex={1}>
              <AppTitle />

              <Text>
                Our deepfake detector identifies manipulated videos, ensuring
                authenticity and preventing fraudulent AI-generated content.
              </Text>

              <Text size="sm" className={classes.span}>
                Systems Plus College Foundation, 2024
              </Text>
            </Stack>

            <Stack pt={16} flex={1}>
              <Title order={4}>Contact Us</Title>
              {mappedContactUs}
            </Stack>

            <Stack pt={16} flex={1}>
              <Title order={4}>Follow Us</Title>

              <Group>
                <ActionIcon
                  component="a"
                  href="https://www.facebook.com/spcf.ictdu"
                  variant="outline"
                  radius="xl"
                  size="lg"
                  target="_blank"
                >
                  <Image h={16} src={FacebookIcon} alt="Facebook Icon" />
                </ActionIcon>
              </Group>
            </Stack>

            <Group pt={16}>
              <Image h={48} src={SPCF} alt="SPCF Logo" />
              <Image h={48} src={ICTDU} alt="ICTDU Logo" />
              <Image h={48} src={CCIS} alt="CCIS Logo" />
            </Group>
          </Flex>
        </Container>
      </div>

      <div className={classes.SectionTwo}>
        <Text size="sm">&copy; Systems Plus College Foundation</Text>
      </div>
    </footer>
  );
}
