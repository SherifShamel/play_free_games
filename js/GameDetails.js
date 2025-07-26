async function getGameDetails(id) {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
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


export default class GameDetails {
    constructor() { }
    async displayGameDetails(id) {
        const details = await getGameDetails(id);
        document.querySelector('main').classList.add('d-none')
        document.querySelector('.game-details').innerHTML = `
        <div class="container" id="game-details">
            <div class="row">
                <div class="d-flex justify-content-around align-items-center">
                    <h2 class="p-5">Detailed Game</h2>
                    <div class="btn btn-close" id="close"></div>
                </div>
                <div class="col-4">
                    <div class="d-flex">
                        <div class="game-image">
                            <img src="${details.thumbnail}" class="w-100" alt="testing for now">
                        </div>
                    </div>
                </div>
                <div class="col-8">
                    <div class="game-details">
                        <h3>Game Title: <span>${details.title}</span></h3>
                        <h3>Category: <span>${details.genre}</span></h3>
                        <h3>platform: <span>${details.platform}</span></h3>
                        <h3>Status: <span>${details.status}</span></h3>
                        <p> ${details.description}</p>
                    </div>
                </div>
            </div>
        </div>`

        let exitBtn = document.querySelector('#close').addEventListener('click', function () {
            document.querySelector('main').classList.replace('d-none', 'd-block')
            document.querySelector('.game-details').classList.replace('d-block', 'd-none')
        })
    }
}