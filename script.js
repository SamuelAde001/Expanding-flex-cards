// Get all elements with the class "option"
var options = document.querySelectorAll(".option");

// Define a click event listener for each element
options.forEach(function(option) {
  option.addEventListener("click", function() {
    // Remove the "active" class from all elements
    options.forEach(function(opt) {
      opt.classList.remove("active");
    });

    // Add the "active" class to the clicked element
    this.classList.add("active");
  });
});
