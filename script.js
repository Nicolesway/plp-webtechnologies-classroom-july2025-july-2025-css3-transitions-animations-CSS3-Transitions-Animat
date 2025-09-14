// ===== Demonstrating SCOPE, PARAMETERS, RETURN =====

// A function with parameters and return value
function validateUsername(username) {
  // Local scope variable
  const minLength = 3; 

  if (username.length < minLength) {
    return "Username must be at least 3 characters long.";
  }
  return ""; // no error
}

// ===== FORM VALIDATION =====
const form = document.getElementById("signupForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // stop normal submission

  // Access input values
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();

  let errors = [];

  // Use the function with parameters & return
  const usernameError = validateUsername(username);
  if (usernameError) errors.push(usernameError);

  // Simple email check
  if (!email.includes("@")) {
    errors.push("Email must contain @ symbol.");
  }

  // Show messages
  if (errors.length > 0) {
    formMessage.textContent = errors.join(" ");
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "Form submitted successfully!";
    formMessage.style.color = "green";
    form.reset();
  }
});

// ===== ANIMATION TRIGGER =====
const animateBtn = document.getElementById("animateBtn");
const box = document.getElementById("box");

// Add an event listener to trigger CSS animation
animateBtn.addEventListener("click", () => {
  box.classList.remove("move"); // reset if animation was already applied
  void box.offsetWidth;          // reflow hack to restart animation
  box.classList.add("move");     // trigger the animation again
});
