const form = document.getElementById("searchForm");
const chatArea = document.getElementById("chatArea");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const input = document.getElementById("ingredients");
    const value = input.value;

    chatArea.innerHTML += `
        <div class="message user">
            <p>${value}</p>
        </div>
    `;

    input.value = "";

    const response = await fetch("/api/recipes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ ingredients: value })
    });

    const recipes = await response.json();

    let html = `<div class="message bot">`;

    recipes.forEach(r => {
        html += `
            <div class="recipe-card">
                <h3>${r.title}</h3>
                <img src="${r.image}" alt="${r.title}">
                <a href="${r.link}" target="_blank">View recipe</a>
            </div>
        `;
    });

    html += `</div>`;

    chatArea.innerHTML += html;

    chatArea.scrollTop = chatArea.scrollHeight;
});