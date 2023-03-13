let API = "https://63fe326b370fe830d9d02b7f.mockapi.io/api";

fetch(`${API}/Hotel`)
.then((response) => response.json())
.then((Hotel) =>{
//   let tmpl = Hotel.map((hotels, index) => 
//   `<h2 class="hotels${index}">${hotels.DDescription}</h2>`)´
  let HTML_tmpl = document.querySelector("#info0");
  let HTML_tmpl1 = document.querySelector("#heroimg");
  let HTML_tmpl2 = document.querySelector("#gallery_yun")
  let HTML_tmpl3 = document.querySelector("#trivago")
  let title_0 = Hotel[0].DDescription
  let heroimage = Hotel[0].ImageDestiny
  let title_1 = Hotel[0].Destiny
  let galleryimage1 = Hotel[0].Imagegallery
  let galleryimage2 = Hotel[0].imageg2
  let galleryimage3 = Hotel[0].imageg3
  HTML_tmpl.innerHTML = `<h2>${title_0}</h2>`
  HTML_tmpl1.innerHTML = `<img class="hero__img" src="${heroimage}" alt="...">
  <h1 class="center__name">${title_1}</h1>`
  HTML_tmpl2.innerHTML = ` <img src="${galleryimage1}" alt="...">
  <img src="${galleryimage2}" alt="...">
  <img src="${galleryimage3}" alt="...">`
  HTML_tmpl3.innerHTML = `<a href="santa-hotel-one.html">
  <button class="boton-imagen">
    <span class="titulo-boton">Hotel Name</span>
  </button>
</a>
<a href="santa-hotel-two.html">
  <button class="hotel-2">
    <span class="titulo-boton">Hotel Name</span>
  </button>
</a>`
});

fetch(`${API}/Hotel`)
.then((response) => response.json())
.then((Hotel) =>{
  let HTML_tmpl4 = document.querySelector("#hero_image");
  let HTML_tmpl5 = document.querySelector("#slider-top");
  let heroimage2= Hotel[0].HeroimageD
  let slider = Hotel[0].ImageDS
  HTML_tmpl4.innerHTML = `  
  <img class="img-home" src="${heroimage2}" alt="">
  <img class="img-home-mobile" src="assets/img/destinations/home-img-header-mobile.jpg" alt="">
  <h1 class="title__destinations">All our destinations</h1>`
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

fetch(`${API}/Room`)
.then((response) => response.json())
.then((Room) =>{
//   let tmpl = Hotel.map((hotels, index) => 
//   `<h2 class="hotels${index}">${hotels.DDescription}</h2>`)´
  let HTML_tmpl8 = document.querySelector("#features-id")
  let room1 = Room[0].roomimg
  let room2 = Room[0].roomimg2
  let room3 = Room[0].roomimg3
  let price = Room[0].price
  let discount = Room[0].discount
  let services = Room[0].roomser
  let description = Room[0].roomdes
  let roomname = Room[0].roomname
  HTML_tmpl8.innerHTML = `         <div class="features__container">
  <div class="features__img">
    <img src="${room1}" alt="">
  </div>
  <div class="features__img">
    <img src="${room2}" alt="">
    <img src="${room3}" alt="">
  </div>
  <div class="features__info">
    <h2>${roomname}</h2> <br>
    <p>${description}</p> <br>
    <div class="features__info-prices">
      <ul>
        <li>${services}</li>
      </ul>
      <h3><span class="features__price">${discount}</span></h3>
      <h3><span class="features__price-discount ">${price}</span></h3>
    </div>
  </div>
  </div>`

});