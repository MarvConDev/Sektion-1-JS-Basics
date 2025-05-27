let title = document.getElementById('webseite_title');
title.innerHTML = "H1 test bla bla";
document.getElementById("h1_input")


// document.getElementById('test_div').innerHTML = '<button id="button">Klick Mich</button>';
document.getElementById('test_div').innerHTML = '<p>test</p>';

document.getElementById('test_div').classList.add('green_bg'); // add GRÜN ist da remove GRÜN ist weg // trigger //

document.getElementById('test_input').setAttribute('value', 123)

document.getElementById('ptag').setAttribute('title', "dies ist ein P-Tag")

// document.getElementById('green_bg').setAttribute('height', 100px)

function toggleDNone(id){
    document.getElementById(id).classList.toggle('d_none');
}

function logger(){
    console.log(555555);
    
}

document.getElementById("date_btn").addEventListener("click", displayDate);

function displayDate() {
    document.getElementById("date_output").innerHTML = Date();

}
