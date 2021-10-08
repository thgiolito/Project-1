const formulaire = document.querySelector("#innerForm");
const avis = document.getElementById("resultForm");


formulaire.onsubmit = function(event){
    event.preventDefault();
    const name = document.getElementById("name").value;
    const msg = document.getElementById("msg").value;
    const commentaire = document.createElement("div");
    commentaire.innerHTML = `${name} a écrit : ${msg}`;
    avis.appendChild(commentaire);
    avis.style.display = "flex";
    avis.style.flexDirection = "column";
    avis.style.alignItems = 'flex-start';
    avis.style.overflowY = 'scroll';

}