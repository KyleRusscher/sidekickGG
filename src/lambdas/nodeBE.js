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
const axios = require('axios');
const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const clone = require('clone');

const base = 'http://api.champion.gg/v2/champions/';
const end = '/matchups?limit=1000000&api_key=3ec026e16e6e48393c3366b2c460bcf1'
const role = "/MIDDLE"
const BUCKET_NAME = "sidekick.gg";
const COUNTER_WINRATE_COUNT = 5;

var patch;
var timestamp
var steps = {};

exports.handler = async function (event, $context) {

    try {


        const roleData = await steps.roleData();
        console.log('1000 - Role Data Complete');

        const countersData = await steps.countersData(roleData);
        console.log('2000 - Counter Data Complete');

        const patchData = await steps.logPatchData(countersData);
        console.log('3000 - Log Patch Data Complete');

        const combinedData = await steps.combineMasterAndPatch(patchData)
        console.log('4000 - Combine Data Complete');

        const sideKickData = await steps.sideKickData(combinedData);
        console.log('5000 - SideKick Data Complete');

        const prodData = await steps.logProdData(sideKickData);
        console.log('6000 - Log Prod Data Complete');
        console.log("Lambda Complete");

        return;
    } catch (err) {
        console.log("ERR: "+ err)
        return err;
    }

};

steps.roleData = async function () {
    let baseData = {
        "TOP": {},
        "JUNGLE": {},
        "MIDDLE": {},
        "DUO_CARRY": {},
        "DUO_SUPPORT": {}
    };

    await axios.get("http://api.champion.gg/v2/champions?limit=710&api_key=3ec026e16e6e48393c3366b2c460bcf1")
        .then(response => {
            console.log("request was sent");
            if (response.data[0].patch) patch = response.data[0].patch;
            response.data.forEach(champion => {
                baseData[champion.role][championKeys.idToName[champion._id.championId]] = {
                    "winRate": champion.winRate,
                    "banRate": champion.banRate,
                    "playRate": champion.playRate,
                    "gamesPlayed": champion.gamesPlayed,
                    "wins": champion.winRate * champion.gamesPlayed,
                    "counters": [],
                    "sidekicks": [],
                    "id": champion._id.championId,
                    "counterScoreTotal": 0,
                    "role": champion.role
                }
            })
        })
        .catch(err => {
            throw err;
        })

    return baseData;
};

//Async logic
steps.countersData = async function (roleData) {
    console.log("counters");
    await Promise.all(Object.keys(roleData).map(async (lane) => {
        await Promise.all(Object.keys(roleData[lane]).map(async (champion) => {
            // await console.log("champion " + champion + "in Lane" + lane)
            await axios.get(base + roleData[lane][champion].id + "/" + lane + end)
                .then(response => {
                    roleData[lane][champion].matchups = {};
                    roleData[lane][champion].counters = [];
                    response.data.map(matchup => {
                        if (roleData[lane][championKeys.idToName[matchup.champ1_id]] && roleData[lane][championKeys.idToName[matchup.champ2_id]]) {
                            const counterName = matchup.champ2_id == roleData[lane][champion].id ? championKeys.idToName[matchup.champ1_id] : championKeys.idToName[matchup.champ2_id];
                            const champName = matchup.champ2_id != roleData[lane][champion].id ? championKeys.idToName[matchup.champ1_id] : championKeys.idToName[matchup.champ2_id];
                            const winRate = matchup.champ2_id == roleData[lane][champion].id ? matchup.champ1.winrate : matchup.champ2.winrate;
                            const adjustWinRate = winRate + (.5 - roleData[lane][counterName].winRate) + (roleData[lane][champName].winRate - .5);
                            const counterWeight = (1 / (1 + Math.E ** (-100 * (adjustWinRate - .5) + 4)));
                            const matchupItem = {
                                "counterId": championKeys.nameToId[counterName],
                                "counterWinRate": adjustWinRate, //Counter's winrate vs main
                                "count": matchup.count,
                                "counterWeight": counterWeight,
                                "counterName": counterName
                            };
                            roleData[lane][champion].counterScoreTotal += counterWeight;
                            roleData[lane][champion].matchups[counterName] = matchupItem;
                            roleData[lane][champion].counters.push(matchupItem);
                        }
                    });

                })
                .catch((err) => {
                    console.log(err);
                })
            if (roleData[lane][champion].counters.length == 0) {
                delete roleData[lane][champion];
            } else {
                roleData[lane][champion].counters.sort((a, b) => {
                    return b.counterWeight - a.counterWeight;
                });
                roleData[lane][champion].counters.forEach((counter, index) => {
                    if (roleData[lane][champion].matchups[counter.counterName]) roleData[lane][champion].matchups[counter.counterName].counterRank = index + 1;
                });
                roleData[lane][champion].blindPickTier = blindPickTier(roleData[lane][champion].counterScoreTotal, roleData[lane][champion].counters.length);
                roleData[lane][champion].blindPickTierValue = (roleData[lane][champion].counterScoreTotal * 10) / roleData[lane][champion].counters.length;
            }
        })).then(roleData).catch((err) => {
            console.log(err);
        });
    }));
    console.log(`Role Data Gathered`);
    return roleData;

};

function blindPickTier(cst, numOfMatchups) {
    let tier = "D";
    const value = (cst * 25) / numOfMatchups;
    if (value < 1) tier = "S";
    else if (value < 2) tier = "A";
    else if (value < 3) tier = "B";
    else if (value < 4) tier = "C";
    else if (value < 5) tier = "D+";
    else if (value < 5.5) tier = "D";
    else tier = "D-";

    if (value % 1 > .66 && value <= 4) tier += '-';
    if (value % 1 < .33 && value <= 4) tier += '+';

    return tier;
};




steps.logPatchData = async function (championData) {

    const keyName = `${patch}-${Date.now()}.json`
    let newPatch = true;

    const result = await s3.listObjectsV2({
        "Bucket": "sidekick.gg"
    }).promise();
    result.Contents.forEach((file) => {
        const key = file.Key;
        if (key.includes(patch)) newPatch = false;
    });
    if (newPatch) {
        const rawProdData = await s3.getObject({
            Bucket: 'sidekick.gg/data',
            Key: "allTime.json"
        }).promise();
        const prodData = JSON.parse(rawProdData.Body);
        //console.log('JSON.stringify(prodData): '+ JSON.stringify(prodData));


        const mData = await s3.putObject({
            Bucket: 'sidekick.gg/data',
            Key: "masterData.json",
            Body: JSON.stringify(prodData),
            ContentType: "application/json"
        }).promise();
        //console.log(mData);
    }

    await s3.putObject({
        Bucket: 'sidekick.gg/data',
        Key: keyName,
        Body: JSON.stringify(championData),
        ContentType: "application/json"
    }, function (err, data) {
        //console.log(JSON.stringify(err) + " " + JSON.stringify(data));
    }).promise();

    return championData;
};


steps.logProdData = async function (championData) {

    // let productionDataTag = ""
    // const result = await s3.listObjectsV2({
    //     "Bucket": "sidekick.gg",
    //     "Prefix": "static/media/"
    // }).promise();

    // result.Contents.forEach((file) => {
    //     const key = file.Key;
    //     if (key.includes("production")) productionDataTag = key;
    // });
    
    // console.log("Prod key:"+ productionDataTag);

    // const secondResponse = await s3.putObject({
    //     Bucket: `sidekick.gg`,
    //     Key: productionDataTag,
    //     Body: JSON.stringify(championData),
    //     ContentType: "application/json"
    // }).promise();


    const response = await s3.putObject({
        Bucket: 'sidekick.gg/data',
        Key: "productionData.json",
        Body: JSON.stringify(championData),
        ContentType: "application/json"
    }).promise();
    

    return championData;
};


steps.combineMasterAndPatch = async function (patchData) {
    let masterData;
    try {
        const response = await s3.getObject({
            Bucket: 'sidekick.gg/data',
            Key: "masterData.json"
        }).promise()

        masterData = JSON.parse(response.Body);
        var prodData = clone(patchData);

        await Promise.all(Object.keys(masterData).map(async (lane) => {
            
            await Promise.all(Object.keys(masterData[lane]).map(async (champion) => { // Each Champion
                
                if (!patchData[lane][champion]) { 
                    patchData[lane][champion] = masterData[lane][champion];
                } else {
                    patchData[lane][champion].counters = [];
                    patchData[lane][champion].counterScoreTotal = 0;
                    prodData[lane][champion].counters = []; //PROD
                    prodData[lane][champion].counterScoreTotal = 0; //PROD
                    await Promise.all(masterData[lane][champion].counters.map(async (masterMatchup) => {
                        //console.log('   Matchup: ' + masterMatchup.counterName);

                        const patchMatchup = patchData[lane][champion].matchups[masterMatchup.counterName];
                        let combinedMatchup;
                        if (patchMatchup) {
                            const combinedCount = masterMatchup.count + patchMatchup.count;
                            const combinedWins = (masterMatchup.count * masterMatchup.counterWinRate) + (patchMatchup.count * patchMatchup.counterWinRate);
                            const combinedWinrate = combinedWins / combinedCount; //AdjustedCounterWInrate
                            const combinedCounterWeight = (1 / (1 + Math.E ** (-100 * (combinedWinrate - .5) + 4)));
                            combinedMatchup = {
                                "counterId": masterMatchup.counterId,
                                "counterWinRate": combinedWinrate, //Counter's winrate vs main
                                "count": combinedCount,
                                "counterWeight": combinedCounterWeight,
                                "counterName": masterMatchup.counterName
                            };

                            patchData[lane][champion].matchups[masterMatchup.counterName] = combinedMatchup;
                            prodData[lane][champion].matchups[masterMatchup.counterName] = combinedMatchup; //PROD

                        } else {
                            patchData[lane][champion].matchups[masterMatchup.counterName] = masterMatchup;
                        };

                    }));
                    //All Time
                    Object.keys(patchData[lane][champion].matchups).forEach((matchupName) => {
                        patchData[lane][champion].counters.push(patchData[lane][champion].matchups[matchupName]);
                        patchData[lane][champion].counterScoreTotal += patchData[lane][champion].matchups[matchupName].counterWeight;
                    });

                    patchData[lane][champion].counters.sort((a, b) => {
                        return b.counterWeight - a.counterWeight;
                    });

                    patchData[lane][champion].blindPickTier = blindPickTier(patchData[lane][champion].counterScoreTotal, patchData[lane][champion].counters.length);
                    patchData[lane][champion].blindPickTierValue = (patchData[lane][champion].counterScoreTotal * 10) / patchData[lane][champion].counters.length;

                    //PROD
                    Object.keys(prodData[lane][champion].matchups).forEach((matchupName) => {
                        prodData[lane][champion].counters.push(prodData[lane][champion].matchups[matchupName]);
                        //prodData[lane][champion].counterScoreTotal += prodData[lane][champion].matchups[matchupName].counterWeight;
                    });

                    if (prodData[lane][champion].counters.length === 0) {
                        delete prodData[lane][champion];
                    } else {
                        prodData[lane][champion].counters.sort((a, b) => {
                            return b.counterWeight - a.counterWeight;
                        });
                        prodData[lane][champion].counters.forEach((counter, index) => {
                            if (prodData[lane][champion].matchups[counter.counterName]) prodData[lane][champion].matchups[counter.counterName].counterRank = index + 1;
                        });


                        prodData[lane][champion].counters.sort((a, b) => {
                            return b.counterWeight - a.counterWeight;
                        });
                        //prodData[lane][champion].blindPickTier = blindPickTier(prodData[lane][champion].counterScoreTotal, prodData[lane][champion].counters.length);
                        //prodData[lane][champion].blindPickTierValue = (prodData[lane][champion].counterScoreTotal * 10) / prodData[lane][champion].counters.length;
                    }
                }
            }));
        }));
    } catch (err) {
        console.log('err: ' + err);
    };

    await Promise.all(Object.keys(prodData).map(async (lane) => {
        await Promise.all(Object.keys(prodData[lane]).map(async (champion) => {

            let newCounters = [];
            prodData[lane][champion].counterScoreTotal = 0;
            prodData[lane][champion].counters = prodData[lane][champion].counters.filter((counter) => {
                if (counter.count < 500) {
                    delete prodData[lane][champion].matchups[counter.counterName];
                    return false;
                }
                else {
                    //Adjust winrate based on winrate
                    const paWinrate = counter.counterWinRate
                    const paCounterWeight = (1 / (1 + Math.E ** (-100 * (paWinrate - .5) + 4)));
                    paMatchup = {
                        "counterId": counter.counterId,
                        "counterWinRate": paWinrate,
                        "count": counter.count,
                        "counterWeight": paCounterWeight,
                        "counterName": counter.counterName
                    };
                    prodData[lane][champion].matchups[counter.counterName] = paMatchup;
                    newCounters.push(paMatchup);
                    prodData[lane][champion].counterScoreTotal += paCounterWeight;
                    return true;
                }
            })

            if (prodData[lane][champion].counters.length === 0) {
                delete prodData[lane][champion];
            } else {

                prodData[lane][champion].counters = newCounters.sort((a, b) => {
                    return b.counterWeight - a.counterWeight;
                });

                prodData[lane][champion].counters.forEach((counter,index) => {
                    prodData[lane][champion].counters[index].counterRank = index+1;
                    prodData[lane][champion].matchups[counter.counterName].counterRank = index+1;
                })
                prodData[lane][champion].blindPickTier = blindPickTier(prodData[lane][champion].counterScoreTotal, prodData[lane][champion].counters.length);
                prodData[lane][champion].blindPickTierValue = (prodData[lane][champion].counterScoreTotal * 10) / prodData[lane][champion].counters.length;
            }
        }));
    }));

    const mData = await s3.putObject({
        Bucket: 'sidekick.gg/data',
        Key: "allTime.json",
        Body: JSON.stringify(patchData),
        ContentType: "application/json"
    }).promise();

    return prodData;
};

steps.sideKickData = async function (championData) {

    return await Promise.all(Object.keys(championData).map(async (lane) => {
        await Promise.all(Object.keys(championData[lane]).map(async (champion, index) => {


            var sideKicksUnSorted = []

            const sidekicks = await Promise.all(Object.keys(championData[lane]).map(async (sideKickName, index) => {
                if (sideKickName == champion) return;
                let topWRCount = 0;
                let duoWRCount = 0;

                var sKData = {
                    score: 0,
                    championId: championData[lane][sideKickName].id,
                    championName: sideKickName,
                    duoWinRate: 0,
                    topCountersWinRate: 0,
                    worstMatchups: []
                };

                await Promise.all(championData[lane][champion].counters.map((counter, index) => {
                    if (championData[lane][sideKickName] && championData[lane][sideKickName].matchups[counter.counterName] && counter.counterName != sideKickName) {

                        const sideKickWinrateVsCounter = (1 - championData[lane][sideKickName].matchups[counter.counterName].counterWinRate);
                        const deltaWinrateVsCounter = sideKickWinrateVsCounter - .5;
                        const championWinrateVsCounter = (1 - counter.counterWinRate);

                        let matchupDetails = {
                            "skWRVsCounter": sideKickWinrateVsCounter,
                            "mainWRVsCounter": championWinrateVsCounter,
                            "championName": counter.counterName
                        };

                        if (index < COUNTER_WINRATE_COUNT) {
                            sKData.topCountersWinRate += sideKickWinrateVsCounter; //Appends top 5 winrate
                            topWRCount++;
                        }
                        if (sideKickWinrateVsCounter > championWinrateVsCounter) {
                            sKData.duoWinRate += sideKickWinrateVsCounter; //duo winrate
                            duoWRCount++;
                            matchupDetails.bestWinRate = sideKickWinrateVsCounter;

                        } else if (sideKickWinrateVsCounter <= championWinrateVsCounter) {
                            sKData.duoWinRate += championWinrateVsCounter;
                            duoWRCount++;
                            matchupDetails.bestWinRate = championWinrateVsCounter;
                        }
                        sKData.worstMatchups.push(matchupDetails);

                        if (deltaWinrateVsCounter > 0) {
                            sKData.score += ((2 / (1 + Math.E ** (-100 * (deltaWinrateVsCounter)))) - 1) * counter.counterWeight;
                        } else {
                            sKData.score += .3 * (100 * deltaWinrateVsCounter) * counter.counterWeight;
                        }
                    } else {
                        sKData.score += -.25 * counter.counterWeight; //Not enough matches counts as -counterWeight/4
                    }

                }));

                sKData.topCountersWinRate = sKData.topCountersWinRate / topWRCount;
                sKData.duoWinRate = sKData.duoWinRate / duoWRCount;

                sKData.worstMatchups = sKData.worstMatchups.sort((a, b) => {
                    return a.bestWinRate - b.bestWinRate;
                }).slice(0, 5);
                sKData.tier = sideKickTier(sKData.score);
                sideKicksUnSorted.push(sKData);
                return;
            })).then(() => {
                return sideKicksUnSorted;
            });
            sidekicks.sort((a, b) => {
                return b.score - a.score;
            });

            championData[lane][champion].sidekicks = sidekicks;
            console.log(`${lane} Lane Champion ${champion} is Done. (${index}/${Object.keys(championData[lane]).length})`);
            return championData;
        })).catch((err) => {
            console.log("err" + err)
        });


        console.log("Done");
        return;
    })).then(() => {
        return championData;
    })
};

function sideKickTier(score) {
    let tier = 'BRONZE';
    if (score > 3.5) tier = 'CHALLENGER';
    else if (score > 2.5) tier = 'MASTER';
    else if (score > 1.5) tier = 'DIAMOND';
    else if (score > .5) tier = 'PLATINUM';
    else if (score > -.5) tier = 'GOLD';
    else if (score > -1.5) tier = 'SILVER';

    return tier;
}



// (async function () {
//     exports.handler({}, require('aws-lambda-mock-context')({
//         account: '873049427805',
//         alias: 'test',
//         timeout: 300
//     }));
// })();