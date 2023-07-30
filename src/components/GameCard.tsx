import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Divider,
  Grid,
  HStack,
  Image,
  Progress,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import darkKnight from "../assets/dark-knight.webp";
const GameCard = () => {
  return (
    <Card textColor="orange.400" height="400px" width="200px" borderRadius={5}>
      <CardBody>
        <Stack spacing={2}>
        <HStack justifyContent="space-between">
            <Text>Name</Text>
            <Text>Type</Text>
          </HStack>
          <Image
            width="100%"
            overflow="hidden"
            src={darkKnight}
            borderRadius={20}
          />
          <Divider borderColor="white" />
          <HStack flex="0" justifyContent="space-between">
            <Text> Health </Text>
            <Text> Mana </Text>
          </HStack>
          <Grid templateColumns="repeat(2, 1fr)" gap={2}>
            <Button>Attack</Button>
            <Button>Abilities</Button>
            <Button>Defend</Button>
            <Button>Item</Button>
          </Grid>
          <Progress value={50} borderRadius={20}> </Progress>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
