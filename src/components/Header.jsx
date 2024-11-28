import { Group } from "@mantine/core";
import NavButton from "./buttons/NavButton";
import { useState } from "react";

// Components
import AppTitle from "./AppTitle.jsx";

const buttons = [
  {
    label: "Home",
    id: "home",
  },
  {
    label: "About",
    id: "about",
  },
  {
    label: "Contact Us",
    id: "contact",
  },
];

export default function Header() {
  const [active, setActive] = useState("Home");

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const handleActive = (label, id) => {
    setActive(label);
    scrollToSection(id);
  };

  const mappedButtons = buttons.map(({ label, id }) => (
    <NavButton
      key={label}
      active={active}
      label={label}
      onClick={() => handleActive(label, id)}
    />
  ));

  return (
    <Group h="100%" justify="space-between">
      <AppTitle />

      <Group gap={32}>{mappedButtons}</Group>
    </Group>
  );
}
