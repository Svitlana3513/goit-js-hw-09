const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const message = form.querySelector("textarea");

function handleInput(event) {
    event.preventDefault();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
    const data = JSON.stringify({ email, message });
    console.log(data);
    localStorage.setItem(STORAGE_KEY, data);

}

form.addEventListener("input", handleInput);

const jsn = localStorage.getItem(STORAGE_KEY) ?? "";
try {
    const data = JSON.parse(jsn);
    console.log(data);
    form.elements.email.value = data.email;
    form.elements.message.value = data.message;
}
catch {
    console.log(`No saved data`);
}

function handleSubmit(event) {
    event.preventDefault();
    localStorage.removeItem(STORAGE_KEY);
        
    if (form.elements.email.value === "" || form.elements.message.value === "") {
        alert(`Please,fill the form!`);
        return;
    }
   
    else {
        console.log(form.elements.email.value, form.elements.message.value);
    }
    form.reset();
}

form.addEventListener("submit", handleSubmit);