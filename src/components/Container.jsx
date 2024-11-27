import { Container as MantineContainer } from "@mantine/core";
export default function Container({ children }) {
  return (
    <MantineContainer h="100%" size={1280}>
      {children}
    </MantineContainer>
  );
}
