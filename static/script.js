
function buttonClick() {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/send_data");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status === 200) {
            // Display the server's response
            document.getElementById("response").innerHTML = xhr.responseText;
        }
    };
    let data = JSON.stringify({message: "button clicked!"});
    xhr.send(data);
}

async function buttonClick2() {
    const data = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: 'value' })
    };
    try {
        const response = await fetch("/send_data", data);
        if (response.status  == 500) {
            console.error("Server error");
            return;
        }
        const responseJSON = await response.json();
        console.log(responseJSON);
    } catch (error) {
        console.error(error);
    }
     
}

async function getUser() {
    const response = await fetch("/get_user");
    const data = await response.json();
    console.log(data);
}

document.getElementById("myButton").onclick = buttonClick2;