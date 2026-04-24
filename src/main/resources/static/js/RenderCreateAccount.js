import {renderLogin} from "./renderLogin.js";

export function renderCreateAccount(auth) {
    auth.innerHTML = `
        <div class="login-card">
            <div class="login-header">
                <div class="logo-icon">
                    <img src="images/ReciGPT.png" alt="logo">
                </div>
                <h2>Create Account</h2>
                <p>Become a member</p>
            </div>

            <form class="register-form" id="registerForm">
                <div class="form-group">
                    <div class="input-wrapper">
                        <input type="text" id="username" name="username">
                        <label for="username">Create a username</label>
                        <span class="input-line"></span>
                    </div>
                </div>

                <div class="form-group">
                    <div class="input-wrapper password-wrapper">
                        <input type="password" id="password" name="password" required>
                        <label for="password">Create a Password</label>
                        <span class="input-line"></span>
                    </div>
                </div>

                <button type="submit" class="login-btn btn">
                    <span class="btn-text">Create Account</span>
                </button>
            </form>
        </div>
    `;

    const registerForm = document.getElementById("registerForm");

    registerForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const response = await fetch("/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            alert("User created");
            renderLogin(auth);
        } else {
            alert("Could not create user");
        }
    });
}