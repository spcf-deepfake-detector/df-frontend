import { Container as MantineContainer } from "@mantine/core";
export default function Container({ children, ...props }) {
  return (
    <MantineContainer h="100%" size={1280} {...props}>
      {children}
    </MantineContainer>
  );
}
