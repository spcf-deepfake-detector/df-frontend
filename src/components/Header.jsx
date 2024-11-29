import { Burger, Group, Stack } from "@mantine/core";

// Hooks
import { useState, useEffect } from "react";
import { useDisclosure } from "@mantine/hooks";

// Components
import AppTitle from "./titles/AppTitle.jsx";
import NavDrawer from "./drawers/NavDrawer.jsx";
import NavButton from "./buttons/NavButton.jsx";
import NavLink from "./buttons/NavLink.jsx";

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
  const [opened, { toggle }] = useDisclosure(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const handleActive = (label, id) => {
    setActive(label);
    scrollToSection(id);

    if (opened) {
      toggle();
    }
  };

  const mappedButtons = buttons.map(({ label, id }) => (
    <NavButton
      key={label}
      active={active}
      label={label}
      onClick={() => handleActive(label, id)}
    />
  ));

  const mappedLinks = buttons.map(({ label, id }) => (
    <NavLink
      key={label}
      active={active}
      label={label}
      onClick={() => handleActive(label, id)}
    />
  ));

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const button = buttons.find((btn) => btn.id === sectionId);
          if (button) {
            setActive(button.label);
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, observerOptions);

    // Observe all sections
    buttons.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Group h="100%" justify="space-between">
        <AppTitle />

        <Group gap={32} visibleFrom="sm">
          {mappedButtons}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          color="white"
        />
      </Group>

      <NavDrawer drawer={{ opened, toggle }} links={mappedLinks}>
        <Stack>{mappedLinks}</Stack>
      </NavDrawer>
    </>
  );
}
