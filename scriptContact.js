const form = document.querySelector("#contactForm");
const blockTwo = document.querySelector('#blockTwo');
const blockOne = document.getElementById('blockOne');

const monsters = {
    it: {
        intervenants: 3,
        price: 500,
    },
    eggs: {
        intervenants: 1,
        price: 150,
    },
    spiders : {
        intervenants: 2,
        price: 250,
    },
    chupacabra : {
        intervenants: 3,
        price: 400,
    },
    dataAnalyst: {
        intervenants: 1,
        price: 100,
    },
    zombaby: {
        intervenants: 2,
        price: 100,
    },
    sadako: {
        intervenants: 3,
        price: 300,
    },
    lego: {
        intervenants: 2,
        price: 75,
    },
    noiraude: {
        intervenants: 1,
        price: 100,
    },
    demogorgon: {
        intervenants: 4,
        price: 500,
    },
    chucky: {
        intervenants: 2,
        price: 300,
    },
    cthulhu: {
        intervenants: 75,
        price: 10000,
    },
    data: {
        intervenants: 1,
        price: 75,
    },


}




form.onsubmit = function(event){

    event.preventDefault();
    const monsterNumber = document.querySelector('#monstercount').value;
    const monsterType = document.querySelector('#monsterType').value;
    const userWhen = document.querySelector('#userWhen').value;

    const intervenantsResult = document.getElementById('intervenantsResult');
    intervenantsResult.innerHTML = `${monsters[monsterType].intervenants * monsterNumber/2}`;
    intervenantsResult.style.backgroundColor = 'black';
    intervenantsResult.style.border = '1px solid #9DC41A';
    intervenantsResult.style.padding = '3px';
    intervenantsResult.style.borderRadius = '5px';
    intervenantsResult.style.fontWeight ='bold';

    let currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
    function addDays(currentDate, days) {
        return new Date(currentDate.getTime() + days*24*60*60*1000);
    }

    const result = addDays(currentDate, userWhen).toLocaleDateString(undefined, options);
    const dateResult = document.getElementById('dateResult');
    dateResult.innerHTML = `${result}`;
    dateResult.style.backgroundColor = 'black';
    dateResult.style.border = '1px solid #9DC41A';
    dateResult.style.padding = '3px';
    dateResult.style.borderRadius = '5px';
    dateResult.style.fontWeight ='bold';

    const priceResult = document.getElementById('priceResult');
    priceResult.innerHTML = `${monsters[monsterType].price * monsterNumber}€`;
    priceResult.style.backgroundColor = 'black';
    priceResult.style.border = '1px solid #9DC41A';
    priceResult.style.padding = '3px';
    priceResult.style.borderRadius = '5px';
    priceResult.style.fontWeight ='bold';
    if (window.screen.width <= 768) {
    blockTwo.style.display = 'flex';
    blockOne.style.display= 'none';
    }
    else {}
}


