import {
  Card,
  CardBody,
  Stack,
  HStack,
  Divider,
  Grid,
  Button,
  Progress,
  Image,
  Text,
  keyframes,
} from "@chakra-ui/react";
import React, { useState } from "react";
import AttackButton from "./AttackButton";
import AttackMenu from "./AttackMenu";
import { Character } from "../Character";

import "../EnemyCard.css";

interface Props {
  character: Character;
  isAttackMode: boolean;
  onClick?: () => void;
}

const EnemyCard = ({ isAttackMode, character, onClick }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    if (isAttackMode) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card
      textColor="orange.400"
      height={"400px"}
      width={isHovered ? "220px" : "200px"}
      borderRadius={5}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      border={isAttackMode ? "2px" : "0px"}
      borderColor={
        isHovered ? "red.900" : isAttackMode ? "whiteAlpha.900" : "initial"
      }
      cursor="pointer"
      onClick={isAttackMode && onClick ? onClick : undefined}
      className={isAttackMode ? "hover-animation" : ""}
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
          <Grid templateColumns="repeat(2, 1fr)" gap={2}></Grid>
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

export default EnemyCard;
