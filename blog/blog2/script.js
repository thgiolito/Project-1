const onglets = document.querySelectorAll('.onglets');
const contenu = document.querySelectorAll('.contenu');
let index = 0;

onglets.forEach(onglet => {

    onglet.addEventListener('click', () => {

        if(onglet.classList.contains('active')){
            return;
        } else {
            onglet.classList.add('active');
        }
    index = onglet.getAttribute('data-anim');
    console.log(index);

    for(i = 0; i < onglets.length; i++) {

        if(onglets[i].getAttribute('data-anim')
        != index) {
            onglets[i].classList.remove('active')
            const Pres = document.getElementById("OurBlog");
            if (Pres.style.display === "block") {
                Pres.style.display ="none";
            } else {
                Pres.style.display ="block"
                }
            }
        }

    for(j = 0; j < onglets.length; j++){
        if(onglets[j].getAttribute('data-anim')
        != index){
            const textBlog = document.getElementById("présentation");
            if (textBlog.style.display === "none") {
                textBlog.style.display ="block";
            } else {
                textBlog.style.display ="none"
                }

            }
        }  
    })
})
