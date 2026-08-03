//Menu Btn
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Booking Form
const form = document.querySelector(".booking form");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const pickup = form.querySelectorAll("input")[0].value;
    const destination = form.querySelectorAll("input")[1].value;
    const rideType = form.querySelector("select").value;

    const response = await fetch("https://ride-site-backend.onrender.com/api/rides/book", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            pickup,
            destination,
            rideType
        })

    });

    const data = await response.json();

    alert("Ride Booked!\nRide ID: " + data.id);

    form.reset();

});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Sticky Navbar Shadow
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
    } else {
        header.style.boxShadow = "none";
    }
});

// Fade-in Animation
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s";
    observer.observe(card);
});

// Current Year in Footer
const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML = `© ${new Date().getFullYear()} Connect. All Rights Reserved.`;
}

//Popular Destination
const destinations = document.querySelectorAll(".destination-card");

destinations.forEach(card => {

    card.addEventListener("click", () => {

        const location = card.dataset.location;

        window.location.href = `book.html?destination=${encodeURIComponent(location)}`;


        alert("Destination selected: " + location);

        // If booking form exists
        const destinationInput = document.getElementById("destination");

        if(destinationInput){
            destinationInput.value = location;
        }

    });

});

//Contact
const contactForm = document.getElementById("contactForm");

if(contactForm) {

contactForm.addEventListener("submit",(e)=>{

    e.preventDefault();
    
    const name =
    document.getElementById("name").value;
    
    const email =
    document.getElementById("email").value;
    
    const message =
    document.getElementById("message").value;
    
    if(name && email && message) {

        alert(
        "Thank you " + name +
        "! Your message has been sent."
        );
        
        contactForm.reset();

    }

});

}