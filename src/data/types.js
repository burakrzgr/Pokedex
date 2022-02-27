export const types = [

    {
        id: 1,
        Name : "Fire",
        Desc: "Ateş Türünde Saldırılar Yapar.",
        SE : ["Bug", "Grass", "Ice", "Steel"],
        NE: ["Dragon", "Fire", "Rock", "Water"],
        Imm: [],
        Style: {Header_Bg: "#ce663b", Header_Fg: "ffffff", Detail_Bg: "#ef875c", Detail_Fg: "ffffff" }
    },
    {
        id: 2,
        Name: "Electric",
        Desc: "Elektir Türünde Saldırılar Yapar.",
        SE: ["Flying", "Water"],
        NE: ["Dragon", "Electric", "Grass"],
        Imm: [],
        Style: {Header_Bg: "#de764b", Header_Fg: "ffffff", Detail_Bg: "#ef875c", Detail_Fg: "ffffff" }
    },
    {
        id: 3,
        Name : "Water",
        Desc: "Su Türünde Saldırılar Yapar.",
        SE: ["Fire", "Ground", "Rock"],
        NE: ["Dragon", "Grass", "Water"],
        Imm: [],
        Style: {Header_Bg: "#de764b", Header_Fg: "ffffff", Detail_Bg: "#ef875c", Detail_Fg: "ffffff" }
    },
    {
        id: 4,
        Name: "Ghost",
        Desc: "Hayalet Türünde Saldırılar Yapar.",
        SE: ["Ghost", "Psychic"],
        NE: ["Dark"],
        Imm: ["Normal"],
        Style: {Header_Bg: "#de764b", Header_Fg: "ffffff", Detail_Bg: "#ef875c", Detail_Fg: "ffffff" }
    },
    {
        id: 5,
        Name: "Dragon",
        Desc: "Ejderha Türünde Saldırılar Yapar.",
        SE: ["Dragon"],
        NE: ["Steel"],
        Imm: ["Fairy"],
        Style: {Header_Bg: "#de764b", Header_Fg: "ffffff", Detail_Bg: "#ef875c", Detail_Fg: "ffffff" }
    },
    {
        id: 6,
        Name: "Flying",
        Desc: "Uçabien pokemonlara has saldırılar yapar.",
        SE : ["Bug", "Fighting", "Grass"],
        NE: ["Electric","Rock","Steel"],
        Imm: [],
        Style: {Header_Bg: "#e8a14f", Header_Fg: "ffffff", Detail_Bg: "#f9c37f", Detail_Fg: "ffffff" }
    }
]