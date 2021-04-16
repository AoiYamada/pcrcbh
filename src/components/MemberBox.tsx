import { Member } from "../types/Member";
import { Box, EmptyIcon, Icon } from "./styles/MemberBoxComponents";

export const MemberBox = ({ id, name, icon, nicknames }: Member) => (
  <Box key={id}>
    {icon === "empty" ? (
      <EmptyIcon>+</EmptyIcon>
    ) : (
      <Icon src={`/pcrcbh/images/${icon}`} alt={name}></Icon>
    )}
  </Box>
);
