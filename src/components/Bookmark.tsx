import { PartyContainer } from "../containers/PartyContainer";
import { ListActionProps, ListProps } from "../types/Bookmark";
import { ListItemWrapper } from "./styles/ListComponents";

export const Bookmark = ({
  items,
  removePartyFromList,
}: ListProps & ListActionProps) => {
  return (
    <div>
      {items.length ? (
        items.map((ids, idx) => (
          <ListItemWrapper key={idx} width="300px">
            <PartyContainer memberIds={ids}></PartyContainer>
            <button
              onClick={() => removePartyFromList && removePartyFromList(idx)}
            >
              x
            </button>
          </ListItemWrapper>
        ))
      ) : (
        <div>Empty</div>
      )}
    </div>
  );
};
