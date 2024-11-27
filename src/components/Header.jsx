import { Group, Title, Image, Anchor } from "@mantine/core";
import { useState } from "react";

const buttons = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About",
    route: "/about",
  },
  {
    label: "Contact Us",
    route: "/contact",
  },
];

export default function Header() {
  const [active, setActive] = useState("Home");

  const mappedButtons = buttons.map(({ label, route }) => (
    <Anchor
      variant="transparent"
      c="white"
      underline="never"
      key={label}
      href={route}
      onClick={(event) => {
        event.preventDefault();
      }}
    >
      {label}
    </Anchor>
  ));

  return (
    <Group h="100%" justify="space-between">
      <Group gap={0}>
        <Image src="/df-detector-icon.svg" />
        <Title
          order={4}
          style={{ fontFamily: "var(--mantine-major-mono-display)" }}
        >
          DeepFake Detector
        </Title>
      </Group>

      <Group gap={32}>{mappedButtons}</Group>
    </Group>
  );
}
