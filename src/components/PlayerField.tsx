import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { Character } from "../Character";
import GameCard from "./PlayerCard";

interface Props {
  player: Character;
  enemyList: Character[];
}

const PlayerField = ({ player, enemyList }: Props) => {
  return (
    <Box>
      <GameCard character={player} targetList={enemyList} />
    </Box>
  );
};

export default PlayerField;
