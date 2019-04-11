const express = require('express')
const { Products} = require('../db')

const route = express.Router()
let a= 1
let item = {
	"arrayOfProducts": [
		{
			"imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
			"name": "CHECK PRINT SHIRT",
			"price": 110
		},
		{
			"imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
			"name": "GLORIA HIGH LOGO SNEAKER",
			"price": 91
		},
		{
			"imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
			"name": "CATE RIGID BAG",
			"price": 94.5
		},
		{
			"imgUrl": "http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
			"name": "GUESS CONNECT WATCH",
			"price": 438.9
		},
		{
			"imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
			"name": "'70s RETRO GLAM KEFIAH",
			"price": 20
		}
	]
}
if(a===1)
{
  for(pro of item.arrayOfProducts)
  {
       
      Products.create
    ({
         img:pro.imgUrl,
         name:pro.name,
         price:pro.price,
         quantity:100

    })
  }
}
route.get('/', async (req, res) => {
 console.log('hellojhhjhj')
 let item = await Products.findAll(
   {
     where:
     {
          
     }
   }
 )
 res.send({item})
//  console.log(item)
})
route.post('/New', async (req,res)=>
{
	const newProd = await Products.create({
		img:req.body.img,
		name:req.body.name,
		price:req.body.price,
		quantity:req.body.Quantity
})
res.redirect('/')
})
route.post('/', async (req, res) => {

  const newProd = await Products.create({
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity,
    vendorId: req.body.vendorId
  })

  res.status(201).send(newProd)

})

module.exports = route
