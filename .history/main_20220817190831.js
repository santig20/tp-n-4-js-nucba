const inputNum = document.querySelector(".inputSearch");
const inputBTN = document.querySelector(".inputBtn");
const cartList = document.querySelector(".pizzascontenedor");

let pizzas = [
  {
    id: 1,
    nombre: "especial",
    ingrdientes: [
      "huevo",
      "muzzarella",
      "tomate",
      "morron",
      "aceitunas verdes",
    ],
    precio:800,
     img: './assets/especial.jpg'
  },
  {
    id: 2,
    nombre: "pollo",
    ingrdientes: ["salsa de tomate", "muzzarella", "pollo", ],
    precio: 900,
    img:'./assets/pizza_pollo.jpg'
  },
  {
    id: 3,
    nombre: "camtimpalo",
    ingrdientes: ["salsa de tomate", "camtimpalo","queso"],
    precio: 800,
    img:'./assets/camtimpalo.jpg'
    
  },
  {
    id: 4,
    nombre: "americana",
    ingrdientes: ["salsa de tomate", "muzzarella", "panceta", "chedar"],
    precio: 900,
    img:'./assets/panceta y chedar.jpg'
  },
  {
    id: 5,
    nombre: "cinco quesos",
    ingrdientes: [
      "queso cremoso",
      "muzzarella",
      "provolone",
      "parmesano",
      "roquefort",
    ],
    precio: 950,
    img:'./assets/Pizza-5-quesos.jpg'
  },
  {
    id: 6,
    nombre: "caprese",
    ingrdientes: [
      "salsa de tomate",
      "muzzarella",
      "albaca",
      "tomate",
    ],
    precio: 800,
    img:'./assets/caprese.jpg'
  },
];


inputBTN.addEventListener("click", buscarPizza);

function buscarPizza(e) {
  e.preventDefault();
  const pizzaID = inputNum.value;
  if (pizzaID === "") {
    showError("Por favor ingresa un nombre valido para la pizza (entre 1 y 6) !");
    return;
  }
  createHTML();
  inputNum.value = "";
  localStorage1();
}

function showError(error) {
  const msgError = document.createElement("p");
  msgError.textContent = error;
  msgError.classList.add("error");
  cartList.appendChild(msgError);
  setTimeout(() => {
    msgError.remove();
  }, 2000);
}

function createHTML() {
  cartList.innerHTML = "";
  if (pizzas.some((pizza) => pizza.nombre === inputNum.value)) {
    pizzas.forEach((pizza) => {
      if (pizza.nombre === inputNum.value) {
        const h2 = document.createElement("h2");
        const h3 = document.createElement("h3");
        const h4 = document.createElement("h4");
        const span = document.createElement("span");
        const img = document.createElement("img");
        cartList.classList.add("cartList2");
        h2.innerHTML = `esta pizza es la ${pizza.nombre}`;
        h3.innerHTML = `tiene los siguientes ingredientes: ${pizza.ingrdientes}`;
        h4.innerHTML = `$ ${pizza.precio}`;
        img.innerHTML = ` ${pizza.img}`;
        span.innerHTML = `borrar`;
        cartList.appendChild(h2);
        cartList.appendChild(h3);
        cartList.appendChild(h4);
        cartList.appendChild(span);
        cartList.appendChild(img);
        span.classList.add("borrar");
        span.addEventListener("click", (e) => {
          const item = e.target.parentElement;
          cartList.innerHTML = "";
        });
      } else {
        return;
      }
    });
  } else {
    showError("por el momento solo tenemos 6 pizzas para ofrecerte, pronto agregaremos más");
    return;
  }
}

function localStorage1 (){

let zappi = JSON.stringify(pizza.)
localStorage.setItem("pizza",zappi)

}

