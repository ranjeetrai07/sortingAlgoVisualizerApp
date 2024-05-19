console.log("hi ranjeet")

let randomize_array = document.getElementById("randomize_array_btn");
let sort_btn = document.getElementById("sort_btn");
let bars_container = document.getElementById("bars_container");
let select_algo = document.getElementById("algo");
let speed = document.getElementById("speed");
let slider = document.getElementById("slider");
let numOfBars = slider.value;
let minRange = 1;
let maxRange = slider.value;
let heightFactor = 4;
let unsorted_array = new Array(numOfBars);

slider.addEventListener("input", function () {
    numOfBars = slider.value;
    maxRange = slider.value;
    bars_container.innerHTML = "";
    unsorted_array = createRandomArray();
    renderBars(unsorted_array);
  });

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
function createRandomArray() {
let array = new Array(numOfBars);
for (let i = 0; i < numOfBars; i++) {
    array[i] = randomNum(minRange, maxRange);
}

return array;
}
  
document.addEventListener("DOMContentLoaded", function () {
unsorted_array = createRandomArray();
renderBars(unsorted_array);
});

function renderBars(array) {
    for (let i = 0; i < numOfBars; i++) {
      let bar = document.createElement("div");
      bar.classList.add("bar");
      bar.style.height = array[i] * heightFactor + "px";
      bar.innerHTML = array[i] * heightFactor ;
      bars_container.appendChild(bar);
    }
}

randomize_array.addEventListener("click", function () {
    unsorted_array = createRandomArray();
    bars_container.innerHTML = "";
    renderBars(unsorted_array);
});
  