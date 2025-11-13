let user = prompt("Selecciona para User: naruto, sasuke, kakashi", "naruto");
let machine = prompt("Selecciona para Machine: naruto, sasuke, kakashi", "naruto");

function ppt(){
    if (user == machine) {
        alert("Empate!!!");
}else if (user == "naruto" && machine == "sasuke"){
    alert("Naruto vence!");
}

}