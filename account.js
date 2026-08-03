const userData = localStorage.getItem("user");

if (userData) {

    const user = JSON.parse(userData);

    document.getElementById("userName").textContent =
        user.name || "User";

    document.getElementById("name").textContent =
        user.name || "Not available";

    document.getElementById("email").textContent =
        user.email || "Not available";
}


// LOGOUT

document.getElementById("logoutBtn").addEventListener(
    "click",
    () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        window.location.href = "login.html";
    }
);


// BOOK RIDE

document.getElementById("bookRideBtn").addEventListener(
    "click",
    () => {
        window.location.href = "book.html";
    }
);


// RIDE HISTORY

document.getElementById("rideHistoryBtn").addEventListener(
    "click",
    () => {
        window.location.href = "ride-history.html";
    }
);


// SETTINGS

document.getElementById("settingsBtn").addEventListener(
    "click",
    () => {
        alert("Account settings coming soon.");
    }
);