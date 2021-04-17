import { connect } from "react-redux";
import { ListProps } from "../types/Bookmark";
import { DropDownSelection } from "../components/DropDownSelection";

const mapStateToProps = ({ list }: { list: ListProps }) => list;

export const DropDownSelectionContainer = connect(mapStateToProps)(
  DropDownSelection
);
