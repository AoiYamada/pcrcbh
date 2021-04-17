import { Dispatch } from "react";
import { connect } from "react-redux";
import { AddPartyForm } from "../components/AddPartyForm";
import { addPartyToList, AddPartyToListAction } from "../redux/actions";
import { MemberIds } from "../types/Member";

const mapDispatchToProps = (dispatch: Dispatch<AddPartyToListAction>) => ({
  addPartyToList(ids: MemberIds): void {
    dispatch(addPartyToList(ids));
  },
});

export const AddPartyFormContainer = connect(
  null,
  mapDispatchToProps
)(AddPartyForm);
