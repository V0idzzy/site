//generate fan art divs 

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
    let credits = document.querySelector(".credit-container");
    for (let category in data) {
        let items = data[category];
        if (!Array.isArray(items) || items.length === 0) continue;

        let categoryContainer = document.createElement('div');
        categoryContainer.setAttribute("class", "category-container");
        categoryContainer.innerHTML =
            `
                <h1 class="category-title">${category}</h1>
            `;

        items.forEach(item => {
            let credit = document.createElement('div');
            credit.setAttribute("class", "credit-card");
            credit.innerHTML = 
            `
                <img class="credit-image" src="${item.path}" alt="${category} submission">
                <a class="credit-username" href="https://x.com/${item.username}" target="_blank">@${item.username}</a>
            `;
            categoryContainer.appendChild(credit);
        });
        credits.appendChild(categoryContainer);
    }
}
