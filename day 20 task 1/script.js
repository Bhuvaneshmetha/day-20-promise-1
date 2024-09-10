fetch("fruits.json")
    .then(function (response) {
        return response.json();

    })
    .then(function (fruits) {
        let placeholder = document.querySelector("#data-output");
        let out = "";
        for (let fruit of fruits) {
            out += `
                <tr>
                <td>${fruit.name}</td>
                <td>${fruit.nutritions.calories}</td>
                <td>${fruit.nutritions.fat}</td>
                <td>${fruit.nutritions.carbohydrates}</td>
                <td>${fruit.nutritions.protein}</td>
                </tr>
             `;   
        }
        placeholder.innerHTML = out;
})