// Hide Desktop portfolio section on Mobile

document.addEventListener("DOMContentLoaded", function () {
    // Detect mobile screen size and toggle portfolio sections
    if (window.innerWidth <= 768) {
        document.getElementById("portfolio").style.display = "none"; // Hide desktop portfolio
        document.getElementById("portfolio-mobile").style.display = "block"; // Show mobile carousel
    } else {
        document.getElementById("portfolio").style.display = "block"; // Show desktop portfolio
        document.getElementById("portfolio-mobile").style.display = "none"; // Hide mobile carousel
        return; // Stop further execution if it's desktop
    }

    // Add portfolio items dynamically (Runs only on mobile)
    const portfolioItems = [
        { img: "./images/portfolio-01.png", title: "Zyeu(Illustration)", desc: "//...Illustration for a glasses store in Montreal;" },
        { img: "./images/portfolio-02.png", title: "posts.Instagram", desc: "//...Instagram posts for a Montreal clinic;" },
        { img: "./images/portfolio-03.png", title: "Inventory.Software", desc: "//...C# Windows Application;" },
        { img: "./images/portfolio-04.png", title: "TaskManager.App", desc: "//...iOS application;" },
        { img: "./images/portfolio-05.png", title: "LomalaGuitare", desc: "//...WordPress website for a guitar store;" },
        { img: "./images/portfolio.png", title: "php.Website", desc: "//...PHP website project for Lasalle College;" }
    ];

    const swiperWrapper = document.querySelector(".swiper-wrapper");

    portfolioItems.forEach(item => {
        const slide = document.createElement("div");
        slide.classList.add("swiper-slide");
        slide.innerHTML = `
            <figure class="">
                <img src="${item.img}" alt="${item.title}">
                <figcaption>
                    <h5>${item.title}</h5>
                    <p>${item.desc}</p>
                </figcaption>
            </figure>
        `;
        swiperWrapper.appendChild(slide);
    });

    // Initialize Swiper.js (Only on mobile)
    var swiper = new Swiper(".swiper-container", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: false,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});
