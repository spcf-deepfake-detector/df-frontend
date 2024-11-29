import { Flex, Grid, Text, Title, Image, Box } from "@mantine/core";
import Container from "../Container";
import IronMan1 from "../../assets/images/IronMan1.png";
import IronMan2 from "../../assets/images/IronMan1.png";

export default function ThirdSection() {
  return (
    <section>
      <Container py={120}>
        <Grid>
          <Grid.Col span={12}>
            <Flex justify="center">
              <Title fw={700} order={1}>
                How Deepfake Technology{" "}
                <Title order={1} component="span" c="#005DA9" fw={700}>
                  Creates Realistic Video
                </Title>
              </Title>
            </Flex>
          </Grid.Col>

          <Text size="xl" ta="center" my={30}>
            Deepfake technology uses{" "}
            <Text span size="xl" fw={700}>
              artificial intelligence (AI)
            </Text>{" "}
            and{" "}
            <Text span size="xl" fw={700}>
              machine learning
            </Text>{" "}
            to create highly realistic but fake videos. By leveraging powerful
            algorithms, deepfakes can manipulate existing footage to swap faces,
            alter expressions, or make someone appear to say or do something
            they never actually did.
          </Text>

          <Grid.Col span={{base: 12, md: 6}}>
              <Image src={IronMan1} width={400} radius={12}/>
              <Text fw={600} ta="center" mt={16}>Iron Man starring Tony Stark</Text>
          </Grid.Col>
          
          <Grid.Col span={{base: 12, md: 6}}>
              <Image src={IronMan1} width={400} radius={12}/>
              <Text fw={600} ta="center" mt={16}>A deepfake version with Tom Cruise as Iron Man.</Text>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
}
