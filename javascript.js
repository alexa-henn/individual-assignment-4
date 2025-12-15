function contactForm()
{
    let nameInput = document.getElementById("exampleFormControlInput2").value;

    let output = document.getElementById("thanks");
    output.innerHTML = "Thank you for your message, " + nameInput + "!";
}
