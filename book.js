const params = new URLSearchParams(window.location.search);

const destination = params.get("destination");

if (destination) {
    document.getElementById("destination").value = destination;
}

const form = document.getElementById("rideForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const pickup = document.getElementById("pickup").value.trim();
    const destination = document.getElementById("destination").value.trim();
    const rideType = document.getElementById("rideType").value;
    const rideDate = document.getElementById("rideDate").value;
    const rideTime = document.getElementById("rideTime").value;

    try{

        const token = localStorage.getItem("token");
        
        const response = await fetch("http://localhost:5000/api/rides/book",{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({
                pickup,
                destination,
                rideType,
                rideDate,
                rideTime
            })

        });

        const data = await response.json();

        if(response.ok){

            alert("Ride booked successfully!");

            console.log(data);

            form.reset();

        }else{

            alert(data.message || "Booking failed.");

        }

    }catch(error){

        alert("Unable to connect to the server.");

    }

});

//Fare Estimate
const estimateBtn = document.getElementById("estimateBtn");

estimateBtn.addEventListener("click", async () => {

    const distance = Number(document.getElementById("distance").value);
    const rideType = document.getElementById("rideType").value;

    try {

        const response = await fetch("http://localhost:5000/api/fare/estimate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                distance,
                rideType
            })
        });

        const data = await response.json();

        if (response.ok) {
            document.getElementById("fare").textContent =
                "₦" + data.estimatedFare.toLocaleString();
        } else {
            alert(data.message);
        }

    } catch (error) {
        alert("Server connection failed.");
    }

});