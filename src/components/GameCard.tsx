import {
  Box,
  Button,
  Card,
  CardBody,
  Divider,
  HStack,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import darkKnight from "../assets/dark-knight.webp";
const GameCard = () => {
  return (
    <Card textColor="orange.400" height="400px" width="200px" borderRadius={5}>
      <CardBody>
        <Image
          width="100%"
          overflow="hidden"
          src={darkKnight}
          borderRadius={20}
        />
        <Divider marginTop={2} borderColor="white" />
        <HStack justifyContent={"space-between"}>
          <Text>Name</Text>
          <Text>-</Text>
          <Text>Type</Text>
        </HStack>
        <Divider marginTop={2} borderColor="white" />
        <Box>
          <HStack>
            <Button>Attack</Button>
            <Button>Abilities</Button>
          </HStack>
          <HStack>
            <Button>Defend</Button>
            <Button>Item</Button>
          </HStack>
        </Box>
      </CardBody>
    </Card>
  );
};

export default GameCard;
