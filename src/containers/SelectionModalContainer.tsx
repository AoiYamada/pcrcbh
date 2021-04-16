import { Dispatch } from "redux";
import { connect } from "react-redux";
import { SelectionModal } from "../components/SelectionModal";
import {
  closeModal,
  CloseModalAction,
  openModal,
  OpenModalAction,
  setModalSelection,
  SetModalSelectionAction,
} from "../redux/actions";
import { MemberIds } from "../types/Member";
import {
  CloseModelCallback,
  SelectionModalProps,
} from "../types/SelectionModal";

const mapStateToProps = ({ modal }: { modal: SelectionModalProps }) => modal;

const mapDispatchToProps = (
  dispatch: Dispatch<
    OpenModalAction | CloseModalAction | SetModalSelectionAction
  >
) => ({
  openModal(ids: MemberIds, closeModalCallback: CloseModelCallback): void {
    dispatch(openModal(ids, closeModalCallback));
  },
  closeModal(): void {
    dispatch(closeModal());
  },
  setModalSelection(ids: MemberIds): void {
    dispatch(setModalSelection(ids));
  },
});

export const SelectionModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectionModal);
