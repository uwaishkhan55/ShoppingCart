const route = require('express').Router()
const passport = require('passport')
route.get('/', (req, res) => {
  res.send(
    `<!DOCTYPE html>
    <html lang="en">
            <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <title>Using BootsTRap</title>
                    
                 
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
                    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
                   <link rel="stylesheet" href="style.css">
                   <script
                              src="https://code.jquery.com/jquery-3.3.1.js"
                              integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
                              crossorigin="anonymous"></script>
                   <script src="script.js"></script>
                
                </head>
    <body>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#"><img id ="logo" src="https://pngimg.com/uploads/amazon/amazon_PNG22.png" alt=""></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                  
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav mr-auto">
                        <li class="nav-item ">
                          <a class="nav-link" href="./index.html">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="./addproduct.html">Add Product</a>
                        </li>
                        <li class="nav-item active">
                          <a class="nav-link " href="http://localhost:9999/login">Log in</a>
                        </li>
                      </ul>
                   
                    </div>
                  </nav>  
        <div id="form">
        <form action="/login" method="POST">
                        <div class="form-group">
                          <label for="exampleInputEmail1">username</label>
                          <input name="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                          
                        </div>
                        <div class="form-group">
                          <label for="exampleInputPassword1">Password</label>
                          <input name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                        </div>
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input" id="exampleCheck1">
                          <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                        <p>Don't have account</p>
                   <a href="/signup" class="btn btn-primary">Register Now</a>
                      </form>
    
        </div>
           
        
    </body>
    </html>
    `
  )
})

route.post('/',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
  })
)

route.get('/facebook',
  passport.authenticate('facebook')
)

route.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/profile',
    failureRedirect: '/login'
  })
)


module.exports = {
  route
}
