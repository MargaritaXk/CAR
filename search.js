import { carData } from "carData.js";

const container = document.querySelector('.cars-gallery');
const searchInput = document.getElementById('mysearch');

// Function to render car cards based on filtered list
function displayCarData(cars) {
  if (cars.length === 0) {
    container.innerHTML = '<p>No cars found.</p>';
    return;
  }
  
  container.innerHTML = cars.map(car => `
    <div class="car">
      <div class="Model-make">
        <h3>${car.brand} <span>${car.model}</span></h3>
        <p class="body-style">${car.body_style}</p>
      </div>
      <div class="car-picture">
        <img src="${car.img}" alt="${car.brand} ${car.model}">
      </div>
      <div class="infos">
        <p class="Price">$${car.Price.toLocaleString()}</p>
        <p class="infos-p">${car.transmission}</p>
        <p class="infos-p">${car.year}</p>
        <p class="infos-p">${car.mileage}</p>
        <p class="infos-p">${car.fuel_type}</p>
      </div>
    </div>
  `).join('');
}

// Initial display: show all cars
displayCarData(carData);

// Filter cars as user types
searchInput.addEventListener('input', () => {
  console.log('Search input event fired!');
  const term = searchInput.value.toLowerCase();
  console.log('Search term:', term);

  const filteredCars = carData.filter(car => {
    const match = (
      car.brand.toLowerCase().includes(term) ||
      car.model.toLowerCase().includes(term) ||
      car.body_style.toLowerCase().includes(term) ||
      car.transmission.toLowerCase().includes(term)
    );
    console.log(car.brand, car.model, 'matches?', match);
    return match;
  });

  console.log('Filtered cars:', filteredCars.length);
  displayCarData(filteredCars);
});

