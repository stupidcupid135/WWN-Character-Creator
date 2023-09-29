
var abilityScores = {
    "str": 0,
    "dex": 0,
    "con": 0,
    "int": 0,
    "wis": 0,
    "cha": 0,
};
var charName = '';
var charClass = '';

function randomizeStats() {
    var tempScores = {
        "str": randomStat(),
        "dex": randomStat(),
        "con": randomStat(),
        "int": randomStat(),
        "wis": randomStat(),
        "cha": randomStat(),
    };
    abilityScores = tempScores;

    document.getElementById("statBox").innerHTML = "Str: " + abilityScores["str"]
    + "<br> Dex: " + abilityScores["dex"]
    + "<br> Con: " + abilityScores["con"]
    + "<br> Int: " + abilityScores["int"]
    + "<br> Wis: " + abilityScores["wis"]
    + "<br> Cha: " + abilityScores["cha"];
}

let randomStat = (stat = 0) => Math.round(stat + (Math.random() * 6 + 1) + (Math.random() * 6 + 1) + (Math.random() * 6 + 1));

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target).entries());
    console.log(data)
    charName = data['name'];
    charClass = data['class'];
    abilityScores[data['raisedScore']] = 14;
    console.log(charName + charClass + abilityScores['dex'])
  });