// Dark / Light Theme Toggle

const themeToggle = document.getElementById("themeToggle");

// Check saved theme
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    themeToggle.textContent = "☀️";
} else {
    themeToggle.textContent = "🌙";
}

// Toggle Theme
themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "🌙";
    }

});


// Smooth Button Animation

const buttons = document.querySelectorAll(".cta-btn, .secondary-btn, button");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-4px) scale(1.05)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0px) scale(1)";
    });

});


// Reveal Animation on Scroll

const revealElements = document.querySelectorAll(
    ".project-card, .skill-box, .education-card, form, .hero-image"
);

const revealOnScroll = () => {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }

    });

};

revealElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "0.8s ease";

});

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);