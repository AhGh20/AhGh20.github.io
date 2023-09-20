
     // Check if the user has a preferred mode in local storage
     const preferredMode = localStorage.getItem("preferredMode");

     // Define your stylesheet and button elements
     const stylesheet = document.getElementById("stylesheet");

     // Function to apply dark mode
     function applyDarkMode() {
       stylesheet.href = "css/dark-workout.css"; // Change to your light mode stylesheet

     }

     // Function to apply light mode
     function applyLightMode() {
       stylesheet.href = "css/workout.css"; // Change to your dark mode stylesheet


     }

     // Check and apply the preferred mode on page load
     if (preferredMode === "dark") {
         applyDarkMode();
     } else {
         applyLightMode();
     }

     // Add event listener for the dark mode toggle
     toggleButton.addEventListener("click", () => {
         if (stylesheet.href.includes("workout.css")) {
             applyLightMode();
             localStorage.setItem("preferredMode", "light");
         } else {
             applyDarkMode();
             localStorage.setItem("preferredMode", "dark");
         }
     });
