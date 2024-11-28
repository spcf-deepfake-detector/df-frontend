import { Group, UnstyledButton, Text } from "@mantine/core";
import classes from "./NavLink.module.css";

export default function NavLink({ active, label, onClick }) {
  return (
    <UnstyledButton
      p={16}
      className={classes.NavLink}
      data-active={label === active || undefined}
      onClick={onClick}
    >
      <Group>
        <Text>{label}</Text>
      </Group>
    </UnstyledButton>
  );
}
