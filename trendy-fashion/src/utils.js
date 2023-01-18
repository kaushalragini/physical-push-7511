import { getmenFootwear } from "./Redux/AppData/action";
import { getmenAccessories } from "./Redux/AppData/action";
import { getmenClothing } from "./Redux/AppData/action";
export const callData = (param, dispatch) => {
  switch (param) {
    default:
      return [];
    case "footwear":
      dispatch(getmenFootwear());
    case "accessories":
      dispatch(getmenAccessories());
    case "clothing":
      dispatch(getmenClothing());
  }
};
