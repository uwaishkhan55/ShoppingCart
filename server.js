const express = require('express')
const app = express()
const { db } = require('./db')
const session =  require('express-session')
const passport = require('./passport')
const {Products}=require('./db')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))
app.use(session({
  secret: 'em2b462m4hb6v2j4hv5 23n4jv',
  resave: false,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
const routes = {
//   // vendors: require('./routes/vendors'),
  products: require('./routes/products'),
//   // users: require('./routes/users'),
}
app.use('/products', routes.products)
// // app.use('/vendors', routes.vendors)
// // // app.use('/products', routes.products)
// // app.use('/users', routes.users)
app.use('/login', (require('./routes/login').route))
app.use('/signup', (require('./routes/signup').route))
app.use('/profile', (require('./routes/profile').route))
app.use('/cart', (require('./routes/cart').route))
app.post('/addCart',(req,res)=>
{
  req.session.storage=req.body.id
  
  if (!req.user) {
    console.log("not a user"+req.url)
    return res.redirect('/login')
    
  }
  console.log(" a user" +req.url)
       res.redirect('/cart')
})
app.get('/giveCart',async (req,res)=>
{
      let item=req.session.storage||1
      let item1 = await Products.findAll({
        where:
        {
          id:item
        }
      })
      res.send(item1)
})

db.sync()
  .then(() => {
    app.listen(9999, () => {
      console.log('Server started on http://localhost:9876')
    })
  })
.catch(console.error)