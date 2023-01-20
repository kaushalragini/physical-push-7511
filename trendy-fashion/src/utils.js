import { getmenFootwear } from "./Redux/AppData/action";
import { getmenAccessories } from "./Redux/AppData/action";
import { getmenClothing } from "./Redux/AppData/action";
import {
  getwomenAccessories,
  getwomenClothing,
  getwomenFootwear,
} from "./Redux/WomenAppData/action";
export const callData = (param, dispatch, defaultParams = {}) => {
  switch (param) {
    default:
      return [];
    case "footwear":
      dispatch(getmenFootwear(defaultParams));
    case "accessories":
      dispatch(getmenAccessories(defaultParams));
    case "clothing":
      dispatch(getmenClothing(defaultParams));
  }
};

export const callWomenData = (param, dispatch, defaultParams = {}) => {
  switch (param) {
    default:
      return [];
    case "footwear":
      dispatch(getwomenFootwear(defaultParams));
    case "accessories":
      dispatch(getwomenAccessories(defaultParams));
    case "clothing":
      dispatch(getwomenClothing(defaultParams));
  }
};

const menBrandData = {
  footwear: [
    "ADIDAS",
    "ARBUNORE",
    "ACTION",
    "BUCIK",
    "NIKE",
    "CROCS",
    "CAMPUS",
    "MOCHI",
  ],
  clothing: [
    "iVOC",
    "PERFORMAX",
    "NETPLAY",
    "GLITO",
    "DENNISLINGO PREMIUM ATTIRE",
    "JOHN PLAYERS JEANS",
    "Lee Cooper",
  ],
  accessories: [
    "ADIDAS",
    "ALLEN SOLLY",
    "ARMANI EXCHANGE",
    "BUFFALO",
    "BANGALORE REFINERY",
    "CASIO",
    "FOSSIL",
    "SHINNING DIVA",
  ],
};

export const getBrandData = (param) => {
  return menBrandData[param];
};
