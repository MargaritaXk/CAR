import { carData } from "./carData.js";

const toggleBtn = document.getElementById("toggleSidebar");
const sidebar = document.getElementById("sidebar");

toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("closed");
});

const containercategory = document.querySelector('.cars-gallery');
const link = document.querySelectorAll('li a');

link.forEach( (links) => {
    links.addEventListener('click',(e) =>{
        const category = e.target.dataset.id;
        
        if(category === "ALL"){
            displayCarData(carData);
        }else{
            const carCategory = carData.filter(car => 
                car.brand === category
            );
            displayCarData(carCategory);
        }
    });
});

//display all dynamic data
window.addEventListener('DOMContentLoaded',()=>{
    displayCarData(carData);
    // console.log(displayData);
});

function formatScaledNumber(num) {
    if (typeof price === 'string') {
        price = parseFloat(price.replace(/[^0-9.]/g, ''));
    }

    if (isNaN(price)) return 'N/A';
    if (price >= 1e9) return (price / 1e9).toFixed(1) + 'B';
    if (price >= 1e6) return (price / 1e6).toFixed(1) + 'M';
    if (price >= 1e3) return (price / 1e3).toFixed(1) + 'K';
    return price.toString();
  
}


function displayCarData(Cars){
    let displayData = Cars.map(function(cat_items){
        return `<div class="car">
                    <div class="Model-make">
                        <h3>${cat_items.brand} <span>${cat_items.model}</span></h3>
                        <p class="body-style">${cat_items.body_style}</p>
                    </div>
                    <div class="car-picture">
                        <img src="${cat_items.img}" ">
                    </div>
                    <div class="infos">
                        <p class="Price"> $${cat_items.Price}</p>
                        <p class="infos-p">${cat_items.transmission}</p>
                        <p class="infos-p">${cat_items.year}</p>
                        <p class="infos-p">${cat_items.mileage}</p>
                        <p class="infos-p">${cat_items.fuel_type}</p>
                    </div>
                </div>`;

});

    displayData = displayData.join("");
    containercategory.innerHTML =displayData; 
    
}