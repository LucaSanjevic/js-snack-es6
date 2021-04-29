var bici = [
    {
        nome: "Gianni",
        peso: 15
    },
    {
        nome: "Furia",
        peso: 12
    },
    {
        nome: "Bolt",
        peso: 19
    },
    {
        nome: "Franco",
        peso: 10
    },
    {
        nome: "Akira",
        peso: 14
    },
    {
        nome: "Tomie",
        peso: 17
    },
];


const trovaBiciLeggera = (arrayList) => {
    let bicileggera;
    for (let i = 0; i < arrayList.length; i++) {
        const { nome, peso} = arrayList[i]
        if (!bicileggera || peso < bicileggera.peso) {
            bicileggera = {
                nome,
                peso
            }
        }
    }
    return bicileggera;
}

const trovataBiciLeggera = trovaBiciLeggera(bici);

console.log(trovataBiciLeggera);