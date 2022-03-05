const types = [
    {
        "id": 1,
        "Name": "Bug",
        "Desc": "Böcek Türünde Saldırılar Yapar.",
        "SE": [
            "Bug",
            "Fire",
            "Flying",
            "Ice"
        ],
        "NE": [
            "Fighting",
            "Ground",
            "Steel"
        ],
        "Imm": [],
        "Style": {
            "Header_Bg": "#3d5a18",
            "Header_Fg": "#ced8c0",
            "Detail_Bg": "#cae8a1",
            "Detail_Fg": "#2a4603"
        }
    },
    {
        "id": 2,
        "Name": "Dark",
        "Desc": "Karanlık Türünde Saldırılar Yapar.",
        "SE": [
            "Ghost",
            "Psychic"
        ],
        "NE": [
            "Dark",
            "Fairy",
            "Fighting"
        ],
        "Imm": [],
        "Style": {
            "Header_Bg": "#080808",
            "Header_Fg": "#ffffff",
            "Detail_Bg": "#5c656d",
            "Detail_Fg": "#ffffff"
        }
    },
    {
        "id": 3,
        "Name": "Dragon",
        "Desc": "Ejderha Türünde Saldırılar Yapar.",
        "SE": [
            "Dragon"
        ],
        "NE": [
            "Steel"
        ],
        "Imm": [
            "Fairy"
        ],
        "Style": {
            "Header_Bg": "#1a0ba2",
            "Header_Fg": "#fc6f38",
            "Detail_Bg": "#f1d1c7",
            "Detail_Fg": "#0b0071"
        }
    },
    {
        "id": 4,
        "Name": "Electric",
        "Desc": "Elektir Türünde Saldırılar Yapar.",
        "SE": [
            "Flying",
            "Water"
        ],
        "NE": [
            "Dragon",
            "Electric",
            "Grass"
        ],
        "Imm": [],
        "Style": {
            "Header_Bg": "#fff000",
            "Header_Fg": "#000000",
            "Detail_Bg": "#fffbb8",
            "Detail_Fg": "#000000"
        }
    },
    {
        "id": 5,
        "Name": "Fairy",
        "Desc": "Buz Türünde Saldırılar Yapar.",
        "SE": [
            "Water",
            "Ground",
            "Rock"
        ],
        "NE": [
            "Fire",
            "Grass",
            "Poison",
            "Flying",
            "Bug",
            "Dragon",
            "Steel"
        ],
        "Imm": [],
        "Style": {
            "Header_Bg": "#7c436b",
            "Header_Fg": "#ffffff",
            "Detail_Bg": "#eab8e4",
            "Detail_Fg": "#000000"
        }
    },
    {
        "id": 6,
        "Name": "Fighting",
        "Desc": "Dövüş Türünde Saldırılar Yapar.",
        "SE": [
            "Normal",
            "Ice",
            "Dark",
            "Rock",
            "Steel"
        ],
        "NE": [
            "Poison",
            "Flying",
            "Bug",
            "Psychic"
        ],
        "Imm": [
            "Ghost"
        ],
        "Style": {
            "Header_Bg": "#c03028",
            "Header_Fg": "#ffffff",
            "Detail_Bg": "#e68883",
            "Detail_Fg": "#000000"
        }
    },
    {
        "id": 7,
        "Name": "Fire",
        "Desc": "Ateş Türünde Saldırılar Yapar.",
        "SE": [
            "Bug",
            "Grass",
            "Ice",
            "Steel"
        ],
        "NE": [
            "Dragon",
            "Fire",
            "Rock",
            "Water"
        ],
        "Imm": [],
        "Style": {
            "Header_Bg": "#e42e00",
            "Header_Fg": "#ffefac",
            "Detail_Bg": "#ffa77c",
            "Detail_Fg": "#000000"
        }
    },
    {
        "id": 8,
        "Name": "Flying",
        "Desc": "Uçabilen pokemonlara has saldırılar yapar.",
        "SE": [
            "Bug",
            "Fighting",
            "Grass"
        ],
        "NE": [
            "Electric",
            "Rock",
            "Steel"
        ],
        "Imm": [],
        "Style": {
            "Header_Bg": "#3974a1",
            "Header_Fg": "#dbe5ec",
            "Detail_Bg": "#c2e2f9",
            "Detail_Fg": "#0c151c"
        }
    },
    {
        "id": 9,
        "Name": "Ghost",
        "Desc": "Hayalet Türünde Saldırılar Yapar.",
        "SE": [
            "Ghost",
            "Psychic"
        ],
        "NE": [
            "Dark"
        ],
        "Imm": [
            "Normal"
        ],
        "Style": {
            "Header_Bg": "#3800d5",
            "Header_Fg": "#8bffdc",
            "Detail_Bg": "#ba91ee",
            "Detail_Fg": "#025f48"
        }
    },
    {
        "id": 10,
        "Name": "Grass",
        "Desc": "Buz Türünde Saldırılar Yapar.",
        "SE": [
            "Water",
            "Ground",
            "Rock"
        ],
        "NE": [
            "Fire",
            "Grass",
            "Poison",
            "Flying",
            "Bug",
            "Dragon",
            "Steel"
        ],
        "Imm": [],
        "Style": {
            "Header_Bg": "#086805",
            "Header_Fg": "#dffcd3",
            "Detail_Bg": "#7efc99",
            "Detail_Fg": "#012500"
        }
    },
    {
        "id": 11,
        "Name": "Ground",
        "Desc": "Yer türündeki pokemonlara has saldırılar yapar.",
        "SE": [
            "Electric",
            "Fire",
            "Poison",
            "Rock",
            "Steel"
        ],
        "NE": [
            "Bug",
            "Grass"
        ],
        "Imm": [],
        "Style": {
            "Header_Bg": "#7c8128",
            "Header_Fg": "#fefccb",
            "Detail_Bg": "#e7e6c4",
            "Detail_Fg": "#1e1e00"
        }
    },
    {
        "id": 12,
        "Name": "Ice",
        "Desc": "Buz Türünde Saldırılar Yapar.",
        "SE": [
            "Fire",
            "Ground",
            "Rock"
        ],
        "NE": [
            "Dragon",
            "Grass",
            "Water"
        ],
        "Imm": [],
        "Style": {
            "Header_Bg": "#10b6e7",
            "Header_Fg": "#d8dfef",
            "Detail_Bg": "#72abbf",
            "Detail_Fg": "#ffffff"
        }
    },
    {
        "id": 13,
        "Name": "Normal",
        "Desc": "Normal Türünde Saldırılar Yapar.",
        "SE": [],
        "NE": [
            "Fighting"
        ],
        "Imm": [
            "Ghost"
        ],
        "Style": {
            "Header_Bg": "#565656",
            "Header_Fg": "#ffffff",
            "Detail_Bg": "#cecece",
            "Detail_Fg": "#000000"
        }
    },
    {
        "id": 14,
        "Name": "Poison",
        "Desc": "Zehir Türünde Saldırılar Yapar.",
        "SE": [
            "Water",
            "Ground",
            "Rock"
        ],
        "NE": [
            "Fire",
            "Grass",
            "Poison",
            "Flying",
            "Bug",
            "Dragon",
            "Steel"
        ],
        "Imm": [],
        "Style": {
            "Header_Bg": "#56107a",
            "Header_Fg": "#20c055",
            "Detail_Bg": "#8ce3b0",
            "Detail_Fg": "#260058"
        }
    },
    {
        "id": 15,
        "Name": "Psychic",
        "Desc": "Zehir Türünde Saldırılar Yapar.",
        "SE": [
            "Fighting",
            "Poison",
            "Rock"
        ],
        "NE": [
            "Psychic",
            "Steel"
        ],
        "Imm": [
            "Dark"
        ],
        "Style": {
            "Header_Bg": "#fc6fc1",
            "Header_Fg": "#ffd426",
            "Detail_Bg": "#c9c8d9",
            "Detail_Fg": "#81014b"
        }
    },
    {
        "id": 16,
        "Name": "Rock",
        "Desc": "Kaya Türünde Saldırılar Yapar.",
        "SE": [
            "Bug",
            "Fire",
            "Flying",
            "Ice"
        ],
        "NE": [
            "Fighting",
            "Ground",
            "Steel"
        ],
        "Imm": [],
        "Style": {
            "Header_Bg": "#494949",
            "Header_Fg": "#b6b60b",
            "Detail_Bg": "#eeeedc",
            "Detail_Fg": "#545400"
        }
    },
    {
        "id": 17,
        "Name": "Steel",
        "Desc": "Buz Türünde Saldırılar Yapar.",
        "SE": [
            "Water",
            "Ground",
            "Rock"
        ],
        "NE": [
            "Fire",
            "Grass",
            "Poison",
            "Flying",
            "Bug",
            "Dragon",
            "Steel"
        ],
        "Imm": [],
        "Style": {
            "Header_Bg": "#657782",
            "Header_Fg": "#cdebfe",
            "Detail_Bg": "#e3d3dc",
            "Detail_Fg": "#070815"
        }
    },
    {
        "id": 18,
        "Name": "Water",
        "Desc": "Su Türünde Saldırılar Yapar.",
        "SE": [
            "Fire",
            "Ground",
            "Rock"
        ],
        "NE": [
            "Dragon",
            "Grass",
            "Water"
        ],
        "Imm": [],
        "Style": {
            "Header_Bg": "#033e94",
            "Header_Fg": "#ffffff",
            "Detail_Bg": "#5daef7",
            "Detail_Fg": "#f3f3f3"
        }
    }
]

export default types;