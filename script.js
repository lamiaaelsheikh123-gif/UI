// DARK MODE

document
.getElementById("darkToggle")
.onclick = () => {
    document.body.classList.toggle("dark");
};



// AI CHATBOT (simple)

const input =
document.getElementById("chatInput");

const body =
document.getElementById("chatBody");

input.addEventListener("keypress",
function(e){

    if(e.key === "Enter"){

        let msg = input.value;

        body.innerHTML +=
        `<p><b>You:</b> ${msg}</p>`;

        body.innerHTML +=
        `<p><b>AI:</b> Thanks for your message!</p>`;

        input.value="";
        body.scrollTop=
        body.scrollHeight;
    }
});