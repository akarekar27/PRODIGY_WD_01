// Modal functionality for Sign Up
const modal = document.getElementById("signup-modal");
const signupBtn = document.getElementById("signup-btn");
const closeBtn = document.querySelector(".close-btn");

signupBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
