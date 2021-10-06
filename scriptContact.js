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


}




form.onsubmit = function(event){

    event.preventDefault();
    const monsterNumber = document.querySelector('#monstercount').value;
    const monsterType = document.querySelector('#monsterType').value;
    const userWhen = document.querySelector('#userWhen').value;

    const intervenantsResult = document.getElementById('intervenantsResult');
    const teamNeeded = document.createElement('div');
    teamNeeded.innerHTML = `${monsters[monsterType].intervenants * monsterNumber/2}`;
    intervenantsResult.appendChild(teamNeeded);

    let currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
    function addDays(currentDate, days) {
        return new Date(currentDate.getTime() + days*24*60*60*1000);
    }

    const result = addDays(currentDate, userWhen).toLocaleDateString(undefined, options);
    const dateResult = document.getElementById('dateResult');
    dateResult.innerHTML = `${result}`;


    const priceResult = document.getElementById('priceResult');
    priceResult.innerHTML = `${monsters[monsterType].price * monsterNumber}`;

    if (window.screen.width <= 768) {
    blockTwo.style.display = 'flex';
    blockOne.style.display= 'none';
    }
    else {}
   

    console.log(result);
    console.log(monsterNumber);
    console.log(monsterType);
    console.log(userWhen);
    console.log(monsters[monsterType].price * monsterNumber);
    console.log(monsters[monsterType].intervenants * monsterNumber/2);
}


