
// MODAL
var modal = document.getElementById('id01');
var modal2 = document.getElementById('id02');
// CHIUSURA MODAL
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//REVERSE
var txt = "CIAO  !!!";
var revTxt = "";
var i = txt.length;
for (i - 1; i >= 0; i--) {
    revTxt = revTxt + txt.charAt(i);
}
console.log(revTxt);

//FUNZIONE DEL BOTTONE PER IL REVERSE
function myFunction1() {
    var node = document.createElement("P");
    var textnode = document.createTextNode(txt);
    var textnode2 = document.createTextNode(revTxt);
    // Ciao da Ale ;)
    let change = document.getElementById("demo");


    if (change.textContent == txt) {
        node.appendChild(textnode2);
        document.getElementById("demo").appendChild(node);

    } else if (change.textContent == "" || change.textContent == revTxt) {

        node.appendChild(textnode);
        document.getElementById("demo").appendChild(node);

    } else {

    }
}


//FUNZIONE PER RENDERE LA PAGINA RESPONSIVE
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }



}
//FUNZIONE DI CONTROLLI LOGIN E REGISTRAZIONE
function success() {
    //VARIABILI CHE PRENDI DA QUEL CHE SCRIVE L'UTENTE
    var name = document.getElementById("name").value;
    var lastName = document.getElementById("lastName").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;
    var psw = document.getElementById("psw").value;
    var rptpsw = document.getElementById("rpt-psw").value;
    var persona = "ip";
    var d = "";
    var user = "";
    var username = document.getElementById("username").value;
    var loginPsw = document.getElementById("loginPassword").value;
    //REGEX EMAIL
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+(?:\.[a-zA-Z]{2,4})$/;
    //REGEX NUMERI
    var num = /^[0-9]+$/
    //IF DI CONTROLLO DI INSERIMENTO CARATTERI
    if (document.getElementById("name").value === "" || document.getElementById("lastName").value === "" || document.getElementById("psw").value !== document.getElementById("rpt-psw").value || document.getElementById("psw").value === "" || document.getElementById("rpt-psw").value === "" || !document.getElementById("number").value.match(num) || !document.getElementById("email").value.match(mailformat)) {
        document.getElementById('signupbtn').disabled = true;
    } else {
        document.getElementById('signupbtn').disabled = false;

    }
    //FUNZIONE CHE VEDE IL CLICK DI REGISTRAZIONE
    document.getElementById('signupbtn').onclick = function () {
        alert("REGISTRAZIONE EFFETTUATA");
        d = new Date();
        document.getElementById("email").value;
        persona = [name, lastName, number, email, psw, rptpsw];
        user = new Map([
            [d, persona]
        ]);
        //DETTAGLI PROFILLO NEI BUTTON
        document.getElementById('btnProfile').onclick = function () {
            var keys = [...user.keys()];
            console.log(keys);
            var roles = [...user.values()];
            console.log(roles);
            console.log(d)
            console.log(user)

            var node1 = document.createElement("P");
            var profile = document.createTextNode("Data di creazione : " + keys + " Dati Profilo: " + roles);
            node1.appendChild(profile);
            document.getElementById("buttonDate").appendChild(node1);
        }
        document.getElementById('btnDate').onclick = function () {
            var node2 = document.createElement("P");
            var date = document.createTextNode(d);
            node2.appendChild(date);
            document.getElementById("buttonProfile").appendChild(node2);
        }

    };

    //if che dovrebbe dare un blocco al login e disabilitare il bottone se l username e la password del login non corrispondono alla mail e la password di registrazione
    if ((username.toLowerCase() === email.toLowerCase() && username !== "") && (loginPsw === psw && loginPsw !== "")) {
        document.getElementById('buttonLogin').disabled = false;
    } else {
        document.getElementById('buttonLogin').disabled = true;


        //FUNZIONE CHE VEDE IL CLICK DI LOGIN E se il login è effettuato abilita i tasti
        document.getElementById('buttonLogin').onclick = function () {
            alert("LOGIN EFFETTUATO" + " " + name.toUpperCase() + " " + lastName.toUpperCase());
            document.getElementById('btn').disabled = false;
            document.getElementById('btnProfile').disabled = false;
            document.getElementById('btnDate').disabled = false;

        }
        console.log(d)
        console.log(user)
    }





}





