const product = [
  {
    id: 0,
    image: "../src/images/Birmingham.jpg",
    title: "Birmingham Museums Trust ",
    price: 1120,
  },
  {
    id: 1,
    image: "../src/images/boston.jpg",
    title: "Boston Public Library",
    price: 1500,
  },
  {
    id: 2,
    image: "../src/images/library.jpg",
    title: "Library of Congress ",
    price: 1000,
  },
  {
    id: 3,
    image: "../src/images/museums.jpg",
    title: "Museums Victoria",
    price: 2500,
  },
];

const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];
let i = 0;

document.getElementById("root").innerHTML = categories
  .map((item) => {
    var { image, title, price } = item;
    return (
      `<div class = 'box'>
            <div class='img-box'>
                <img class ='images' src= ${image}></img>
            </div>
            <div class='bottom'>
            <p>${title}</p>
            <h2> $ ${price}.00</h2> 
        ` +
      "<button onclick = 'addtocart(" +
      i++ +
      ")'> Add to cart </button>" +
      `</div>
        </div>`
    );
  })
  .join("");

var cart = [];
function addtocart(a) {
  cart.push({ ...categories[a] });
  displaycart();
}
function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}

function displaycart(a) {
  let j = 0,
    total = 0;
  document.getElementById("count").innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById("cartItem").innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = `$ ${0} .00`;
  } else {
    document.getElementById("cartItem").innerHTML = cart
      .map((items) => {
        var { image, title, price } = items;
        total = total + price;
        document.getElementById("total").innerHTML = `$ ${total} .00`;
        return (
          `<div class = ' cart-item'>
               <div class = ' row-img'>
                    <img class='rowimg' src = ${image}
                </div> </div>
                <p style= 'font-size: 12px;'>${title}</p> 
                <h2 style= 'fonte-size: 15px;'>$ ${price}</h2> ` +
          `<img src="https://img.icons8.com/ios-glyphs/30/null/trash--v1.png"  class='fa-solid fa-trash' onclick='delElement("+(j++)+")'/> </div>`
        );
      })
      .join("");
  }
}
