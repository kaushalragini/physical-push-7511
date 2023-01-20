import React, { useState } from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
} from '@chakra-ui/react'
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useLocation, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
const ProductNav = () => {
    const [searchParams, setSearchParams] = useSearchParams({});
    const [sortBy, setSortBy] = useState("");
    const [order, setOrder] = useState("");
    const initialCategory = searchParams.getAll('brandName');
    const [category, setCategory] = useState(initialCategory || []);
    const location = useLocation();
    const handleSort = (e) => {
        const sort = e.target.value;
        const order = e.target.dataset.order;
        setSortBy(sort);
        setOrder(order);
    }
    useEffect(() => {
        let params = {};
        params.brandName = initialCategory;
        sortBy && (params.sort = sortBy);
        order && (params.order = order);
        setSearchParams(params);
    }, [sortBy, order, category])
    return (
        <div>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Actions
                </MenuButton>
                <MenuList onClick={handleSort} >
                    <MenuItem value="current_price.value" data-order="asc">Price(LowestFirst)</MenuItem>
                    <MenuItem value="brandName" data-order="asc">Relevance</MenuItem>
                    <MenuItem value="discount" data-order="desc">Discount</MenuItem>
                    <MenuItem value="current_price.value" data-order="desc">Price (HighestFirst)</MenuItem>
                    <MenuItem value="new" data-order="asc">Whats Newß</MenuItem>
                </MenuList>
            </Menu>
        </div>
    )
}

export default ProductNav
