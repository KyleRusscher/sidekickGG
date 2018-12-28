const championKeys = {
    "champNames": [
        "Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Ashe", "AurelionSol", "Azir", "Bard", "Blitzcrank", "Brand", "Braum", "Caitlyn", "Camille", "Cassiopeia", "Chogath", "Corki", "Darius", "Diana", "DrMundo", "Draven", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Janna", "JarvanIV", "Jax", "Jayce", "Jhin", "Jinx", "Kaisa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Khazix", "Kindred", "Kled", "KogMaw", "Leblanc", "LeeSin", "Leona", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "MasterYi", "MissFortune", "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus", "Nidalee", "Nocturne", "Nunu", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Quinn", "Rakan", "Rammus", "RekSai", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Sejuani", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Syndra", "TahmKench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "TwistedFate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Velkoz", "Vi", "Viktor", "Vladimir", "Volibear", "Warwick", "MonkeyKing", "Xayah", "Xerath", "XinZhao", "Yasuo", "Yorick", "Zac", "Zed", "Ziggs", "Zilean", "Zoe", "Zyra"
    ],
    "nameToId": {
        "Annie": 1,
        "Olaf": 2,
        "Galio": 3,
        "TwistedFate": 4,
        "XinZhao": 5,
        "Urgot": 6,
        "Leblanc": 7,
        "Vladimir": 8,
        "Fiddlesticks": 9,
        "Kayle": 10,
        "MasterYi": 11,
        "Alistar": 12,
        "Ryze": 13,
        "Sion": 14,
        "Sivir": 15,
        "Soraka": 16,
        "Teemo": 17,
        "Tristana": 18,
        "Warwick": 19,
        "Nunu": 20,
        "MissFortune": 21,
        "Ashe": 22,
        "Tryndamere": 23,
        "Jax": 24,
        "Morgana": 25,
        "Zilean": 26,
        "Singed": 27,
        "Evelynn": 28,
        "Twitch": 29,
        "Karthus": 30,
        "Chogath": 31,
        "Amumu": 32,
        "Rammus": 33,
        "Anivia": 34,
        "Shaco": 35,
        "DrMundo": 36,
        "Sona": 37,
        "Kassadin": 38,
        "Irelia": 39,
        "Janna": 40,
        "Gangplank": 41,
        "Corki": 42,
        "Karma": 43,
        "Taric": 44,
        "Veigar": 45,
        "Trundle": 48,
        "Swain": 50,
        "Caitlyn": 51,
        "Blitzcrank": 53,
        "Malphite": 54,
        "Katarina": 55,
        "Nocturne": 56,
        "Maokai": 57,
        "Renekton": 58,
        "JarvanIV": 59,
        "Elise": 60,
        "Orianna": 61,
        "MonkeyKing": 62,
        "Brand": 63,
        "LeeSin": 64,
        "Vayne": 67,
        "Rumble": 68,
        "Cassiopeia": 69,
        "Skarner": 72,
        "Heimerdinger": 74,
        "Nasus": 75,
        "Nidalee": 76,
        "Udyr": 77,
        "Poppy": 78,
        "Gragas": 79,
        "Pantheon": 80,
        "Ezreal": 81,
        "Mordekaiser": 82,
        "Yorick": 83,
        "Akali": 84,
        "Kennen": 85,
        "Garen": 86,
        "Leona": 89,
        "Malzahar": 90,
        "Talon": 91,
        "Riven": 92,
        "KogMaw": 96,
        "Shen": 98,
        "Lux": 99,
        "Xerath": 101,
        "Shyvana": 102,
        "Ahri": 103,
        "Graves": 104,
        "Fizz": 105,
        "Volibear": 106,
        "Rengar": 107,
        "Varus": 110,
        "Nautilus": 111,
        "Viktor": 112,
        "Sejuani": 113,
        "Fiora": 114,
        "Ziggs": 115,
        "Lulu": 117,
        "Draven": 119,
        "Hecarim": 120,
        "Khazix": 121,
        "Darius": 122,
        "Jayce": 126,
        "Lissandra": 127,
        "Diana": 131,
        "Quinn": 133,
        "Syndra": 134,
        "AurelionSol": 136,
        "Kayn": 141,
        "Zoe": 142,
        "Zyra": 143,
        "Kaisa": 145,
        "Gnar": 150,
        "Zac": 154,
        "Yasuo": 157,
        "Velkoz": 161,
        "Taliyah": 163,
        "Camille": 164,
        "Braum": 201,
        "Jhin": 202,
        "Kindred": 203,
        "Jinx": 222,
        "TahmKench": 223,
        "Lucian": 236,
        "Zed": 238,
        "Kled": 240,
        "Ekko": 245,
        "Vi": 254,
        "Aatrox": 266,
        "Nami": 267,
        "Azir": 268,
        "Thresh": 412,
        "Illaoi": 420,
        "RekSai": 421,
        "Ivern": 427,
        "Kalista": 429,
        "Bard": 432,
        "Rakan": 497,
        "Xayah": 498,
        "Ornn": 516,
        "Pyke": 555
    },
    "idToName": {
        "1": "Annie",
        "2": "Olaf",
        "3": "Galio",
        "4": "TwistedFate",
        "5": "XinZhao",
        "6": "Urgot",
        "7": "Leblanc",
        "8": "Vladimir",
        "9": "Fiddlesticks",
        "10": "Kayle",
        "11": "MasterYi",
        "12": "Alistar",
        "13": "Ryze",
        "14": "Sion",
        "15": "Sivir",
        "16": "Soraka",
        "17": "Teemo",
        "18": "Tristana",
        "19": "Warwick",
        "20": "Nunu",
        "21": "MissFortune",
        "22": "Ashe",
        "23": "Tryndamere",
        "24": "Jax",
        "25": "Morgana",
        "26": "Zilean",
        "27": "Singed",
        "28": "Evelynn",
        "29": "Twitch",
        "30": "Karthus",
        "31": "Chogath",
        "32": "Amumu",
        "33": "Rammus",
        "34": "Anivia",
        "35": "Shaco",
        "36": "DrMundo",
        "37": "Sona",
        "38": "Kassadin",
        "39": "Irelia",
        "40": "Janna",
        "41": "Gangplank",
        "42": "Corki",
        "43": "Karma",
        "44": "Taric",
        "45": "Veigar",
        "48": "Trundle",
        "50": "Swain",
        "51": "Caitlyn",
        "53": "Blitzcrank",
        "54": "Malphite",
        "55": "Katarina",
        "56": "Nocturne",
        "57": "Maokai",
        "58": "Renekton",
        "59": "JarvanIV",
        "60": "Elise",
        "61": "Orianna",
        "62": "MonkeyKing",
        "63": "Brand",
        "64": "LeeSin",
        "67": "Vayne",
        "68": "Rumble",
        "69": "Cassiopeia",
        "72": "Skarner",
        "74": "Heimerdinger",
        "75": "Nasus",
        "76": "Nidalee",
        "77": "Udyr",
        "78": "Poppy",
        "79": "Gragas",
        "80": "Pantheon",
        "81": "Ezreal",
        "82": "Mordekaiser",
        "83": "Yorick",
        "84": "Akali",
        "85": "Kennen",
        "86": "Garen",
        "89": "Leona",
        "90": "Malzahar",
        "91": "Talon",
        "92": "Riven",
        "96": "KogMaw",
        "98": "Shen",
        "99": "Lux",
        "101": "Xerath",
        "102": "Shyvana",
        "103": "Ahri",
        "104": "Graves",
        "105": "Fizz",
        "106": "Volibear",
        "107": "Rengar",
        "110": "Varus",
        "111": "Nautilus",
        "112": "Viktor",
        "113": "Sejuani",
        "114": "Fiora",
        "115": "Ziggs",
        "117": "Lulu",
        "119": "Draven",
        "120": "Hecarim",
        "121": "Khazix",
        "122": "Darius",
        "126": "Jayce",
        "127": "Lissandra",
        "131": "Diana",
        "133": "Quinn",
        "134": "Syndra",
        "136": "AurelionSol",
        "141": "Kayn",
        "142": "Zoe",
        "143": "Zyra",
        "145": "Kaisa",
        "150": "Gnar",
        "154": "Zac",
        "157": "Yasuo",
        "161": "Velkoz",
        "163": "Taliyah",
        "164": "Camille",
        "201": "Braum",
        "202": "Jhin",
        "203": "Kindred",
        "222": "Jinx",
        "223": "TahmKench",
        "236": "Lucian",
        "238": "Zed",
        "240": "Kled",
        "245": "Ekko",
        "254": "Vi",
        "266": "Aatrox",
        "267": "Nami",
        "268": "Azir",
        "412": "Thresh",
        "420": "Illaoi",
        "421": "RekSai",
        "427": "Ivern",
        "429": "Kalista",
        "432": "Bard",
        "497": "Rakan",
        "498": "Xayah",
        "516": "Ornn",
        "555": "Pyke"
    }
}
var steps = {};

exports.handler = async function (event, $context) {

    try {
        // S3 List Objects
        // S3 get Objects
        // Combine Data
        // S3 put objects 

        
        return null;
    } catch (err) {
        return err;
    }

};





(async function () {
    exports.handler({}, require('aws-lambda-mock-context')({
        account: '873049427805',
        alias: 'test',
        timeout: 300
    }));
})()