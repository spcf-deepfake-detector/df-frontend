import { Anchor } from "@mantine/core";
import classes from "./NavButton.module.css";

export default function NavButton({ active, label, onClick }) {
  return (
    <Anchor
      className={classes.NavButton}
      data-active={label === active || undefined}
      underline="never"
      key={label}
      onClick={(event) => {
        event.preventDefault();
        onClick();
      }}
    >
      {label}
    </Anchor>
  );
}
