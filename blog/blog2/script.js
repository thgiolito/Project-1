const tabs = document.querySelectorAll('.tabs');
const content = document.querySelectorAll('.content');
let index = 0;

tabs.forEach(tab => {

    tab.addEventListener('click', () => {

        if(tab.classList.contains('active')){
            return;
        } else {
            tab.classList.add('active');
        }
    index = tab.getAttribute('data-anim');
    console.log(index);

    for(i = 0; i < tabs.length; i++) {

        if(tabs[i].getAttribute('data-anim')
        != index) {
            tabs[i].classList.remove('active')
            const Pres = document.getElementById("OurBlog");
            if (Pres.style.display === "block") {
                Pres.style.display ="none";
            } else {
                Pres.style.display ="block"
                }
            }
        }

    for(j = 0; j < tabs.length; j++){
        if(tabs[j].getAttribute('data-anim')
        != index){
            const textBlog = document.getElementById("presentation");
            if (textBlog.style.display === "none") {
                textBlog.style.display ="block";
            } else {
                textBlog.style.display ="none"
                }

            }
        }  
    })
});