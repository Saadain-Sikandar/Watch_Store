// Feedback form

var feedbackform = document.getElementById("feedbackForm");

function Feedback(){

var name = document.getElementById("username").value;
var email = document.getElementById("email").value;
var feedback = document.getElementById("feedback").value;

if(name && email && feedback){


var feedbacklist = document.createElement("li");
feedbacklist.innerHTML = "<strong>"+ name +"</Strong>"+ ", "+ email  +"<br>"+ feedback;
feedbacklist.style.listStyleType = "none"
var display = document.getElementById("feedbackDisplay");

display.appendChild(feedbacklist);

Swal.fire("ThankYou For Your Feedback!");


feedbackform.reset();
    
}

else{

    alert("Please Fill the Required fields!");  
}


}


//CHECKOUT

// var image = document.getElementById("img");
// var watchName = document.getElementById("watchname");
// var watchPrice = document.getElementById("watchprice");


function Addcart(){

var cartList = document.createElement("li");

var imgsrc = document.createElement("img");
imgsrc.src = document.getElementById("img").src;
imgsrc.style.width = "100px";

 var watchNametxt = document.getElementById("watchname").textContent;
 var  watchPricetxt = document.getElementById("watchprice").innerHTML;

 var nameelement = document.createElement("h5");
 nameelement.innerHTML = watchNametxt;

 var priceElement = document.createElement("span");
 priceElement.textContent = watchPricetxt; 

  cartList.appendChild(imgsrc);
  cartList.appendChild(nameelement);
  cartList.appendChild(priceElement);

 var list = document.getElementById("productList");
 list.appendChild(cartList);

}


// CHECKOUT FORM


function order(){
var checkoutform = document.getElementById("checkout")
var fname = document.getElementById("firstName").value;
var lname = document.getElementById("lastName").value;
var contact = document.getElementById("ContactNumber").value;
var email = document.getElementById("email").value;
var address = document.getElementById("address").value;

if(fname && lname && contact && email && address){

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your order has been placed",
        showConfirmButton: false,
        timer: 1500
      });

      checkoutform.reset();

        }

        else{

            alert("Please fill the required Fields!");
        }




}


