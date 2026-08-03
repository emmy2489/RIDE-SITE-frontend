const form = document.getElementById("signupForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if(password !== confirmPassword){
        alert("Passwords do not match.");
        return;
    }

    try{

        const response = await fetch("https://ride-site-backend-1.onrender.com/api/auth/register",{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({
                name,
                email,
                phone,
                password
            })

        });

        const data = await response.json();

        if(response.ok){

            alert("Registration Successful!");

            window.location.href = "login.html";

        }else{

            alert(data.message || "Registration failed.");

        }

    }catch(error){

        alert("Unable to connect to the server.");

    }

});