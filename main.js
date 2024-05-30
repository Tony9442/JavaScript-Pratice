//say we are biulding and e-commerce web-site with a cart

const cart = ["Shoes", "pants", "ball"];

// Once we create an order in our page we can now process in the 
//processToPayment() which is to pay for orders that we have it as
//a call back function in createorder()

/* We have now given this processToPayment() to createOrder()
 as callback function now createOrder() carries the responsebilty
 to create an order and the function back that way we can handle async
*/

/*The problem in this code that we have a large code base and so many api
 and the apis are depened on one after the other what will happen is that 
 we will end up falling into the "CALLBACK HELL"
*/

api.createOrder(cart, function() {

  api.paymentSection(function () {

    api.orderReviewSummary(function () {
      
        api.backHomePage()
    })
  })

});