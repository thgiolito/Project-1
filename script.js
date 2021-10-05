const form = document.querySelector("#form");
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
}




form.onsubmit = function(event){
    event.preventDefault();
    
    const monsterNumber = document.querySelector('#monstercount').value;
    const monsterType = document.querySelector('#monsterType').value;
    const userWhen = document.querySelector('#userWhen').value;

    const intervenantsResult = document.getElementById('intervenantsResult');
    const teamNeeded = document.createElement('div');
    teamNeeded.classList.add('result');
    teamNeeded.innerHTML = `${monsters[monsterType].intervenants * monsterNumber/2}`;
    intervenantsResult.appendChild(teamNeeded);

    const dateResult = document.getElementById('dateResult');
    const dateNeeded = document.createElement('div');

    const priceResult = document.getElementById('priceResult');
    priceResult.innerHTML = `${monsters[monsterType].price * monsterNumber}`;
   


    console.log(monsterNumber);
    console.log(monsterType);
    console.log(userWhen);
    console.log(monsters[monsterType].price * monsterNumber);
    console.log(monsters[monsterType].intervenants * monsterNumber/2);
}


