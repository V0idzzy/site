//generate supporter quotes divs 

fetch("data/supporters.json")
    .then(response => {
        if (!response.ok) {
            throw new Error('File not found');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        AddQuote(data);
    })
    .catch(error => {
        console.error('fetch error: ', error);
    })


let AddQuote = (data) => {
    let quotes = document.querySelector(".quote-container");
    data.forEach(quote => {
        let newQuote = document.createElement('div');
        newQuote.setAttribute("class", "quote-card");
        newQuote.innerHTML =
            `
              <p>${quote.username}: ${quote.quote}</p>
            `;
        quotes.appendChild(newQuote);
    });
}
