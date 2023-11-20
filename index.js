let cookieData = document.querySelector("#cookie-data");
let storedCookieValue = localStorage.getItem("cookieValue");

if (!storedCookieValue)
{
    let cookieValue = prompt("Enter a cookie value:");
    document.cookie = cookieValue;
    localStorage.setItem("cookieValue", cookieValue);
    cookieData.textContent = "Cookie entered: " + cookieValue;
}

else
    cookieData.textContent = "Cookie entered: " + storedCookieValue;