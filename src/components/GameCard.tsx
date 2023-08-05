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
} from "@chakra-ui/react";
import { useState } from "react";
import AttackMenu from "./AttackMenu";
import { Character } from "../Character";
import AttackButton from "./AttackButton";

interface Props {
  character: Character;
  targetList?: Character[];
  handleAttack: () => void;
}
const GameCard = ({ character, handleAttack }: Props) => {
  return (
    <Card textColor="orange.400" height="400px" width="200px" borderRadius={5}>
      <CardBody>
        <Stack spacing={2}>
          <HStack justifyContent="space-between">
            <Text>{character.name}</Text>
            <Text>{character.type}</Text>
          </HStack>
          <Image
            width="100%"
            overflow="hidden"
            src={character.image}
            borderRadius={20}
          />
          <Divider borderColor="white" />
          <HStack flex="0" justifyContent="space-between">
            <Text> {character.health} </Text>
            <Text> {character.mana} </Text>
          </HStack>
          <Grid templateColumns="repeat(2, 1fr)" gap={2}>
            <AttackButton
              handleAttack={handleAttack}
            />
            <Button>Abilities</Button>
            <Button>Defend</Button>
            <Button>Item</Button>
          </Grid>
          <Progress value={50} borderRadius={20}>
            {" "}
          </Progress>
        </Stack>

      </CardBody>
    </Card>
  );
};

export default GameCard;
