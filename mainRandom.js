import { carData } from "./carData.js";

function getRandomItems(data, count) {
  const shuffled = data.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function displayCarData(Cars) {
  let displayData = Cars.map(function (cat_items) {
    return `
      <div class="car">
        <div class="Model-make">
          <h3>${cat_items.brand} <span>${cat_items.model}</span></h3>
          <p class="body-style">${cat_items.body_style}</p>
        </div>
        <div class="car-picture">
          <img src="${cat_items.img}" alt="${cat_items.brand} ${cat_items.model}">
        </div>
        <div class="infos">
          <p class="price">$${cat_items.Price.toLocaleString()}</p>
          <p class="infos-p">${cat_items.transmission}</p>
          <p class="infos-p">${cat_items.year_range}</p>
          <p class="infos-p">${cat_items.mileage}</p>
          <p class="infos-p">${cat_items.fuel_type}</p>
        </div>
      </div>`;
  }).join("");

  document.querySelector(".cars-gallery").innerHTML = displayData;
}

document.addEventListener("DOMContentLoaded", () => {
  const randomCars = getRandomItems(carData, 4); // Change 4 to how many cars you want to show
  displayCarData(randomCars);
});
