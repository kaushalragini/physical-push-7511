const express =require("express")
const fs= require("fs")
const cors = require('cors');

const app= express()

app.use(cors());

app.get("/Banner", (req, res)=>{
    const dataStream=fs.createReadStream("./db.json","utf-8")
    dataStream.pipe(res)
})

  app.get("/:clothingType", (req, res) => {
    const clothingType = req.params.clothingType;
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    if (data[clothingType]) {
    //   console.log(data[clothingType]);
      res.json(data[clothingType]);
    } else {
    //   console.log(`Clothing type ${clothingType} not found`);
      res.status(404).send("Clothing type not found");
    }
  });
  
    
  app.get("/Banner/:bannerName", (req, res) => {
    const bannerName = req.params.bannerName;
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    if (data.Banner[bannerName]) {
    //   console.log(data.Banner[bannerName]);
      res.json(data.Banner[bannerName]);
    } else {
    //   console.log(`Banner ${bannerName} not found`);
      res.status(404).send("Banner not found");
    }
  });


  app.post('/shoppingCart', (req, res) => {
    const { product_id, name, price, quantity } = req.body;

    res.status(200).json({
      message: 'Product added to shopping cart',
      product: {
        product_id,
        name,
        price,
        quantity
      }
    });
  });

app.listen(8080, ()=>{
    console.log("server starts")  
})