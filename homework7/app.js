console.log('Hello World!');

const download = document.querySelector('.btn-outline-dark');

const name = "Violet Maung";

let hasDownloadedResume = false;


download.addEventListener('click', () =>
{
    if(!hasDownloadedResume)
    {
        alert('Your resume is downloaded successfully!');
        hasDownloadedResume = true;
    }
    else
    {
        console.log("Resume previously downloaded. Skip Alert");
    }
   
})


function showGreeting(name) {
    return "Hello, my name is " + name + "! Welcome to my portfolio!";
}

window.addEventListener("DOMContentLoaded", () =>
    {

    const greetingMessage = showGreeting(name);
    
    
    const greetingElement = document.getElementById("portfolio-greeting");
    if (greetingElement) 
    {
        greetingElement.textContent = greetingMessage;
    }
});