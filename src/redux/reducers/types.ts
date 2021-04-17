import { ListProps } from "../../types/Bookmark";
import { SelectionModalProps } from "../../types/SelectionModal";

export type RootState = {
  modal: SelectionModalProps;
  list: ListProps;
};
