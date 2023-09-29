
function randomizeStats() {
    var abilityScores = {
        "str": randomStat(),
        "dex": randomStat(),
        "con": randomStat(),
        "int": randomStat(),
        "wis": randomStat(),
        "cha": randomStat(),
    };
    document.getElementById("statBox").innerHTML = "Str: " + abilityScores["str"]
    + "<br> Dex: " + abilityScores["dex"]
    + "<br> Con: " + abilityScores["con"]
    + "<br> Int: " + abilityScores["int"]
    + "<br> Wis: " + abilityScores["wis"]
    + "<br> Cha: " + abilityScores["cha"];
}

let randomStat = (stat = 0) => Math.round(stat + (Math.random() * 6 + 1) + (Math.random() * 6 + 1) + (Math.random() * 6 + 1));