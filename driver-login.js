const driverLoginForm =
    document.getElementById("driverLoginForm");

driverLoginForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const email =
        document.getElementById("email").value.trim();

    const password =
        document.getElementById("password").value;

    try {

        const response = await fetch(
            "https://ride-site-backend-1.onrender.com/api/drivers/login",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    email,
                    password
                })
            }
        );

        const data = await response.json();

        if (!response.ok) {
            alert(data.message);
            return;
        }

        // Save driver login information
        localStorage.setItem(
            "driverToken",
            data.token
        );

        localStorage.setItem(
            "driver",
            JSON.stringify(data.driver)
        );

        // Go to driver dashboard
        window.location.href =
            "driver-dashboard.html";

    } catch (error) {

        console.error(error);

        alert("Server connection failed.");
    }

});