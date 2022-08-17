const input = document.querySelector(".inputSearch");
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
   
  },
  {
    id: 2,
    nombre: "Pollo",
    ingrdientes: ["salsa de tomate", "muzzarella", "pollo", ],
    precio: 900,
    
  },
  {
    id: 3,
    nombre: "camtimpalo",
    ingrdientes: ["salsa de tomate", "camtimpalo"],
    precio: 800,
    
  },
  {
    id: 4,
    nombre: "americana",
    ingrdientes: ["salsa de tomate", "muzzarella", "panceta", "chedar"],
    precio: 900,
    
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
    
  },
];


inputBTN.addEventListener("click", buscarPizza);

function buscarPizza(e) {
  e.preventDefault();
  const pizzanombre = input.values;
  if (pizzanombre === "") {
    showError("Por favor ingresa un nombre valido  para la pizza  !");
    return;
  }
  createHTML(e);
  //input.values = "";
  localStorage1()
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
  if (pizzas.some((pizza) => pizza.nombre === input)) {
    pizzas.forEach((pizza) => {
      if (pizza.nombre === input.values) {
        const h2 = document.createElement("h2");
        const h3 = document.createElement("h3");
        const h4 = document.createElement("h4");
        const span = document.createElement("span");
        h2.innerHTML = `esta pizza es la ${pizza.nombre}`;
        h3.innerHTML = `tiene los siguientes ingredientes: ${pizza.ingrdientes}`;
        h4.innerHTML = `$ ${pizza.precio}`;
        span.innerHTML = `borrar`;
        cartList.appendChild(h2);
        cartList.appendChild(h3);
        cartList.appendChild(h4);
        cartList.appendChild(span);
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

let zappi = JSON.stringify(pizzas)
localStorage.setItem("pizza",zappi)

}

/* function createHTML(e) {
 e.preventDefault()
  cartList.innerHTML = "";
    
      if (pizzas.nombre === input.values) {
        const h2 = document.createElement("h2");
        const h3 = document.createElement("h3");
        const h4 = document.createElement("h4");
        const span = document.createElement("span");
        h2.innerHTML = `esta pizza es la ${pizzas.nombre}`;
        h3.innerHTML = `tiene los siguientes ingredientes: ${pizzas.indexOf("ingredientes")}`;
        h4.innerHTML = `$ ${pizzas.indexOf("precio")}`;
        span.innerHTML = `borrar`;
        cartList.appendChild(h2);
        cartList.appendChild(h3);
        cartList.appendChild(h4);
        cartList.appendChild(span);
        span.classList.add("borrar");
        span.addEventListener("click", (e) => {
          const item = e.target.parentElement;
          cartList.innerHTML = "";
        });
      } else {
        showError("por el momento solo tenemos 6 pizzas para ofrecerte, pronto agregaremos más");
    return;
        
      }
    
  } */
