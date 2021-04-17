import { Dispatch } from "redux";
import { connect } from "react-redux";
import {
  removePartyFromList,
  RemovePartyFromListAction,
} from "../redux/actions";
import { ListProps } from "../types/Bookmark";
import { Bookmark } from "../components/Bookmark";

const mapStateToProps = ({ list }: { list: ListProps }) => list;

const mapDispatchToProps = (dispatch: Dispatch<RemovePartyFromListAction>) => ({
  removePartyFromList(idx: number): void {
    dispatch(removePartyFromList(idx));
  },
});

export const BookmarkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Bookmark);
