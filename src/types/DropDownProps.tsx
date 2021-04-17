import { Dispatch, SetStateAction } from "react";
import { MemberIds } from "./Member";

export type DropDownProps = {
  items: MemberIds[];
  setMemberIds: Dispatch<SetStateAction<MemberIds>>;
  isOpened: boolean;
  closeDropDown: () => void;
};
