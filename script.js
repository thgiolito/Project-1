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
    console.log(monsterNumber);
    const monsterType = document.querySelector('#monsterType').value;
    console.log(monsterType);
    const userWhen = document.querySelector('#userWhen').value;
    console.log(userWhen);
    console.log(monsters[monsterType].price * monsterNumber);
    console.log(monsters[monsterType].intervenants * monsterNumber/2);
}


