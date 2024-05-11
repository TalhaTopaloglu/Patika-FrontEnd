import GenaralContext from "../../context/GeneralContext";
import { useContext } from "react";

function ListInfo() {
  const { lastElements } = useContext(GenaralContext);

  return (
    <div>
      {lastElements.map((item) => {
        if (item.count > 0) {
          return (
            <li key={item.id}>
              {item.itemName} {item.itemCost} x {item.count} = {item.itemCost * item.count}
            </li>
          );
        }
      })}
    </div>
  );
}

export default ListInfo;
