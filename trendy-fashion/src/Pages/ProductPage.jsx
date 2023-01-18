
import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataCard from "../Components/DataCard";
import { getmenFootwear } from "../Redux/AppData/action";
import { useParams } from "react-router-dom";
import { callData } from "../utils";
import Filter from "../Components/Filter"
import "../Style/ProductPage.css"
export default function ProductPage() {
  const dispatch = useDispatch()
  const { param } = useParams();
  const data = useSelector((store) => store.AppReducer);
  let displayData = [];
  switch (param) {
    default:
      displayData = [];
      break;
    case "footwear":
      displayData = data.menFootwear;
      break;
    case "accessories":
      displayData = data.menAccessories;
      break;
    case "clothing":
      displayData = data.menClothing;
      break;
  }

  useEffect(() => {
    callData(param, dispatch);
  }, [displayData.length, param, dispatch]);
  return (
    <div className="ProductPageDiv">
      <div className="filterDiv"> <Filter /></div>
      <div className="DataCardDiv">
        {displayData.length && displayData.map((item) => {
          console.log(item)
          return <div key={item.id} > <DataCard {...item} /></div>
        })}
      </div>
    </div >

  )
}