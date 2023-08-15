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
import { Character } from "../Character";
import AttackButton from "./AttackButton";

interface Props {
  character: Character;
  className?: string;
  targetList?: Character[];
  isAttackMode?: boolean;
  handleAttack: () => void;
}
const GameCard = ({
  character,
  className,
  handleAttack,
  isAttackMode,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Card
      className={className}
      textColor="orange.400"
      height="400px"
      width="200px"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      border={isHovered ? "1px" : "0px"}
      borderColor={isHovered ? "red.700" : "initial"}
    >
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
              isAttackMode={isAttackMode}
              handleAttack={handleAttack}
            />
            <Button>Abilities</Button>
            <Button>Defend</Button>
            <Button>Item</Button>
          </Grid>
          <Progress
            width="100%"
            max={100}
            borderRadius={20}
          />
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
