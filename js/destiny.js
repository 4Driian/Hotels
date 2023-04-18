let API = "https://63fe326b370fe830d9d02b7f.mockapi.io/api";

const getUrl = new URLSearchParams(window.location.search) 
let id = getUrl.get('id'); 
id = parseInt(id); 
id--;

let hero = document.getElementById("heroimg")
let gallery = document.getElementById("gallery")
let info = document.getElementById("info0")
let hotels = document.getElementById("hotels")

fetch(`${API}/Hotel`)
.then((response) => response.json())
.then((Hotel) =>{
   info.innerHTML = `<h2>${Hotel[id].DDescription}</h2>`
   hero.innerHTML = `<img class="hero__img" src="${Hotel[id].ImageDestiny}" alt="...">
   <h1 class="center__name">${Hotel[id].Destiny}</h1>`
   gallery.innerHTML = ` <img src="${Hotel[id].Imagegallery}" alt="...">
   <img src="${Hotel[id].imageg2}" alt="...">
   <img src="${Hotel[id].imageg3}" alt="...">`
})

fetch(`${API}/Room`)
.then((response) => response.json())
.then((Room) =>{
    hotels.innerHTML = `
    <a href="santa-hotel-one.html?id=${Room.roomid}">
    <button class="hotel-${id+1}">
      <span class="titulo-boton">Hotel Name</span>
    </button>
  </a>
  <a href="santa-hotel-two.html?id=${Room.roomid}">
    <button class="hotel-${id+2}">
      <span class="titulo-boton">Hotel Name</span>
    </button>
  </a>`
})

/*fetch(`${API}/Hotel`)
.then((response) => response.json())
.then((Hotel) =>{
    let tmpl = Hotel.map((hotels) => 
    `      
    <div class="slide">
    <img class="slider__img" src="${hotels.ImageDS}" alt="">
    <div>
      <a href="./desti-one.html?id=${hotels.id}" class="slider-destination">${hotels.Destiny}</a>
    </div>
  </div> `
    )
    let HTML_tmpl10 = document.querySelector("#slider-container");
    HTML_tmpl10.innerHTML += `${tmpl}`    
});*/