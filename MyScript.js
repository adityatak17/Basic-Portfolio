function heading_change() {
    
    document.getElementById("heading-tag").innerHTML =
        "A Great One I must add 😂 ";
}

function normal_heading() {
    
    document.getElementById("heading-tag").innerHTML =
        "Hello I am Aditya Tak and I am a Software Developer!";
}

function show_date() {
    const d = new Date();
    document.getElementById("date").innerHTML = d.toDateString();
}

function normal_option() {
    
    document.getElementById("date").innerHTML = 
        "Current Date & Time";
}