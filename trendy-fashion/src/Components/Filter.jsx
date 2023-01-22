import React, { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react'
import SeprateCategory from './SeprateCategory'
import { useSearchParams, useParams, useLocation } from 'react-router-dom';
import { getBrandData } from "../utils";
const Filter = () => {
  const { param } = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.getAll('brandName');
  const initSort = searchParams.getAll('sort');
  const [sortBy, setSortBy] = useState(initSort || "")
  const [category, setCategory] = useState(initialCategory || []);
  const [discountLte, setDiscountLte] = useState([]);
  const [discountGte, setDiscountGte] = useState([]);
  const [priceLte, setPriceLte] = useState([]);
  const [priceGte, setPriceGte] = useState([]);

  const handleFilterCheckbox = (e) => {
    e.preventDefault();
    const newCategories = [...category];
    if (newCategories.includes(e.target.value)) {
      newCategories.splice(newCategories.indexOf(e.target.value), 1)
    }
    else {
      newCategories.push(e.target.value);
    }
    setCategory(newCategories);
  }

  const discountChangeHandler = (e) => {
    const limits = e.target.value.split("-");
    const lower = limits[0];
    const higher = limits[1];
    let lte = [...discountLte];
    if (lte.includes(higher)) {
      let index = lte.indexOf(higher);
      lte.splice(index, 1);
    }
    else {
      lte.push(higher);
    }

    let gte = [...discountGte];
    if (gte.includes(lower)) {
      let index = gte.indexOf(lower);
      gte.splice(index, 1);
    }
    else {
      gte.push(lower);
    }
    setDiscountGte(gte);
    setDiscountLte(lte);
  }

  const priceChangeHandler = (e) => {
    const limits = e.target.value.split("-");
    const lower = limits[0];
    const higher = limits[1];

    let lte = [...priceLte];
    let gte = [...priceGte];
    if (lte.includes(higher)) {
      let index = lte.indexOf(higher);
      lte.splice(index, 1);
    }
    else {
      lte.push(higher);
    }

    if (gte.includes(lower)) {
      let index = gte.indexOf(lower);
      gte.splice(index, 1);
    }
    else {
      gte.push(lower);
    }
    setPriceLte(lte);
    setPriceGte(gte);
  }

  const menData = getBrandData(param);


  useEffect(() => {
    console.log("filter => ", discountGte, discountLte, priceGte, priceLte);
    let params = {};
    if (discountGte.length > 0) {
      let lowest = discountGte.sort(function (a, b) { return a - b });
      params.discount_gte = lowest[0];
    }
    if (discountLte.length > 0) {
      let highest = discountLte.sort(function (a, b) { return a - b });
      params.discount_lte = highest[highest.length - 1];
    }
    if (priceGte.length > 0) {
      let lowest = priceGte.sort(function (a, b) { return a - b });
      console.log(lowest);
      params.price_gte = lowest[0];
    }
    if (priceLte.length > 0) {
      let highest = priceLte.sort(function (a, b) { return a - b });
      console.log(highest);
      params.price_lte = highest[highest.length - 1];
    }

    params.brandName = category;
    sortBy && (params.sort = sortBy);
    setSearchParams(params);
  }, [category, discountLte, discountGte, priceLte, priceGte]);
  return (
    <div className='fliterDiv'>
      Filter
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                Refine By
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                      Gender
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box>
                    <input type="checkbox" />
                    <label >Men</label>
                  </Box>
                  <Box>
                    <input type="checkbox" />
                    <label >Women</label>
                  </Box>
                  <Box>
                    <input type="checkbox" />
                    <label >Kids</label>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                      Colours
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <div>
                    <input type="checkbox" />
                    <label >
                      🟢 green
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label >
                      🔴 red
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label >
                      🟡 yellow
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label >🟣 purple</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label >⚫️ black</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label >⚪️ white</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label >🟤 brown</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label >🔵 blue</label>
                  </div>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                      Category
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <div >
                    <input type="checkbox" />
                    <label >menFootwear</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label >menClothing</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label >menAccessories</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label >womenAccessories</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label >womenClothing</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label >womenFootwear</label>
                  </div>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                      Price
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <div>
                    <input type="checkbox" onChange={priceChangeHandler} value="0-500" />
                    <label >Below Rs.500</label>
                  </div>
                  <div>
                    <input type="checkbox" onChange={priceChangeHandler} value="500-1000" />
                    <label >Rs.500-1000</label>
                  </div>
                  <div>
                    <input type="checkbox" onChange={priceChangeHandler} value="1001-1500" />
                    <label >Rs.1001-1500 </label>
                  </div>
                  <div>
                    <input type="checkbox" onChange={priceChangeHandler} value="1501-2000" />
                    <label >Rs.1501-2000 </label>
                  </div>
                  <div>
                    <input type="checkbox" onChange={priceChangeHandler} value="2001-2500" />
                    <label >Rs.2001-2500</label>
                  </div>

                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                      Discount
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <div>
                    <input type="checkbox" onChange={discountChangeHandler} value="0-20" />
                    <label>0-20%</label>
                  </div>
                  <div>
                    <input type="checkbox" onChange={discountChangeHandler} value="21-30" />
                    <label >21-30%</label>
                  </div>
                  <div>
                    <input type="checkbox" onChange={discountChangeHandler} value="31-40" />
                    <label >31-40%</label>
                  </div>
                  <div>
                    <input type="checkbox" onChange={discountChangeHandler} value="41-50" />
                    <label>41-50%</label>
                  </div>
                  <div>
                    <input type="checkbox" onChange={discountChangeHandler} value="51-60" />
                    <label>51-60%</label>
                  </div>
                  <div >
                    <input type="checkbox" onChange={discountChangeHandler} value="60-100" />
                    <label > more than 60%</label>
                  </div>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                      Brand
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {
                    menData.map((item, i) => {
                      return (
                        <div key={i}>
                          <input type="checkbox"
                            value={item}
                            onChange={handleFilterCheckbox}
                            checked={category.includes(item)}
                          />
                          <label>{item}</label>
                        </div>
                      )
                    })
                  }
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                More Filters
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Please select upto 3 categories to view more filters
            <SeprateCategory />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default Filter
