size = document.getElementById("size");
function exergue(p) {
    p.style.backgroundColor = "aquamarine";
    p.style.fontSize = "26px";
}
function restore(p) {
    p.style.backgroundColor = "beige";
    p.style.fontSize = size.value+"px";
}
function highlight(p) {
    console.log(p + " clicked");
    if (document.getElementById("exergue").checked == true) {
        exergue(p);
    } else {
        restore(p);
    }
}

var p1 = document.getElementById("p1");
p1.onclick = function () {highlight(p1); };
var p2 = document.getElementById("p2");
p2.onclick = function () {highlight(p2); };

var checkbox = document.getElementById("exergue");
checkbox.onclick = function () {
    if(checkbox.checked == false) {
        restore(p1);
        restore(p2);
    }
}


window.onbeforeunload = function(){
    return 'Are you sure you want to leave?';
}
document.querySelector("select").onchange = function () {
    p1.style.fontFamily = document.querySelector("select").value;
    p2.style.fontFamily = document.querySelector("select").value;
}

size.onchange = function () {
    p1.style.fontSize = size.value+"px";
    p2.style.fontSize = size.value+"px";
}
radios = document.querySelectorAll("input[type=radio]");
document.getElementById("align_r").onclick = function () {
    for(r in radios){
        if(radios[r].checked == true) {
            p1.style.textAlign = radios[r].value;
            p2.style.textAlign = radios[r].value;
            break;
        }
    }
}
document.querySelector("input[type=button]").onclick = function () {
    email = document.getElementById("email").value;
    pseudo = document.getElementById("pseudo").value;
    cp = document.getElementById("cp").value;
    comment = document.getElementById("comment").value;
    
    if(validatePseudo(pseudo)){
        if(validateEmail(email)){
            var div = document.createElement("div");
            div.setAttribute("class", "comment");
            
            var date = document.createElement("p");
            date.appendChild(document.createTextNode(new Date()));
            div.appendChild(date);
            
            var pelt = document.createElement("p");
            pelt.appendChild(document.createTextNode("pseudo: "+pseudo));
            div.appendChild(pelt);
            
            var cpelt = document.createElement("p");
            cpelt.appendChild(document.createTextNode("code postal: "+cp));
            div.appendChild(cpelt);
            
            var emailelt = document.createElement("p");
            emailelt.appendChild(document.createTextNode("email: "+email));
            div.appendChild(emailelt);
            
            var commentelt = document.createElement("p");
            commentelt.appendChild(document.createTextNode("comment: "+comment));
            div.appendChild(commentelt);

            document.getElementById("email").value = "";
            document.getElementById("pseudo").value = "";
            document.getElementById("cp").value = "";
            document.getElementById("comment").value = "";
            
            document.querySelector("div.comments").appendChild(div);
        } else alert("invalid email!");
    }else alert("invalid pseudo!");
    
    
} 
function validateEmail(email) {
var regEmail = new RegExp('^[0-9a-z._-]+@[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
    return regEmail.test(email);
}

function validatePseudo(pseudo) {
    var regPseudo = new RegExp('^[0-9a-z]{4,20}$','i');
    return regPseudo.test(pseudo);
}