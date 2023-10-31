window.addEventListener("scroll", function() {
    const nav = document.querySelector("nav");
    if (window.scrollY > 0) {
        nav.style.position = "fixed";
        nav.style.top = "0";
        nav.style.width = "100%";
    } else {
        nav.style.position = "static";
    }
});