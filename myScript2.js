const teams = [
    {
        nome: "Milan",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "Juventus",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "Barcelona",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "Manchester",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "Inter",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "Real Madrid",
        punti_fatti: 0,
        falli_subiti: 0
    },
];

const randomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateTeamStatistics = (teamsList) => {
    for(const thisTeam of teamsList) {
        thisTeam.punti_fatti = randomNumber(0, 100);
        thisTeam.falli_subiti = randomNumber(0,100);
    }
}

const generateNewTeams = (teamsList) => {
    const newTeams = [];

    for(const thisTeam of teamsList) {
        const { nome, falli_subiti} = thisTeam;

    newTeams.push({
        nome,
        falli_subiti
    })
}
return newTeams;
}

generateTeamStatistics(teams);
const newTeams = generateNewTeams(teams);

console.log("Initial Teams", teams)
console.log("New Teams", newTeams)