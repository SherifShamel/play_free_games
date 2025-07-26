import GameDetails from "./GameDetails.js";

async function getData(category) {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '086dda1a6amsh77c2f8ae9835524p1737e9jsne77a35f11c28',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        if (result.status == 0) {
            document.querySelector("#games_section").innerHTML = `<h2 class="bg-dark py-4 text-center text-danger">No Data</h2>`
        }
        return result;
    } catch (error) {
        console.log(error);
    }
}

let gameDetails = new GameDetails();

export default class DisplayGames {
    constructor() { }
    async displayData(game) {
        const data = await getData(game);

        let cartona = ""
        for (const element of data) {
            cartona +=
                `<div class="col-md-3">
                        <div class="item" id="${element.id}">
                            <div class="card">
                                <img src="${element.thumbnail}" class="card-img-top" alt="${element.title}">
                                <div class="card-body">
                                    <h5 class="card-title">${element.title}</h5>
                                    <p class="card-text">${element.short_description}</p>
                                </div>
                            </div>
                        </div>
                    </div>`

        }
        document.querySelector("#games_section").innerHTML = cartona

        let myDivs = document.querySelectorAll('.item[id]')
        for (const item of myDivs) {
            item.addEventListener('click', () => {
                document.querySelector('.game-details').classList.replace('d-none','d-block')
                gameDetails.displayGameDetails(item.id)
            })
        }
    }
}