import { useState } from "react";

import GameCard from "./components/PlayerCard";
import { Button, Grid, GridItem } from "@chakra-ui/react";
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
    health: 100,
    mana: 50,
    attack: 5,
    type: "Dark",
  });
  const [enemyList, setEnemyList] = useState<Character[]>([
    {
      id: 1,
      image: "./src/assets/goblin.webp",
      name: "GoblinA",
      attack: 2,
      health: 100,
      mana: 50,
      type: "Rock",
    },
    {
      id: 2,
      image: "./src/assets/goblin.webp",
      name: "GoblinB",
      attack: 2,
      health: 100,
      mana: 50,
      type: "Rock",
    },
    {
      id: 3,
      image: "./src/assets/goblin.webp",
      name: "GoblinC",
      attack: 2,
      health: 100,
      mana: 50,
      type: "Rock",
    },
    {
      id: 4,
      image: "./src/assets/goblin.webp",
      name: "GoblinD",
      attack: 2,
      health: 100,
      mana: 50,
      type: "Rock",
    },
    {
      id: 5,
      image: "./src/assets/goblin.webp",
      name: "GoblinE",
      attack: 2,
      health: 100,
      mana: 50,
      type: "Rock",
    },
  ]);

  return (
    <>
      <GameBoard player={player} enemyList={enemyList} />
    </>
  );
}

export default App;
