/* Loader & Icon Initialization */
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").classList.add("hidden");
    }, 400);
});

document.addEventListener("DOMContentLoaded", () => {
    /* Initialize Lucide icons */
    lucide.createIcons();

    /* Mobile Menu Setup */
    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });

        document.querySelectorAll(".mobile-link").forEach(link => {
            link.addEventListener("click", () => {
                mobileMenu.classList.add("hidden");
            });
        });
    }

    /* Scroll Reveal Observer (Triggers repeatedly on scroll up and down) */
    const revealElements = document.querySelectorAll(".reveal-up, .reveal-left, .reveal-right, .reveal-scale");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("reveal-active");
                } else {
                    entry.target.classList.remove("reveal-active");
                }
            });
        },
        {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        }
    );

    revealElements.forEach(element => observer.observe(element));
});