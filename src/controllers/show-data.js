document.addEventListener('DOMContentLoaded', async (oEvent) => {
    let myHeaders = new Headers();

    myHeaders.append("x-rapidapi-key", "e5fe48d63f247a7bea7161aed29b05fe");
    myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    // let oTeams = require('../mock/teams.json')
    let oTeams = {
        "get": "teams",
        "parameters": { "country": "spain", "league": "140", "season": "2020" },
        "errors": [],
        "results": 20,
        "paging": { "current": 1, "total": 1 },
        "response": [
          {
            "team": {
              "id": 529,
              "name": "Barcelona",
              "country": "Spain",
              "founded": 1899,
              "national": false,
              "logo": "https://media.api-sports.io/football/teams/529.png"
            },
            "venue": {
              "id": 1462,
              "name": "Camp Nou",
              "address": "Carrer d&apos;Ar\u00edstides Maillol",
              "city": "Barcelona",
              "capacity": 99787,
              "surface": "grass",
              "image": "https://media.api-sports.io/football/venues/1462.png"
            }
          },

          {
            "team": {
              "id": 530,
              "name": "Atletico Madrid",
              "country": "Spain",
              "founded": 1903,
              "national": false,
              "logo": "https://media.api-sports.io/football/teams/530.png"
            },
            "venue": {
              "id": 1461,
              "name": "Estadio Wanda Metropolitano",
              "address": "Rosas",
              "city": "Madrid",
              "capacity": 68032,
              "surface": "grass",
              "image": "https://media.api-sports.io/football/venues/1461.png"
            }
          },
          {
            "team": {
              "id": 531,
              "name": "Athletic Club",
              "country": "Spain",
              "founded": 1898,
              "national": false,
              "logo": "https://media.api-sports.io/football/teams/531.png"
            },
            "venue": {
              "id": 1460,
              "name": "San Mam\u00e9s Barria",
              "address": "Rafael Moreno Pitxitxi Kalea",
              "city": "Bilbao",
              "capacity": 53289,
              "surface": "grass",
              "image": "https://media.api-sports.io/football/venues/1460.png"
            }
          },
          {
            "team": {
              "id": 532,
              "name": "Valencia",
              "country": "Spain",
              "founded": 1919,
              "national": false,
              "logo": "https://media.api-sports.io/football/teams/532.png"
            },
            "venue": {
              "id": 1497,
              "name": "Estadio de Mestalla",
              "address": "Avenida de Suecia",
              "city": "Valencia",
              "capacity": 55000,
              "surface": "grass",
              "image": "https://media.api-sports.io/football/venues/1497.png"
            }
          },
          {
            "team": {
              "id": 533,
              "name": "Villarreal",
              "country": "Spain",
              "founded": 1923,
              "national": false,
              "logo": "https://media.api-sports.io/football/teams/533.png"
            },
            "venue": {
              "id": 1498,
              "name": "Estadio de la Cer\u00e1mica",
              "address": "Plaza Labrador",
              "city": "Villarreal",
              "capacity": 24500,
              "surface": "grass",
              "image": "https://media.api-sports.io/football/venues/1498.png"
            }
          },
          {
            "team": {
              "id": 536,
              "name": "Sevilla",
              "country": "Spain",
              "founded": 1890,
              "national": false,
              "logo": "https://media.api-sports.io/football/teams/536.png"
            },
            "venue": {
              "id": 1494,
              "name": "Estadio Ram\u00f3n S\u00e1nchez Pizju\u00e1n",
              "address": "Avenida de Eduardo Dato",
              "city": "Sevilla",
              "capacity": 48649,
              "surface": "grass",
              "image": "https://media.api-sports.io/football/venues/1494.png"
            }
          },
          {
            "team": {
              "id": 538,
              "name": "Celta Vigo",
              "country": "Spain",
              "founded": 1923,
              "national": false,
              "logo": "https://media.api-sports.io/football/teams/538.png"
            },
            "venue": {
              "id": 1467,
              "name": "Abanca-Bala\u00eddos",
              "address": "Avenida de Bala\u00eddos",
              "city": "Vigo",
              "capacity": 31800,
              "surface": "grass",
              "image": "https://media.api-sports.io/football/venues/1467.png"
            }
          },
          {
            "team": {
              "id": 539,
              "name": "Levante",
              "country": "Spain",
              "founded": 1909,
              "national": false,
              "logo": "https://media.api-sports.io/football/teams/539.png"
            },
            "venue": {
              "id": 1482,
              "name": "Estadio Ciudad de Valencia",
              "address": "Calle San Vicente de Pa\u00fal 44",
              "city": "Valencia",
              "capacity": 25534,
              "surface": "grass",
              "image": "https://media.api-sports.io/football/venues/1482.png"
            }
          },
          {
            "team": {
              "id": 541,
              "name": "Real Madrid",
              "country": "Spain",
              "founded": 1902,
              "national": false,
              "logo": "https://media.api-sports.io/football/teams/541.png"
            },
            "venue": {
              "id": 1456,
              "name": "Estadio Santiago Bernab\u00e9u",
              "address": "Avenida de Concha Espina 1, Chamart\u00edn",
              "city": "Madrid",
              "capacity": 85454,
              "surface": "grass",
              "image": "https://media.api-sports.io/football/venues/1456.png"
            }
          },
          {
            "team": {
              "id": 542,
              "name": "Alaves",
              "country": "Spain",
              "founded": 1921,
              "national": false,
              "logo": "https://media.api-sports.io/football/teams/542.png"
            },
            "venue": {
              "id": 1470,
              "name": "Estadio de Mendizorroza",
              "address": "Paseo de Cervantes",
              "city": "Vitoria-Gasteiz",
              "capacity": 19840,
              "surface": "grass",
              "image": "https://media.api-sports.io/football/venues/1470.png"
            }
          },
          {
            "team": {
              "id": 543,
              "name": "Real Betis",
              "country": "Spain",
              "founded": 1907,
              "national": false,
              "logo": "https://media.api-sports.io/football/teams/543.png"
            },
            "venue": {
              "id": 1489,
              "name": "Estadio Benito Villamar\u00edn",
              "address": "Avenida de Heli\u00f3polis",
              "city": "Sevilla",
              "capacity": 60721,
              "surface": "grass",
              "image": "https://media.api-sports.io/football/venues/1489.png"
            }
          },
          {
            "team": {
              "id": 545,
              "name": "Eibar",
              "country": "Spain",
              "founded": 1940,
              "national": false,
              "logo": "https://media.api-sports.io/football/teams/545.png"
            },
            "venue": {
              "id": 1472,
              "name": "Estadio Municipal de Ipur\u00faa",
              "address": "Calle de Ipur\u00faa",
              "city": "Eibar",
              "capacity": 8050,
              "surface": "grass",
              "image": "https://media.api-sports.io/football/venues/1472.png"
            }
          },
          {
            "team": {
              "id": 546,
              "name": "Getafe",
              "country": "Spain",
              "founded": 1983,
              "national": false,
              "logo": "https://media.api-sports.io/football/teams/546.png"
            },
            "venue": {
              "id": 1476,
              "name": "Coliseum Alfonso P\u00e9rez",
              "address": "Avenida de Teresa de Calcuta",
              "city": "Getafe",
              "capacity": 17393,
              "surface": "grass",
              "image": "https://media.api-sports.io/football/venues/1476.png"
            }
          },
          {
            "team": {
              "id": 548,
              "name": "Real Sociedad",
              "country": "Spain",
              "founded": 1909,
              "national": false,
              "logo": "https://media.api-sports.io/football/teams/548.png"
            },
            "venue": {
              "id": 1491,
              "name": "Reale Arena",
              "address": "Paseo de Anoeta 1",
              "city": "Donostia-San Sebasti\u00e1n",
              "capacity": 39500,
              "surface": "grass",
              "image": "https://media.api-sports.io/football/venues/1491.png"
            }
          },
          {
            "team": {
              "id": 715,
              "name": "Granada CF",
              "country": "Spain",
              "founded": 1931,
              "national": false,
              "logo": "https://media.api-sports.io/football/teams/715.png"
            },
            "venue": {
              "id": 1479,
              "name": "Estadio Nuevo Los C\u00e1rmenes",
              "address": "Calle Pintor Manuel Maldonado",
              "city": "Granada",
              "capacity": 23156,
              "surface": "grass",
              "image": "https://media.api-sports.io/football/venues/1479.png"
            }
          },
          {
            "team": {
              "id": 720,
              "name": "Valladolid",
              "country": "Spain",
              "founded": 1928,
              "national": false,
              "logo": "https://media.api-sports.io/football/teams/720.png"
            },
            "venue": {
              "id": 1492,
              "name": "Estadio Municipal Jos\u00e9 Zorrilla",
              "address": "Avenida del Mundial 82",
              "city": "Valladolid",
              "capacity": 26512,
              "surface": "grass",
              "image": "https://media.api-sports.io/football/venues/1492.png"
            }
          },
          {
            "team": {
              "id": 724,
              "name": "Cadiz",
              "country": "Spain",
              "founded": 1910,
              "national": false,
              "logo": "https://media.api-sports.io/football/teams/724.png"
            },
            "venue": {
              "id": 11915,
              "name": "Estadio Nuevo Mirandilla",
              "address": "Plaza de Madrid",
              "city": "C\u00e1diz",
              "capacity": 22000,
              "surface": "grass",
              "image": "https://media.api-sports.io/football/venues/11915.png"
            }
          },
          {
            "team": {
              "id": 726,
              "name": "Huesca",
              "country": "Spain",
              "founded": 1922,
              "national": false,
              "logo": "https://media.api-sports.io/football/teams/726.png"
            },
            "venue": {
              "id": 1480,
              "name": "Estadio El Alcoraz",
              "address": "Camino del Alto Cocor\u00f3n",
              "city": "Huesca",
              "capacity": 7638,
              "surface": "grass",
              "image": "https://media.api-sports.io/football/venues/1480.png"
            }
          },
          {
            "team": {
              "id": 727,
              "name": "Osasuna",
              "country": "Spain",
              "founded": 1920,
              "national": false,
              "logo": "https://media.api-sports.io/football/teams/727.png"
            },
            "venue": {
              "id": 1486,
              "name": "Estadio El Sadar",
              "address": "Carretera El Sadar",
              "city": "Iru\u00f1ea",
              "capacity": 23576,
              "surface": "grass",
              "image": "https://media.api-sports.io/football/venues/1486.png"
            }
          },
          {
            "team": {
              "id": 797,
              "name": "Elche",
              "country": "Spain",
              "founded": 1923,
              "national": false,
              "logo": "https://media.api-sports.io/football/teams/797.png"
            },
            "venue": {
              "id": 1473,
              "name": "Estadio Manuel Mart\u00ednez Valero",
              "address": "Avenida Manuel Mart\u00ednez Valero 3",
              "city": "Elche",
              "capacity": 36017,
              "surface": "grass",
              "image": "https://media.api-sports.io/football/venues/1473.png"
            }
          }
        ]
      };

    let oPlayers = {
      "get": "players",
      "parameters": { "team": "529", "league": "140", "season": "2020" },
      "errors": [],
      "results": 20,
      "paging": { "current": 1, "total": 2 },
      "response": [
        {
          "player": {
            "id": 146,
            "name": "\u00c1lex Collado",
            "firstname": "\u00c1lex",
            "lastname": "Collado Guti\u00e9rrez",
            "age": 22,
            "birth": {
              "date": "1999-04-22",
              "place": "Sabadell",
              "country": "Spain"
            },
            "nationality": "Spain",
            "height": "177 cm",
            "weight": "66 kg",
            "injured": false,
            "photo": "https://media.api-sports.io/football/players/146.png"
          },
          "statistics": [
            {
              "team": {
                "id": 529,
                "name": "Barcelona",
                "logo": "https://media.api-sports.io/football/teams/529.png"
              },
              "league": {
                "id": 140,
                "name": "La Liga",
                "country": "Spain",
                "logo": "https://media.api-sports.io/football/leagues/140.png",
                "flag": "https://media.api-sports.io/flags/es.svg",
                "season": 2020
              },
              "games": {
                "appearences": 0,
                "lineups": 0,
                "minutes": 0,
                "number": null,
                "position": "Midfielder",
                "rating": null,
                "captain": false
              },
              "substitutes": { "in": 0, "out": 0, "bench": 1 },
              "shots": { "total": null, "on": null },
              "goals": {
                "total": 0,
                "conceded": 0,
                "assists": null,
                "saves": null
              },
              "passes": { "total": null, "key": null, "accuracy": null },
              "tackles": { "total": null, "blocks": null, "interceptions": null },
              "duels": { "total": null, "won": null },
              "dribbles": { "attempts": null, "success": null, "past": null },
              "fouls": { "drawn": null, "committed": null },
              "cards": { "yellow": 0, "yellowred": 0, "red": 0 },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": 0,
                "missed": 0,
                "saved": null
              }
            }
          ]
        },
        {
          "player": {
            "id": 1564,
            "name": "Junior Firpo",
            "firstname": "H\u00e9ctor Junior",
            "lastname": "Firpo Adames",
            "age": 25,
            "birth": {
              "date": "1996-08-22",
              "place": "Santo Domingo",
              "country": "Dominican Republic"
            },
            "nationality": "Spain",
            "height": "184 cm",
            "weight": "78 kg",
            "injured": false,
            "photo": "https://media.api-sports.io/football/players/1564.png"
          },
          "statistics": [
            {
              "team": {
                "id": 529,
                "name": "Barcelona",
                "logo": "https://media.api-sports.io/football/teams/529.png"
              },
              "league": {
                "id": 140,
                "name": "La Liga",
                "country": "Spain",
                "logo": "https://media.api-sports.io/football/leagues/140.png",
                "flag": "https://media.api-sports.io/flags/es.svg",
                "season": 2020
              },
              "games": {
                "appearences": 7,
                "lineups": 3,
                "minutes": 286,
                "number": null,
                "position": "Defender",
                "rating": "6.783333",
                "captain": false
              },
              "substitutes": { "in": 4, "out": 1, "bench": 32 },
              "shots": { "total": 1, "on": 1 },
              "goals": { "total": 1, "conceded": 0, "assists": 1, "saves": null },
              "passes": { "total": 203, "key": 5, "accuracy": 26 },
              "tackles": { "total": 1, "blocks": 3, "interceptions": 4 },
              "duels": { "total": 26, "won": 11 },
              "dribbles": { "attempts": 5, "success": 1, "past": null },
              "fouls": { "drawn": 6, "committed": 9 },
              "cards": { "yellow": 2, "yellowred": 0, "red": 0 },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": 0,
                "missed": 0,
                "saved": null
              }
            }
          ]
        },
        {
          "player": {
            "id": 41112,
            "name": "Trinc\u00e3o",
            "firstname": "Francisco Ant\u00f3nio",
            "lastname": "Machado Mota Castro Trinc\u00e3o",
            "age": 22,
            "birth": {
              "date": "1999-12-29",
              "place": "Viana do Castelo",
              "country": "Portugal"
            },
            "nationality": "Portugal",
            "height": "183 cm",
            "weight": "77 kg",
            "injured": false,
            "photo": "https://media.api-sports.io/football/players/41112.png"
          },
          "statistics": [
            {
              "team": {
                "id": 529,
                "name": "Barcelona",
                "logo": "https://media.api-sports.io/football/teams/529.png"
              },
              "league": {
                "id": 140,
                "name": "La Liga",
                "country": "Spain",
                "logo": "https://media.api-sports.io/football/leagues/140.png",
                "flag": "https://media.api-sports.io/flags/es.svg",
                "season": 2020
              },
              "games": {
                "appearences": 28,
                "lineups": 3,
                "minutes": 682,
                "number": null,
                "position": "Attacker",
                "rating": "6.614285",
                "captain": false
              },
              "substitutes": { "in": 25, "out": 2, "bench": 35 },
              "shots": { "total": 17, "on": 12 },
              "goals": { "total": 3, "conceded": 0, "assists": 2, "saves": null },
              "passes": { "total": 372, "key": 8, "accuracy": 11 },
              "tackles": { "total": 4, "blocks": null, "interceptions": 1 },
              "duels": { "total": 101, "won": 47 },
              "dribbles": { "attempts": 45, "success": 27, "past": null },
              "fouls": { "drawn": 13, "committed": 6 },
              "cards": { "yellow": 1, "yellowred": 0, "red": 0 },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": 0,
                "missed": 0,
                "saved": null
              }
            }
          ]
        },
        {
          "player": {
            "id": 143,
            "name": "Carles Ale\u00f1\u00e1",
            "firstname": "Carles",
            "lastname": "Ale\u00f1a Castillo",
            "age": 23,
            "birth": {
              "date": "1998-01-05",
              "place": "Matar\u00f3",
              "country": "Spain"
            },
            "nationality": "Spain",
            "height": "180 cm",
            "weight": "73 kg",
            "injured": false,
            "photo": "https://media.api-sports.io/football/players/143.png"
          },
          "statistics": [
            {
              "team": {
                "id": 529,
                "name": "Barcelona",
                "logo": "https://media.api-sports.io/football/teams/529.png"
              },
              "league": {
                "id": 140,
                "name": "La Liga",
                "country": "Spain",
                "logo": "https://media.api-sports.io/football/leagues/140.png",
                "flag": "https://media.api-sports.io/flags/es.svg",
                "season": 2020
              },
              "games": {
                "appearences": 2,
                "lineups": 0,
                "minutes": 46,
                "number": null,
                "position": "Midfielder",
                "rating": "6.500000",
                "captain": false
              },
              "substitutes": { "in": 2, "out": 0, "bench": 16 },
              "shots": { "total": 1, "on": null },
              "goals": {
                "total": 0,
                "conceded": 0,
                "assists": null,
                "saves": null
              },
              "passes": { "total": 38, "key": null, "accuracy": 18 },
              "tackles": { "total": 1, "blocks": null, "interceptions": null },
              "duels": { "total": 8, "won": 1 },
              "dribbles": { "attempts": null, "success": null, "past": null },
              "fouls": { "drawn": null, "committed": 4 },
              "cards": { "yellow": 1, "yellowred": 0, "red": 0 },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": 0,
                "missed": 0,
                "saved": null
              }
            }
          ]
        },
        {
          "player": {
            "id": 161929,
            "name": "K. De La Fuente",
            "firstname": "Konrad",
            "lastname": "De La Fuente",
            "age": 20,
            "birth": { "date": "2001-07-16", "place": "Miami", "country": "USA" },
            "nationality": "USA",
            "height": "170 cm",
            "weight": "63 kg",
            "injured": false,
            "photo": "https://media.api-sports.io/football/players/161929.png"
          },
          "statistics": [
            {
              "team": {
                "id": 529,
                "name": "Barcelona",
                "logo": "https://media.api-sports.io/football/teams/529.png"
              },
              "league": {
                "id": 140,
                "name": "La Liga",
                "country": "Spain",
                "logo": "https://media.api-sports.io/football/leagues/140.png",
                "flag": "https://media.api-sports.io/flags/es.svg",
                "season": 2020
              },
              "games": {
                "appearences": 0,
                "lineups": 0,
                "minutes": 0,
                "number": null,
                "position": "Attacker",
                "rating": null,
                "captain": false
              },
              "substitutes": { "in": 0, "out": 0, "bench": 18 },
              "shots": { "total": null, "on": null },
              "goals": {
                "total": 0,
                "conceded": 0,
                "assists": null,
                "saves": null
              },
              "passes": { "total": null, "key": null, "accuracy": null },
              "tackles": { "total": null, "blocks": null, "interceptions": null },
              "duels": { "total": null, "won": null },
              "dribbles": { "attempts": null, "success": null, "past": null },
              "fouls": { "drawn": null, "committed": null },
              "cards": { "yellow": 0, "yellowred": 0, "red": 0 },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": 0,
                "missed": 0,
                "saved": null
              }
            }
          ]
        },
        {
          "player": {
            "id": 9925,
            "name": "Matheus Fernandes",
            "firstname": "Matheus",
            "lastname": "Fernandes Siqueira",
            "age": 23,
            "birth": {
              "date": "1998-06-30",
              "place": "Itabora\u00ed",
              "country": "Brazil"
            },
            "nationality": "Brazil",
            "height": "183 cm",
            "weight": "71 kg",
            "injured": false,
            "photo": "https://media.api-sports.io/football/players/9925.png"
          },
          "statistics": [
            {
              "team": {
                "id": 529,
                "name": "Barcelona",
                "logo": "https://media.api-sports.io/football/teams/529.png"
              },
              "league": {
                "id": 140,
                "name": "La Liga",
                "country": "Spain",
                "logo": "https://media.api-sports.io/football/leagues/140.png",
                "flag": "https://media.api-sports.io/flags/es.svg",
                "season": 2020
              },
              "games": {
                "appearences": 0,
                "lineups": 0,
                "minutes": 0,
                "number": null,
                "position": "Midfielder",
                "rating": null,
                "captain": false
              },
              "substitutes": { "in": 0, "out": 0, "bench": 23 },
              "shots": { "total": null, "on": null },
              "goals": {
                "total": 0,
                "conceded": 0,
                "assists": null,
                "saves": null
              },
              "passes": { "total": null, "key": null, "accuracy": null },
              "tackles": { "total": null, "blocks": null, "interceptions": null },
              "duels": { "total": null, "won": null },
              "dribbles": { "attempts": null, "success": null, "past": null },
              "fouls": { "drawn": null, "committed": null },
              "cards": { "yellow": 0, "yellowred": 0, "red": 0 },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": 0,
                "missed": 0,
                "saved": null
              }
            }
          ]
        },
        {
          "player": {
            "id": 129880,
            "name": "S. Ramos",
            "firstname": "Santiago",
            "lastname": "Ramos Mingo",
            "age": 20,
            "birth": {
              "date": "2001-11-21",
              "place": "Teniente Berdina",
              "country": "Argentina"
            },
            "nationality": "Argentina",
            "height": "186 cm",
            "weight": "75 kg",
            "injured": false,
            "photo": "https://media.api-sports.io/football/players/129880.png"
          },
          "statistics": [
            {
              "team": {
                "id": 529,
                "name": "Barcelona",
                "logo": "https://media.api-sports.io/football/teams/529.png"
              },
              "league": {
                "id": 140,
                "name": "La Liga",
                "country": "Spain",
                "logo": "https://media.api-sports.io/football/leagues/140.png",
                "flag": "https://media.api-sports.io/flags/es.svg",
                "season": 2020
              },
              "games": {
                "appearences": 0,
                "lineups": 0,
                "minutes": 0,
                "number": null,
                "position": "Defender",
                "rating": null,
                "captain": false
              },
              "substitutes": { "in": 0, "out": 0, "bench": 3 },
              "shots": { "total": null, "on": null },
              "goals": {
                "total": 0,
                "conceded": 0,
                "assists": null,
                "saves": null
              },
              "passes": { "total": null, "key": null, "accuracy": null },
              "tackles": { "total": null, "blocks": null, "interceptions": null },
              "duels": { "total": null, "won": null },
              "dribbles": { "attempts": null, "success": null, "past": null },
              "fouls": { "drawn": null, "committed": null },
              "cards": { "yellow": 0, "yellowred": 0, "red": 0 },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": 0,
                "missed": 0,
                "saved": null
              }
            }
          ]
        },
        {
          "player": {
            "id": 142,
            "name": "Rafinha",
            "firstname": "Rafael",
            "lastname": "Alc\u00e2ntara do Nascimento",
            "age": 28,
            "birth": {
              "date": "1993-02-12",
              "place": "S\u00e3o Paulo",
              "country": "Brazil"
            },
            "nationality": "Brazil",
            "height": "174 cm",
            "weight": "71 kg",
            "injured": false,
            "photo": "https://media.api-sports.io/football/players/142.png"
          },
          "statistics": [
            {
              "team": {
                "id": 529,
                "name": "Barcelona",
                "logo": "https://media.api-sports.io/football/teams/529.png"
              },
              "league": {
                "id": 140,
                "name": "La Liga",
                "country": "Spain",
                "logo": "https://media.api-sports.io/football/leagues/140.png",
                "flag": "https://media.api-sports.io/flags/es.svg",
                "season": 2020
              },
              "games": {
                "appearences": 0,
                "lineups": 0,
                "minutes": 0,
                "number": null,
                "position": "Midfielder",
                "rating": null,
                "captain": false
              },
              "substitutes": { "in": 0, "out": 0, "bench": 1 },
              "shots": { "total": null, "on": null },
              "goals": {
                "total": 0,
                "conceded": 0,
                "assists": null,
                "saves": null
              },
              "passes": { "total": null, "key": null, "accuracy": null },
              "tackles": { "total": null, "blocks": null, "interceptions": null },
              "duels": { "total": null, "won": null },
              "dribbles": { "attempts": null, "success": null, "past": null },
              "fouls": { "drawn": null, "committed": null },
              "cards": { "yellow": 0, "yellowred": 0, "red": 0 },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": 0,
                "missed": 0,
                "saved": null
              }
            }
          ]
        },
        {
          "player": {
            "id": 154,
            "name": "L. Messi",
            "firstname": "Lionel Andr\u00e9s",
            "lastname": "Messi Cuccittini",
            "age": 34,
            "birth": {
              "date": "1987-06-24",
              "place": "Rosario",
              "country": "Argentina"
            },
            "nationality": "Argentina",
            "height": "170 cm",
            "weight": "72 kg",
            "injured": false,
            "photo": "https://media.api-sports.io/football/players/154.png"
          },
          "statistics": [
            {
              "team": {
                "id": 529,
                "name": "Barcelona",
                "logo": "https://media.api-sports.io/football/teams/529.png"
              },
              "league": {
                "id": 140,
                "name": "La Liga",
                "country": "Spain",
                "logo": "https://media.api-sports.io/football/leagues/140.png",
                "flag": "https://media.api-sports.io/flags/es.svg",
                "season": 2020
              },
              "games": {
                "appearences": 35,
                "lineups": 33,
                "minutes": 3022,
                "number": null,
                "position": "Attacker",
                "rating": "8.342857",
                "captain": false
              },
              "substitutes": { "in": 2, "out": 1, "bench": 2 },
              "shots": { "total": 141, "on": 91 },
              "goals": { "total": 30, "conceded": 0, "assists": 9, "saves": null },
              "passes": { "total": 2246, "key": 81, "accuracy": 54 },
              "tackles": { "total": 19, "blocks": null, "interceptions": 6 },
              "duels": { "total": 501, "won": 286 },
              "dribbles": { "attempts": 247, "success": 160, "past": null },
              "fouls": { "drawn": 99, "committed": 22 },
              "cards": { "yellow": 4, "yellowred": 0, "red": 0 },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": 3,
                "missed": 2,
                "saved": null
              }
            }
          ]
        },
        {
          "player": {
            "id": 162123,
            "name": "Ilaix Moriba",
            "firstname": "Moriba",
            "lastname": "Kourouma Kourouma",
            "age": 18,
            "birth": {
              "date": "2003-01-19",
              "place": "Conakry",
              "country": "Guinea"
            },
            "nationality": "Guinea",
            "height": "185 cm",
            "weight": "73 kg",
            "injured": false,
            "photo": "https://media.api-sports.io/football/players/162123.png"
          },
          "statistics": [
            {
              "team": {
                "id": 529,
                "name": "Barcelona",
                "logo": "https://media.api-sports.io/football/teams/529.png"
              },
              "league": {
                "id": 140,
                "name": "La Liga",
                "country": "Spain",
                "logo": "https://media.api-sports.io/football/leagues/140.png",
                "flag": "https://media.api-sports.io/flags/es.svg",
                "season": 2020
              },
              "games": {
                "appearences": 14,
                "lineups": 4,
                "minutes": 537,
                "number": null,
                "position": "Midfielder",
                "rating": "6.964285",
                "captain": false
              },
              "substitutes": { "in": 10, "out": 4, "bench": 13 },
              "shots": { "total": 10, "on": 3 },
              "goals": { "total": 1, "conceded": 0, "assists": 2, "saves": null },
              "passes": { "total": 370, "key": 7, "accuracy": 24 },
              "tackles": { "total": 14, "blocks": 1, "interceptions": 5 },
              "duels": { "total": 104, "won": 63 },
              "dribbles": { "attempts": 19, "success": 17, "past": null },
              "fouls": { "drawn": 19, "committed": 16 },
              "cards": { "yellow": 1, "yellowred": 0, "red": 0 },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": 0,
                "missed": 0,
                "saved": null
              }
            }
          ]
        },
        {
          "player": {
            "id": 56,
            "name": "A. Griezmann",
            "firstname": "Antoine",
            "lastname": "Griezmann",
            "age": 30,
            "birth": {
              "date": "1991-03-21",
              "place": "M\u00e2con",
              "country": "France"
            },
            "nationality": "France",
            "height": "176 cm",
            "weight": "73 kg",
            "injured": false,
            "photo": "https://media.api-sports.io/football/players/56.png"
          },
          "statistics": [
            {
              "team": {
                "id": 529,
                "name": "Barcelona",
                "logo": "https://media.api-sports.io/football/teams/529.png"
              },
              "league": {
                "id": 140,
                "name": "La Liga",
                "country": "Spain",
                "logo": "https://media.api-sports.io/football/leagues/140.png",
                "flag": "https://media.api-sports.io/flags/es.svg",
                "season": 2020
              },
              "games": {
                "appearences": 36,
                "lineups": 32,
                "minutes": 2619,
                "number": null,
                "position": "Attacker",
                "rating": "7.213888",
                "captain": false
              },
              "substitutes": { "in": 4, "out": 20, "bench": 6 },
              "shots": { "total": 62, "on": 34 },
              "goals": { "total": 13, "conceded": 0, "assists": 7, "saves": null },
              "passes": { "total": 1315, "key": 42, "accuracy": 31 },
              "tackles": { "total": 37, "blocks": 1, "interceptions": 12 },
              "duels": { "total": 204, "won": 115 },
              "dribbles": { "attempts": 37, "success": 26, "past": null },
              "fouls": { "drawn": 34, "committed": 13 },
              "cards": { "yellow": 4, "yellowred": 0, "red": 0 },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": 1,
                "missed": 1,
                "saved": null
              }
            }
          ]
        },
        {
          "player": {
            "id": 872,
            "name": "M. Pjani\u0107",
            "firstname": "Miralem",
            "lastname": "Pjani\u0107",
            "age": 31,
            "birth": {
              "date": "1990-04-02",
              "place": "Tuzla",
              "country": "Bosnia and Herzegovina"
            },
            "nationality": "Bosnia and Herzegovina",
            "height": "178 cm",
            "weight": "72 kg",
            "injured": false,
            "photo": "https://media.api-sports.io/football/players/872.png"
          },
          "statistics": [
            {
              "team": {
                "id": 529,
                "name": "Barcelona",
                "logo": "https://media.api-sports.io/football/teams/529.png"
              },
              "league": {
                "id": 140,
                "name": "La Liga",
                "country": "Spain",
                "logo": "https://media.api-sports.io/football/leagues/140.png",
                "flag": "https://media.api-sports.io/flags/es.svg",
                "season": 2020
              },
              "games": {
                "appearences": 19,
                "lineups": 6,
                "minutes": 620,
                "number": null,
                "position": "Midfielder",
                "rating": "6.815789",
                "captain": false
              },
              "substitutes": { "in": 13, "out": 5, "bench": 30 },
              "shots": { "total": 12, "on": 3 },
              "goals": {
                "total": 0,
                "conceded": 0,
                "assists": null,
                "saves": null
              },
              "passes": { "total": 748, "key": 12, "accuracy": 36 },
              "tackles": { "total": 13, "blocks": 1, "interceptions": 11 },
              "duels": { "total": 62, "won": 40 },
              "dribbles": { "attempts": 7, "success": 7, "past": null },
              "fouls": { "drawn": 10, "committed": 4 },
              "cards": { "yellow": 1, "yellowred": 0, "red": 0 },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": 0,
                "missed": 0,
                "saved": null
              }
            }
          ]
        },
        {
          "player": {
            "id": 151,
            "name": "A. Vidal",
            "firstname": "Arturo Erasmo",
            "lastname": "Vidal Pardo",
            "age": 34,
            "birth": {
              "date": "1987-05-22",
              "place": "Santiago de Chile",
              "country": "Chile"
            },
            "nationality": "Chile",
            "height": "180 cm",
            "weight": "75 kg",
            "injured": false,
            "photo": "https://media.api-sports.io/football/players/151.png"
          },
          "statistics": [
            {
              "team": {
                "id": 529,
                "name": "Barcelona",
                "logo": "https://media.api-sports.io/football/teams/529.png"
              },
              "league": {
                "id": 140,
                "name": "La Liga",
                "country": "Spain",
                "logo": "https://media.api-sports.io/football/leagues/140.png",
                "flag": "https://media.api-sports.io/flags/es.svg",
                "season": 2020
              },
              "games": {
                "appearences": 0,
                "lineups": 0,
                "minutes": 0,
                "number": null,
                "position": "Midfielder",
                "rating": null,
                "captain": false
              },
              "substitutes": { "in": 0, "out": 0, "bench": 0 },
              "shots": { "total": null, "on": null },
              "goals": {
                "total": 0,
                "conceded": null,
                "assists": null,
                "saves": null
              },
              "passes": { "total": null, "key": null, "accuracy": null },
              "tackles": { "total": null, "blocks": null, "interceptions": null },
              "duels": { "total": null, "won": null },
              "dribbles": { "attempts": null, "success": null, "past": null },
              "fouls": { "drawn": null, "committed": null },
              "cards": { "yellow": 0, "yellowred": 0, "red": 0 },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": null,
                "missed": null,
                "saved": null
              }
            }
          ]
        },
        {
          "player": {
            "id": 127,
            "name": "M. ter Stegen",
            "firstname": "Marc-Andr\u00e9",
            "lastname": "ter Stegen",
            "age": 29,
            "birth": {
              "date": "1992-04-30",
              "place": "M\u00f6nchengladbach",
              "country": "Germany"
            },
            "nationality": "Germany",
            "height": "187 cm",
            "weight": "85 kg",
            "injured": false,
            "photo": "https://media.api-sports.io/football/players/127.png"
          },
          "statistics": [
            {
              "team": {
                "id": 529,
                "name": "Barcelona",
                "logo": "https://media.api-sports.io/football/teams/529.png"
              },
              "league": {
                "id": 140,
                "name": "La Liga",
                "country": "Spain",
                "logo": "https://media.api-sports.io/football/leagues/140.png",
                "flag": "https://media.api-sports.io/flags/es.svg",
                "season": 2020
              },
              "games": {
                "appearences": 31,
                "lineups": 31,
                "minutes": 2790,
                "number": null,
                "position": "Goalkeeper",
                "rating": "6.851612",
                "captain": false
              },
              "substitutes": { "in": 0, "out": 0, "bench": 0 },
              "shots": { "total": 1, "on": null },
              "goals": { "total": 0, "conceded": 32, "assists": null, "saves": 78 },
              "passes": { "total": 886, "key": 1, "accuracy": 24 },
              "tackles": { "total": null, "blocks": null, "interceptions": null },
              "duels": { "total": 10, "won": 7 },
              "dribbles": { "attempts": null, "success": null, "past": null },
              "fouls": { "drawn": 1, "committed": 1 },
              "cards": { "yellow": 1, "yellowred": 0, "red": 0 },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": 0,
                "missed": 0,
                "saved": 1
              }
            }
          ]
        },
        {
          "player": {
            "id": 912,
            "name": "Neto",
            "firstname": "Norberto",
            "lastname": "Murara Neto",
            "age": 32,
            "birth": {
              "date": "1989-07-19",
              "place": "Arax\u00e1",
              "country": "Brazil"
            },
            "nationality": "Brazil",
            "height": "190 cm",
            "weight": "84 kg",
            "injured": false,
            "photo": "https://media.api-sports.io/football/players/912.png"
          },
          "statistics": [
            {
              "team": {
                "id": 529,
                "name": "Barcelona",
                "logo": "https://media.api-sports.io/football/teams/529.png"
              },
              "league": {
                "id": 140,
                "name": "La Liga",
                "country": "Spain",
                "logo": "https://media.api-sports.io/football/leagues/140.png",
                "flag": "https://media.api-sports.io/flags/es.svg",
                "season": 2020
              },
              "games": {
                "appearences": 7,
                "lineups": 7,
                "minutes": 630,
                "number": null,
                "position": "Goalkeeper",
                "rating": "6.942857",
                "captain": false
              },
              "substitutes": { "in": 0, "out": 0, "bench": 28 },
              "shots": { "total": null, "on": null },
              "goals": { "total": 0, "conceded": 6, "assists": null, "saves": 18 },
              "passes": { "total": 204, "key": null, "accuracy": 25 },
              "tackles": { "total": null, "blocks": null, "interceptions": null },
              "duels": { "total": 3, "won": null },
              "dribbles": { "attempts": null, "success": null, "past": null },
              "fouls": { "drawn": null, "committed": null },
              "cards": { "yellow": 0, "yellowred": 0, "red": 0 },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": 0,
                "missed": 0,
                "saved": 1
              }
            }
          ]
        },
        {
          "player": {
            "id": 126,
            "name": "I\u00f1aki Pe\u00f1a",
            "firstname": "Ignacio",
            "lastname": "Pe\u00f1a Sotorres",
            "age": 22,
            "birth": {
              "date": "1999-03-02",
              "place": "Alicante",
              "country": "Spain"
            },
            "nationality": "Spain",
            "height": "184 cm",
            "weight": "78 kg",
            "injured": false,
            "photo": "https://media.api-sports.io/football/players/126.png"
          },
          "statistics": [
            {
              "team": {
                "id": 529,
                "name": "Barcelona",
                "logo": "https://media.api-sports.io/football/teams/529.png"
              },
              "league": {
                "id": 140,
                "name": "La Liga",
                "country": "Spain",
                "logo": "https://media.api-sports.io/football/leagues/140.png",
                "flag": "https://media.api-sports.io/flags/es.svg",
                "season": 2020
              },
              "games": {
                "appearences": 0,
                "lineups": 0,
                "minutes": 0,
                "number": null,
                "position": "Goalkeeper",
                "rating": null,
                "captain": false
              },
              "substitutes": { "in": 0, "out": 0, "bench": 24 },
              "shots": { "total": null, "on": null },
              "goals": {
                "total": 0,
                "conceded": 0,
                "assists": null,
                "saves": null
              },
              "passes": { "total": null, "key": null, "accuracy": null },
              "tackles": { "total": null, "blocks": null, "interceptions": null },
              "duels": { "total": null, "won": null },
              "dribbles": { "attempts": null, "success": null, "past": null },
              "fouls": { "drawn": null, "committed": null },
              "cards": { "yellow": 0, "yellowred": 0, "red": 0 },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": 0,
                "missed": 0,
                "saved": 0
              }
            }
          ]
        },
        {
          "player": {
            "id": 162473,
            "name": "Arnau Tenas",
            "firstname": "Arnau",
            "lastname": "Tenas Ure\u00f1a",
            "age": 20,
            "birth": { "date": "2001-05-30", "place": "Vic", "country": "Spain" },
            "nationality": "Spain",
            "height": "185 cm",
            "weight": "85 kg",
            "injured": false,
            "photo": "https://media.api-sports.io/football/players/162473.png"
          },
          "statistics": [
            {
              "team": {
                "id": 529,
                "name": "Barcelona",
                "logo": "https://media.api-sports.io/football/teams/529.png"
              },
              "league": {
                "id": 140,
                "name": "La Liga",
                "country": "Spain",
                "logo": "https://media.api-sports.io/football/leagues/140.png",
                "flag": "https://media.api-sports.io/flags/es.svg",
                "season": 2020
              },
              "games": {
                "appearences": 0,
                "lineups": 0,
                "minutes": 0,
                "number": null,
                "position": "Goalkeeper",
                "rating": null,
                "captain": false
              },
              "substitutes": { "in": 0, "out": 0, "bench": 24 },
              "shots": { "total": null, "on": null },
              "goals": {
                "total": 0,
                "conceded": 0,
                "assists": null,
                "saves": null
              },
              "passes": { "total": null, "key": null, "accuracy": null },
              "tackles": { "total": null, "blocks": null, "interceptions": null },
              "duels": { "total": null, "won": null },
              "dribbles": { "attempts": null, "success": null, "past": null },
              "fouls": { "drawn": null, "committed": null },
              "cards": { "yellow": 0, "yellowred": 0, "red": 0 },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": 0,
                "missed": 0,
                "saved": 1
              }
            }
          ]
        },
        {
          "player": {
            "id": 38735,
            "name": "S. Dest",
            "firstname": "Sergi\u00f1o Gianni",
            "lastname": "Dest",
            "age": 21,
            "birth": {
              "date": "2000-11-03",
              "place": "Almere",
              "country": "Netherlands"
            },
            "nationality": "USA",
            "height": "175 cm",
            "weight": "62 kg",
            "injured": false,
            "photo": "https://media.api-sports.io/football/players/38735.png"
          },
          "statistics": [
            {
              "team": {
                "id": 529,
                "name": "Barcelona",
                "logo": "https://media.api-sports.io/football/teams/529.png"
              },
              "league": {
                "id": 140,
                "name": "La Liga",
                "country": "Spain",
                "logo": "https://media.api-sports.io/football/leagues/140.png",
                "flag": "https://media.api-sports.io/flags/es.svg",
                "season": 2020
              },
              "games": {
                "appearences": 30,
                "lineups": 23,
                "minutes": 1918,
                "number": null,
                "position": "Defender",
                "rating": "6.730000",
                "captain": false
              },
              "substitutes": { "in": 7, "out": 14, "bench": 12 },
              "shots": { "total": 10, "on": 5 },
              "goals": { "total": 2, "conceded": 0, "assists": 1, "saves": null },
              "passes": { "total": 1115, "key": 23, "accuracy": 33 },
              "tackles": { "total": 30, "blocks": 4, "interceptions": 11 },
              "duels": { "total": 170, "won": 77 },
              "dribbles": { "attempts": 60, "success": 29, "past": null },
              "fouls": { "drawn": 11, "committed": 16 },
              "cards": { "yellow": 1, "yellowred": 0, "red": 0 },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": 0,
                "missed": 0,
                "saved": null
              }
            }
          ]
        },
        {
          "player": {
            "id": 136,
            "name": "Piqu\u00e9",
            "firstname": "Gerard",
            "lastname": "Piqu\u00e9 Bernab\u00e9u",
            "age": 34,
            "birth": {
              "date": "1987-02-02",
              "place": "Barcelona",
              "country": "Spain"
            },
            "nationality": "Spain",
            "height": "194 cm",
            "weight": "85 kg",
            "injured": false,
            "photo": "https://media.api-sports.io/football/players/136.png"
          },
          "statistics": [
            {
              "team": {
                "id": 529,
                "name": "Barcelona",
                "logo": "https://media.api-sports.io/football/teams/529.png"
              },
              "league": {
                "id": 140,
                "name": "La Liga",
                "country": "Spain",
                "logo": "https://media.api-sports.io/football/leagues/140.png",
                "flag": "https://media.api-sports.io/flags/es.svg",
                "season": 2020
              },
              "games": {
                "appearences": 18,
                "lineups": 18,
                "minutes": 1485,
                "number": null,
                "position": "Defender",
                "rating": "6.983333",
                "captain": false
              },
              "substitutes": { "in": 0, "out": 5, "bench": 2 },
              "shots": { "total": 7, "on": 2 },
              "goals": {
                "total": 0,
                "conceded": 0,
                "assists": null,
                "saves": null
              },
              "passes": { "total": 1239, "key": 2, "accuracy": 64 },
              "tackles": { "total": 16, "blocks": 4, "interceptions": 26 },
              "duels": { "total": 124, "won": 84 },
              "dribbles": { "attempts": 2, "success": 2, "past": null },
              "fouls": { "drawn": 5, "committed": 13 },
              "cards": { "yellow": 4, "yellowred": 0, "red": 0 },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": 0,
                "missed": 0,
                "saved": null
              }
            }
          ]
        },
        {
          "player": {
            "id": 101814,
            "name": "R. Ara\u00fajo",
            "firstname": "Ronald Federico",
            "lastname": "Ara\u00fajo da Silva",
            "age": 22,
            "birth": {
              "date": "1999-03-07",
              "place": "Rivera",
              "country": "Uruguay"
            },
            "nationality": "Uruguay",
            "height": "188 cm",
            "weight": "79 kg",
            "injured": false,
            "photo": "https://media.api-sports.io/football/players/101814.png"
          },
          "statistics": [
            {
              "team": {
                "id": 529,
                "name": "Barcelona",
                "logo": "https://media.api-sports.io/football/teams/529.png"
              },
              "league": {
                "id": 140,
                "name": "La Liga",
                "country": "Spain",
                "logo": "https://media.api-sports.io/football/leagues/140.png",
                "flag": "https://media.api-sports.io/flags/es.svg",
                "season": 2020
              },
              "games": {
                "appearences": 24,
                "lineups": 16,
                "minutes": 1507,
                "number": null,
                "position": "Defender",
                "rating": "7.029166",
                "captain": false
              },
              "substitutes": { "in": 8, "out": 5, "bench": 14 },
              "shots": { "total": 10, "on": 4 },
              "goals": { "total": 2, "conceded": 0, "assists": 1, "saves": null },
              "passes": { "total": 1065, "key": 3, "accuracy": 40 },
              "tackles": { "total": 23, "blocks": 15, "interceptions": 20 },
              "duels": { "total": 135, "won": 99 },
              "dribbles": { "attempts": 8, "success": 8, "past": null },
              "fouls": { "drawn": 17, "committed": 12 },
              "cards": { "yellow": 3, "yellowred": 0, "red": 0 },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": 0,
                "missed": 0,
                "saved": null
              }
            }
          ]
        }
      ]
    }

    printTeam = (oTeams) =>  {
        document.getElementById('teamColumn').insertAdjacentHTML('afterbegin',`<div>${this.printCardTeam(oTeams)}</div>`)


        // document.getElementById('teamColumn').insertAdjacentHTML('afterbegin',`<div class="team"><img src=${oTeams.response[1].team.logo}><div class="display-team">${oTeams.response[1].team.name}</div></div>`);
    }
    printCardTeam = (oTeams) => {
      var aHtml = []
      oTeams.response.map((oTeam,index)=>{
        aHtml[index] =  `<div class="team" onClick="onTeamSelect(${oTeam.team.id})"}><img src=${oTeam.team.logo}><div class="display-team">${oTeam.team.name}</div></div>`;
      });
      return aHtml
    }

    this.printTeam(oTeams);

    onTeamSelect = async (sIdTeam) => {
      if(sIdTeam){
        // await fetch("https://v3.football.api-sports.io/players?team="+ sIdTeam + "&league=140&season=2020", requestOptions)
        // .then(response => response.text())
        // .then(result => console.log(result))
        //  .catch(error => console.log('error', error));
        this.printPlayers(oPlayers)
      }
    }

    printPlayers = (oPlayers) => {
      document.getElementById('playerColumn').insertAdjacentHTML('afterbegin',`<div>${this.printCardPlayer(oPlayers)}</div>`)
    }

    printCardPlayer = (oPlayers) => {
      var aHtml = []
      oPlayers.response.map((oPlayer,index)=>{
        aHtml[index] =  `<div class="player"><img src=${oPlayer.player.photo}><div class="display-player">${oPlayer.player.name}</div></div>`;
      });
      return aHtml
    }


    // await fetch("https://v3.football.api-sports.io/teams?country=spain&league=140&season=2020", requestOptions)
    //     .then(response => response.text())
    //     .then(result => console.log(result))
    //     .catch(error => console.log('error', error));


    //<div class="team"><img src="http://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/3.png"><div class="display-team">Futbol Club Barcelona</div></div>
})