import classes from "./Footer.module.css";
import { Group, Stack, Text, Title } from "@mantine/core";

// Icons
import TelephoneIcon from "../../assets/icons/TelephoneIcon.svg";
import MailIcon from "../../assets/icons/MailIcon.svg";
import PinpointIcon from "../../assets/icons/PinpointIcon.svg";

// Components
import Container from "../Container.jsx";
import AppTitle from "../AppTitle.jsx";
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
  location: [
    {
      icon: PinpointIcon,
      label: {
        title: "SPCF",
        description: "Sta. Isabel Bldg., Balibago, Angeles City",
      },
    },
  ],
};

export default function Footer() {
  const mappedContactUs = iconData.contactUs.map((dataProps) => (
    <IconLabel key={dataProps.label.title} {...dataProps} />
  ));

  const mappedLocation = iconData.location.map((dataProps) => (
    <IconLabel key={dataProps.label.title} {...dataProps} />
  ));

  return (
    <footer className={classes.Footer}>
      <div className={classes.SectionOne}>
        <Container py={64}>
          <Group align="start" wrap="no-wrap">
            <Stack w="30%">
              <AppTitle />

              <Text>
                Our deepfake detector identifies manipulated videos, ensuring
                authenticity and preventing fraudulent AI-generated content.
              </Text>

              <Text size="sm" className={classes.span}>
                Systems Plus College Foundation, 2024
              </Text>
            </Stack>

            <Stack flex={1}>
              <Title order={4}>Contact Us</Title>
              {mappedContactUs}
            </Stack>
            <Stack flex={1}>
              <Title order={4}>Location</Title>
              {mappedLocation}
            </Stack>
            <Stack >
              <Title order={4}>Follow Us</Title>
            </Stack>
          </Group>
        </Container>
      </div>
    </footer>
  );
}
