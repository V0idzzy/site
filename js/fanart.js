//generate fan art divs 
//show a line of text or change color if winner


fetch("data/fanart.json")
    .then(response => {
        if (!response.ok) {
            throw new Error('File not found');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        AddFanArts(data);
    })
    .catch(error => {
        console.error('fetch error: ', error);
    })


let AddFanArts = (data) => {
    let fanart = document.querySelector(".fanart");
    data.forEach(art => {
        console.log(art);
        let newArt = document.createElement('div').innerHTML =
            `
            <h3>${art.username}</h3>
            <img src=${art.path}></img>
        `;
        fanart.appendChild(newArt);
    });
}