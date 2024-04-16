async function playClicked() {
    const data = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: 'value' })
    };
    try {
        const response = await fetch("/playSound", data);
        const responseJSON = await response.json();
        console.log(responseJSON);
    } catch (error) {
        console.error(error);
    }
}
document.getElementById("play-button").addEventListener("click", playClicked);