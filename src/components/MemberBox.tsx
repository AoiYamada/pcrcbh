import { characterInfo } from "../constants/characterInfo";
import { Member } from "../types/Member";
import { Box, EmptyIcon, Icon } from "./styles/MemberBoxComponents";

const getCharacterInfo = (id: number) => characterInfo[id];

export const MemberBox = (id: Member["id"] | null, key: number) => {
  if (id === null) {
    return <Box key={key}>{<EmptyIcon>+</EmptyIcon>}</Box>;
  }

  const { name, icon } = getCharacterInfo(id);

  return (
    <Box key={key}>
      {<Icon src={`/pcrcbh/images/${icon}`} alt={name}></Icon>}
    </Box>
  );
};
