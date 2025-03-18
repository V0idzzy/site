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
        let newArt = document.createElement('a');
        newArt.setAttribute("class", "fanart-card");
        newArt.setAttribute("href", `https://twitter.com/${art.username}`);
        newArt.setAttribute("alt", `Fan Art from ${art.type} credit: ${art.username}`)
        newArt.setAttribute("target", "_blank");
        newArt.innerHTML =
            `
                <img class="art" src="${art.path}">
            `;
        fanart.appendChild(newArt);
    });
}
