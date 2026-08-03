const driverData = localStorage.getItem("driver");

if (!driverData) {
    alert("Please register or login as a driver first.");

    window.location.href = "driver.html";
} else {

    const driver = JSON.parse(driverData);

    document.getElementById("driverName").textContent =
        driver.name || "Driver";

    document.getElementById("name").textContent =
        driver.name || "Not available";

    document.getElementById("email").textContent =
        driver.email || "Not available";

    document.getElementById("vehicleType").textContent =
        driver.vehicleType || "Not available";

    document.getElementById("vehicleNumber").textContent =
        driver.vehicleNumber || "Not available";
}


// LOGOUT
document.getElementById("logoutBtn").addEventListener("click", () => {

    localStorage.removeItem("driverToken");
    localStorage.removeItem("driver");

    alert("You have been logged out.");

    window.location.href = "driver-login.html";
});


// VIEW RIDES
document.getElementById("viewRidesBtn").addEventListener("click", () => {

    window.location.href = "driver-ride.html";
});


// UPDATE LOCATION
document.getElementById("locationBtn").addEventListener("click", () => {

    alert("Live location feature coming soon.");
});


// VIEW EARNINGS
document.getElementById("earningsBtn").addEventListener("click", () => {

    alert("Earnings feature coming soon.");
});