const fs = require('fs')

function selectOrg() {
    fs.readFile('./textData/orgs.txt', (err, data) => {
        if (err) {
            console.log("error in selectOrg")
            throw err;
        } 
        data = data.toString()
        const orgs = data.split('\n')
        randomInd = Math.floor(Math.random() * orgs.length)
        if (randomInd % 2 == 1) {
            randomInd = (randomInd + 1) % orgs.length
        }
        const badge = document.createElement("p")
        // css file ADDD SOON
        // badge.classList.add("color-secondary-text", "type--caption");
        badge.textContent = `DONATIONS: ${orgs[randomInd]} \n URL: ${orgs[randomInd + 1]}`;
    })

}

function selectFacts() {
    fs.readFile('./textData/facts.txt', (err, data) => {
        if (err) {
            console.log("error in selectFacts")
            throw err;
        }
        data = data.toString()
        const facts = data.split('\n')
        return facts[Math.floor(Math.random() * facts.length)];
    })
}

function selectHabits() {
    fs.readFile('./textData/habits.txt', (err, data) => {
        if (err) {
            console.log("error in selectHabits")
            throw err;
        }
        data = data.toString()
        const habits = data.split('\n')
        return habits[Math.floor(Math.random() * habits.length)];
    })
}

selectOrg();