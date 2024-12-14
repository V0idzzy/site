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
    let fanart = document.querySelector(".fanart-container");
    data.forEach(art => {
        console.log(art);
        let newArt = document.createElement('a');
        newArt.setAttribute("class", "card");
        newArt.setAttribute("href", `https://twitter.com/${art.username}`);
        newArt.setAttribute("target", "_blank");
        newArt.innerHTML =
            `
                <h3 class="art-type">${art.type}</h3>
                <img class="art" src="${art.path}">
                <span class="artist-username">${art.username}</span>
            `;
        fanart.appendChild(newArt);
    });
}
