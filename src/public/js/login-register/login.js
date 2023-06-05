console.log("Desde Login")

const form = document.getElementById("formLogin");

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const obj = {};
    data.forEach((value, key) => (obj[key] = value));

    const response = await fetch('/api/sessions/login', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
          'Content-Type': 'application/json',
        },
      });

    const responseData = await response.json();
    if(responseData.status ==="success"){
        window.location.replace("/home");
    }});