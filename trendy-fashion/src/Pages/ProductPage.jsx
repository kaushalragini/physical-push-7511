
import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataCard from "../Components/DataCard";
import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";
import { callData } from "../utils";
import Filter from "../Components/Filter"
import "../Style/ProductPage.css"
import ProductNav from "../Components/ProductNav";
export default function ProductPage() {
  const dispatch = useDispatch()
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams()
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
    const category = searchParams.getAll("brandName");
    const sort = searchParams.get("sort");
    const order = searchParams.get("order");
    const lowerDis = searchParams.get("discount_lte");
    const higherDis = searchParams.get("discount_gte");
    const defaultparams = {};
    defaultparams.params = {
      brandName: category,
      _sort: sort !== null && sort,
      _order: order,
      discount_gte: higherDis && Number(higherDis),
      discount_lte: lowerDis && Number(lowerDis),
    }
    // defaultparams = {
    //   params: {
    //     brandName: []
    //   }
    // }
    // console.log(defaultparams);
    callData(param, dispatch, defaultparams);

  }, [displayData.length, param, dispatch, , location.search]);

  return (
    <div className="ProductPageDiv">
      <div className="filterDiv">
        <Filter />
      </div>
      <div>
        <div>HEADING SHOULD COME HERE</div>
        <div className="ProNav">
          <div>Price</div>
          <div>grid</div>
          <div>
            <ProductNav />
          </div>
        </div>
        <div className="DataCardDiv">
          {displayData.length && displayData.map((item) => {
            return <div key={item.id} > <Link to={`/men/${param}${item.detail_page_url}/${item.id}`}><DataCard {...item} /></Link></div>
          })}
        </div>
      </div >
    </div>
  )
}