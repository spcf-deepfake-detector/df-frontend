import { Drawer } from "@mantine/core";
import classes from "./NavDrawer.module.css";

export default function NavDrawer({ drawer: { opened, toggle }, children }) {
  return (
    <Drawer
      opened={opened}
      onClose={toggle}
      classNames={{
        header: classes.NavDrawer,
        content: classes.NavDrawer,
      }}
      size="100%"
      title="Navigation"
      transitionProps={{
        transition: "fade",
        duration: 150,
        timingFunction: "linear",
      }}
      closeButtonProps={{
        style: { color: "white", backgroundColor: "transparent" },
      }}
    >
      {children}
    </Drawer>
  );
}
