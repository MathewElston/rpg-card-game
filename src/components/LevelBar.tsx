import { HStack, Progress, Text } from "@chakra-ui/react";
import React from "react";
import { Character } from "../Character";

interface Props {
  character: Character;
  getXP: (xpValue: number) => number;
}

const LevelBar = ({ character, getXP }: Props) => {
  <HStack>
    <Progress />
    <Text> {character.level} </Text>
  </HStack>;
};

export default LevelBar;
