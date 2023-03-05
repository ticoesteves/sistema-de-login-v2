const registerMail = localStorage.getItem("user");
const registerPass = localStorage.getItem("pass");

if(registerMail== null && registerPass == null){
    alert("Você não tem acesso a essa página.");
    window.location.href = "/index.html";
}else{
    document.getElementById("show__user").innerHTML = `
    Seu usuário é: ${registerMail}`;
    document.getElementById("show__pass").innerHTML = `
    sua senha é: ${registerPass}`;
}

function exitPanel(){
    window.location.href = "/index.html";
}
document.getElementById("exit__button").addEventListener("click", exitPanel);

function removeUser(){
    if(confirm("Esta ação não pode ser desfeita.")){
        window.localStorage.clear();
        alert("Usuário excluído com sucesso!");
        window.location.href = "/index.html";
    }
}
document.getElementById("user__delete").addEventListener("click", removeUser);