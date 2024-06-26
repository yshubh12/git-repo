// typing effect
var typeEffect = new Typed(".multiText", {
    strings: ["Where Language Meets No Barrier", "जहां भाषा की कोई बाधा नहीं", "જ્યાં ભાષા કોઈ અવરોધ સાથે મળે છે", "ਜਿੱਥੇ ਭਾਸ਼ਾ ਕੋਈ ਰੁਕਾਵਟ ਨਹੀਂ ਮਿਲਦੀ"],
    loop: true,
    typeSpeed: 30,
    backSpeed: 50,
    backDelay: 2000
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
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Shopping cart
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
});
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});

let products = [
    {
        id: 1,
        name: 'Peanut Butter (500g)',
        image: STATIC_URL + 'img1.jpg', // Use STATIC_URL,
        
        price: 350
    },
    {
        id: 2,
        name: 'Peanut Oil (1L)',
        image: STATIC_URL + 'img2.jpg', // Use STATIC_URL
        price: 320
    },
    {
        id: 3,
        name: 'Almond Butter (500g)',
        image: STATIC_URL + 'img3.jpg', // Fixed image path
        price: '₹750'
    },
    {
        id: 4,
        name: 'Almond Oil (200ml)',
        image: STATIC_URL + 'img4.jpg', // Fixed image path
        price: '₹370'
    },
    {
        id: 5,
        name: 'Wheat Flour (5kg)',
        image: STATIC_URL + 'img5.jpg', // Fixed image path
        price: '₹200'
    },
    {
        id: 6,
        name: 'Chickpea Flour (500g)',
        image: STATIC_URL + 'img6.jpg', // Fixed image path
        price: '₹60'
    }
];

let listCards = [];

function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>
            <a href="payment">
            <a href="payment"><button onclick="">Buy</button></a>
            </a>`;
        list.appendChild(newDiv);
    });
}
initApp();

function addToCard(key) {
    if (listCards[key] == null) {
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}

function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    });
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

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
    chatbot.innerText = "सारथि";
    your_account.innerText = "खाता";
    signin.innerText = "संकेत";
    aboutus.innerText = "हमारा परिचय";
    yourshoppingcart.innerText = "आपकी खरीदारी";
});
