import { Button } from "@chakra-ui/react";
import { Character } from "../Character";

interface Props {
  isAttackMode?: boolean;
  handleAttack: () => void;
}

const AttackButton = ({ isAttackMode, handleAttack }: Props) => {
  return <Button bgColor={"red.800"} onClick={handleAttack}> Attack </Button>;
};

export default AttackButton;
