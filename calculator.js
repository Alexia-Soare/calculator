
function changeTheme() {
    const body = document.body;
    const themeButton = document.getElementById("themeID");

    if (body.classList.contains("dark-theme")) {
        body.classList.remove("dark-theme");
        themeButton.textContent = "☀︎";
    } else {
        body.classList.add("dark-theme");
        themeButton.textContent = "⏾";
    }
}

function number(button) {
    const display = document.getElementById("results");
    const value = button.getAttribute("data-value");
    display.value += value;
}

function clearResults() {
    const display = document.getElementById("results");
    display.value = "";
    display.focus();
}

function operatorFunction(button) {
    const display = document.getElementById("results");
    const lastChar = display.value.slice(-1);
    const operator = button.textContent;

    if (!"+-×÷".includes(lastChar)) {
        display.value += operator;
    }
}
function equalFunction() {
    const display = document.getElementById("results");
    let expression = display.value;


    try {
        
        const result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}
