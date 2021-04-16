import { Dispatch } from "react";
import { connect } from "react-redux";
import { Party } from "../components/Party";
import { openModal, OpenModalAction } from "../redux/actions";
import { MemberIds } from "../types/Member";
import { CloseModelCallback } from "../types/SelectionModal";

const mapDispatchToProps = (dispatch: Dispatch<OpenModalAction>) => ({
  openModal(ids: MemberIds, closeModalCallback: CloseModelCallback): void {
    dispatch(openModal(ids, closeModalCallback));
  },
});

export const PartyContainer = connect(null, mapDispatchToProps)(Party);
