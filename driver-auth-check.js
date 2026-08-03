const driverToken = localStorage.getItem("driverToken");

if (!driverToken) {
    window.location.href = "driver-login.html";
}