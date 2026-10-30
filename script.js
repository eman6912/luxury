
// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// CLOSE MENU AFTER CLICKING A LINK
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});

// LIGHT AND DARK THEME
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    themeBtn.textContent =
        document.body.classList.contains("light") ? "☾" : "☀";
});

// DESTINATION FILTERS
const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".destination-card");

let activeCategory = "all";

function filterDestinations() {
    const searchValue = document
        .getElementById("searchInput")
        .value.toLowerCase();

    let visibleCount = 0;

    cards.forEach(card => {
        const category = card.dataset.category;
        const name = card.querySelector("h3").textContent.toLowerCase();

        const matchesCategory =
            activeCategory === "all" || category === activeCategory;

        const matchesSearch = name.includes(searchValue);

        const shouldShow = matchesCategory && matchesSearch;

        card.style.display = shouldShow ? "block" : "none";

        if (shouldShow) visibleCount++;
    });

    document.getElementById("emptyMessage").hidden = visibleCount > 0;
}

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        activeCategory = button.dataset.category;

        filterDestinations();
    });
});

// SEARCH
document.getElementById("searchInput")
    .addEventListener("input", filterDestinations);

// FAVORITES
document.querySelectorAll(".favorite-btn").forEach(button => {
    button.addEventListener("click", () => {
        button.classList.toggle("liked");

        button.textContent =
            button.classList.contains("liked") ? "♥" : "♡";
    });
});

// NEWSLETTER
const subscribeForm = document.getElementById("subscribeForm");

subscribeForm.addEventListener("submit", event => {
    event.preventDefault();

    const email = document.getElementById("emailInput").value;

    document.getElementById("message").textContent =
        `Thank you! ${email} has been added successfully.`;

    subscribeForm.reset();
});
