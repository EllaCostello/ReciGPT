
import { renderLogin } from "./renderLogin.js";

document.addEventListener("DOMContentLoaded", () => {
    const auth = document.getElementById("auth");
    renderLogin(auth);
});
