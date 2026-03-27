// Add to cart buttons
document.querySelectorAll(".price button").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Added to cart 🛒");
  });
});

// Email buttons
document.querySelectorAll(".email").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Email feature coming soon 📧");
  });
});

// Get Started button
document.getElementById("startBtn").addEventListener("click", () => {
  alert("Welcome! 🚀");
});