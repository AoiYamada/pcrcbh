import { ListActionProps, ListProps } from "../types/Bookmark";
import { Party } from "./Party";
import { ListItemWrapper } from "./styles/ListComponents";

export const Bookmark = ({
  items,
  removePartyFromList,
}: ListProps & ListActionProps) => {
  return (
    <div>
      {items.map((ids, idx) => (
        <ListItemWrapper key={idx}>
          <Party memberIds={ids}></Party>
          <button
            onClick={() => removePartyFromList && removePartyFromList(idx)}
          >
            x
          </button>
        </ListItemWrapper>
      ))}
    </div>
  );
};
