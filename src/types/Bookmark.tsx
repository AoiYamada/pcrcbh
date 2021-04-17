import { MemberIds } from "./Member";

export type ListProps = {
  items: MemberIds[];
};

export type ListActionProps = {
  addPartyToList?: (ids: MemberIds) => void;
  removePartyFromList?: (idx: number) => void;
};
