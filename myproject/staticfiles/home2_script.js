// typing effect

var typeEffect = new Typed(".multiText",{
    strings : ["Where Language Meets No Barrier","जहां भाषा की कोई बाधा नहीं","જ્યાં ભાષા કોઈ અવરોધ સાથે મળે છે","ਜਿੱਥੇ ਭਾਸ਼ਾ ਕੋਈ ਰੁਕਾਵਟ ਨਹੀਂ ਮਿਲਦੀ"],
    loop : true,
    typeSpeed : 30,
    backSpeed : 50,
    backDelay : 2000
});


// Slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// // cart -------------------------------------------------------------------------------
// I write thiscart code

// function cart(){
//   document.getElementById("Cartbox").style.visibility="visible";
// }
// function cartremove(){
//   document.getElementById("Cartbox").style.visibility="hidden";
// }

// let quantityOfProduct =document.getElementById("quantityOfProduct");
// let num = 1;
// function add(){
//   num+=1;
//   quantityOfProduct.innerHTML = num;
// }
// function sub(){
//   if(num>0){
//     num-=1;
//   quantityOfProduct.innerHTML = num;
//   }
// }


let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'PRODUCT NAME 1',
        image: '/static/images/img1.jpg',
        price: 100
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        image: 'img2.jpg',
        price: 350
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        image: 'img3.jpg',
        price: 220
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        image: 'img4.jpg',
        price: 120
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        image: 'img5.jpg',
        price: 320
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        image: '6.PNG',
        price: 420
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>
            <a href="http://127.0.0.1:5500/Payment%20Gatway/Payment.html">
            <button onclick="">Buy</button>
            </a>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

//------------------------------------------------------------------------------------------------

// Language Change

let title = document.getElementById("title");
let home = document.getElementById("home");
let shop = document.getElementById("shop");
let categories = document.getElementById("categories");
let contact = document.getElementById("contact");

let welcome_user = document.getElementById("welcome_user");
let chatbot = document.getElementById("chatbot");
let your_account = document.getElementById("your_account");
let signin = document.getElementById("signin");

let aboutus = document.getElementById("aboutus");
let yourshoppingcart = document.getElementById("yourshoppingcart");

let hindi_btn = document.getElementById("hindi_btn");
hindi_btn.addEventListener("click", () => {
    title.innerText = "निशब्द";
    home.innerText = "होम";
    shop.innerText = "दुकान ";
    categories.innerText = "श्रेणियाँ ";
    contact.innerText = "संपर्क";
    welcome_user.innerText = "उपयोगकर्ता का स्वागत है";
    chatbot.innerText="सारथि";
    your_account.innerText="खाता";
    signin.innerText = "संकेत";
    aboutus.innerText = "हमारा परिचय";
    yourshoppingcart.innerText = "आपकी खरीदारी";
})