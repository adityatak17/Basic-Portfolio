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

function legend_change(){
    document.getElementById("legend").style.backgroundColor="#B8D0EB";
    document.getElementById("field-set").style.border="3px solid #BBDBD1";

}

function legend_base(){
    document.getElementById("legend").style.backgroundColor="#BBDBD1";
    document.getElementById("field-set").style.border="3px solid #B8D0EB";
}