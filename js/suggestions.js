fetch("data/suggestion.json")
  .then(response => {
    if (!response.ok) {
      throw new Error('File not found');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  AddSuggestions(data);
  })
  .catch(error => {
    console.log("there was an error: " + error)
  })


let AddSuggestions = (data) => {
    let suggestion = document.querySelector(".suggestion-container");
    data.forEach(sugg => {
        console.log(sugg);
        let newSuggestion = document.createElement('div');
        newSuggestion.innerHTML =
            `
                <h3 class="suggestion-username">${sugg.Username}</h3>
                <p class="suggestion-info">${sugg.Suggestion}</p>
            `;
        suggestion.appendChild(newSuggestion);
    });
}

