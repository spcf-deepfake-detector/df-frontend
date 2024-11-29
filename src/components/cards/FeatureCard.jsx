import { Card, Stack } from "@mantine/core";
import classes from "./FeatureCard.module.css";

export default function FeatureCard({ children, gap, ...props }) {
  return (
    <Card
      className={classes.FeatureCard}
      radius="md"
      padding={30}
      {...props}
    >
      <Stack gap={gap}>{children}</Stack>
    </Card>
  );
}
