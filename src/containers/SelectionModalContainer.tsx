import { Dispatch } from "redux";
import { connect } from "react-redux";
import { SelectionModal } from "../components/SelectionModal";
import {
  closeModal,
  CloseModalAction,
  openModal,
  OpenModalAction,
  selectMember,
  SelectMemberAction,
} from "../redux/actions";
import { Member, MemberIds } from "../types/Member";
import {
  CloseModelCallback,
  SelectionModalProps,
} from "../types/SelectionModal";

const mapStateToProps = ({ modal }: { modal: SelectionModalProps }) => modal;

const mapDispatchToProps = (
  dispatch: Dispatch<OpenModalAction | CloseModalAction | SelectMemberAction>
) => ({
  openModal(ids: MemberIds, closeModalCallback: CloseModelCallback): void {
    dispatch(openModal(ids, closeModalCallback));
  },
  closeModal(): void {
    dispatch(closeModal());
  },
  selectMember(id: Member["id"]): void {
    dispatch(selectMember(id));
  },
});

export const SelectionModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectionModal);
