

function createProduct(product)
{
  return   $(`<div class="col col-xs-12 col-md-6 col-lg-4">
  <div class="card" style="width: 18rem;">
    <img src="${product.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">$${product.price}</h5>
      <p class="card-text mine">${product.name}</p>
      <form method="GET" action="/cart">
      <a href="/cart" <button onClick="addCart()" id="${product.id}" class="btn btn-primary">Buy Now</button></a></form>
   
     
    </div>
  </div>`)
}
function addCart()
{
   $.post('/addCart',{
     id:event.target.id
   })
  
}
      
    
$(()=>
{
  
 
    $.get('/products',(data)=>
    {
        for(pro of data.item)
        {
          createProduct(pro)
         $('#product').append(createProduct(pro))
        }
    })
})
