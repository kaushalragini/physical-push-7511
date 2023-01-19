import React from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
} from '@chakra-ui/react'
import { ChevronDownIcon } from "@chakra-ui/icons"
const ProductNav = () => {
    return (
        <div>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Actions
                </MenuButton>
                <MenuList>
                    <MenuItem>Price(LowestFirst)</MenuItem>
                    <MenuItem>Relevance</MenuItem>
                    <MenuItem>Discount</MenuItem>
                    <MenuItem>Price (HighestFirst)</MenuItem>
                    <MenuItem>Whats Newß</MenuItem>
                </MenuList>
            </Menu>
        </div>
    )
}

export default ProductNav
