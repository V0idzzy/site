//generate credit divs 

fetch("data/credits.json")
    .then(response => {
        if (!response.ok) {
            throw new Error('File not found');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        AddCredits(data);
    })
    .catch(error => {
        console.error('fetch error: ', error);
    })


let AddCredits = (data) => {
    let credits = document.querySelector(".credit-container");
    for (let category in data) {
        let items = data[category];
        if (!Array.isArray(items) || items.length === 0) continue;

        let categoryContainer = document.createElement('div');
        categoryContainer.setAttribute("class", "category-container");
        categoryContainer.innerHTML =
            `
                <h1 class="category-title">${category.charAt(0).toUpperCase() + category.slice(1)}</h1>
            `;

        items.forEach(item => {
            console.log(`Category: ${category}\nTitle:${item.title}\nUsername:${item.username}\nURL:${item.url}\nFile:pics/comissions/${category}/${item.file}`);
            let credit = document.createElement('div');
            credit.setAttribute("class", "credit-card");
            credit.innerHTML = 
            `
                <h2 class="credit-title">${item.title}</h2>
                <img class="credit-image" src="pics/comissions/${category}/${item.file}" alt="${category} - ${items.title}">
                <a class="credit-username" href="${item.url}" target="_blank">@${item.username}</a>
            `;
            categoryContainer.appendChild(credit);
        });
        credits.appendChild(categoryContainer)
    }
}
