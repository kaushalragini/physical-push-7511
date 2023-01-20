
import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataCard from "../Components/DataCard";
import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";
import { callData, callWomenData } from "../utils";
import Filter from "../Components/Filter"
import "../Style/ProductPage.css"
import ProductNav from "../Components/ProductNav";
export default function WomenProductPage() {
    const dispatch = useDispatch()
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams()
    const { param } = useParams();
    const data = useSelector((store) => store.WomenAppReducer);
    console.log(data);
    let displayData = [];
    switch (param) {
        default:
            displayData = [];
            break;
        case "footwear":
            displayData = data.womenFootwear;
            break;
        case "accessories":
            displayData = data.womenAccessories;
            break;
        case "clothing":
            displayData = data.womenClothing;
            break;
    }
    useEffect(() => {
        const category = searchParams.getAll("brandName");
        console.log("cat", category)
        const defaultparams = {};
        defaultparams.params = { "brandName": category }
        // defaultparams = {
        //   params: {
        //     brandName: []
        //   }
        // }
        callWomenData(param, dispatch, defaultparams);

    }, [displayData.length, param, dispatch, location.search]);
    return (
        <div className="ProductPageDiv">
            <div className="filterDiv">
                <Filter />
            </div>
            <div>
                <div>HEADING WILL COME HERE</div>
                <div className="ProNav">
                    <div>Price</div>
                    <div>grid</div>
                    <div>
                        <ProductNav />
                    </div>
                </div>
                <div className="DataCardDiv">
                    {displayData.length && displayData.map((item) => {
                        return <div key={item.id} > <Link to={`/women/${param}${item.detail_page_url}/${item.id}`}><DataCard {...item} /></Link></div>
                    })}
                </div>
            </div >
        </div>
    )
}