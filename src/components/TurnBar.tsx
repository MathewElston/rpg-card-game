import { HStack, Progress } from "@chakra-ui/react";

interface Props {
  turnTimer: number;
}

const TurnBar = ({ turnTimer }: Props) => {
  return (
    <HStack width="100%" spacing={0}>
      {[1, 2, 3, 4, 5].map((index) => (
        <Progress
          key={index}
          flex="1"
          height="10px"
          value={turnTimer}
          borderRadius={index === 0 || index === 4 ? 3 : 0}
          bg={index % 2 === 0 ? "cyan.200" : "cyan.700"}
        />
      ))}
    </HStack>
  );
};

export default TurnBar;
