import { useState } from "react";

import GameCard from "./components/PlayerCard";
import { Button, Grid, GridItem, Text } from "@chakra-ui/react";
import { Character } from "./Character";
import AttackMenu from "./components/AttackMenu";
import GameBoard from "./components/GameBoard";
import PlayerField from "./components/PlayerField";
import "./App.css";

function App() {
  const [player, setPlayer] = useState<Character>({
    id: 0,
    image: "./src/assets/dark-knight.webp",
    name: "Dark Knight",
    level: 1,
    health: 100,
    mana: 50,
    attack: 5,
    speed: 5,
    type: "Dark",
  });
  const [enemyList, setEnemyList] = useState<Character[]>([
    {
      id: 1,
      image: "./src/assets/goblin.webp",
      name: "GoblinA",
      level: 1,
      attack: 2,
      health: 100,
      mana: 50,
      speed: 5,
      type: "Rock",
    },
    {
      id: 2,
      image: "./src/assets/goblin.webp",
      name: "GoblinB",
      level: 1,
      attack: 2,
      health: 100,
      mana: 50,
      speed: 5,

      type: "Rock",
    },
    {
      id: 3,
      image: "./src/assets/goblin.webp",
      name: "GoblinC",
      level: 1,
      attack: 2,
      health: 100,
      mana: 50,
      speed: 5,

      type: "Rock",
    },
    {
      id: 4,
      image: "./src/assets/goblin.webp",
      name: "GoblinD",
      level: 1,
      attack: 2,
      health: 100,
      mana: 50,
      speed: 5,
      type: "Rock",
    },
    {
      id: 5,
      image: "./src/assets/goblin.webp",
      name: "GoblinE",
      level: 1,
      attack: 2,
      health: 100,
      mana: 50,
      speed: 5,
      type: "Rock",
    },
  ]);

  return (
    <GameBoard player={player} enemyList={enemyList} />
  );
}

export default App;
