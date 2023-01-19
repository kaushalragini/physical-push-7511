import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react'
import SeprateCategory from './SeprateCategory'
const Filter = () => {
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
                    <label >a</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label >a</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label >b</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label >c</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label >d</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label >e</label>
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
                  <div>
                    <input type="checkbox" />
                    <label >a</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label >a</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label >a</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label >a</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label >a</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label >a</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label >a</label>
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
                    <input type="checkbox" />
                    <label >a</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label >a</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label >a</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label >a</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label >a</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label >a</label>
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
                    <input type="checkbox" />
                    <label >a</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label >a</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label >a</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label >a</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label >a</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label >a</label>
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
                  <div>
                    <input type="checkbox" />
                    <label >a</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label >a</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label >a</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label >a</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label >a</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label >a</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label >a</label>
                  </div>
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
