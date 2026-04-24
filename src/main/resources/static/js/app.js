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
        html += `<p>🍽️ <strong>${r.title}</strong><br>${r.description}</p><br>`;
    });

    html += `</div>`;

    chatArea.innerHTML += html;

    chatArea.scrollTop = chatArea.scrollHeight;
});