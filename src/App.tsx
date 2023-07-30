import { useState } from "react";

import "./App.css";
import GameCard from "./components/GameCard";
import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Grid>
        <GameCard />
        <GridItem></GridItem>
      </Grid>
    </>
  );
}

export default App;
