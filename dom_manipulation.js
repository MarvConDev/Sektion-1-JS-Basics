let title = document.getElementById('webseite_title');
title.innerHTML = "neuer Title";


// document.getElementById('test_div').innerHTML = '<button id="button">Klick Mich</button>';
document.getElementById('test_div').innerHTML = '<p>test</p>';

document.getElementById('test_div').classList.remove('green_bg');

document.getElementById('test_input').setAttribute('value', 123)

document.getElementById('ptag').setAttribute('title', "dies ist ein P-Tag")

// document.getElementById('green_bg').setAttribute('height', 100px)

function toggleDNone(id){
    document.getElementById(id).classList.toggle('d_none');
}

function logger(){
    console.log(555555);
    
}