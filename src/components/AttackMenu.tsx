import { useState } from "react";
import { Character } from "../Character";
import { Card, CardBody, Link, Stack, Text } from "@chakra-ui/react";

interface Props {
  attacker: Character;
  targetList?: Character[];
  handleAttack: (attacker: Character, target: Character) => void;
}

const AttackMenu = ({ attacker, handleAttack, targetList }: Props) => {
  return (
    <Card>
      <CardBody>
        <Stack>
          <Text> Choose a target</Text>
          {targetList?.map((target) => (
            <Link
              _hover={{ textColor: "red.600" }}
              key={target.id}
              onClick={() => handleAttack(attacker, target)}
            >
              {target.name}
            </Link>
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
};

export default AttackMenu;
