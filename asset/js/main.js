document.addEventListener("DOMContentLoaded", function() {
    const countDisplay = document.querySelector(".count");
    let count = 0;

    // Function to increase count
    document.querySelector(".increase").addEventListener("click", function() {
      count++;
      countDisplay.textContent = count;
    });

    // Function to decrease count
    document.querySelector(".decrease").addEventListener("click", function() {
      if (count > 0) {
        count--;
      }
      countDisplay.textContent = count;
    });

    // Function to reset count
    document.querySelector(".reset").addEventListener("click", function() {
      count = 0;
      countDisplay.textContent = count;
    });
  });
