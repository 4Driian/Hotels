let API = "https://63fe326b370fe830d9d02b7f.mockapi.io/api";

function prev() {
  document.getElementById('slider-container').scrollLeft -= 700;
}

function next() {
  document.getElementById('slider-container').scrollLeft += 700;
}

fetch(`${API}/Hotel`)
.then((response) => response.json())
.then((Hotel) =>{
//   let tmpl = Hotel.map((hotels, index) => 
//   `<h2 class="hotels${index}">${hotels.DDescription}</h2>`)´
  let HTML_tmpl = document.querySelector("#info01");
  let HTML_tmpl1 = document.querySelector("#heroimg1");
  let HTML_tmpl2 = document.querySelector("#gallery_yun1")
  let HTML_tmpl3 = document.querySelector("#trivago1")
  HTML_tmpl.innerHTML = `<h2>${Hotel[1].DDescription}</h2>`
  HTML_tmpl1.innerHTML = `<img class="hero__img" src="${Hotel[1].ImageDestiny}" alt="...">
  <h1 class="center__name">${Hotel[1].Destiny}</h1>`
  HTML_tmpl2.innerHTML = ` <img src="${Hotel[1].Imagegallery}" alt="...">
  <img src="${Hotel[1].imageg2}" alt="...">
  <img src="${Hotel[1].imageg3}" alt="...">`
  HTML_tmpl3.innerHTML = `<a href="tama-hotel-one.html">
  <button class="hotel-3">
    <span class="titulo-boton">Hotel Name</span>
  </button>
</a>
<a href="tama-hotel-two.html">
  <button class="hotel-4">
    <span class="titulo-boton">Hotel Name</span>
  </button>
</a>`
});

fetch(`${API}/Hotel`)
.then((response) => response.json())
.then((Hotel) =>{
  let HTML_tmpl4 = document.querySelector("#hero_image");
  let heroimage2= Hotel[0].HeroimageD
  HTML_tmpl4.innerHTML = `  
  <img class="img-home" src="${heroimage2}" alt="">
  <img class="img-home-mobile" src="assets/img/destinations/home-img-header-mobile.jpg" alt="">
  <h1 class="title__destinations">All our destinations</h1>
  <div class="control__buttons-container">
    <div onclick="prev()" class="control-prev-btn">
      <img src="assets/img/elements/arrow-prev.svg" alt="">
    </div>
    <div onclick="next()" class="control-next-btn">
      <img src="assets/img/elements/arrow-next.svg" alt="">
    </div>
  </div>`
//   HTML_tmpl5.innerHTML = `
//   <div class="slider-cards">
//   <div class="slider__preview-card">
//     <div>
//       <img class="slider__preview-card-img" src="${slider}" alt="">
//     </div>
//     <a href="desti-one.html" class="slider-destination">Santa Teresa</a>
//   </div>
// </div>`

});

fetch(`${API}/Hotel`)
.then((response) => response.json())
.then((Hotel) =>{
    let HTML_tmpl6 = document.querySelector("#hero_room");
    let HTML_tmpl7 = document.querySelector("#space-text")
    let room_image = Hotel[0].ImageHotel
    let hotel_name = Hotel[0].Hotelname
    let hotel_text = Hotel[0].Hoteldes
    HTML_tmpl6.innerHTML = `<img class="hero__img" src="${room_image}" alt="...">
    <h2 class="center__hotel-name">${hotel_name}</h2>`
    HTML_tmpl7.innerHTML = `<h2>${hotel_name}</h2>
    <p>${hotel_text}</p>`
});

fetch(`${API}/Hotel`)
.then((response) => response.json())
.then((Hotel) =>{
    let HTML_tmpl6 = document.querySelector("#hero_room2");
    let HTML_tmpl7 = document.querySelector("#space-text2")
    let room_image = Hotel[1].ImageHotel
    let hotel_name = Hotel[1].Hotelname
    let hotel_text = Hotel[1].Hoteldes
    HTML_tmpl6.innerHTML = `<img class="hero__img" src="${room_image}" alt="...">
    <h2 class="center__hotel-name">${hotel_name}</h2>`
    HTML_tmpl7.innerHTML = `<h2>${hotel_name}</h2>
    <p>${hotel_text}</p>`
});


fetch(`${API}/Hotel`)
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
    HTML_tmpl10.innerHTML += `${tmpl.join(' ')}`    
});
