import { Button, FormControl, FormLabel, Input, Select } from '@chakra-ui/react'
import axios from 'axios';
import React, { useReducer } from 'react'
import { Form, Navigate, useNavigate } from 'react-router-dom'

const reducer = (state, { type, payload }) => {
    console.log(type, payload);
    switch (type) {
        default:
            return state;
        case "brandName":
            return {
                ...state, brandName: payload
            }
        case "imageUrl":
            return {
                ...state, imageUrl: payload !== null ? payload : "https://picsum.photos/id/127/4032/2272"
            }
        case "discount":
            return {
                ...state, discount: payload
            }
        case "current_price":
            return {
                ...state,
                current_price: {
                    ...state.current_price,
                    value: payload
                }
            }
        case "prev_price":
            return {
                ...state,
                prev_price: {
                    ...state.prev_price,
                    value: payload
                }
            }
        case "product_name":
            return {
                ...state, product_name: payload
            }
        case "detail_page_url":
            return {
                ...state, detail_page_url: payload
            }
        case "secondary_category":
            return {
                ...state, secondary_category: payload
            }

        case "primary_category":
            return {
                ...state, primary_category: payload
            }
        case "product_category":
            return {
                ...state, product_category: payload
            }
    }

}

const AdminAddProduct = () => {
    const navigate = useNavigate();
    let data = {
        brandName: "",
        imageUrl: "",
        discount: "",
        current_price: {
            "currencyIso": "INR",
            "priceType": "BUY",
            "formattedValue": "",
            "displayformattedValue": "",
            "value": ""
        },
        prev_price: {
            "currencyIso": "INR",
            "priceType": "BUY",
            "formattedValue": "",
            "displayformattedValue": "",
            "value": ""
        },
        product_name: "",
        detail_page_url: "",
        secondary_category: "",
        primary_category: "",
        product_category: "",
    }

    const [formData, dispatcher] = useReducer(reducer, data);


    const onSubmitHandler = () => {
        console.log("asasasasas");
    }
    const formClickHandler = () => {
        console.log("button clicked");
        let url = "http://localhost:8080/"
        if (formData.product_category === "men") {
            if (formData.secondary_category === "clothing") {
                url = "http://localhost:8080/menClothing"
            }
            else if (formData.secondary_category === "footwear") {
                url = "http://localhost:8080/menFootwear"
            }
            else if (formData.secondary_category === "accessories") {
                url = "http://localhost:8080/menAccessories"
            }
        }
        else if (formData.product_category === "women") {
            if (formData.secondary_category === "clothing") {
                url = "http://localhost:8080/womenClothing"
            }
            else if (formData.secondary_category === "footwear") {
                url = "http://localhost:8080/womenFootwear"
            }
            else if (formData.secondary_category === "accessories") {
                url = "http://localhost:8080/womenAccessories"
            }
        }
        console.log("beforeSubmit", formData);
        let dd = Date.now();
        formData.detail_page_url = `/${formData.product_name}/p/${dd}`;
        formData.id = dd;
        formData.imageUrl = "https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/5/2/j/-original-imaggty7g33vdz3f.jpeg?q=70";
        axios.post(url, formData)
            .then((res) => {
                console.log(res.data);
            })
        navigate("/");
    }
    return (
        <div>
            <FormControl isRequired onSubmit={onSubmitHandler}>
                <FormLabel>Product name</FormLabel>
                <Input
                    placeholder='product name'
                    name="product_name"
                    value={formData.product_name}
                    onChange={(e) => dispatcher({ type: "product_name", payload: e.target.value })} />
                <FormLabel>Brand name</FormLabel>
                <Input
                    placeholder='brand name'
                    name="brandName"
                    value={formData.brandName}
                    onChange={(e) => dispatcher({ type: "brandName", payload: e.target.value })} />
                <FormLabel>Category</FormLabel>
                <Select
                    placeholder='Select Category'
                    name="product_category"
                    value={formData.product_category}
                    onChange={(e) => dispatcher({ type: "product_category", payload: e.target.value })}
                >
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    <option value="kid">Kid</option>
                    <option value="furniture">Furniture</option>
                    <option value="indie">Indie</option>
                </Select>
                <FormLabel>Secondary Category</FormLabel>
                <Select
                    placeholder='Select Secondary Category'
                    name="secondary_category"
                    value={formData.secondary_category}
                    onChange={(e) => dispatcher({ type: "secondary_category", payload: e.target.value })}>
                    <option value="footwear">Footwear</option>
                    <option value="clothing">Clothing</option>
                    <option value="accessories">Accessories</option>
                </Select>

                <FormLabel>Primary Category</FormLabel>
                <Select
                    placeholder='Select Primary Category'
                    name="primary_category"
                    value={formData.primary_category}
                    onChange={(e) => dispatcher({ type: "primary_category", payload: e.target.value })}>
                    <option value="jeans">Jeans</option>
                    <option value="tshirt">T-Shirt</option>
                    <option value="shoes">Shoes</option>
                    <option value="ornament">Ornament</option>
                    <option value="watch">Watch</option>
                    <option value="slippers">Slippers</option>
                    <option value="band">Band</option>
                </Select>

                <FormLabel>Discount</FormLabel>
                <Input
                    placeholder='discount'
                    name="discount"
                    value={formData.discount}
                    onChange={(e) => dispatcher({ type: "discount", payload: e.target.value })}
                />

                <FormLabel>Current Price</FormLabel>
                <Input
                    placeholder='current_price'
                    name="current_price"
                    value={formData.current_price.value}
                    onChange={(e) => dispatcher({ type: "current_price", payload: e.target.value })}
                />


                <FormLabel>Previous Price</FormLabel>
                <Input
                    placeholder='prev_price'
                    name="prev_price"
                    value={formData.prev_price.value}
                    onChange={(e) => dispatcher({ type: "prev_price", payload: e.target.value })}
                />
                {/* <FormLabel>Next Page Url</FormLabel>
                <Input
                    placeholder='prev_price'
                    name="detail_page_url"
                    value={formData.detail_page_url}
                    onChange={(e) => dispatcher({ type: "prev_price", payload: e.target.value })}
                /> */}
                <Button
                    mt={4}
                    colorScheme='teal'
                    onClick={formClickHandler}
                    type='submit'
                >
                    Submit
                </Button>
            </FormControl>
        </div>
    )
}

export default AdminAddProduct
