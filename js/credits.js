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
    const credits = document.querySelector(".credit-container");

    for (let category in data) {
        const items = data[category];
        if (!Array.isArray(items) || items.length === 0) continue;

        items.forEach(item => {
            const credit = document.createElement('div');
            credit.className = "credit-card";
            credit.innerHTML = 
            `

                <img class="credit-image" src="pics/comissions/${category}/${item.file}" alt="${item.title}">
                <span class="category-title">${category} - ${item.title}</span>
                <a class="credit-username" href="https://x.com/${item.username}" target="_blank">@${item.username}</a>
            `;
            credits.appendChild(credit);
        });
    }
}
