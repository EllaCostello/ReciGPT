import { renderCreateAccount } from "./RenderCreateAccount.js";

export function renderLogin(auth) {
    auth.innerHTML = `<div class="login-card">
            <div class="login-header">
                <div class="logo-icon">
                    <img src="images/ReciGPT.png" alt="logo">
                </div>
                <h2>Sign In</h2>
                <p>Access your account</p>
            </div>

            <form class="login-form" id="loginForm" method="post" action="/auth">
                <div class="form-group">
                    <div class="input-wrapper">
                        <input type="text" id="username" name="username">
                        <label for="username">Username</label>
                        <span class="input-line"></span>
                    </div>
                    <span class="error-message" id="usernameError"></span>
                </div>

                <div class="form-group">
                    <div class="input-wrapper password-wrapper">
                        <input type="password" id="password" name="password" required autocomplete="current-password">
                        <label for="password">Password</label>
                        <button type="button" class="password-toggle" id="passwordToggle" aria-label="Toggle password visibility">
                            <span class="toggle-icon"></span>
                        </button>
                        <span class="input-line"></span>
                    </div>
                    <span class="error-message" id="passwordError"></span>
                </div>

                <div class="form-options">
                    <a href="#" class="forgot-password">Forgot password?</a>
                </div>

                <button type="submit" class="login-btn btn">
                    <span class="btn-text">Sign In</span>
                    <span class="btn-loader"></span>
                    <span class="btn-glow"></span>
                </button>
            </form>


            <div class="signup-link">
                <p>New here? <a href="#" id="goToCreateAccount">Create an account</a></p>
            </div>

            <div class="success-message" id="successMessage">
                <div class="success-icon">✓</div>
                <h3>Welcome back!</h3>
                <p>Redirecting to your dashboard...</p>
            </div>
        </div>
    `;

    const createAccountLink = document.getElementById("goToCreateAccount");

    createAccountLink.addEventListener("click", (e) => {
        e.preventDefault();
        renderCreateAccount(auth);
    });
}

