const driverForm = document.getElementById("driverForm");

driverForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const driverData = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        password: document.getElementById("password").value,
        vehicleType: document.getElementById("vehicleType").value,
        vehicleNumber: document.getElementById("plateNumber").value.trim()
    };

    try {

        const response = await fetch(
            "https://ride-site-backend-1.onrender.com/api/drivers/register",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(driverData)
            }
        );


        // First read the response as text
        const responseText = await response.text();

        let data;

        try {
            data = JSON.parse(responseText);

        } catch (error) {

            console.error(
                "Backend returned invalid JSON:",
                responseText
            );

            alert("Server returned an invalid response.");

            return;
        }


        if (response.ok) {

            localStorage.setItem(
                "driverToken",
                data.token
            );


            localStorage.setItem(
                "driver",
                JSON.stringify(data.driver)
            );


            window.location.href =
                "driver-dashboard.html";


            driverForm.reset();

        } else {

            alert(
                data.message ||
                "Driver registration failed"
            );

        }

    } catch (error) {

        console.error(
            "Connection error:",
            error
        );

        alert(
            "Server connection failed."
        );

    }

});