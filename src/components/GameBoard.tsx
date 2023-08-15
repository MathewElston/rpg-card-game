import {
  Box,
  Grid,
  GridItem,
  HStack,
  Progress,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import { Character } from "../Character";
import GameCard from "./PlayerCard";
import EnemyCard from "./EnemyCard";
import EnemyField from "./EnemyField";
import PlayerField from "./PlayerField";
import { useState } from "react";
import AttackMenu from "./AttackMenu";
import { progress } from "framer-motion";
import mainFrameLoop from "../utilities/mainFrameLoop";

interface Props {
  player: Character;
  enemyList: Character[];
}
const GameBoard = ({ player, enemyList }: Props) => {
  const [playerStats, setPlayerStats] = useState<Character>(player);
  const [enemyStats, setEnemyStats] = useState<Character[]>(enemyList);

  const [toggleAttack, setToggleAttack] = useState(false);

  const { frameCount } = mainFrameLoop(Date.now());

  const handleAttack = (attacker: Character, target: Character) => {
    const updatedHealth = target.health - attacker.attack;
    const updatedTarget: Character = { ...target, health: updatedHealth };

    if (updatedHealth <= 0) {
      setEnemyStats((prevEnemyStats) =>
        prevEnemyStats.filter((enemy) => enemy.id !== target.id)
      );
    } else {
      setEnemyStats((prevEnemyStats) =>
        prevEnemyStats
          .map((enemy) => (enemy.id === target.id ? updatedTarget : enemy))
          .filter((enemy) => enemy.health > 0)
      );
    }
    setToggleAttack(false);
  };

  return (
    <SimpleGrid column={1} spacing={10}>
      <SimpleGrid columns={5} spacing={5} marginTop={10}>
        {enemyStats.map((enemy) => (
          <EnemyCard
            key={enemy.id}
            character={enemy}
            isAttackMode={toggleAttack}
            onClick={
              toggleAttack ? () => handleAttack(player, enemy) : undefined
            }
          />
        ))}
      </SimpleGrid>
      <GridItem display="flex" justifyContent="center" alignItems="center">
        <Box>
          <HStack>
            <GameCard
              character={playerStats}
              targetList={enemyStats}
              isAttackMode={toggleAttack}
              handleAttack={() => {
                toggleAttack ? setToggleAttack(false) : setToggleAttack(true);
              }}
            />
          </HStack>
        </Box>
      </GridItem>
    </SimpleGrid>
  );
};

export default GameBoard;
