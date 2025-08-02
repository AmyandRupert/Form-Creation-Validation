document.addEventListener("DOMContentLoaded"), (event) => {
  console.log("DOM fully loaded and parsed");}
const form = document.getElementById("registration-form");
const feedbackDiv = document.getElementById("form-feedback");
form.addEventListener("submit"), function(event) {event.preventDefault();}
const username = document.getElementById("username").value;
const email = document.getElementById("email").value.trim;
const password = document.getElementById("password").value.trim;

const isValid = true;
const Messages = ["messages"];
if (username.length < 3) {
  Messages.push("Username must be at least 3 characters long.");
  isValid = false;}
if (email.length === 0) || !email.includes("@") || !email.includes(".") {
  Messages.push("Please enter a valid email address.");
    isValid = false;}
if (password.length < 8 {
    Messages.push("Password must be at least 8 characters long.");
    isValid = false;}

feedbackDiv.style.display = "block";     
if (isValid) {
  feedbackDiv.textcontent = "<p>Registration successful!</p>";
  feedbackDiv.style.color= "#28a745";
else feedbackDiv.innerHTML = "<p>" + Messages.join("<br>") + "</p>";
  feedbackDiv.style.color = "#dc3545";
});
