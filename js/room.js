let API = "https://63fe326b370fe830d9d02b7f.mockapi.io/api"

fetch(`${API}/Room`)
.then((response) => response.json())
.then((Room) =>{
  let HTML_tmpl8 = document.querySelector("#features-id")
  HTML_tmpl8.innerHTML = `         <div class="features__container">
  <div class="features__img">
    <img src="${Room[0].roomimg}" alt="">
  </div>
  <div class="features__img">
    <img src="${Room[0].roomimg2}" alt="">
    <img src="${Room[0].roomimg3}" alt="">
  </div>
  <div class="features__info">
    <h2>${Room[0].roomname}</h2> <br>
    <p>${Room[0].roomdes}</p> <br>
    <div class="features__info-prices">
      <ul>
        <li>${Room[0].roomser}</li>
      </ul>
      <h3><span class="features__price">${Room[0].discount}</span></h3>
      <h3><span class="features__price-discount ">${Room[0].price}</span></h3>
    </div>
  </div>
  </div>
  <div class="features__container">
  <div class="features__img">
    <img src="${Room[1].roomimg}" alt="">
  </div>
  <div class="features__img">
    <img src="${Room[1].roomimg2}" alt="">
    <img src="${Room[1].roomimg3}" alt="">
  </div>
  <div class="features__info">
    <h2>${Room[1].roomname}</h2> <br>
    <p>${Room[1].roomdes}</p> <br>
    <div class="features__info-prices">
      <ul>
        <li>${Room[1].roomser}</li>
      </ul>
      <h3><span class="features__price-discount ">${Room[1].price}</span></h3>
    </div>
  </div>
  </div>
  <div class="features__container">
  <div class="features__img">
    <img src="${Room[2].roomimg}" alt="">
  </div>
  <div class="features__img">
    <img src="${Room[2].roomimg2}" alt="">
    <img src="${Room[2].roomimg3}" alt="">
  </div>
  <div class="features__info">
    <h2>${Room[2].roomname}</h2> <br>
    <p>${Room[2].roomdes}</p> <br>
    <div class="features__info-prices">
      <ul>
        <li>${Room[2].roomser}</li>
      </ul>
      <h3><span class="features__price-discount ">${Room[2].price}</span></h3>
    </div>
  </div>
  </div>`
})

fetch(`${API}/Room`)
.then((response) => response.json())
.then((Room) =>{
  let HTML_tmpl8 = document.querySelector("#features-id1")
  HTML_tmpl8.innerHTML = `         <div class="features__container">
  <div class="features__img">
    <img src="${Room[3].roomimg}" alt="">
  </div>
  <div class="features__img">
    <img src="${Room[3].roomimg2}" alt="">
    <img src="${Room[3].roomimg3}" alt="">
  </div>
  <div class="features__info">
    <h2>${Room[3].roomname}</h2> <br>
    <p>${Room[3].roomdes}</p> <br>
    <div class="features__info-prices">
      <ul>
        <li>${Room[3].roomser}</li>
      </ul>
      <h3><span class="features__price">${Room[3].discount}</span></h3>
      <h3><span class="features__price-discount ">${Room[3].price}</span></h3>
    </div>
  </div>
  </div>
  <div class="features__container">
  <div class="features__img">
    <img src="${Room[4].roomimg}" alt="">
  </div>
  <div class="features__img">
    <img src="${Room[4].roomimg2}" alt="">
    <img src="${Room[4].roomimg3}" alt="">
  </div>
  <div class="features__info">
    <h2>${Room[4].roomname}</h2> <br>
    <p>${Room[4].roomdes}</p> <br>
    <div class="features__info-prices">
      <ul>
        <li>${Room[4].roomser}</li>
      </ul>
      <h3><span class="features__price-discount ">${Room[1].price}</span></h3>
    </div>
  </div>
  </div>
  <div class="features__container">
  <div class="features__img">
    <img src="${Room[5].roomimg}" alt="">
  </div>
  <div class="features__img">
    <img src="${Room[5].roomimg2}" alt="">
    <img src="${Room[5].roomimg3}" alt="">
  </div>
  <div class="features__info">
    <h2>${Room[5].roomname}</h2> <br>
    <p>${Room[5].roomdes}</p> <br>
    <div class="features__info-prices">
      <ul>
        <li>${Room[5].roomser}</li>
      </ul>
      <h3><span class="features__price-discount ">${Room[2].price}</span></h3>
    </div>
  </div>
  </div>`
})